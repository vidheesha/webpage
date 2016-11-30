angular.module('bb-homepage')
    .factory('Api', ['$http', ApiService]);

function ApiService($http) {

    var service = {
        getGSEProductDetail: getGSEProductDetail,
        addToBasket: addToBasket
    };

    return service;

    /**
     * This method will make an asynchronous call to the getGSEProductDetail method in the
     * HomepageRedesignController and return the promise object of the $http method used.
     *
     * @param productCode
     * @param cache
     * @returns {*}
     */
    function getGSEProductDetail (productCode, cache) {

        return $http({
            method: 'GET',
            url: bbHomepageConstants.apiPrefix + 'homepage-redesign.do?method=gseProductDetail&productCode=' + productCode,
            cache: cache || true
        });
    }

    /**
     * This method will add a product to the basket and redirect the user to the basket.
     * If product options are provided (apparel), it will use the addToBasket method in the
     * HomepageRedesignController. If there are no product options (program), then it will
     * use the addToBasket method in the BeachbodyProductController.
     *
     * @param productCode
     * @param productOptions
     * @param quantity
     */
    function addToBasket (productCode, productOptions, quantity) {

        var url = "";

        // If there are product options, use the addToBasket method in the homepage redesign
        // controller. Otherwise just use the addToBasket functionality in the product controller.
        if (productOptions.length > 0) {

            url = bbHomepageConstants.apiPrefix
                + 'homepage-redesign.do?method=addToBasket'
                + '&productCode=' + productCode
                + '&qty=' + quantity
                + '&option=' + productOptions.join('&option=');
        } else {

            url = '/product/code/' + productCode + '.do?actionkey=ADDTOBASKET';
        }

        // Once the url is constructed, route the browser there.
        window.location = url;
    }
}