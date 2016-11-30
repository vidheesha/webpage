angular.module('bb-homepage', ['ui.bootstrap', 'angularLazyImg', 'slick', 'ngAnimate', 'ngSanitize', 'ngTouch', 'angular-click-outside'])
.config(['$compileProvider', function ($compileProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);
}]);
;var bbHomepageConstants = {

    apiPrefix: calculateUrlPrefix(window.location.href)

};

// Function takes in a complete URL and return the protocol and
// base URL up to the first /.
// Examples:
// -- https://www.beachbody.com returns https://www.beachbody.com/
// -- https://www.beachbody.com/checkout/dt.do returns https://www.beachbody.com/
function calculateUrlPrefix(baseUrl) {

    var getBaseUrl = baseUrl;
    var protocolSize = 0;

    // Do we start with https?
    if(baseUrl.indexOf("https://") > -1) {
        protocolSize = 8;
        getBaseUrl = baseUrl.replace("https://", "");
    }
    else if(baseUrl.indexOf("http://") > -1) {
        protocolSize = 7;
        getBaseUrl = baseUrl.replace("http://", "");
    }

    var indexOfFirstSlash = getBaseUrl.indexOf("/");
    var ret = "";
    if(indexOfFirstSlash === -1) {
        ret = baseUrl + '/';
    }
    else {
        ret = baseUrl.substr(0, indexOfFirstSlash + protocolSize + 1);
    }

    return ret;
}

