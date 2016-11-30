(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('bbSlider', function () {

        return {
           restrict: 'E',
           templateUrl: 'js/directives/templates/bb-slider.html',
           scope: {
               sliderData: '=',
               section: '@'
           }
        };

    });

} (angular));