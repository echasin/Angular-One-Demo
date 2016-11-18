/**
 * Angular 1.0 Demo AssetDialogController
 *
 */

 console.log('In AssetDialogController');
  
(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('AssetDialogController', AssetDialogController);

    function AssetDialogController ($scope, $uibModalInstance) {

    	$scope.save=function(){
    		console.log("Modal saving asset")
    		console.log($scope.name)
    		$uibModalInstance.close(true);
    	}
    	
    	$scope.close=function(){
    		$uibModalInstance.close(true);
    		console.log("Modal window has closed")
    	}
    }
})();
