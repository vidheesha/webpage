<div class="container-fluid" ng-controller="successstories.controller">
    <div class="row">
        <div class="col-xs-12 interactive-carousel-container">
            <interactive-carousel id="successStories">
                <section-header desktop-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/heading_success_stories.png"
                                tablet-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/t_heading_success_stories.png"
                                mobile-header-image="//img1.beachbodyimages.com/beachbody/image/upload/bbweb/homepage/m_heading_success_stories.png"
                                alt-text="Success Stories Header"></section-header>

                <div class="responsive-image-wrapper section-slider">
                    <bb-slider section="successStories" slider-data="vm.sliderData"></bb-slider>
                </div>
                <carousel section="successStories" settings="vm.carouselSettings" slot="4"></carousel>
            </interactive-carousel>
        </div>
    </div>
</div>




