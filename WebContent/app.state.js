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
	})
	.state('assetnew', {
         //   parent: 'location',
            url: '/new',
            data: {
         //       authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'assets-dialog.html',
                    controller: 'AssetDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {

                    }
                }).result.then(function() {
                    $state.go('assets', null, { reload: true });
                }, function() {
                    $state.go('assets');
                });
            }]
        });
});