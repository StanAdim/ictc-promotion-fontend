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
                    <div class="col-lg-8 offset-lg-2">
                    <div class="section-title text-center">
                        <h1>SIDO INCUBATION PROGRAMME</h1>
                        <div class="section-devider"></div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="hero-caption">
                            <div class="hero-caption-full pt-100">
                                <h2>Innovative Ideas Support</h2>
                                <h2>Fursa kwa mawazo bunifu</h2>
                                <!-- <p>Dar es salaam</p> -->
                                <p>SIDO Dar es salaam Regional Office in partnership with ICT Commission is pleased to announce SIDO Incubation programme.</p>
                                <p><span class="deadline">Benefits: </span></p>
                                <p><i class="fa-regular fa-square-check deadline mr-2"></i>Free Working Space</p>
                                <p><i class="fa-regular fa-square-check deadline mr-2"></i>Coaching and mentorship</p>
                                <p><i class="fa-regular fa-square-check deadline mr-2"></i>Access to financial services</p>
                                <p><i class="fa-regular fa-square-check deadline mr-2"></i>Networking environment</p>
                                <p>Online Application has been extended to <span class="deadline">April 30th, 2024</span></p>
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
                            <img src="/assets/img/seedling3.png" alt="hero-img">
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
        <programme-details />
        <!-- End About Section -->

    </main>
    <!-- End Main Area -->


    <div class="scroll-area">
        <i class="fa fa-angle-up"></i>
    </div>
</template>

<style scoped></style>
