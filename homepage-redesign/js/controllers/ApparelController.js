(function(angular) {

    angular.module('bb-homepage').controller('apparel.controller', ['$scope', ApparelController]);

    function ApparelController($scope) {

        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func; 


        // Functions

        // Data
        vm.apparelData = null;
        vm.sliderData = {};

        // Define the carousel data.
        vm.carouselSettings = {"endless":false,
        "viewMoreUrl":"/category/fitness_gear/workout-clothes-apparel.do",
        "viewMoreText":"Apparel",
        "slides":[{"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_AC_for_BB_Powerful_Tank.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/workout-clothes-apparel/powerful-tank.do","quickViewProductCode":"APAC105451","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"AC for Beachbody Powerful Tank"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_PiYo_Jana_Graphic_Tight.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/workout-clothes-apparel/cize-jana-graphic-tight.do","quickViewProductCode":"APCZ105641","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Cize Jana Graphic Tight"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_INS_LIVE_Patricia_Muscle_Tank_Fitness_Squad.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/workout-clothes-apparel/insanity-live-patricia-muscle-tank.do","quickViewProductCode":"APSAC106891","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Insanity LIVE Patricia Muscle Tank Fitness Fitness Squad"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_INS_LIVE_Mason_Crew.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_gear/workout-clothes-apparel/insanity-live-mason-crew.do","quickViewProductCode":"APSAC106881","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Insanity LIVE Mason Crew - Insanity is a State of Mind"}],
        "initialSlide":1};

        // Start
        activate();

        function activate() {
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/apparel/slide1.html",
                    slideUpHtml: "html/slides/apparel/slideup1.html"
                }
            ];
        }
    }
}(angular));
