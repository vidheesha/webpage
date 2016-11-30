<div class="container-fluid" ng-controller="bod.controller">  
    <div class="row">
        <div class="col-xs-12 interactive-carousel-container">
            <interactive-carousel id="bod">
                <section-header class="bod-section-header"
                                desktop-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/new-on-demand-logo.png"
                                tablet-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/t-on-demand-new-logo.png"
                                mobile-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/m-on-demand-new-logo.png"
                                alt-text="Beachbody On Demand Header"></section-header>
                <div class="responsive-image-wrapper section-slider">
                    <bb-slider slider-data="vm.sliderData" section="bod"></bb-slider>
                </div>
                <carousel section="bod" settings="vm.carouselSettings" slot="5"></carousel>
            </interactive-carousel>
        </div>
    </div>
</div>
