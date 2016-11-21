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
    	
    	$scope.currentPage = 0;
    	$scope.itemsPerPage = 3;
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
    	
    	// for (var i=0; i<50; i++) {
    	//	    $scope.assets.push({
    	//	      id: i, name: "name "+ i
    	//	    });
    	//	  }
    	
    	$scope.prevPage = function() {
    	    if ($scope.currentPage > 0) {
    	      $scope.currentPage--;
    	    }
    	  };

    	  $scope.prevPageDisabled = function() {
    	    return $scope.currentPage === 0 ? "disabled" : "";
    	  };

    	  $scope.pageCount = function() {
    	    return Math.ceil($scope.assets.length/$scope.itemsPerPage)-1;
    	  };

    	  $scope.nextPage = function() {
    	    if ($scope.currentPage < $scope.pageCount()) {
    	      $scope.currentPage++;
    	    }
    	  };

    	  $scope.nextPageDisabled = function() {
    	    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    	  };
    	
    	
    }
})();
