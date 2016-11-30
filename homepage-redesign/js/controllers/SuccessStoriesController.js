(function(angular) {

    angular.module('bb-homepage').controller('successstories.controller', ['$scope', SuccessStoriesController]);

    function SuccessStoriesController($scope) {

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
        "viewMoreUrl":"/category/success_stories/21df-success-stories.do",
        "viewMoreText":"Success Stories",
        "slides":[{"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_BrookG_1.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":true,"learnMoreButtonUrl":"/product/fitness_programs/insanity-max-30-workout.do","quickViewProductCode":"MAX30","hoverAction":"Image","hoverImageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_BrookG_over_1.png","productName":"Insanity Max 30"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_EdM_2.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":true,"learnMoreButtonUrl":"/product/fitness_programs/p90x3-workout.do","quickViewProductCode":"P90X3","hoverAction":"Image","hoverImageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_EdM_over_2.png","productName":"P90X3"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_DerekB_3.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":true,"learnMoreButtonUrl":"/product/fitness_programs/focus-t25-workout.do","quickViewProductCode":"T25","hoverAction":"Image","hoverImageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_DerekB_over_3.png","productName":"Focus T25"},
        {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587203/bbweb/homepage/carousel_image_success_story_MaryC_4.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":false,"hasLearnMoreButton":true,"learnMoreButtonUrl":"/product/fitness_programs/21-day-fix-simple-fitness-eating.do","quickViewProductCode":"21D","hoverAction":"Image","hoverImageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472587202/bbweb/homepage/carousel_image_success_story_MaryC_over_4.png","productName":"21 Day Fix"}],
        "initialSlide":1};

        // Start
        activate();

        function activate() {
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/success-stories/slide1.html"
                }
            ];
        }
    }
}(angular));
