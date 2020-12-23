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
                                    <div class="banner-element-content">
                                        <div class="banner-element-title-container">
                                            <div class="banner-element-title">The Moonshae Isles</div>
                                        </div>
                                        <div class="banner-element-body-container">
                                            <div class="banner-element-body">
                                                A series of rugged and harsh islands located off the western coast of Faerûn
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </slide>
                            <slide key="slide-222-222-222">
                                <a class="banner-element"
                                   style="background-image: url('https://picsum.photos/id/1036/1200/400');">
                                    <div class="banner-element-content">
                                        <div class="banner-element-title-container">
                                            <div class="banner-element-title">The Nelanther Isles</div>
                                        </div>
                                        <div class="banner-element-body-container">
                                            <div class="banner-element-body">An island of predominantly non-human pirates that raided the Sword Coast
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </slide>
                            <slide key="slide-333-333-333">
                                <a class="banner-element"
                                   style="background-image: url('https://picsum.photos/id/1040/1200/400');">
                                    <div class="banner-element-content">
                                        <div class="banner-element-title-container">
                                            <div class="banner-element-title">Nimbral</div>
                                        </div>
                                        <div class="banner-element-body-container">
                                            <div class="banner-element-body">The mysterious, picturesque island nation of famed wizards and mounted aerial knights.</div>
                                        </div>
                                    </div>
                                </a>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>