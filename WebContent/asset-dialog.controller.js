/**
 * Angular 1.0 Demo AssetController
 *
 */

 console.log('In AssetController');
  
(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('AssetDialogController', AssetDialogController);

    function AssetDialogController ($scope, $uibModalInstance) {

    	$scope.assets = ['Asset One', 'Asset Two', 'Asset Three'];

    	$scope.add=function(){
    		console.log("Modal window has created")
    		console.log($scope.name)
    	}
    	
    	$scope.close=function(){
    		$uibModalInstance.close(true);
    		console.log("Modal window has closed")
    	}
    }
})();
