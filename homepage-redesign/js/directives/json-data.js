(function(angular) {

    var NG_HIDE_CLASS = 'ng-hide';
    var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    angular.module('bb-homepage')
        .directive('jsonData', [function() {
            return {
                restrict: 'A',
                link: function(scope, element, attributes, controller) {
                    scope[attributes.ngModel] = JSON.parse(element.html());
                }
            };
        }]);

}(angular));