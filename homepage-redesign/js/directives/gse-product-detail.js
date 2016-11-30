(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('gseProductDetail', [function () {

        return {
            restrict: 'E',
            templateUrl: 'js/directives/templates/gse-product-detail.html',
            scope: {
                data: '=productDetailData',
                slot: '=productSlotData'
            },
            controller: ['$rootScope', '$scope', 'Api', function ($rootScope, $scope, api) {

                // Show/Hide the loading icon.
                $scope.showLoadingIcon = true;

                // Show/Hide the error message.
                $scope.showErrorMessage = false;
                $scope.errorMessage = "";

                // Current large thumbnail image to display.
                $scope.currentThumbnail = "";

                // Data to show in product option drop downs.
                $scope.productQty = "";
                $scope.productColor = "";
                $scope.productSizeLabel = "";

                // Data to submit to the add to basket service.
                $scope.productColorOptionTypePK = "";
                $scope.productColorOptionPK = "";
                $scope.productSizeOptionTypePK = "";
                $scope.productSizeOptionPK = "";

                /**
                 * This method will watch for core data of the pop up changing. On change,
                 * it will first clear any previously selected options and then determine
                 * whether the data is null or filled and take appropriate action to display
                 * the correct information to the user.
                 */
                $scope.$watch('data', function() {

                    // First clear any items that were previously selected.
                    clearChosenItems();

                    // If the data is loaded for the current product, set the default thumbnail
                    // and hide the loading icon. Otherwise, show the loading icon.
                    if ($scope.data && $scope.data.productCode) {

                        if ($scope.data.thumbnails) {

                            $scope.setCurrentThumbnail($scope.data.thumbnails[0], true);
                        }

                        $scope.showLoadingIcon = false;

                    } else {

                        // Show the loading icon
                        $scope.showLoadingIcon = true;
                    }
                });

                /**
                 * This method will watch for any of the product options changing and re-evaluate
                 * whether or not the error message should be removed.
                 */
                $scope.$watch('[productQty, productColor, productSizeLabel]', function() {

                    // If there was an error message showing and one of the options has been selected remove
                    // the error message.
                    if ($scope.showErrorMessage && ($scope.productColorOptionPK || $scope.productSizeOptionPK || $scope.productQty)) {
                        $scope.showErrorMessage = false;
                    }
                });

                /**
                 * This method will blank out any items that may have been modified
                 * or selected in a previously open pop-up. E.g. Main thumbnail,
                 * product options, etc.
                 */
                function clearChosenItems() {
                    $scope.showErrorMessage = false;
                    $scope.errorMessage = "";
                    $scope.currentThumbnail = "";
                    $scope.productQty = "";
                    $scope.productColor = "";
                    $scope.productSizeLabel = "";
                    $scope.productColorOptionTypePK = "";
                    $scope.productColorOptionPK = "";
                    $scope.productSizeOptionTypePK = "";
                    $scope.productSizeOptionPK = "";
                }

                /**
                 * This method will log the correct string path for Analytics
                 */
                $scope.logAnalytics = function (analyticsText) {

                    logLink("home:slot" + $scope.slot + ":" + $scope.data.productCode + ":" + analyticsText);
                };

                /**
                 * This method will assemble any product option information and pass it along to
                 * the addToBasket method in the API to add the product to the basket.
                 *
                 * TODO: Refactor the error messaging out into a separate function if it gets more complicated.
                 * TODO: Refactor error messages into Kibo Properties?
                 */
                $scope.addToCart = function () {

                    // First validate that options have been set if they need to be.
                    if (!validateRequiredOptions()) {

                        $scope.showErrorMessage = true;
                        $scope.errorMessage = "Please select a valid option for this product.";

                    } else if (!validateValidOptionCombination()) {

                        $scope.showErrorMessage = true;
                        $scope.errorMessage = "Combination is unavailable. Please choose another Color or Size.";

                    } else {

                        var optionStrings = [];

                        // If there are product options, create an array of them.
                        if ($scope.data.productOptions.length > 0) {

                            var optionStrings = [
                                $scope.productColorOptionTypePK + '_' + $scope.productColorOptionPK,
                                $scope.productSizeOptionTypePK + '_' + $scope.productSizeOptionPK
                            ];
                        }

                        // Log the add to cart click to analytics.
                        $scope.logAnalytics("addtocart");

                        // Make the call to the API.
                        api.addToBasket($scope.data.productCode, optionStrings, $scope.productQty);
                    }
                };

                /**
                 * Gets the thumbnail image. Has logic to determine whether or not to prefer
                 * the large thumbnail or the small thumbnail. Will default to one or the other
                 * depending on the preferLarge argument.
                 *
                 * Also contains logic to prepend '/images' to certain paths that come from Kibo.
                 *
                 * @param thumbnail
                 */
                $scope.getThumbnailImage = function (thumbnail, preferLarge) {

                    // Default to the thumbnail if it exists, otherwise just use the large image.
                    var imgPath = "";

                    if (thumbnail) {
                        if (preferLarge) {
                            imgPath = thumbnail.largeImagePath || thumbnail.imagePath;
                        } else {
                            imgPath = thumbnail.imagePath || thumbnail.largeImagePath;
                        }
                    }

                    // Need to prepend the image path with /images if the path comes from Kibo.
                    var prepend = "";

                    if (imgPath) {
                        prepend = (!(imgPath.indexOf('//img1') === 0)) ? '/images' : '';

                        // Some image paths in Kibo do not have a leading slash.
                        if (imgPath.charAt(0) != '/') {
                            imgPath = '/' + imgPath;
                        }
                    }

                    return prepend + imgPath;
                };

                /**
                 * Sets the current large thumbnail to be displayed. Can be triggered by
                 * clicking on a smaller thumbnail or when a new pop up is opened.
                 *
                 * @param thumbnail
                 */
                $scope.setCurrentThumbnail = function (thumbnail) {

                    $scope.currentThumbnail = $scope.getThumbnailImage(thumbnail, true);
                };

                /**
                 * Sets the current product quantity option.
                 *
                 * @param qty
                 */
                $scope.setProductQty = function (qty) {

                    $scope.productQty = qty;
                };

                /**
                 * Sets the current product size option. Makes sure that the PKs are set
                 * for the add to basket service and the image is set for the dropdown.
                 *
                 * TODO: Refactor so that the index isn't hardcoded for size.
                 *
                 * @param size
                 */
                $scope.setProductSize = function (size) {

                    $scope.productSizeLabel = size.code;

                    $scope.productSizeOptionTypePK = $scope.data.productOptions[1].optionType.id;
                    $scope.productSizeOptionPK = size.id;
                };

                /**
                 * Sets the current product color option. Makes sure that the PKs are set
                 * for the add to basket service and the image is set for the dropdown.
                 *
                 * TODO: Refactor so that the index isn't hardcoded for color.
                 *
                 * @param color
                 */
                $scope.setProductColor = function (color) {

                    $scope.productColor = color.imagePath;

                    $scope.productColorOptionTypePK = $scope.data.productOptions[0].optionType.id;
                    $scope.productColorOptionPK = color.id;
                };


                /**
                 * This method validates that if there are product options, that all of them have been selected.
                 *
                 * TODO: This currently only accounts for qty, size, and color. Would need to be enhanced to support other types of products.
                 *
                 * @returns {boolean}
                 */
                function validateRequiredOptions () {

                    return ($scope.data.productOptions.length == 0) || ($scope.productQty && $scope.productSizeOptionPK && $scope.productColorOptionPK);
                }

                /**
                 * This method validates that a valid choice of options has been selected.
                 *
                 * TODO: This method only supports Color and Size for Apparel. Would need to be enhanced for other types of products.
                 *
                 * @returns {boolean}
                 */
                function validateValidOptionCombination () {

                    // If there are no product options for the current product, then it's a valid combo.
                    if ($scope.data.productOptions.length == 0) {
                        return true;
                    }

                    // Iterate over all of the valid option combinations and check that there exists a valid combo
                    // that contains both the current color PK and the current size PK.
                    for (var i = 0; i < $scope.data.validOptionCombinations.length; i++) {

                        var comboString = $scope.data.validOptionCombinations[i];

                        if (comboString.indexOf($scope.productColorOptionPK) != -1 && comboString.indexOf($scope.productSizeOptionPK) != -1) {
                            return true;
                        }
                    }

                    return false;
                }
            }]
        };

    }]).filter('shippingAndHandling', function() {

        // Remove the open and closing parens on the s&h
        return function (input) {
            if (input) {
                input = input.replace('(', '');
                input = input.replace(')', '');
                input = input.replace('+', '+ ');
            }
            return input;
        };
    });

} (angular));
