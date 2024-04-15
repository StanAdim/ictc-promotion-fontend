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
        <section class="about-area  section-bg">
            <div class="container">
                <div class="row my-2">
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="assets/img/about.svg" alt="about">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-info" id="programe-info">
                            <h5>About This Programme</h5>
                            <h3>Eligibility:</h3>
                            <ul>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Target sectors:</span>
                                    The project must be on engineering, agro-processing or ICT , Blue Economy or any other sector
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Innovativeness:</span>
                                    The project must be original, new and an advancement to any of the solutions readily-available in the marketplace or industry.
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Readiness:</span>
                                    The project must be supported by a working model/ prototype (Full con- ceptual ideas will not be considered).
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Solving a real problem:</span>
                                     Idea must be offering a smarter or cheaper or upgraded or 
                                    better solution to a real market problem than the existing solutions or solving a future problem or need.
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Youth Entrepreneur-led:</span>
                                     The project must be created, conceptualized and led by young entrepreneurs. He/she should have the needed skills as well as 
                                    dedication and commitment in order to be incubated. Applicant must be willing to dedicate his/her full time/efforts to lead the project. 
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline"> Commercialization Potential:</span>
                                    The project must be commercializable and supported by a clear vision on how to penetrate the target market(s) and how it shall grow from there.
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Scalability:</span>
                                    The project should have the potential to grow among significant market sectors and within multiple verticals or layers
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Status:</span>
                                    Either entrepreneurs with models/prototypes proof of concept or start-ups that have been in business in less than one year can apply.
                                </li>
                                <li><i class="fa-regular fa-square-check"></i><span class="deadline">Dedication:</span>
                                    The project/start-up cannot be incubated in another incubator.
                                </li>
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
