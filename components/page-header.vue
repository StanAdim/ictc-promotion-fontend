<script lang="ts" setup>

</script>

<template>
    <!-- Start Header Area -->
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <h2>
                            <a href="index.html">ICTC | SIDO</a>
                            <a href="index.html"> </a>
                        </h2>
                    </div>
                    <div class="mobile-toggle">
                        <a class="mobile-menu-open" href="javascript:;"><i class="fas fa-bars"></i></a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="menu">
                        <nav>
                            <ul>
                                <li><a href="#">Page</a>
                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">Services</a>
                                    <ul>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services-single.html">Services Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-list.html">Blog List</a></li>
                                        <li><a href="single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Mobile Menu -->
    <!--Mobile Nav Menu-->
    <section class="mobile-menu-section">
        <div class="d-lg-none">
            <div class="mobile-off-canvas-menu">
                <div class="mobile-canvas-close close-mobile-menu">
                    <h4>Menu <i class="fas fa-arrow-left"></i></h4>
                </div>
                <div class="mobile-main-menu">
                    <ul class="menu-content">
                        <li class="menu-item-has-children active"><a href="#">Home </a></li>
                        <li class="menu-item-has-children"><a href="#">Page <i class="fal fa-chevron-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="pricing2.html">Pricing Style 2</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="404.html">404 Error</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy </a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li class="menu-item-has-children"><a href="services.html">Services <i class="fal fa-chevron-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="services.html">Services</a></li>
                                <li><a href="services-single.html">Services Single</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="blog.html">Blog <i class="fal fa-chevron-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="blog.html">Blog Right Sidebar</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-list.html">Blog List</a></li>
                                <li><a href="single.html">Blog Single</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <!-- mobile main menu -->
            </div>
            <!-- mobile off canvas menu -->
            <div class="overlay"></div>
        </div>
        <!-- mobile nav -->
    </section>
    <!-- Mobile Menu -->
    <!-- End Header Area -->
</template>

<style scoped></style>
