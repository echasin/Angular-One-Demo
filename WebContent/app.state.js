/**
 * Angular 1.0 app.state.js
 * 
 */

angular
	.module('demoApp')
	.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		// abstract: true,
		url : "/home",
		templateUrl : "home.html"
	})

	.state('assets', {
		// abstract: true,
		url : "/assets",
		templateUrl : "assets.html",
	    controller : "AssetController"
	});
});



