(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('bbSlideUp', function () {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'js/directives/templates/bb-slideup.html',
            scope: {
                slideUpClosed: '=',
                slideUpHtml: '='
            },
            link: function ($scope) {

                // Close the slide up by default.
                $scope.slideUpClosed = true;
            }
        };

    });

} (angular));