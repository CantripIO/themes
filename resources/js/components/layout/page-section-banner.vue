<template>
    <div class="page-section-container page-section-banner-container">
        <div class="page-section page-section-banner">
            <div class="page-section-body page-section-banner-body">
                <div class="page-section-display page-section-display-banner">
                    <div class="banner-container">
                        <carousel v-bind="{
                    autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 6000,
                    perPage: 1,
                    paginationEnabled: true,
                    loop: true
                }">
                            <slide key="slide-111-111-111">
                                <a class="banner-element"
                                   style="background-image: url('https://picsum.photos/id/1018/1200/400');">

                                </a>
                            </slide>
                            <slide key="slide-222-222-222">
                                <a class="banner-element block"
                                   style="background-image: url('https://picsum.photos/id/1036/1200/400');">

                                </a>
                            </slide>
                            <slide key="slide-333-333-333">
                                <a class="banner-element block"
                                   style="background-image: url('https://picsum.photos/id/1040/1200/400');">

                                </a>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>