<script lang="ts" setup>
definePageMeta({
  layout: 'default',
}) 
const appData = useAppDataStore()
</script>

<template>
    <!-- Start Main Area -->
    <main class="dosoft-main">
        <!-- Start Hero Area -->
        <section class="hero-area">
            <div class="shap-1"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="hero-caption">
                            <div class="hero-caption-full pt-100">
                                <h2>ICT INNOVATIVE IDEAS</h2>
                                <h2>TEHAMA MAWAZO BUNIFU</h2>
                                <!-- <p>Dar es salaam</p> -->
                                <p>ICT Commission partners with SIDO Incubation programme toward promoting ICT innovations</p>
                                <p>Application deadline <span class="deadline">April 30th, 2024</span></p>
                                  <div class="hero-btn mt-30">
                                    <nuxt-link to="/sido/incubation-programe" class="button-1">Apply</nuxt-link>
                                    <!-- <a class="button-1" href="#">Get Started</a> -->
                                    <a class="button-2" href="#programe-info">Eligibility</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-img">
                            <img src="assets/img/banner-image-2.png" alt="hero-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Hero Area -->
        <!-- StaArea -->
       <mini-cards />
        <!-- End Area -->
        <!-- Start About Section -->
        <section class="about-area pt-100 pb-100 section-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="assets/img/about.svg" alt="about">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-info" id="programe-info">
                            <h5>About This Programme</h5>
                            <h3>Benefits:</h3>
                            <p>Access to Working Spaces, Networking enviroment, Access to Financial linkages, Coaching and mentorship</p>
                            <h3>Eligibility:</h3>
                            <ul>
                                <li><i class="fa-regular fa-square-check"></i>Must be a Tanzanian aged 18 and above</li>
                                <li><i class="fa-regular fa-square-check"></i>Proposal not exceeding 3 pages (English/Swahili)</li>
                                <li><i class="fa-regular fa-square-check"></i>Innovator must have started (Prototype)</li>
                                <li><i class="fa-regular fa-square-check"></i>Areas of innovation (Value addition to products, technology, scancode Blue Economy)</li>
                            </ul>
                            <div class="about-btn mt-30">
                                <a class="button-2" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End About Section -->

        <!-- Start Footer Area -->

        <!-- End Footer Area -->
    </main>
    <!-- End Main Area -->


    <div class="scroll-area">
        <i class="fa fa-angle-up"></i>
    </div>
</template>

<style scoped></style>
