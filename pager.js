var myModule = angular.module("myApp");

myModule.directive("pg", function(injectables) {
	directiveDefinitionObject = {
			template: '<div></div>',
			replace: true,
			scope: true,
			link: function(scope, iElement, iAttrs) {
			}
	};
	return directiveDefinitionObject;
});
