(function(angular) {

    angular.module('bb-homepage').controller('bod.controller', ['$scope', BodController]);

    function BodController($scope) {

        // Namespace for the BodController data.
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;


        // Functions

        // Data
        vm.carouselSettings = null;
        vm.sliderData = {};

        // Define the carousel data.
        vm.carouselSettings = {"endless":false,
        "viewMoreUrl":null,
        "viewMoreText":null,
        "slides":[{"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586448/bbweb/homepage/FIXATE_1.jpg","hasNewProductFlag":true,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/fixate-cooking-show-healthy-weight-loss.do","quickViewProductCode":"FixateShow","hoverAction":"","hoverImageSource":"","productName":"FIXATE"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586447/bbweb/homepage/foundation_3.jpg","hasNewProductFlag":true,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/3-week-yoga-retreat-beginners.do","quickViewProductCode":"3WYR","hoverAction":"","hoverImageSource":"","productName":"Yoga"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586448/bbweb/homepage/Exclusive-workouts.jpg","hasNewProductFlag":true,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/on-demand-workout-videos.do","quickViewProductCode":"ExclusiveWorkouts","hoverAction":"","hoverImageSource":"","productName":"ExclusiveWorkouts"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472586447/bbweb/homepage/beachbody-bod2_4.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/on-demand-workout-videos.do","quickViewProductCode":"BOD","hoverAction":"","hoverImageSource":"","productName":"BOD"}],
        "initialSlide":0};
        vm.carouselSettings.slidesToScroll = 1;

        // Start
        activate();

        //Initiates the slider data for BOD
        function activate () {

            // Add the slides for the slider.
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/bod/slide1.html",
                    slideUpHtml: "html/slides/bod/slideup1.html"
                }
            ];

        }

        activate();
    }

} (angular));
