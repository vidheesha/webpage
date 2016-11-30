<div class="container-fluid" ng-controller="nutrition.controller">
    <div class="row">
        <div class="col-xs-12 interactive-carousel-container">
            <interactive-carousel id="nutrition">
                <section-header desktop-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/heading_nutrition.png"
                                tablet-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/t_heading_nutrition.png"
                                mobile-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/m_heading_nutrition.png"
                                alt-text="Nutrition Header"></section-header>
                <div class="responsive-image-wrapper section-slider">
                    <bb-slider section="nutrition" slider-data="vm.sliderData"></bb-slider>
                </div>
                <carousel section="nutrition" settings="vm.carouselSettings" slot="2"></carousel>
            </interactive-carousel>
        </div>
    </div>
</div>
