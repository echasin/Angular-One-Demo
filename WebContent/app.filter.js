/**
 * Angular 1.0 app.filter.js
 */
angular.module('demoApp').filter('pagination', function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	};
});