//// Tests
//function testCalculateUrlPrefix(testUrl, expectedResultUrl) {
//    var result = calculateUrlPrefix(testUrl);
//
//    if(result !== expectedResultUrl) {
//       alert('Did not match: ' + result + ' to ' + expectedResultUrl);
//    }
//}
//testCalculateUrlPrefix('https://www.beachbody.com', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://www.beachbody.com/checkout/dt.do', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://www.beachbody.com/', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://beachbody-v142-revgreen.aws.marketlive.com/', 'https://beachbody-v142-revgreen.aws.marketlive.com/');
//testCalculateUrlPrefix('https://localhost:8443/', 'https://localhost:8443/');
//testCalculateUrlPrefix('https://localhost:8443', 'https://localhost:8443/');
//testCalculateUrlPrefix('http://localhost:8443/', 'http://localhost:8443/');
//testCalculateUrlPrefix('http://localhost:8443', 'http://localhost:8443/');
;(function(angular) {

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
;(function(angular) {

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
;(function(angular) {

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
;(function(angular) {

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
;(function(angular) {

    angular.module('bb-homepage').controller('header.controller', ['$scope', '$rootScope', HeaderController]);

    function HeaderController($scope, $rootScope) {

        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;


        // Functions
        func.toggleMenu = toggleMenu;

        // Data



        // Start
        activate();

        function activate() {

        }

        function toggleMenu() {
            $rootScope.$emit('header:mobileMenu:toggle');
        }
    }
}(angular));
;(function (angular) {

    'use strict';

    angular.module('bb-homepage').controller('hero.controller', ['$scope', HeroController]);

    function HeroController ($scope) {

        // Namespace for the HeroController data.
        $scope.vm = {};
        var vm = $scope.vm;

        // Data.
        vm.sliderData = {};

        /*
         * Initiates the slider data for the Hero.
         */
        function activate () {

            // Add the slides for the slider. Commented out slideUpHtml is left as an example.
            vm.sliderData.slides = [
                {
                    id: 0,
                    contentHtml: "html/slides/hero/slide1.html"
                    // slideUpHtml: "/text/us/homepage-redesign/html/slides/hero/slideup1-example.html"
                },
                {
                    id: 1,
                    contentHtml: "html/slides/hero/slide2.html"
                    // slideUpHtml: "/text/us/homepage-redesign/html/slides/hero/slideup2-example.html"
                }
            ];

            // Footer html to be displayed on mobile.
            vm.sliderData.footerHtml = "html/slides/hero/footer.html";
        }

        activate();
    }

} (angular));;(function(angular) {

    angular.module('bb-homepage').controller('menu.controller', ['$scope', '$rootScope', 'Api', '$timeout', MenuController]);

    function MenuController($scope, $rootScope, api, $timeout) {


        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;



        // Functions
        func.showMegaMenu = showMegaMenu;
        func.hideMegaMenu = hideMegaMenu;
        func.keepMegaMenu = keepMegaMenu;
        func.removeActive = removeActive;
        func.clickMenuItem = clickMenuItem;
        func.hoverSubMenuItem = hoverSubMenuItem;
        func.restoreLogo = restoreLogo;
        func.tappedMobileMenuItem = tappedMobileMenuItem;
        func.tappedTopNavItem = tappedTopNavItem;
        func.closeMobileMenu = closeMobileMenu;

        // Data
        $scope.menuJson = null; // Populated from jsonData directive.
        vm.activeElement = null;
        vm.timerPromise = null;
        vm.timerLogo = null;
        vm.showMegaMenu = false;
        vm.defaultLogo = "/images/en_US/homepage-redesign/mega-menu/bb-mm-logo.png";
        vm.activeLogo = "/images/en_US/homepage-redesign/mega-menu/bb-mm-logo.png";
        vm.previousLogo = "/images/en_US/homepage-redesign/mega-menu/bb-mm-logo.png";
        vm.menuData = null;
        vm.selectedMenu = null;
        vm.selectedCol1 = null;
        vm.selectedCol2 = null;
        vm.selectedCol3 = null;
        vm.selectedCol1Style = 'primary';
        vm.selectedCol2Style = 'secondary';
        vm.selectedCol3Style = 'secondary';
        vm.selectedMenuItem = null;
        vm.aboutLink = "/product/about_us/company_overview.do";
        vm.selectedPrimarySubMenuItem = null;
        vm.name = "";
        vm.previousName = "";

        vm.mobileMenuLevel = 0;
        vm.topNavItemText = 'Home';
        vm.mobileNavItems = [];
        vm.mobileMenuStack = [];

        $scope.$watch('menuJson', function() {
            // Define the menu data.
            vm.menuData = {
                menu: $scope.menuJson
            };
        });

        $rootScope.$on('header:mobileMenu:toggle', function(event, data) {
            $(".mobile-menu").toggleClass("menu-open");

            vm.mobileMenuLevel = 0;
            vm.topNavItemText = 'Home';
            vm.mobileNavItems = vm.menuData.menu;
            vm.mobileMenuStack = [];
        });



        // Start
        activate();

        function activate() {
        }

        /**
         * Function is used to handle the click event on a menu item.
         * @param menuItem The menu item that was clicked in.
         */
        function clickMenuItem(menuItem) {
            if(menuItem.clickTo !== undefined && menuItem.clickTo.length > 1) {
                closeMobileMenu();
                window.location.href = menuItem.clickTo;
            }
        }

        /**
         * Function removes the active flag from the menu item
         * that is currently active.
         */
        function removeActive() {
            if(vm.activeElement != null) {
                vm.activeElement.removeClass('active');
                vm.activeElement = null;
                vm.selectedPrimarySubMenuItem = null;
                vm.selectedMenuItem = null;
            }
        }

        /**
         * Function covers the hover state for when the cursor is
         * hovering over a specific menu item.
         * @param menuItem The menu item that is being hovered over.
         */
        function hoverSubMenuItem(menuItem, columnNumber) {
            $timeout.cancel(vm.timerLogo);

            if(vm.selectedMenuItem == menuItem) return;
            vm.selectedMenuItem = menuItem;

            if(menuItem.column1Items !== undefined && menuItem.column1Items !== null) {
                vm.selectedCol1 = menuItem.column1Items;
            }
            if(menuItem.column2Items !== undefined && menuItem.column2Items !== null) {
                vm.selectedCol2 = menuItem.column2Items;
            }
            if(menuItem.column3Items !== undefined && menuItem.column3Items !== null) {
                vm.selectedCol3 = menuItem.column3Items;
            }

            vm.previousLogo = vm.activeLogo;
            vm.previousName = vm.name;

            if(menuItem.hoverImage !== undefined && menuItem.hoverImage !== null) {
                vm.activeLogo = menuItem.hoverImage;
                vm.name = menuItem.name;
            }
            else {
                vm.activeLogo = vm.defaultLogo;
            }

            if(menuItem.column1Style !== undefined && menuItem.column1Style !== null) vm.selectedCol1Style = menuItem.column1Style;
            if(menuItem.column2Style !== undefined && menuItem.column2Style !== null) vm.selectedCol2Style = menuItem.column2Style;
            if(menuItem.column3Style !== undefined && menuItem.column3Style !== null) vm.selectedCol3Style = menuItem.column3Style;

            if(columnNumber === 1 && vm.selectedCol2Style !== 'primary') {
                vm.selectedPrimarySubMenuItem = menuItem;
            }
        }

        /**
         * Function displays the mega menu for the selected menu item.
         * @param event The <li> element that is selected.
         * @param menuItem The menu item that is selected.
         */
        function showMegaMenu(event, menuItem) {
            removeActive();

            vm.activeElement = $(event.target);
            vm.activeElement.addClass('active');

            vm.selectedMenu = menuItem;

            if(vm.selectedMenu.column1Style !== undefined && vm.selectedMenu.column1Style !== null) vm.selectedCol1Style = vm.selectedMenu.column1Style;
            if(vm.selectedMenu.column2Style !== undefined && vm.selectedMenu.column2Style !== null) vm.selectedCol2Style = vm.selectedMenu.column2Style;
            if(vm.selectedMenu.column3Style !== undefined && vm.selectedMenu.column3Style !== null) vm.selectedCol3Style = vm.selectedMenu.column3Style;
            
            vm.selectedCol1 = vm.selectedMenu.column1Items;
            vm.selectedCol2 = vm.selectedMenu.column2Items;
            vm.selectedCol3 = vm.selectedMenu.column3Items;

            if(menuItem.expands !== undefined && menuItem.expands == true) {
                vm.showMegaMenu = true;
                if (vm.timerPromise != null) {
                    $timeout.cancel(vm.timerPromise);
                }
            }
        }

        /**
         * Function handles the hiding of the mega menu, generally when the cursor
         * leaves the menu location.
         */
        function hideMegaMenu() {
            // Set a timer to go off in 20ms to turn off the mega menu, unless something
            // happens to keep it alive (such as "keepMegaMenu")
            vm.timerPromise = $timeout(function() {
                vm.showMegaMenu = false;
                vm.timerPromise = null;
                removeActive();
            }, 20);

            //whenever megamenu is inactive, it resets everything (default logo/active)
            restoreLogo(10);
        }

        /**
         * Function cancels the hiding of the mega menu. Typical use would be when
         * the mouse is moving from the menu bar into the mega menu.
         */
        function keepMegaMenu() {
            vm.showMegaMenu = true;
            if(vm.timerPromise != null) {
                $timeout.cancel(vm.timerPromise);
            }
        }

        /**
         * Function restores the active logo to the default logo and removes any active items.
         */
        function restoreLogo(time) {
            vm.timerLogo = $timeout(function() {
                vm.previousLogo = vm.defaultLogo;
                vm.activeLogo = vm.defaultLogo;
            }, time);
        }


        function tappedTopNavItem(event) {
            $(event.target).parent().addClass('active');

            $timeout(function() {
                $(event.target).parent().removeClass('active');

                vm.mobileMenuLevel--;
                if(vm.mobileMenuLevel == -1) {
                    closeMobileMenu();
                    window.location.href = "/";
                    return;
                }
                if(vm.mobileMenuLevel == 0) {
                    vm.topNavItemText = 'Home';
                }
                vm.mobileNavItems = vm.mobileMenuStack.pop();
            }, 50);
        }

        function tappedMobileMenuItem(item, event) {

            $(event.target).parent().addClass('active');
            $timeout(function() {
                $(event.target).parent().removeClass('active');

                if((item.mobileOverrideStopExpanding === undefined || item.mobileOverrideStopExpanding != true) && (item.expands || item.mobileOverrideExpands)) {
                    vm.mobileMenuLevel++;
                    vm.topNavItemText = 'Back'; 
                    vm.mobileMenuStack.push(vm.mobileNavItems);

                    var newArray = new Array();
                    if(item.mobileOverrideSubItems !== undefined && item.mobileOverrideSubItems !== null) {
                        newArray = newArray.concat(item.mobileOverrideSubItems);
                    }
                    if(newArray.length < 1) {
                        if(item.column1Items !== undefined && item.column1Items !== null) {
                            newArray = newArray.concat(item.column1Items);
                        }
                        if(item.column2Items !== undefined && item.column2Items !== null) {
                            newArray = newArray.concat(item.column2Items);
                        }
                        if(item.column3Items !== undefined && item.column3Items !== null) {
                            newArray = newArray.concat(item.column3Items);
                        }
                    } 
                    vm.mobileNavItems = newArray.filter(function(v){return v!==null});
                }
                else {
                    closeMobileMenu();
                    window.location.href = item.clickTo;
                }
            },50);
        }

        function closeMobileMenu() {
            $(".mobile-menu").removeClass("menu-open");
        }
    }
}(angular));

$(function(){
    // For Static Markup menu bar
    var hover_class, hover_previos, main_class, main_previos;
    var $megamenu = $('#mega-menu');
            $('.left-options li').bind('mouseover', 'li', function() {
                $megamenu.css('height', '532px');
            });
            $megamenu.on('mouseleave', function() {
                $megamenu.css('height','0px');
                $('.left-options .main-menu li').removeClass('active');
                $('.menu-container li.item').removeClass('selected');

            });
            $('.homepage-menu').on('mouseleave', function() {
                $megamenu.css('height','0px');
                $('.left-options .main-menu li').removeClass('active');
                $('.menu-container li.item').removeClass('selected');
            });            
            $('.homepage-header-banner-bar, .ss-col1').on('mouseover', function() {
                $megamenu.css('height','0px');
                $('.company-info').css('display', 'none');
                $('.main-menu li').removeClass('active');
            });
            $('.col-1').parent().not('#bod-menu, #apparel-menu, .company-info').on('mouseover', 'li', function() {
                hover_class = $(this).attr('class');
                $(this).addClass('selected');
                if ( hover_class !== 'undefined') {
                    hover_class = hover_class.split(' ')[1];
                    $('#'+hover_class).css('display','inline-block');
                    if( hover_previos !== hover_class && hover_previos !== 'undefined')
                         { $('#'+hover_previos).css('display','none');
                            $('.'+ hover_previos).removeClass('selected'); }
                    hover_previos = hover_class;
                }
            });
            $('.right-options').on('mouseover', function() {
                $('.company-info').css('display','block');
                $('.right-options .main-menu li').addClass('active');
                $megamenu.css('height', '0px');
                $('.left-options .main-menu li').removeClass('active');
            });
            $('.company-info').on('mouseleave', function() {
                $('.company-info').css('display', 'none');
                $('.right-options .main-menu li').removeClass('active');
            });
            $('.menu-container li.item').hover(function(){
                $('.logo img').attr('src',$(this).find('a').data('src')); },
                function(){
                $('.logo img').attr('src', '//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/megamenu/bb-mm-logo.jpg');
            });
            $('.left-options .main-menu li').on('mouseenter', function() {
                main_class = $(this).attr('class');
                if ( main_class !== 'undefined') {
                $(this).addClass('active');
                    $('#'+main_class).css('display','inline-block');
                    if( main_previos !== main_class && main_previos !== 'undefined')
                    {   $('#'+main_previos).css('display','none');
                        $('#'+hover_previos).css('display','none');
                        $('.'+main_previos).removeClass('active'); }
                    main_previos = main_class;
                }
                $('.company-info').css('display', 'none');
                $('.right-options .main-menu li').removeClass('active');
    });
});;(function(angular) {

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
;(function(angular) {

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
;(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('bbSlider', function () {

        return {
           restrict: 'E',
           templateUrl: 'js/directives/templates/bb-slider.html',
           scope: {
               sliderData: '=',
               section: '@'
           }
        };

    });

} (angular));;(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('bbSlideUp', function () {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'js/directives/templates/bb-slideup.html',
            scope: {
                slideUpClosed: '=',
                slideUpHtml: '='
            },
            link: function ($scope) {

                // Close the slide up by default.
                $scope.slideUpClosed = true;
            }
        };

    });

} (angular));;(function(angular) {

    var NG_HIDE_CLASS = 'ng-hide';
    var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    angular.module('bb-homepage')
    .directive('fadeIn', ['$animate', '$timeout', function ($animate, $timeout) {
        return {
            restrict: "A",
            scope: {},
            link: function (scope, element, attrs) {
                element.on("load", function () {
                    $timeout(function () {
                        element.removeClass("ng-hide-fade");
                        element.addClass("ng-show");
                    }, 500);
                });
                attrs.$observe("ngSrc", function () {
                    element.removeClass("ng-show");
                    element.addClass("ng-hide-fade");
                });
            }
        }
    }]);

}(angular));
;(function (angular) {

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
;/**
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
;(function(angular) {

    angular.module('bb-homepage')
        .directive('interactiveCarousel', [function () {
            return {
                restrict: 'E',
                controller: ['$scope', function ($scope) {
                    console.log('entered interactive-carousel');

                    $scope.myName = function() {
                        return 'hai';
                    }
                }],
            }
        }]);
}(angular));
;/*
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
;(function(angular) {

    angular.module('bb-homepage')
        .directive('slider', [function () {
            return {
                restrict: 'E',
                require: '^interactiveCarousel',
                templateUrl: 'js/directives/interactive-carousel/templates/slider.html',
                link: ['scope','ele','attrs','interactiveCarousel', function(scope, ele, attrs, interactiveCarousel) {
                    console.log(interactiveCarousel.myName());
                }],
                controller: ['$scope', function ($scope) {
                    console.log('entered slider');
                }],
                scope: {
                    section: '@'
                }
            }
        }]);
}(angular));
;(function(angular) {

    var NG_HIDE_CLASS = 'ng-hide';
    var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    angular.module('bb-homepage')
        .directive('jsonData', [function() {
            return {
                restrict: 'A',
                link: function(scope, element, attributes, controller) {
                    scope[attributes.ngModel] = JSON.parse(element.html());
                }
            };
        }]);

}(angular));;(function (angular) {

    'use strict';

    angular.module('bb-homepage').directive('sectionHeader', function () {

        return {
           restrict: 'E',
           require: '^interactiveCarousel',
           templateUrl: 'js/directives/templates/section-header.html',
           controller: ['$scope', function ($scope) {
                if ($scope.altText == undefined) {
                    $scope.altText = "Section Header";
                }
           }],
           scope: {
               desktopHeaderImage: '@',
               tabletHeaderImage: '@',
               mobileHeaderImage: '@',
               altText: '@'
           }
        };

    });

} (angular));;(function (angular) {

    'use strict';

    angular.module("bb-homepage")
    .directive("ngTouchstart", function () {
        return {
            controller: ["$scope", "$element", function ($scope, $element) {

                $element.bind("touchstart", onTouchStart);
                function onTouchStart(event) {
                    var method = $element.attr("ng-touchstart");
                    $scope.$event = event;
                    $scope.$apply(method);
                }

            }]
        }
    })

} (angular));;angular.module('bb-homepage')
    .filter('appendIcidQuery', [AppendIcidQueryFilter]);

function AppendIcidQueryFilter() {

    return function(input, icidQuery) {

        if(input === undefined) {
            return input;
        }

        var returnVal = input;

        if(returnVal.indexOf('?') > 0) {
            return returnVal + '&icid=' + icidQuery;
        }

        return returnVal + '?icid=' + icidQuery;
    }
}
;angular.module('bb-homepage')
    .filter('categoryReplacement', [CategoryReplacementFilter]);

function CategoryReplacementFilter() {

    return function(input, categoryName, subCategoryName) {

        var returnVal = input;
        returnVal = returnVal.split("{categoryName}").join(categoryName);
        returnVal = returnVal.split("{subCategoryName}").join(subCategoryName);
        return returnVal;
    }
}
;angular.module('bb-homepage')
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
};angular.module('bb-homepage').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('html/Apparel.html',
    "<div class=\"container-fluid\" ng-controller=\"apparel.controller\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"apparel\">\n" +
    "                <div class=\"apparel-upper-section\">\n" +
    "                    <section-header desktop-header-image=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/heading_apparel.png\"\n" +
    "                                    tablet-header-image=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/t_heading_apparel.png\"\n" +
    "                                    mobile-header-image=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/m_heading_apparel.png\"\n" +
    "                                    alt-text=\"Apparel Header\"></section-header>\n" +
    "                    <!--Image that overlaps section header-->\n" +
    "                    <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                        <bb-slider section=\"apparel\" slider-data=\"vm.sliderData\"></bb-slider>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <carousel section=\"apparel\" settings=\"vm.carouselSettings\" slot=\"6\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('html/Bod.html',
    "<div class=\"container-fluid\" ng-controller=\"bod.controller\">  \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"bod\">\n" +
    "                <section-header class=\"bod-section-header\"\n" +
    "                                desktop-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/new-on-demand-logo.png\"\n" +
    "                                tablet-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/t-on-demand-new-logo.png\"\n" +
    "                                mobile-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/m-on-demand-new-logo.png\"\n" +
    "                                alt-text=\"Beachbody On Demand Header\"></section-header>\n" +
    "                <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                    <bb-slider slider-data=\"vm.sliderData\" section=\"bod\"></bb-slider>\n" +
    "                </div>\n" +
    "                <carousel section=\"bod\" settings=\"vm.carouselSettings\" slot=\"5\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('html/Fitness.html',
    "<div class=\"container-fluid\" ng-controller=\"fitness.controller\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"fitness\">\n" +
    "                <section-header desktop-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/heading_fitness.png\"\n" +
    "                                tablet-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/t_heading_fitness.png\"\n" +
    "                                mobile-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/m_heading_fitness.png\"\n" +
    "                                alt-text=\"Fitness Header\"></section-header>\n" +
    "                <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                    <bb-slider section=\"fitness\" slider-data=\"vm.sliderData\"></bb-slider>\n" +
    "                </div>\n" +
    "                <carousel section=\"fitness\" settings=\"vm.carouselSettings\" slot=\"1\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('html/Gear.html',
    "<div class=\"container-fluid\" ng-controller=\"gear.controller\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"gear\">\n" +
    "                <section-header desktop-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/heading_gear.png\"\n" +
    "                                tablet-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/t_heading_gear.png\"\n" +
    "                                mobile-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/m_heading_gear.png\"\n" +
    "                                alt-text=\"Gear Header\"></section-header>\n" +
    "                <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                    <bb-slider section=\"gear\" slider-data=\"vm.sliderData\"></bb-slider>\n" +
    "                </div>\n" +
    "                <carousel section=\"gear\" settings=\"vm.carouselSettings\" slot=\"3\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('html/Nutrition.html',
    "<div class=\"container-fluid\" ng-controller=\"nutrition.controller\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"nutrition\">\n" +
    "                <section-header desktop-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/heading_nutrition.png\"\n" +
    "                                tablet-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/t_heading_nutrition.png\"\n" +
    "                                mobile-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/m_heading_nutrition.png\"\n" +
    "                                alt-text=\"Nutrition Header\"></section-header>\n" +
    "                <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                    <bb-slider section=\"nutrition\" slider-data=\"vm.sliderData\"></bb-slider>\n" +
    "                </div>\n" +
    "                <carousel section=\"nutrition\" settings=\"vm.carouselSettings\" slot=\"2\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('html/ReaderLinks.html',
    ""
  );


  $templateCache.put('html/SuccessStories.html',
    "<div class=\"container-fluid\" ng-controller=\"successstories.controller\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 interactive-carousel-container\">\n" +
    "            <interactive-carousel id=\"successStories\">\n" +
    "                <section-header desktop-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/heading_success_stories.png\"\n" +
    "                                tablet-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/t_heading_success_stories.png\"\n" +
    "                                mobile-header-image=\"//res.cloudinary.com/beachbody/image/upload/bbweb/homepage/m_heading_success_stories.png\"\n" +
    "                                alt-text=\"Success Stories Header\"></section-header>\n" +
    "\n" +
    "                <div class=\"responsive-image-wrapper section-slider\">\n" +
    "                    <bb-slider section=\"successStories\" slider-data=\"vm.sliderData\"></bb-slider>\n" +
    "                </div>\n" +
    "                <carousel section=\"successStories\" settings=\"vm.carouselSettings\" slot=\"4\"></carousel>\n" +
    "            </interactive-carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('html/slides/apparel/slide1.html',
    "<div class=\"apparel-slide slide\">\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"hidden-xs carousel-caption\">\n" +
    "        <div class=\"apparel-slider-title slide-title\">\n" +
    "            ANYTIME, ANY<i>WEAR</i>\n" +
    "        </div>\n" +
    "        <p class=\"apparel-slider-subtitle slide-subtitle slide-1\">\n" +
    "            Kick your style game up a notch! You'll love these go-to lifestyle and performance gems that fit however you want to play your day.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/category/fitness_gear/workout-clothes-apparel.do\" onclick=\"logLink('home:slot6:slide1:shopApparel');\" title=\"Shop Apparel\" class=\"btn btn-default slider-button\">SHOP APPAREL</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('html/slides/apparel/slideup1.html',
    "<div class=\"visible-xs slideup-apparel\">\n" +
    "    <div class=\"slideup-title\">ANYTIME, ANY<i>WEAR</i></div>\n" +
    "    <!-- All content with the ng-hide property like the one below will be hidden when the slideup is closed. -->\n" +
    "    <div ng-hide=\"slideUpClosed\">\n" +
    "        <p class=\"slideup-text\">Kick your style game up a notch! You'll love these go-to lifestyle and performance gems that fit however you want to play your day.</p>\n" +
    "    </div>\n" +
    "    <p>\n" +
    "        <a href=\"/category/fitness_gear/workout-clothes-apparel.do\" onclick=\"logLink('home:slot6:slide1:shopApparel');\" title=\"Shop Apparel\" class=\"btn btn-default slider-button slideup-btn\">SHOP APPAREL</a>\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/bod/slide1.html',
    "<div class=\"bod-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596737/bbweb/homepage/bod-slider-hero-375_3.jpg\" class=\"visible-xs\" height=\"\" alt=\"Hero Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596737/bbweb/homepage/bod-slider-hero-667_2.jpg\" class=\"visible-sm\" height=\"\" alt=\"Hero Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596737/bbweb/homepage/bod-slider-hero-1350_1.jpg\" class=\"visible-md visible-lg\" height=\"\" alt=\"Hero Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"hidden-xs carousel-caption\">\n" +
    "        <div class=\"bod-slider-title slide-title\">\n" +
    "            STREAM WORKOUTS<br/> FREE FOR 30 DAYS\n" +
    "        </div>\n" +
    "        <p class=\"bod-slider-subtitle slide-subtitle slide-1\">\n" +
    "            With our new Beachbody<sup>&reg;</sup> On Demand you can now stream over $6,000 worth of our most proven workouts, FREE for 30 days!\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/product/fitness_programs/on-demand-workout-videos.do\" onclick=\"logLink('home:slot5:slide1:learnMore');\" title=\"Learn more\" class=\"btn btn-default slider-button\">LEARN MORE</a>\n" +
    "        </p>\n" +
    "        <p class=\"streamHeader\">Stream Beachbody On Demand on your TV with:</p>\n" +
    "        <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/BOD_logos_forBgBlue.png\" class=\"hidden-xs streaming-services\" alt=\"Streaming Services\">\n" +
    "        <p class=\"streamSubHeader\">Beachbody On Demand works with iPhone<sup>&reg;</sup>, iPad<sup>&reg;</sup>, iPod touch<sup>&reg;</sup> or Apple TV<sup>&reg;</sup></p>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('html/slides/bod/slideup1.html',
    "<div class=\"visible-xs slideup-bod\">\n" +
    "    <div class=\"slideup-title\">STREAM WORKOUTS FREE FOR 30 DAYS</span></div>\n" +
    "    <!-- All content with the ng-hide property like the one below will be hidden when the slideup is closed. -->\n" +
    "    <div ng-hide=\"slideUpClosed\" class=\"slideUpClosed\">\n" +
    "        <p class=\"slideup-text\">With our new Beachbody<sup>&reg;</sup> On Demand you can now stream over $6,000 worth of our most proven workouts FREE for 30 days.</span></p>\n" +
    "        <p class=\"streamHeader\">Stream Beachbody On Demand on your TV today with</p>\n" +
    "        <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/BOD_logos_forBgBlack.png\" class=\"slideup-image\" alt=\"Streaming Services\">\n" +
    "        <p class=\"streamSubHeader\">Beachbody On Demand works with iPhone<sup>&reg;</sup>, iPad<sup>&reg;</sup>, iPod touch<sup>&reg;</sup> or Apple TV<sup>&reg;</sup></p>\n" +
    "    </div>\n" +
    "    <p>\n" +
    "        <a href=\"/product/fitness_programs/on-demand-workout-videos.do\" onclick=\"logLink('home:slot5:slide1:learnMore');\" title=\"Learn more\" class=\"btn btn-default slider-button slideup-btn\">LEARN MORE</a>\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/fitness/slide1.html',
    "<div class=\"fitness-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    " <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595916/bbweb/homepage/country_heat_375_3.jpg\" class=\"visible-xs\" alt=\"Fitness Slide Two\">\n" +
    " <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595916/bbweb/homepage/country_heat_667_2.jpg\" class=\"visible-sm\" alt=\"Fitness Slide Two\">\n" +
    " <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595916/bbweb/homepage/country_heat_1350_1.jpg\" class=\"visible-md visible-lg\" alt=\"Fitness Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"visible-xs mobile-logo\">\n" +
    "        <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/country_heat_logo_375.png\" class=\"visible-xs\" alt=\"Cize\">\n" +
    "    </div>\n" +
    "    <div class=\"hidden-xs carousel-caption slide-1\">\n" +
    "        <p>\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/country_heat_logo_375.png\" class=\"visible-xs\" alt=\"Country Heat\">\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1470673889/bbweb/homepage/country_heat_logo_667.png\" class=\"visible-sm\" alt=\"Country Heat\">\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/country_heat_logo_1350.png\" class=\"visible-md visible-lg\" alt=\"Country Heat\">\n" +
    "        </p>\n" +
    "        <p class=\"fitness-slider-subtitle slide-subtitle slide-1\">\n" +
    "            Fire up the fun and dance off the pounds in just 30 days with Autumn's easy-to-follow, country dance-inspired workout.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/product/fitness_programs/country-heat-dance-workout.do\" onclick=\"logLink('home:slot1:slide1:learnMore');\" title=\"Learn More\" class=\"btn btn-default slider-button\">LEARN MORE</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('html/slides/fitness/slide2.html',
    "<div class=\"fitness-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "  <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596099/bbweb/homepage/cize_375_3.png\" class=\"visible-xs\" alt=\"Fitness Slide Two\">\n" +
    "  <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596098/bbweb/homepage/cize_667_2.png\" class=\"visible-sm\" alt=\"Fitness Slide Two\">\n" +
    "  <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596099/bbweb/homepage/cize_1350_1.png\" class=\"visible-md visible-lg\" alt=\"Fitness Slide Two\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"visible-xs mobile-logo\">\n" +
    "        <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/cize_logo_375.png\" class=\"visible-xs\" alt=\"Cize\">\n" +
    "    </div>\n" +
    "    <div class=\"hidden-xs carousel-caption slide-2\">\n" +
    "        <p>\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/cize_logo_375.png\" class=\"visible-xs\" alt=\"Cize\">\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/cize_logo_667.png\" class=\"visible-sm\" alt=\"Cize\">\n" +
    "            <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/cize_logo_1350.png\" class=\"visible-md visible-lg\" alt=\"Cize\">\n" +
    "        </p>\n" +
    "        <p class=\"fitness-slider-subtitle slide-subtitle slide-2\">\n" +
    "            Stop Exercizing…Start Dancing! Dance your way to fit in just 30 days. With CIZE<sup>&reg;</sup>, you'll have so much fun, you'll forget you're working out!\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/product/fitness_programs/cize-dance-workout.do\" onclick=\"logLink('home:slot1:slide2:learnMore');\" title=\"Learn More\" class=\"btn btn-default slider-button\">LEARN MORE</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('html/slides/fitness/slideup1.html',
    "<div class=\"visible-xs slideup-fitness\">\n" +
    "    <!-- All content with the ng-hide property like the one below will be hidden when the slideup is closed. -->\n" +
    "    <p class=\"fitness-slider-subtitle slide-subtitle slide-1\">\n" +
    "        Fire up the fun and dance off the pounds in just 30 days with Autumn's easy-to-follow, country dance-inspired workout.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <a href=\"/product/fitness_programs/country-heat-dance-workout.do\" onclick=\"logLink('home:slot1:slide1:learnMore');\" title=\"Learn More\" class=\"btn btn-default slider-button slideup-btn\">LEARN MORE</a>\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/fitness/slideup2.html',
    "<div class=\"visible-xs slideup-fitness\">\n" +
    "    <div class=\"slideup-title slideup-2\">\n" +
    "        Stop Exercizing…Start Dancing! Dance your way to fit in just 30 days. With CIZE<sup>&reg;</sup>, you'll have so much fun, you'll forget<span ng-show=\"slideUpClosed\">...</span><span ng-hide=\"slideUpClosed\"> you're working out!</span>\n" +
    "    </div>\n" +
    "    <p>\n" +
    "        <a href=\"/product/fitness_programs/cize-dance-workout.do\" onclick=\"logLink('home:slot1:slide2:learnMore');\" title=\"Learn More\" class=\"btn btn-default slider-button slideup-btn\">LEARN MORE</a>\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/gear/slide1.html',
    "<div class=\"gear-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472597996/bbweb/homepage/m_gear_slider_bar_375.jpg\" class=\"visible-xs\" alt=\"Gear Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472597996/bbweb/homepage/t_gear_slider_bar_667.jpg\" class=\"visible-sm\" alt=\"Gear Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472597996/bbweb/homepage/gear_slider_bar_1350.jpg\" class=\"visible-md visible-lg\" alt=\"Gear Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"carousel-caption\">\n" +
    "        <div class=\"gear-slider-title slide-title\">\n" +
    "            RISE ABOVE YOUR LIMITS\n" +
    "        </div>\n" +
    "        <p class=\"gear-slider-subtitle slide-subtitle slide-1\">\n" +
    "            You're working hard. You're putting in the time. You want results. But it never hurts to have a little help. Our new Beachbody<sup>&#174;</sup> gear will help you reach the edge of your limits...and beyond.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/category/fitness_gear/best_sellers.do\" onclick=\"logLink('home:slot3:slide1:shopGear');\" title=\"Shop Gear\" class=\"btn btn-default slider-button\">SHOP GEAR</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('html/slides/hero/footer.html',
    "<div class=\"visible-xs hero-footer\">\n" +
    "    <div class=\"hero-footer-title\">\n" +
    "        DECIDE. COMMIT. SUCCEED.<sup>&reg;</sup>\n" +
    "    </div>\n" +
    "    <p class=\"hero-footer-subtitle\">\n" +
    "        Beachbody<sup>&reg;</sup> puts proven fitness tools in your hands&mdash;all you need to do is press \"Play.\" Together, we'll turn your goals into results.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <a href=\"/category/fitness_programs/all-fitness-programs.do\" class=\"btn btn-default hero-button slider-button\" onclick=\"logLink('home:hero:findYourProgram');\" title=\"Find your program\">FIND YOUR PROGRAM</a>\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/hero/slide1.html',
    "<div class=\"hero-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595418/bbweb/homepage/m_header_slider_slide1_375.jpg\" class=\"visible-xs\" alt=\"Hero Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595418/bbweb/homepage/t_header_slider_slide1_667.jpg\" class=\"visible-sm\" alt=\"Hero Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595418/bbweb/homepage/header_slider_slide1_light_1350.jpg\" class=\"visible-md visible-lg\" alt=\"Hero Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"hidden-xs carousel-caption\">\n" +
    "        <div class=\"hero-slider-title slide-title\">\n" +
    "            DECIDE.<br/>COMMIT.<br/>SUCCEED.<sup>&reg;</sup>\n" +
    "        </div>\n" +
    "        <p class=\"hero-slider-subtitle slide-1 slide-subtitle\">\n" +
    "            Beachbody<sup>&reg;</sup> puts proven fitness tools in your hands&mdash;all you need to do is press \"Play.\" Together, we'll turn your goals into results.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/category/fitness_programs/all-fitness-programs.do\" onclick=\"logLink('home:hero:slide1:findYourProgram');\" title=\"Find your program\" class=\"btn btn-default hero-button slider-button\">FIND YOUR PROGRAM</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('html/slides/hero/slide2.html',
    "<div class=\"hero-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595735/bbweb/homepage/m_header_slider_slide2_375.jpg\" class=\"visible-xs\" alt=\"Hero Slide Two\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595735/bbweb/homepage/t_header_slider_slide2_667.jpg\" class=\"visible-sm\" alt=\"Hero Slide Two\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472595736/bbweb/homepage/header_slider_slide2_1350.jpg\" class=\"visible-md visible-lg\" alt=\"Hero Slide Two\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"hidden-xs carousel-caption slide-2\">\n" +
    "        <div class=\"hero-slider-title slide-title\">\n" +
    "            GET RESULTS<br/><i>YOUR</i> WAY\n" +
    "        </div>\n" +
    "        <p class=\"hero-slider-subtitle slide-2 slide-subtitle\">\n" +
    "            We deliver dramatic weight-loss transformations! Let Beachbody<sup>&reg;</sup> find a way to make fitness work for you.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/category/fitness_programs/all-fitness-programs.do\" onclick=\"logLink('home:hero:slide2:findYourProgram');\" title=\"Find your program\" class=\"btn btn-default hero-button slider-button\">FIND YOUR PROGRAM</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/hero/slideup1-example.html',
    "<div>\n" +
    "    <h3>Title Example 1</h3>\n" +
    "    <p>Subtitle Example 1</p>\n" +
    "    <!-- All content with the ng-hide property like the one below will be hidden when the slideup is closed. -->\n" +
    "    <p ng-hide=\"slideUpClosed\">Want to completely transform your body? Decide to make the change. Commit to one of our programs. And you can succeed.</p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/hero/slideup2-example.html',
    "<div>\n" +
    "    <h3>Example Title 2</h3>\n" +
    "    <p>Example Slide 2</p>\n" +
    "    <!-- All content with the ng-hide property like the one below will be hidden when the slideup is closed. -->\n" +
    "    <p ng-hide=\"slideUpClosed\">Want to completely transform your body? Decide to make the change. Commit to one of our programs. And you can succeed.</p>\n" +
    "</div>"
  );


  $templateCache.put('html/slides/nutrition/slide1.html',
    "<div class=\"nutrition-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596584/bbweb/homepage/m_nutrition_slider_shakeology_375.jpg\" class=\"visible-xs\" alt=\"Nutrition Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596583/bbweb/homepage/t_nutrition_slider_shakeology_667.jpg\" class=\"visible-sm\" alt=\"Nutrition Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472596584/bbweb/homepage/nutrition_slider_shakeology_1350.jpg\" class=\"visible-md visible-lg\" alt=\"Nutrition Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"carousel-caption\">\n" +
    "        <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/logo_shakeology.png\" class=\"nutrition-logo visible-md visible-lg\" alt=\"Shakeology Logo\">\n" +
    "        <div class=\"nutrition-slider-title slide-title\">\n" +
    "            A WORLD OF SUPERFOOD NUTRITION IN EVERY GLASS\n" +
    "        </div>\n" +
    "        <p class=\"nutrition-slider-subtitle slide-subtitle slide-1\">\n" +
    "            Shakeology<sup>&#174;</sup> is a powerful superfood-packed protein supplement shake formula designed to deliver the nutrients you need to help you lose weight, reduce junk-food cravings, and provide healthy energy.<sup>&#42;</sup>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"http://www.shakeology.com?tracking=BB_SHAKEOLOGY&icid=bb_shk_home_slot2\" onclick=\"logLink('home:slot2:slide1:learnMore');\" title=\"Learn More\" target=\"_blank\" class=\"btn btn-default slider-button\">LEARN MORE</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('html/slides/success-stories/slide1.html',
    "<div class=\"success-stories-slide slide\">\n" +
    "\n" +
    "    <!--Main Background Image-->\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472598173/bbweb/homepage/m_success_slider_stories_375.jpg\" class=\"visible-xs\" alt=\"Success Stories Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472598173/bbweb/homepage/t_success_slider_stories_667.jpg\" class=\"visible-sm\" alt=\"Success Stories Slide One\">\n" +
    "    <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/v1472598173/bbweb/homepage/success_slider_stories_1350.jpg\" class=\"visible-md visible-lg\" alt=\"Success Stories Slide One\">\n" +
    "\n" +
    "    <!--Title, subtitle, and button overlayed on image.-->\n" +
    "    <div class=\"carousel-caption\">\n" +
    "        <div class=\"success-stories-slider-title slide-title\">\n" +
    "            WE DO NOT DOCTOR PHOTOS. EVER.\n" +
    "        </div>\n" +
    "        <p class=\"success-stories-slider-subtitle slide-subtitle slide-1\">\n" +
    "            ALL OF THE RESULTS YOU SEE HERE ARE REAL AND UNRETOUCHED\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"/category/success_stories/21df-success-stories.do\" onclick=\"logLink('home:slot4:slide1:viewResults');\" title=\"View Results\" class=\"btn btn-default slider-button\">VIEW RESULTS</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/directives/interactive-carousel/templates/carousel.html',
    "<div class=\"slider-container\">\n" +
    "    <slick class=\"slider single-item\"\n" +
    "           center-mode=\"{{settings.endless}}\"\n" +
    "           preview-mode=\"false\"\n" +
    "           center-padding=\"30px\"\n" +
    "           responsive=\"[ { breakpoint: 992, settings: { swipeToSlide: true, slidesToShow: 3 } }, { breakpoint: 768, settings: { swipeToSlide: true, slidesToShow: 1, arrows: false, previewMode: true, previewPadding: '92px' } } ]\"\n" +
    "           slides-to-show=4\n" +
    "           slides-to-scroll=\"{{settings.slidesToScroll || 1}}\"\n" +
    "           infinite=\"{{settings.endless}}\"\n" +
    "           initial-slide= \"settings.initialSlide\"\n" +
    "           adaptive-height=\"false\"\n" +
    "           mobile-first=\"true\">\n" +
    "        <div class=\"interactive-carousel\" ng-repeat=\"slide in settings.slides\" ng-if=\"slide.viewMoreText !== null\">\n" +
    "            <div class=\"item-container\" ng-if=\"!slide.isViewMore\">\n" +
    "                <a class=\"background-image\" ng-click=\"callLogLink(slot, $index, slide.quickViewProductCode)\" ng-href=\"{{slide.learnMoreButtonUrl}}\"  target=\"{{slide.learnMoreButtonUrl.indexOf('http') == 0 ? '_blank' : '_self'}}\">\n" +
    "                    <img class=\"normal\" ng-src=\"{{slide.imageSource}}\" alt=\"Learn more about {{slide.productName}}\">\n" +
    "                    <img class=\"new-corner\" ng-show=\"slide.hasNewProductFlag\" src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/slider_new_corner_blue.png\" >\n" +
    "                    <img class=\"best-seller\" ng-show=\"slide.hasBestSellerFlag\" src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_best_seller_corner.png\">\n" +
    "                </a>\n" +
    "                <div class=\"overlay\" ng-show=\"slide.hoverAction === 'Image'\" ng-touchstart=\"touchStart($event)\" ng-mouseenter=\"mouseEnter($event)\" ng-mouseleave=\"mouseLeave($event)\">\n" +
    "                    <img ng-src=\"{{slide.hoverImageSource}}\" alt=\"Learn more about {{slide.productName}}\">\n" +
    "                    <input type=\"button\" ng-show=\"slide.hasLearnMoreButton\" ng-click=\"learnMoreButtonPressed(slide.learnMoreButtonUrl, slide.quickViewProductCode, $index)\" value=\"Learn More\" class=\"btn-learn-more\" />\n" +
    "                </div>\n" +
    "                <!-- The hidden-xs and hidden-sm here are a hack to remove the Quick View functionality from tablet and mobile. -->\n" +
    "                <!-- This was added due to a last minute requirement and should be refactored eventually.-->\n" +
    "                <!-- See NH-196 -->\n" +
    "                <div ng-show=\"slide.hoverAction === 'QuickViewButton'\" class=\"overlay-quick-view hidden-xs hidden-sm\">\n" +
    "                    <input type=\"button\" class=\"btn-quick-view\" ng-click=\"quickViewButtonPressed(slide.quickViewProductCode)\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"item-container view-more\" ng-if=\"slide.isViewMore && slide.viewMoreText !== null\">\n" +
    "                <img src=\"//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/carousel_image_beachbody_blank_square.jpg\" alt=\"View More {{slide.viewMoreText}}\">\n" +
    "                <div class=\"view-more-text\">VIEW MORE <br> {{slide.viewMoreText}}</div>\n" +
    "                <input type=\"button\" value=\"Click Here\" ng-click=\"clickHereButtonPressed($index)\" class=\"btn-click-here\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </slick>\n" +
    "</div>\n"
  );


  $templateCache.put('js/directives/interactive-carousel/templates/quick-view-popup.html',
    "<!-- The hidden-xs and hidden-sm here are a hack to remove the Quick View functionality from tablet and mobile. -->\n" +
    "<!-- This was added due to a last minute requirement and should be refactored eventually.-->\n" +
    "<!-- See NH-196 -->\n" +
    "<div ng-class=\"{ 'darken-background': showQuickView }\" class=\"hidden-xs hidden-sm\">\n" +
    "\n" +
    "    <div class=\"interactive-carousel-quick-view-popup modal-fade\" ng-show=\"showQuickView\">\n" +
    "        <!--<input type=\"button\" value=\"CLOSE\" ng-click=\"closePopup()\">-->\n" +
    "\n" +
    "        <div class=\"pop-up-x\" ng-click = \"closePopup()\">X</div>\n" +
    "        <gse-product-detail product-detail-data=\"quickViewProductDetail\" product-slot-data=\"quickViewProductSlot\"/>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/directives/interactive-carousel/templates/slider.html',
    "<div class=\"sliderTest\" style=\"width: 100%; height: 600px; text-align: center; padding-top: 100px; position: relative;\">\n" +
    "    SLIDER\n" +
    "    <quick-view-popup section=\"section\"></quick-view-popup>\n" +
    "</div>"
  );


  $templateCache.put('js/directives/templates/bb-carousel.html',
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-disable-mouse ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "\n" +
    "    <!-- These are the Gray/Blue slide indicators. -->\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\" ng-class=\"'slide-' + active\">\n" +
    "        <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
    "            <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
    "        </li>\n" +
    "    </ol>\n" +
    "    <!-- Includes the slides of the carousel -->\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <!-- Carousel arrows-->\n" +
    "    <a class=\"slick-prev left\" ng-click=\"prev()\"><span class=\" left-arrow icon-prev\"></span></a>\n" +
    "    <a class=\"slick-next right\" ng-click=\"next()\"><span class=\"right-arrow icon-next\"></span></a>\n" +
    "</div>"
  );


  $templateCache.put('js/directives/templates/bb-slider.html',
    "<div class=\"bb-slider\">\n" +
    "\n" +
    "    <uib-carousel active=\"0\" interval=\"-1\" no-wrap=\"false\" template-url=\"js/directives/templates/bb-carousel.html\"\n" +
    "                  ng-class=\"{ 'slide-up-open' : !sliderData.slideUpClosed }\">\n" +
    "\n" +
    "        <uib-slide ng-repeat=\"slide in sliderData.slides track by slide.id\" index=\"slide.id\">\n" +
    "\n" +
    "            <div ng-include=\"slide.contentHtml\" />\n" +
    "\n" +
    "            <bb-slide-up slide-up-closed=\"sliderData.slideUpClosed\" slide-up-html=\"slide.slideUpHtml\" ng-show=\"slide.slideUpHtml\"/>\n" +
    "\n" +
    "        </uib-slide>\n" +
    "\n" +
    "    </uib-carousel>\n" +
    "\n" +
    "    <div ng-include=\"sliderData.footerHtml\" />\n" +
    "\n" +
    "    <quick-view-popup section=\"section\"></quick-view-popup>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/directives/templates/bb-slideup.html',
    "<div class=\"visible-xs bb-slideup\" ng-click=\"slideUpClosed = !slideUpClosed\" ng-class=\"{ 'open' : !slideUpClosed }\">\n" +
    "    <div class=\"slideup-caret\" ng-class=\"{ 'open' : !slideUpClosed }\" />\n" +
    "    <div ng-include=\"slideUpHtml\" />\n" +
    "</div>"
  );


  $templateCache.put('js/directives/templates/gse-product-detail.html',
    "<div class=\"gse-product-detail\">\n" +
    "\n" +
    "    <span class=\"loading-icon\" ng-show=\"showLoadingIcon\"><img\n" +
    "            src=\"/text/us/homepage-redesign/img/ajax-loader.gif\"></span>\n" +
    "\n" +
    "    <div class=\"gse-main-content container-fluid\" ng-hide=\"showLoadingIcon\">\n" +
    "\n" +
    "        <!-- Thumbnails-->\n" +
    "        <div class=\"gse-thumbnails col-xs-12 col-md-5 col-md-offset-1\">\n" +
    "\n" +
    "            <!-- Selected Thumbnail-->\n" +
    "            <div class=\"thumbnail-main col-sm-8 col-sm-push-2 col-md-10\">\n" +
    "                <img ng-src=\"{{ currentThumbnail }}\" alt=\"{{ data.shortDescription }}\">\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Small Thumbnails -->\n" +
    "            <div class=\"thumbnails col-sm-2 col-sm-pull-8 col-md-2 col-md-pull-10\" ng-show=\"data.thumbnails.length > 1\">\n" +
    "                <div ng-repeat=\"thumbnail in data.thumbnails track by $index\"\n" +
    "                     ng-show=\"thumbnail.imagePath || thumbnail.largeImagePath\" class=\"gse-thumbnail\">\n" +
    "\n" +
    "                    <img ng-src=\"{{ getThumbnailImage(thumbnail, false) }}\" alt=\"{{ thumbnail.altText }}\"\n" +
    "                         ng-click=\"setCurrentThumbnail(thumbnail)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Product Details -->\n" +
    "        <div class=\"gse-details col-xs-12 col-sm-12 col-md-4 col-md-offset-1\">\n" +
    "\n" +
    "            <div class=\"product-name\" ng-bind-html=\"data.productName\"/>\n" +
    "            <div class=\"product-installments\">\n" +
    "                <span ng-show=\"data.installmentCount > 1\">\n" +
    "                    JUST {{ data.installmentCount }} MONTHLY PAYMENTS OF\n" +
    "                </span>\n" +
    "                <br class=\"hidden-xs\" />\n" +
    "                <span class=\"product-costs\" ng-show=\"data.installmentAmount > 0\">\n" +
    "                    <span class=\"product-amount\">\n" +
    "                        {{ data.installmentAmount | currency : '$' : 2}}\n" +
    "                    </span>\n" +
    "                    <span class=\"currency\">\n" +
    "                        {{ data.installmentCurrency }}\n" +
    "                    </span>\n" +
    "                    <span class=\"s-and-h\">\n" +
    "                        {{ data.shippingAndHandlingAmount | shippingAndHandling }}\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"gse-bazaar\" ng-show=\"data.bvReviewCount > 0\">\n" +
    "                <div class=\"rating-stars-background\">\n" +
    "                    <a href=\"{{ data.bvProductReviewUrl }}\">\n" +
    "                        <div class=\"rating-stars {{ data.bvStarRatingClass }}\"/>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <span class=\"rating\">\n" +
    "                    {{ data.bvRating | number : 1 }} of 5\n" +
    "                </span>\n" +
    "                <span class=\"review-count\">\n" +
    "                    ({{ data.bvReviewCount }} reviews)\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"product-description\" ng-bind-html=\"data.shortDescription\"/>\n" +
    "\n" +
    "            <div class=\"product-options\" ng-show=\"data.productOptions.length > 0\">\n" +
    "\n" +
    "                <div class=\"gse-picker color\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"colorDropdown\"\n" +
    "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span ng-hide=\"productColor\">\n" +
    "                                <span class=\"color-icon\"></span>\n" +
    "                                <span class=\"dropdown-text\"> Color</span>\n" +
    "                            </span>\n" +
    "                            <span ng-show=\"productColor\">\n" +
    "                                <img class=\"chosen-color\" ng-src=\"{{productColor ? '/images' + productColor : ''}}\">\n" +
    "                            </span>\n" +
    "                            <span class=\"dropdown-caret\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" aria-labelledby=\"colorDropdown\">\n" +
    "                            <li ng-repeat-start=\"color in data.productOptions[0].options track by $index\">\n" +
    "                                <a href=\"#\" ng-click=\"setProductColor(color)\">\n" +
    "                                    <img class=\"dropdown-color\" ng-src=\"{{ '/images' + color.imagePath }}\">\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <span ng-repeat-end/>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"gse-picker size\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"sizeDropdown\"\n" +
    "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span class=\"dropdown-text\">\n" +
    "                                {{ productSizeLabel || 'Size' }}\n" +
    "                            </span>\n" +
    "                            <span class=\"dropdown-caret\"/>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" aria-labelledby=\"sizeDropdown\">\n" +
    "                            <li ng-repeat-start=\"size in data.productOptions[1].options track by $index\">\n" +
    "                                <a href=\"#\" ng-click=\"setProductSize(size)\">\n" +
    "                                    {{ size.code }}\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <span ng-repeat-end/>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"gse-picker qty\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default dropdown-toggle qty\" type=\"button\" id=\"qtyDropdown\"\n" +
    "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span class=\"dropdown-text\">\n" +
    "                                {{ productQty || 'Qty' }}\n" +
    "                            </span>\n" +
    "                            <span class=\"dropdown-caret\"/>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" aria-labelledby=\"qtyDropdown\">\n" +
    "                            <li ng-repeat-start=\"qty in [1, 2, 3] track by $index\">\n" +
    "                                <a href=\"#\" ng-click=\"setProductQty(qty)\">\n" +
    "                                    {{ qty }}\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <span ng-repeat-end/>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"error-message\" ng-show=\"showErrorMessage\" ng-bind=\"errorMessage\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"spacer\" ng-class=\"{'mbg-space': data.mbgDays}\"></div>\n" +
    "            <div class=\"gse-cta col-xs-12\">\n" +
    "\n" +
    "                <div class=\"mbg mbg-{{ data.mbgDays }} visible-xs\" ng-show=\"data.mbgDays\"/>\n" +
    "                <!-- Should be noted here that the removal of the Add to Cart button for Activit (SUPACT63104) is a last minute hack to satisfy -->\n" +
    "                <!-- a legal requirement. See NH-211. In the future, property such as 'suppressAddToCart' should be used here instead of the -->\n" +
    "                <!-- hardcoded product code. -->\n" +
    "\n" +
    "                <!-- Addendum note: the product code has recently been changed from SUPACT63104 to SUPACT93105, so this was just updated to match that changed -->\n" +
    "                <!-- RB 6/14/16 -->\n" +
    "                <div class=\"cta col-xs-12 col-sm-7\" ng-class=\"{ 'no-add-to-cart': !data.productPk || !data.installmentAmount || data.productCode == 'SUPACT93105' }\">\n" +
    "                    <span>\n" +
    "                        <a href=\"#\" title=\"Add to cart\" class=\"btn btn-default btn-gse add-to-cart\" ng-click=\"addToCart()\"\n" +
    "                           ng-show=\"data.productPk && data.installmentAmount && data.productCode != 'SUPACT93105'\">ADD TO CART</a>\n" +
    "                    </span>\n" +
    "\n" +
    "                    <span ng-switch=\"data.icidQuery\">\n" +
    "                        <a ng-switch-when=\"null\" ng-href=\"{{data.viewDetailsUrl}}\" ng-click=\"logAnalytics('viewdetails')\"\n" +
    "                           title=\"View details\" class=\"btn btn-default btn-gse view-details\">VIEW DETAILS</a>\n" +
    "\n" +
    "                        <a ng-switch-default ng-href=\"{{data.viewDetailsUrl | appendIcidQuery:data.icidQuery}}\"\n" +
    "                           title=\"View details\" class=\"btn btn-default btn-gse view-details\" target=\"_blank\">VIEW DETAILS</a>\n" +
    "                    </span>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"mbg mbg-{{ data.mbgDays }} hidden-xs col-sm-5\" ng-show=\"data.mbgDays\"/>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/directives/templates/section-header.html',
    "<div class=\"section-header\">\n" +
    "    <div>\n" +
    "        <img ng-src=\"{{mobileHeaderImage}}\" class=\"visible-xs\" alt=\"{{altText}}\">\n" +
    "        <img ng-src=\"{{tabletHeaderImage}}\" class=\"visible-sm\" alt=\"{{altText}}\">\n" +
    "        <img ng-src=\"{{desktopHeaderImage}}\" class=\"visible-md visible-lg\" alt=\"{{altText}}\">\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
;angular.module('angularLazyImg', []);

angular.module('angularLazyImg').factory('LazyImgMagic', [
    '$window', '$rootScope', 'lazyImgConfig', 'lazyImgHelpers',
    function($window, $rootScope, lazyImgConfig, lazyImgHelpers){
        'use strict';

        var winDimensions, $win, images, isListening, options;
        var checkImagesT, saveWinOffsetT, containers;

        images = [];
        isListening = false;
        options = lazyImgConfig.getOptions();
        $win = angular.element($window);
        winDimensions = lazyImgHelpers.getWinDimensions();
        saveWinOffsetT = lazyImgHelpers.throttle(function(){
            winDimensions = lazyImgHelpers.getWinDimensions();
        }, 60);
        containers = [options.container || $win];

        function checkImages(){
            for(var i = images.length - 1; i >= 0; i--){
                var image = images[i];
                if(image && lazyImgHelpers.isElementInView(image.$elem[0], options.offset, winDimensions)){
                    loadImage(image);
                    images.splice(i, 1);
                }
            }
            if(images.length === 0){ stopListening(); }
        }

        checkImagesT = lazyImgHelpers.throttle(checkImages, 30);

        function listen(param){
            containers.forEach(function (container) {
                container[param]('scroll', checkImagesT);
                container[param]('touchmove', checkImagesT);
            });
            $win[param]('resize', checkImagesT);
            $win[param]('resize', saveWinOffsetT);
        }

        function startListening(){
            isListening = true;
            setTimeout(function(){
                checkImages();
                listen('on');
            }, 1);
        }

        function stopListening(){
            isListening = false;
            listen('off');
        }

        function removeImage(image){
            var index = images.indexOf(image);
            if(index !== -1) {
                images.splice(index, 1);
            }
        }

        function loadImage(photo){
            var img = new Image();
            img.onerror = function(){
                if(options.errorClass){
                    photo.$elem.addClass(options.errorClass);
                }
                $rootScope.$emit('lazyImg:error', photo);
                options.onError(photo);
            };
            img.onload = function(){
                setPhotoSrc(photo.$elem, photo.src);
                if(options.successClass){
                    photo.$elem.addClass(options.successClass);
                }
                $rootScope.$emit('lazyImg:success', photo);
                options.onSuccess(photo);
            };
            img.src = photo.src;
        }

        function setPhotoSrc($elem, src){
            if ($elem[0].nodeName.toLowerCase() === 'img') {
                $elem[0].src = src;
            } else {
                $elem.css('background-image', 'url("' + src + '")');
            }
        }

        // PHOTO
        function Photo($elem){
            this.$elem = $elem;
        }

        Photo.prototype.setSource = function(source){
            this.src = source;
            images.unshift(this);
            if (!isListening){ startListening(); }
        };

        Photo.prototype.removeImage = function(){
            removeImage(this);
            if(images.length === 0){ stopListening(); }
        };

        Photo.prototype.checkImages = function(){
            checkImages();
        };

        Photo.addContainer = function (container) {
            stopListening();
            containers.push(container);
            startListening();
        };

        Photo.removeContainer = function (container) {
            stopListening();
            containers.splice(containers.indexOf(container), 1);
            startListening();
        };

        return Photo;

    }
]);

angular.module('angularLazyImg').provider('lazyImgConfig', function() {
    'use strict';

    this.options = {
        offset       : 100,
        errorClass   : null,
        successClass : null,
        onError      : function(){},
        onSuccess    : function(){}
    };

    this.$get = function() {
        var options = this.options;
        return {
            getOptions: function() {
                return options;
            }
        };
    };

    this.setOptions = function(options) {
        angular.extend(this.options, options);
    };
});
angular.module('angularLazyImg').factory('lazyImgHelpers', [
    '$window', function($window){
        'use strict';

        function getWinDimensions(){
            return {
                height: $window.innerHeight,
                width: $window.innerWidth
            };
        }

        function isElementInView(elem, offset, winDimensions) {
            var rect = elem.getBoundingClientRect();
            var bottomline = winDimensions.height + offset;
            var isHidden = false;
            return !isHidden && (
                rect.left >= 0 && rect.right <= winDimensions.width + offset && (
                    rect.top >= 0 && rect.top <= bottomline ||
                    rect.bottom <= bottomline && rect.bottom >= 0 - offset
                )
            );
        }

        // http://remysharp.com/2010/07/21/throttling-function-calls/
        function throttle(fn, threshhold, scope) {
            var last, deferTimer;
            return function () {
                var context = scope || this;
                var now = +new Date(),
                    args = arguments;
                if (last && now < last + threshhold) {
                    clearTimeout(deferTimer);
                    deferTimer = setTimeout(function () {
                        last = now;
                        fn.apply(context, args);
                    }, threshhold);
                } else {
                    last = now;
                    fn.apply(context, args);
                }
            };
        }

        return {
            isElementInView: isElementInView,
            getWinDimensions: getWinDimensions,
            throttle: throttle
        };

    }
]);
angular.module('angularLazyImg')
    .directive('lazyImg', [
        '$rootScope', 'LazyImgMagic', function ($rootScope, LazyImgMagic) {
            'use strict';

            function link(scope, element, attributes) {
                var lazyImage = new LazyImgMagic(element);
                attributes.$observe('lazyImg', function (newSource) {
                    if (newSource) {
                        // in angular 1.3 it might be nice to remove observer here
                        lazyImage.setSource(newSource);
                    }
                });
                scope.$on('$destroy', function () {
                    lazyImage.removeImage();
                });
                $rootScope.$on('lazyImg.runCheck', function () {
                    lazyImage.checkImages();
                });
                $rootScope.$on('lazyImg:refresh', function () {
                    lazyImage.checkImages();
                });
            }

            return {
                link: link,
                restrict: 'A'
            };
        }
    ])
    .directive('lazyImgContainer', [
        'LazyImgMagic', function (LazyImgMagic) {
            'use strict';

            function link(scope, element) {
                LazyImgMagic.addContainer(element);
                scope.$on('$destroy', function () {
                    LazyImgMagic.removeContainer(element);
                });
            }

            return {
                link: link,
                restrict: 'A'
            };
        }
    ]);;'use strict';
angular.module('slick', []).directive('slick', [
    '$timeout',
    function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
                initOnload: '@',
                data: '=',
                currentIndex: '=',
                accessibility: '@',
                adaptiveHeight: '@',
                arrows: '@',
                asNavFor: '@',
                appendArrows: '@',
                appendDots: '@',
                autoplay: '@',
                autoplaySpeed: '@',
                centerMode: '@',
                centerPadding: '@',
                cssEase: '@',
                customPaging: '&',
                dots: '@',
                draggable: '@',
                easing: '@',
                fade: '@',
                focusOnSelect: '@',
                infinite: '@',
                initialSlide: '=',
                lazyLoad: '@',
                onBeforeChange: '&',
                onAfterChange: '&',
                onInit: '&',
                onReInit: '&',
                onSetPosition: '&',
                pauseOnHover: '@',
                pauseOnDotsHover: '@',
                previewMode: '@',
                previewPadding: '@',
                responsive: '=',
                rtl: '@',
                slide: '@',
                slidesToShow: '@',
                slidesToScroll: '@',
                speed: '@',
                swipe: '@',
                swipeToSlide: '@',
                touchMove: '@',
                touchThreshold: '@',
                useCSS: '@',
                variableWidth: '@',
                vertical: '@',
                prevArrow: '@',
                nextArrow: '@'
            },
            link: function (scope, element, attrs) {
                var destroySlick, initializeSlick, isInitialized;
                destroySlick = function () {
                    return $timeout(function () {
                        var slider;
                        slider = $(element);
                        slider.slick('unslick');
                        slider.find('.slick-list').remove();
                        return slider;
                    });
                };
                initializeSlick = function () {
                    return $timeout(function () {
                        var currentIndex, customPaging, slider;
                        slider = $(element);
                        if (scope.currentIndex != null) {
                            currentIndex = scope.currentIndex;
                        }
                        customPaging = function (slick, index) {
                            return scope.customPaging({
                                slick: slick,
                                index: index
                            });
                        };
                        slider.slick({
                            accessibility: scope.accessibility !== 'false',
                            adaptiveHeight: scope.adaptiveHeight === 'true',
                            arrows: scope.arrows !== 'false',
                            asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
                            appendArrows: scope.appendArrows ? $(scope.appendArrows) : $(element),
                            appendDots: scope.appendDots ? $(scope.appendDots) : $(element),
                            autoplay: scope.autoplay === 'true',
                            autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
                            centerMode: scope.centerMode === 'true',
                            centerPadding: scope.centerPadding || '50px',
                            cssEase: scope.cssEase || 'ease',
                            customPaging: attrs.customPaging ? customPaging : void 0,
                            dots: scope.dots === 'true',
                            draggable: scope.draggable !== 'false',
                            easing: scope.easing || 'linear',
                            fade: scope.fade === 'true',
                            focusOnSelect: scope.focusOnSelect === 'true',
                            infinite: scope.infinite !== 'false',
                            initialSlide: scope.initialSlide || 0,
                            lazyLoad: scope.lazyLoad || 'ondemand',
                            beforeChange: attrs.onBeforeChange ? scope.onBeforeChange : void 0,
                            onReInit: attrs.onReInit ? scope.onReInit : void 0,
                            onSetPosition: attrs.onSetPosition ? scope.onSetPosition : void 0,
                            pauseOnHover: scope.pauseOnHover !== 'false',
                            responsive: scope.responsive || void 0,
                            rtl: scope.rtl === 'true',
                            slide: scope.slide || 'div',
                            slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
                            slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
                            speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
                            swipe: scope.swipe !== 'false',
                            swipeToSlide: scope.swipeToSlide === 'true',
                            touchMove: scope.touchMove !== 'false',
                            touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
                            useCSS: scope.useCSS !== 'false',
                            variableWidth: scope.variableWidth === 'true',
                            vertical: scope.vertical === 'true',
                            prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0,
                            nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0
                        });
                        slider.on('init', function (sl) {
                            if (attrs.onInit) {
                                scope.onInit();
                            }
                            if (currentIndex != null) {
                                return sl.slideHandler(currentIndex);
                            }
                        });
                        slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                            if (scope.onAfterChange) {
                                scope.onAfterChange();
                            }
                            if (currentIndex != null) {
                                return scope.$apply(function () {
                                    currentIndex = currentSlide;
                                    return scope.currentIndex = currentSlide;
                                });
                            }
                        });
                        return scope.$watch('currentIndex', function (newVal, oldVal) {
                            if (currentIndex != null && newVal != null && newVal !== currentIndex) {
                                return slider.slick('slickGoTo', newVal);
                            }
                        });
                    });
                };
                if (scope.initOnload) {
                    isInitialized = false;
                    return scope.$watch('data', function (newVal, oldVal) {
                        if (newVal != null) {
                            if (isInitialized) {
                                destroySlick();
                            }
                            initializeSlick();
                            return isInitialized = true;
                        }
                    });
                } else {
                    return initializeSlick();
                }
            }
        };
    }
]);;/*global angular*/

(function() {
    'use strict';

    angular
        .module('angular-click-outside', [])
        .directive('clickOutside', ['$document', '$parse', '$timeout', clickOutside]);

    function clickOutside($document, $parse, $timeout) {
        return {
            restrict: 'A',
            link: function($scope, elem, attr) {

                // postpone linking to next digest to allow for unique id generation
                $timeout(function() {
                    var classList = (attr.outsideIfNot !== undefined) ? attr.outsideIfNot.replace(', ', ',').split(',') : [],
                        fn;

                    // add the elements id so it is not counted in the click listening
                    if (attr.id !== undefined) {
                        classList.push(attr.id);
                    }

                    function eventHandler(e) {

                        // check if our element already hidden and abort if so
                        if (angular.element(elem).hasClass("ng-hide")) {
                            return;
                        }

                        var i = 0,
                            element;

                        // if there is no click target, no point going on
                        if (!e || !e.target) {
                            return;
                        }
                        console.log('start');
                        console.log(classList);

                        // loop through the available elements, looking for classes in the class list that might match and so will eat
                        for (element = e.target; element; element = element.parentNode) {
                            var id = element.id,
                                classNames = element.className,
                                l = classList.length;

                            // Unwrap SVGAnimatedString classes
                            if (classNames && classNames.baseVal !== undefined) {
                                classNames = classNames.baseVal;
                            }

                            console.log('class names');
                            console.log(classNames);
                            // loop through the elements id's and classnames looking for exceptions
                            for (i = 0; i < l; i++) {
                                console.log('checking id "' + id + '"');
                                // check for exact matches on id's or classes, but only if they exist in the first place
                                if ((id !== undefined && id === classList[i]) || (classNames && classNames === classList[i])) {
                                    // now let's exit out as it is an element that has been defined as being ignored for clicking outside
                                    console.log('found it!');
                                    return;
                                }
                            }
                        }

                        console.log('didnt find a match');
                        // if we have got this far, then we are good to go with processing the command passed in via the click-outside attribute
                        $scope.$apply(function() {
                            fn = $parse(attr['clickOutside']);
                            fn($scope);
                        });
                    }

                    // if the devices has a touchscreen, listen for this event
                    if (_hasTouch()) {
                        $document.on('touchstart', eventHandler);
                    }

                    // still listen for the click event even if there is touch to cater for touchscreen laptops
                    $document.on('click', eventHandler);

                    // when the scope is destroyed, clean up the documents event handlers as we don't want it hanging around
                    $scope.$on('$destroy', function() {
                        if (_hasTouch()) {
                            $document.off('touchstart', eventHandler);
                        }

                        $document.off('click', eventHandler);
                    });

                    // private function to attempt to figure out if we are on a touch device
                    function _hasTouch() {
                        // works on most browsers, IE10/11 and Surface
                        return 'ontouchstart' in window || navigator.maxTouchPoints;
                    };
                });
            }
        };
    }
})();
;/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.5.9
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="left-arrow"></span>Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="right-arrow">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                previewMode: false,
                previewPadding: '50px',
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: false,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', null);
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, firstVisible;

        firstVisible = _.slideCount - _.options.slidesToShow;

        // check that the new breakpoint can actually accept the
        // "current slide" as the current slide, otherwise we need
        // to set it to the closest possible value.
        if ( !_.options.infinite ) {
            if ( _.slideCount <= _.options.slidesToShow ) {
                _.currentSlide = 0;
            } else if ( _.currentSlide > firstVisible ) {
                _.currentSlide = firstVisible;
            }
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }

            if (_.options.previewMode === true) {
                if (_.currentSlide >= _.slideCount - 1) {
                    _.$list.css({
                        padding: ('0px 0px 0px ' + _.options.previewPadding)
                    });
                }
                else {
                    _.$list.css({
                        padding: ('0px ' + _.options.previewPadding + ' 0px 0px')
                    });
                }
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
                .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                    .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                    $(this).attr({
                        'role': 'presentation',
                        'aria-selected': 'false',
                        'aria-controls': 'navigation' + _.instanceUid + i + '',
                        'id': 'slick-slide' + _.instanceUid + i + ''
                    });
                })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
