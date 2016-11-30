(function(angular) {

    angular.module('bb-homepage').controller('nutrition.controller', ['$scope', NutritionController]);

    function NutritionController($scope) {

        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;


        // Functions

        // Data
        vm.carouselSettings = null;
        vm.sliderData = {};


        vm.carouselSettings = {"endless":false,
            "viewMoreUrl":"/category/supplements/best_sellers.do",
            "viewMoreText":"Nutrition",
            "slides":[
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_BBP.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/supplements/best_sellers/beachbody-performance-workout-supplements.do","quickViewProductCode":"BEACHBODY-PERFORMANCE","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Beachbody Performance"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1/bbweb/homepage/carousel_image_BOOSTS.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"http://www.shakeology.com/boosts?icid=bb_shkboosts_home_slot2&tracking=BB_SHAKEOLOGY","quickViewProductCode":"SHAKEOLOGY-BOOSTS","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Shakeology Boosts"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_3DF.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/supplements/3-day-refresh.do","quickViewProductCode":"3D","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"3-Day Refresh"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_FIXATE.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/supplements/meal_replacement/fixate-cookbook-recipes.do","quickViewProductCode":"BBINS2101-1UA","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Fixate Cookbook"}
            ],"initialSlide":1
        };
        vm.carouselSettings.slidesToScroll = 1;

        // Start
        activate();

        function activate() {
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/nutrition/slide1.html"
                }
            ];
        }
    }
}(angular));
