(function(angular) {

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
