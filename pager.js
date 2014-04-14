var myModule = angular.module("myApp");

myModule.directive("pager", function() {
	var directiveDefinitionObject = {
		template: '<div class="btn-group pg" ng-show="pg.pages > 1">\
			<a class="btn" ng-click="goTo(1)" ng-disabled="pg.current == 1" title="第一页"><i class="icon-fast-backward"></i>&nbsp;</a> \
			<a class="btn" ng-click="pre()" ng-disabled="pg.current == 1" title="前一页"><i class="icon-step-backward"></i>&nbsp;</a>\
			<div class="btn-group dropup"> \
				<a class="btn dropdown-toggle" data-toggle="dropdown">  \
					{{pg.current}} \
					<span class="caret"></span> \
				</a> \
				<ul class="dropdown-menu pages" style="width:60px; min-width:60px"> \
					<li ng-repeat="page in pages" style="text-align:center;">\
					  <a ng-click="pg.current=page" style="padding:3px;">{{page}}</a> \
					</li> \
				</ul>\
			</div>\
			<a class="btn next" ng-click="next()" ng-disabled="pg.current == pg.pages" title="下一页"><i class="icon-step-forward"></i>&nbsp;</a>\
			<a class="btn" ng-click="goTo(pg.pages)" ng-disabled="pg.current == pg.pages" title="最后页"><i class="icon-fast-forward"></i>&nbsp;</a>\
			&nbsp;<a class="btn disabled" rel="popover">{{pg.total}}条/{{pg.pages}}页</a></div>',
		replace: true,
		scope: true,
		link: function(scope, element, attrs) {
			scope.pages = null;
			scope.render = function() {
				if (scope.pg)
					scope.pages = [1..scope.pg.pages];
			}

			scope.render();

			scope.$watch(attrs.ngModel, function(value) {
				scope.pg = value;
				scope.render();
			});

			scope.pre = function() {
				if (scope.pg.current > 1){
					scope.pg.current -= 1;
				}
			};
			scope.next = function() {
				if (scope.pg.current < scope.pg.pages){
					scope.pg.current += 1;
				}
			};
			scope.goTo = function(page) {
				scope.pg.current = page;
			} ;
		}
	};
	return directiveDefinitionObject;
});
