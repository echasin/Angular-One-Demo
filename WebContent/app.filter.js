/**
 * Angular 1.0 app.filter.js
 */
angular.module('demoApp').filter('offset', function() {
	return function(input, start) {
		start = parseInt(start, 10);
		return input.slice(start);
	};
});
