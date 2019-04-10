import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractHttpService } from './abstract-api-service';
import { throwError } from 'rxjs';
import * as moment_ from 'moment';
import {UUID} from 'angular2-uuid';
const moment = moment_;

@Injectable({
  providedIn: 'root'
})
export class CommonLogger extends AbstractHttpService {
  /**
   * The HTTP Headers which go with each request.  These MUST be set if you are
   * using the logger.  Fields include:
   *
   * - program (REQUIRED, the application wide code)
   * - applicationId (REQUIRED, like sessionId)
   * - request_method (REQUIRED, 'POST')
   * - logsource: (REQUIRED, window.location.hostname)
   * - http_x_forwarded_host (REQUIRED, window.location.hostname)
   *
   */
  protected _headers: HttpHeaders = new HttpHeaders({
    request_method: 'POST',
    logsource: window.location.hostname,
    http_x_forwarded_host: window.location.hostname
  });

  private url: string = null;

  constructor(protected http: HttpClient) {
    super(http);
  }

  setURL(newURL: string) {
    this.url = newURL;
  }

  /**
   * Log a message to Splunk. This is the main way to send logs and
   * automatically includes meta-data. You do **not** need to subscribe to the
   * response, as the service already does that. The input object must have an
   * 'event' property set, everything else is optional.
   *
   * Example:
   * ```
    this.logService.log({
       event: 'submission',
       dateObj: new Date()
    });
    ```
   * @param message A JavaScript object, nesting is fine, with `event` property
   * set.
   */
  public log(message: LogMessage) {
    this.setSeverity(SeverityLevels.INFO);
    return this._sendLog(message);
  }

  public logError(errorMessage: LogMessage) {
    this.setSeverity(SeverityLevels.ERROR);
    return this._sendLog(errorMessage);
  }

  /**
   * Log HTTP errors, e.g. when losing network connectivity or receiving an
   * error response code.
   */
  public logHttpError(error: HttpErrorResponse) {
    return this.logError({
      event: 'error',
      message: error.message,
      errorName: error.name,
      statusText: error.statusText
    });
  }

  /**
   * Internal method to send logs to Splunk, includes meta-data except that's
   * consistent across all requests, but not specific values like severity
   * level.
   *
   * @param message A JavaScript object or anything that can be toString()'d,
   * like Date
   */
  private _sendLog(message: LogMessage) {
    // Update headers
    this.setTimestamp();
    this.setTags(message);

    if (this.url === null) {
        const msg = 'Unable to send logs as URL as not been set via setURL()';
        console.error(msg);
        return throwError(msg);
    }

    // Configure request
    const body = { message: message };

    // We call .subscribe() here because we don't care about the response and
    // we want to ensure that we never forget to call subscribe.
    return this.post(this.url, body).subscribe();
  }

  protected handleError(error: HttpErrorResponse) {
    console.log('logService handleError()', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side / network error occured
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(`Backend returned error code: ${error.status}.  Error body: ${error.error}`);
    }

    return throwError(error);
  }

  /**
   * Overwrite the inherited httpOptions so we can set responseType to text.
   * This updates Angular's parsing, and it won't error out due to the server
   * not responding with JSON.
   */
  protected get httpOptions(): any {
    return {
      headers: this._headers,
      responseType: 'text'
    };
  }

  private setTimestamp() {
    this._headers = this._headers.set('timestamp', moment().toISOString());
  }

  private setSeverity(severity: SeverityLevels) {
    this._headers = this._headers.set('severity', severity);
  }

  /**
   * The headers are easier to search in splunk, and we aren't using tags, so
   * repurpose it to event type.
   */
  private setTags(message: LogMessage) {
    this._headers = this._headers.set('tags', message.event);
  }

}


enum SeverityLevels {
  INFO = 'info',
  ERROR = 'error',
}

interface LogMessage {
  /** The type of event being logged. `eligibilityCheck` is standalone because it is neither a submission nor error. */
  event: 'navigation' | 'error' | 'submission' | 'eligibilityCheck';
  // We allow any other properties/values in the interface
  [key: string]: any;
}
