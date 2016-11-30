(function(angular) {

    angular.module('bb-homepage').controller('fitness.controller', ['$scope', FitnessController]);

    function FitnessController($scope) {

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
            "viewMoreUrl":"/category/fitness_programs/all-fitness-programs.do",
            "viewMoreText":"Fitness",
            "slides":[
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580270/bbweb/homepage/carosel_image_CH_1.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/country-heat-dance-workout.do","quickViewProductCode":"CH","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Country Heat"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_CIZE_2.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/cize-dance-workout.do","quickViewProductCode":"CZ","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Cize"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580360/bbweb/homepage/TaiCheng_3.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/tai-cheng-workout.do","quickViewProductCode":"TC","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Tai Cheng"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_BodyBeast_4.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/body-beast-workout.do","quickViewProductCode":"BODYBEAST","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Body Beast"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580360/bbweb/homepage/carousel_image_PiYo_5.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/piyo-workout.do","quickViewProductCode":"PIYO","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"PiYo"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_22HC_6.jpg","hasNewProductFlag":true,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/22-minute-hard-corps-workout.do","quickViewProductCode":"22HC","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"22 Minute Hard Corps"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580357/bbweb/homepage/carousel_image_21DFX_7.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/21-day-fix-extreme.do?e=408015","quickViewProductCode":"21E","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"21 Day Fix Extreme"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580434/bbweb/homepage/carousel_image_T25_8.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/focus-t25-workout.do","quickViewProductCode":"T25","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Focus T25"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580358/bbweb/homepage/carousel_image_21DF_9.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/21-day-fix-simple-fitness-eating.do","quickViewProductCode":"21DF","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"21 Day Fix"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580358/bbweb/homepage/carousel_image_MHC-10.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/master-hammer-chisel-workout.do","quickViewProductCode":"MHC","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"The Master's Hammer and Chisel"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_P90X3_11.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/p90x3-workout.do","quickViewProductCode":"P90X3","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"P90X3"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_MAX30_12.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/insanity-max-30-workout.do","quickViewProductCode":"IM","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Insanity Max:30"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580485/bbweb/homepage/carousel_image_BBL_13.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/brazil_butt_lift.do","quickViewProductCode":"BBLDVD2101","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Brazil Butt Lift"},
                {"imageSource":"//img1.beachbodyimages.com/beachbody/image/upload/v1472580359/bbweb/homepage/carousel_image_INS_14.jpg","hasNewProductFlag":false,"hasBestSellerFlag":false,"hasQuickViewButton":true,"hasLearnMoreButton":false,"learnMoreButtonUrl":"/product/fitness_programs/insanity.do","quickViewProductCode":"SAN","hoverAction":"QuickViewButton","hoverImageSource":"","productName":"Insanity"}
                ],"initialSlide":1};
        vm.carouselSettings.slidesToScroll = 4;

        // Start
        activate();

        function activate() {

            // Add the slides for the slider. Commented out slideUpHtml is left as an example.
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/fitness/slide1.html",
                    slideUpHtml: "html/slides/fitness/slideup1.html"
                },
                {
                    id: 1,
                    contentHtml: "html/slides/fitness/slide2.html",
                    slideUpHtml: "html/slides/fitness/slideup2.html"
                }
            ];
        }
    }
}(angular));
