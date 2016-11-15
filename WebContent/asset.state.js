/**
 * Angular 1.0 asset.state.js
 * 
 */

angular
	.module('demoApp')
	.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	
	.state('asset', {
		// abstract: true,
		url : "/asset",
		templateUrl : "assets.html",
	    controller : "AssetController"
	})
	.state('asset.new', {        
		    parent: 'asset',
		    url: '/new',
            data: {
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
                    $state.go('asset', null, { reload: true });
                }, function() {
                    $state.go('asset');
                });
            }]
        });
});