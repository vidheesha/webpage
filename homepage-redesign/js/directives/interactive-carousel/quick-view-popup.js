/*
 * Created by ryan.barnard on 5/4/16.
 */
(function(angular) {

    angular.module('bb-homepage')
        .directive('quickViewPopup', [function () {
            return {
                restrict: 'E',
                templateUrl: 'js/directives/interactive-carousel/templates/quick-view-popup.html',
                controller: ['$rootScope', '$scope', 'Api', '$timeout', function ($rootScope, $scope, api, $timeout) {

                    // Default to closed.
                    $scope.showQuickView = false;

                    /*
                     * When the quick view button is pressed, make an asynchronous call to get the product
                     * details and show the pop up.
                     */
                    $rootScope.$on('quickViewButtonPressed:' + $scope.section, function(event, data) {

                        var productCode = data.productCode;
                        var slot = data.slot;
                        // Asynchronously get product detail information.
                        api.getGSEProductDetail(productCode).then(

                            // Success
                            function(result) {
                                $scope.quickViewProductDetail = null;
                                $scope.quickViewProductDetail = result.data;
                                $scope.quickViewProductSlot = slot;
                        },
                            // Fail
                            function(error) {
                                $scope.quickViewProductDetail = null;
                                console.error("Error calling getGSEProductDetail for: " + productCode);
                                console.error(error);
                        });

                        $scope.showQuickView = true;
                        angular.element('body').addClass('quick-view-open');
                    });

                    /*
                     * This method will close the pop up and set the quickViewProductDetail
                     * data to null.
                     */
                    $scope.closePopup = function() {

                        $scope.showQuickView = false;
                        angular.element('body').removeClass('quick-view-open');

                        // Wait for the close animation to finish before wiping the data,
                        // this makes the animation smooth.
                        $timeout(function() {
                            $scope.quickViewProductDetail = null;
                        }, 350);

                    }
                }],
                link: function($scope, element, attrs) {
                        element.on('click',function(e) {
                        var node = angular.element(e.target).closest('gse-product-detail')[0];
                        if (typeof(node) == 'undefined') {
                            $scope.closePopup();
                        }
                    }); 
                },
                scope: {
                    section: '='
                }
            }
        }]);
}(angular));
