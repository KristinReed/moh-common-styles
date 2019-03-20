'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">moh-common-lib</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CaptchaModule.html" data-type="entity-link">CaptchaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' : 'data-target="#xs-components-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' :
                                            'id="xs-components-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' }>
                                            <li class="link">
                                                <a href="components/CaptchaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CaptchaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' : 'data-target="#xs-injectables-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' :
                                        'id="xs-injectables-links-module-CaptchaModule-f1d18b139424f6c26a8ff8424cdf8591"' }>
                                        <li class="link">
                                            <a href="injectables/CaptchaDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CaptchaDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedCoreModule.html" data-type="entity-link">SharedCoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' : 'data-target="#xs-components-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' :
                                            'id="xs-components-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' }>
                                            <li class="link">
                                                <a href="components/CoreBreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreBreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatepickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormActionBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormActionBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSubmitBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormSubmitBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageFrameworkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageFrameworkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostalCodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostalCodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThumbnailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThumbnailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WizardProgressBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WizardProgressBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' : 'data-target="#xs-directives-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' :
                                        'id="xs-directives-links-module-SharedCoreModule-aa74d298895e360fe650289dc60ae9ef"' }>
                                        <li class="link">
                                            <a href="directives/DateFieldFormatDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateFieldFormatDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DayValidationDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DayValidationDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/YearValidateDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">YearValidateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractForm.html" data-type="entity-link">AbstractForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractHttpService.html" data-type="entity-link">AbstractHttpService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link">Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonImage.html" data-type="entity-link">CommonImage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonImageProcessingError.html" data-type="entity-link">CommonImageProcessingError</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonImageScaleFactorsImpl.html" data-type="entity-link">CommonImageScaleFactorsImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Container.html" data-type="entity-link">Container</a>
                            </li>
                            <li class="link">
                                <a href="classes/MaskModel.html" data-type="entity-link">MaskModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Person.html" data-type="entity-link">Person</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GeocoderService.html" data-type="entity-link">GeocoderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CommonImageScaleFactors.html" data-type="entity-link">CommonImageScaleFactors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateErrorMsg.html" data-type="entity-link">DateErrorMsg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileUploaderMsg.html" data-type="entity-link">FileUploaderMsg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeoAddressResult.html" data-type="entity-link">GeoAddressResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasswordErrorMsg.html" data-type="entity-link">PasswordErrorMsg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SimpleDate.html" data-type="entity-link">SimpleDate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WizardProgressItem.html" data-type="entity-link">WizardProgressItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});