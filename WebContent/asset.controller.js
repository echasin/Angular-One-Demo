/**
 * Angular 1.0 Demo AssetController
 *
 */

 console.log('In AssetController');
  
(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('AssetController', AssetController);

    function AssetController ($scope) {
    	
    	$scope.curPage = 0;
    	$scope.pageSize = 3;
    	$scope.assets = [ {"name" : "Asset One"},
    	                  {"name" : "Asset Two"},
    	                  {"name" : "Asset Three"},
    	                  {"name" : "Asset Four"},
    	                  {"name" : "Asset Five"},
    	                  {"name" : "Asset Six"},
    	                  {"name" : "Asset Seven"},
    	                  {"name" : "Asset Eight"},
    	                  {"name" : "Asset Nine"},
    	                  {"name" : "Asset Ten"},
    	                  {"name" : "Asset Eleven"},
    	                  {"name" : "Asset Tweleve"},
    	                  {"name" : "Asset Thirteen"}
    	                  ]
    	
    	  $scope.numberOfPages = function() {
    		    console.log("In $scope.numberOfPages")
				return Math.ceil($scope.assets.length / $scope.pageSize);
			};
    }
})();
