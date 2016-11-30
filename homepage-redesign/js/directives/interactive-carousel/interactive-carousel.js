(function(angular) {

    angular.module('bb-homepage')
        .directive('interactiveCarousel', [function () {
            return {
                restrict: 'E',
                controller: ['$scope', function ($scope) {
                    console.log('entered interactive-carousel');

                    $scope.myName = function() {
                        return 'hai';
                    }
                }],
            }
        }]);
}(angular));
