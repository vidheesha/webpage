(function(angular) {

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
});