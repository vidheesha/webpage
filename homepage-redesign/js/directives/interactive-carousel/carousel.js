/**
 * Created by ryan.barnard on 5/4/16.
 */
(function(angular) {

    angular.module('bb-homepage')
        .directive('carousel', [function () {
            return {
                restrict: 'E',
                require: '^interactiveCarousel',
                templateUrl: '/text/us/homepage-redesign/js/directives/interactive-carousel/templates/carousel.html',
                controller: ['$rootScope', '$scope', function ($rootScope, $scope) {

                    // Set up the not endless settings if required.
                    if($scope.settings !== undefined && $scope.settings.endless == false) {
                        $scope.settings.slides.push({
                            isViewMore: true,
                            viewMoreText: $scope.settings.viewMoreText
                        });
                        $scope.settings.slides.splice(0,0,{
                            isViewMore: true,
                            viewMoreText: $scope.settings.viewMoreText
                        });
                    }

                    $scope.callLogLink = function(slot, index, productCode) {
                        logLink('home:slot' + slot + ':tile' + index + ':' + productCode + ':carousel');
                    }

                    $scope.clickHereButtonPressed = function(index) {
                        logLink('home:slot' + $scope.slot + ':tile' + index + ':viewmore');
                        window.location.href = $scope.settings.viewMoreUrl;
                    };

                    var touchStarted = false;
                    $scope.touchStart = function(event) {

                        angular.element(event.currentTarget).toggleClass('overlay-hovered');

                        touchStarted = true;
                    };

                    $scope.mouseEnter = function(event) {

                        // Only add the hover state class if a touch event has not been registered.
                        if (!touchStarted) {
                            angular.element(event.currentTarget).addClass('overlay-hovered');
                        }

                        touchStarted = false;
                    };

                    $scope.mouseLeave = function(event) {

                        // Only remove the class if a touch event has not been registered.
                        if (!touchStarted) {
                            angular.element(event.currentTarget).removeClass('overlay-hovered');
                        }
                    };

                    $scope.quickViewButtonPressed = function(productCode) {
                        $rootScope.$emit('quickViewButtonPressed:' + $scope.section, {productCode: productCode, slot: $scope.slot});
                    };

                    $scope.learnMoreButtonPressed = function(learnMoreUrl, productCode, index) {
                        logLink("home:slot" + $scope.slot + ":tile" + index +':'+ productCode + ":viewdetails");
                        window.location.href = learnMoreUrl;
                    }
                }],
                scope: {
                    settings: '=',
                    section: '@',
                    slot: '@'
                }
            }
        }]);
}(angular));
