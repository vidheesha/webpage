angular.module('bb-homepage').run(['$templateCache', function($templateCache) {
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
