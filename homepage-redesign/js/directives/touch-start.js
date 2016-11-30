(function (angular) {

    'use strict';

    angular.module("bb-homepage")
    .directive("ngTouchstart", function () {
        return {
            controller: ["$scope", "$element", function ($scope, $element) {

                $element.bind("touchstart", onTouchStart);
                function onTouchStart(event) {
                    var method = $element.attr("ng-touchstart");
                    $scope.$event = event;
                    $scope.$apply(method);
                }

            }]
        }
    })

} (angular));