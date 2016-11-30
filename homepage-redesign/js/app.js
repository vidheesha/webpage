angular.module('bb-homepage', ['ui.bootstrap', 'angularLazyImg', 'slick', 'ngAnimate', 'ngSanitize', 'ngTouch', 'angular-click-outside'])
.config(['$compileProvider', function ($compileProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);
}]);
