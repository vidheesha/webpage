(function (angular) {

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

} (angular));