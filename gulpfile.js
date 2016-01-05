var elixir = require('laravel-elixir');
require('laravel-elixir-ng-annotate');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var jsPlugins = [
    '../dep/angular/angular.min.js',
    '../dep/angular-ui-router/release/angular-ui-router.min.js',
    '../dep/angular-resource/angular-resource.min.js',
    '../dep/textAngular/dist/textAngular-rangy.min.js',
    '../dep/textAngular/dist/textAngular-sanitize.min.js',
    '../dep/textAngular/dist/textAngular.min.js'
];
var cssPlugins = [
    '../dep/bootstrap/dist/css/bootstrap-paper.min.css',
    '../dep/animate-css/animate-css.min.css',
    '../dep/textAngular/dist/textAngular.css',
    '../dep/font-awesome/css/font-awesome.min.css'
];
var appScripts = [
    'admin/app/**/*.modules.js',
    'admin/app/**/*.js'
];
var appSass = [
    'admin/bundle.scss'
];

var clientCssPlugins = [
    'client/**/*.css'
];
var clientSass = [
    'client/styles.scss'
];
var jsClientPlugins = [
  '../dep/jquery/dist/jquery.min.js',
  '../dep/jquery-ui.js',
  '../dep/parallax/jquery.parallax-1.1.3.js',
  '../dep/countdown/jquery.countdown.js',
  '../dep/isotope/isotope.pkgd.min.js',
  '../dep/revslider/jquery.themepunch.revolution.min.js',
  '../dep/revslider/jquery.themepunch.tools.min.js',
  '../dep/superfish/dist/js/hoverIntent.js',
  '../dep/superfish/dist/js/superfish.min.js',
  '../dep/menu/tinynav.min.js',
  '../dep/inview/jquery.inview.min.js',
  '../dep/html5.js',
  '../dep/excanvas.js'
];
var jsClientScripts = [
    'client/**/*.js'
];

elixir(function(mix) {
    mix.styles(cssPlugins, 'public/admin/css/dep.css');
    mix.sass(appSass, 'public/admin/css/app.min.css');
    mix.annotate(appScripts, 'public/admin/js/annotated.js');
    mix.scripts(jsPlugins, 'public/admin/js/dep.js');
    mix.scripts('../../../public/admin/js/annotated.js', 'public/admin/js/app.min.js');

    /*mix.styles(clientCssPlugins, 'public/css/dep.css');
    mix.sass(clientSass, 'public/css/app.min.css');
    mix.scripts(jsClientPlugins, 'public/js/dep.min.js');
    mix.scripts(jsClientScripts, 'public/js/app.min.js');*/
});
