(function(angular) {

    angular.module('bb-homepage').controller('gear.controller', ['$scope', GearController]);

    function GearController($scope) {

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
          "viewMoreUrl":"/category/fitness_gear/best_sellers.do",
          "viewMoreText":"Gear",
          "slides":[
          {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586714/bbweb/homepage/carousel_image_PortionControl7pc_1.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/21-day-fix-gear/portion-control-containers-7-piece-essential-set.do","quickViewProductCode":"BBCONT2102","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Beachbody Portion Control 7PC Set"},
          {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586702/bbweb/homepage/carousel_image_minimat_2.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/core_yoga_gear/minimat.do","quickViewProductCode":"ACCMAT2114","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Beachbody Core Comfort Mat"},
          {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586701/bbweb/homepage/carousel_image_P90XChin-UpMax_3.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/best_sellers/p90x-chin-up-max-pull-up-bar.do","quickViewProductCode":"ACCCHIN2101","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"P90X Chin-Up Max"},
          {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586701/bbweb/homepage/carousel_image_B-Lines_4.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/bands_balls_weights/standard_kit.do","quickViewProductCode":"ACCBANDF3H","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"B-Lines Standard Kit"}],
          "initialSlide":1};
        vm.carouselSettings.slidesToScroll = 1;

        // Start
        activate();

        function activate() {
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/gear/slide1.html"
                }
            ];
        }
    }
}(angular));
