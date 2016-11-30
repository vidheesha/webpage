<div class="container-fluid" ng-controller="apparel.controller">
    <div class="row">
        <div class="col-xs-12 interactive-carousel-container">
            <interactive-carousel id="apparel">
                <div class="apparel-upper-section">
                    <section-header desktop-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/heading_apparel.png"
                                    tablet-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/t_heading_apparel.png"
                                    mobile-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/m_heading_apparel.png"
                                    alt-text="Apparel Header"></section-header>
                    <!--Image that overlaps section header-->
                    <div class="responsive-image-wrapper section-slider">
                        <bb-slider section="apparel" slider-data="vm.sliderData"></bb-slider>
                    </div>
                </div>
                <carousel section="apparel" settings="vm.carouselSettings" slot="6"></carousel>
            </interactive-carousel>
        </div>
    </div>
</div>
