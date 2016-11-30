(function(angular) {

    var NG_HIDE_CLASS = 'ng-hide';
    var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    angular.module('bb-homepage')
    .directive('fadeIn', ['$animate', '$timeout', function ($animate, $timeout) {
        return {
            restrict: "A",
            scope: {},
            link: function (scope, element, attrs) {
                element.on("load", function () {
                    $timeout(function () {
                        element.removeClass("ng-hide-fade");
                        element.addClass("ng-show");
                    }, 500);
                });
                attrs.$observe("ngSrc", function () {
                    element.removeClass("ng-show");
                    element.addClass("ng-hide-fade");
                });
            }
        }
    }]);

}(angular));
