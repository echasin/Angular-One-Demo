/**
 * Angular 1.0 Demo app.modules.js
 *
 */
(function () {
    angular.module('demoApp', [
        'ui.router',                    // Routing
        'ngAnimate',
        'ui.bootstrap'
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad