(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('sectionHeader', function () {

        return {
           restrict: 'E',
           require: '^interactiveCarousel',
           templateUrl: 'js/directives/templates/section-header.html',
           controller: ['$scope', function ($scope) {
                if ($scope.altText == undefined) {
                    $scope.altText = "Section Header";
                }
           }],
           scope: {
               desktopHeaderImage: '@',
               tabletHeaderImage: '@',
               mobileHeaderImage: '@',
               altText: '@'
           }
        };

    });

} (angular));