(function(angular) {

    angular.module('bb-homepage')
        .directive('slider', [function () {
            return {
                restrict: 'E',
                require: '^interactiveCarousel',
                templateUrl: 'js/directives/interactive-carousel/templates/slider.html',
                link: ['scope','ele','attrs','interactiveCarousel', function(scope, ele, attrs, interactiveCarousel) {
                    console.log(interactiveCarousel.myName());
                }],
                controller: ['$scope', function ($scope) {
                    console.log('entered slider');
                }],
                scope: {
                    section: '@'
                }
            }
        }]);
}(angular));
