export const variableScss = `//------------------------------------------------------------------------------
// Variables to override Bootstrap should be placed here.  Consult the Bootstrap
// _variables.scss file or documentation  to see what changes you can make.
// Additionally, our custom variables can be defined here, but do so separately
// from the Bootstrap overrides.
//------------------------------------------------------------------------------
// Reference:
// http://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/developers-guide/css-elements

//------------------------------------------------------------------------------
// Bootstrap Overrides
//------------------------------------------------------------------------------
$font-size-base : 1rem; //14px;
$h1-font-size: $font-size-base * 2; //28px
$h2-font-size: $font-size-base * 1.5; //21px
$h3-font-size: $font-size-base * 1.25; //17.5px
$h4-font-size: $font-size-base * 1.072; //15px - need to match exactly
$h5-font-size: $font-size-base * 1; //14px;
$h6-font-size: $font-size-base * 0.85; //12px
$h7-font-size: $font-size-base * 0.5;
$h8-font-size: $font-size-base * 0.15;

$container-max-widths: (
    sm: 540,
    md: 720px,
    lg: 960px,
    // xl: 1140px
    xl: 1400px
);

//------------------------------------------------------------------------------
// Custom Variables
//------------------------------------------------------------------------------

$container-gutter-size: 5rem;

$color-primary: #036;
$color-secondary: #fcba19;
$color-success: #486446;
$color-info: #96c0e6;
$color-warning: #f3cd65;
$color-danger: #a94442;
$color-light: #f8f9fa; //$gray-100 in Bootstrap4
$color-dark: #343a40; //$gray-800 in Bootstrap4
$color-primary-nav: #38598a;  // This is new from Bootstrap 4 theme
$color-secondary-nav: #5475a7; // This is new too Bootstrap 4 theme
$gray-lighter:#eee;
$color-white: #fcfcfc; //Just shy of true whit.
$white: #fcfcfc; //Just shy of true whit.
$gray: #f2f2f2;


$color-primary-muted:   rgba($color-primary, 0.75);



// Change theme-colors
$theme-colors: ();
$theme-colors: map-merge((
        primary: $color-primary,
        secondary: $color-secondary,
        success: $color-success,
        info: $color-info,
        warning: $color-warning,
        danger: $color-danger,
        light: $color-light,
        dark: $color-dark,
        primary-nav: $color-primary-nav,  // This is new
        secondary-nav: $color-secondary-nav // This is new too
), $theme-colors);


$blue: $color-primary; // Change bootstrap blue to our theme blue
// Add our font as default
$font-family-sans-serif: Myriad-Pro, Calibri, Arial, sans serif;
$font-family-base: $font-family-sans-serif;
$body-color: #494949;

// Headings
$headings-font-weight:   500;
$headings-color: $body-color;
$headings-line-height:    1.1;
$headings-font-family:        inherit;

// Allows for customizing button radius independently from global border radius
$btn-border-radius:         4px;
$btn-border-radius-lg:        8px;
$btn-border-radius-sm:        2px;



// Links
$link-color:            #1a5a96;
$link-hover-color:      #00F;
$link-hover-decoration:   underline;

// Modals
$modal-md: 600px;

//cards
$card-bg: $gray-lighter;
$card-spacer-x: 15px;
$card-spacer-y: 8px;
$card-inner-border-radius: 0px;
$card-border-radius: 0px;
$card-border-width: 0px;
//$card-cap-bg: $color-primary;



// Now that we've set the variables, we can override them in Bootstrap
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
`