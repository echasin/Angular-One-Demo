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
    	
    	 $scope.assets = ['Asset One', 'Asset Two', 'Asset Three'];
    }
})();
