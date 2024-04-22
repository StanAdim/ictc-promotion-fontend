<script setup>
const route = useRoute()
useHead({
    title: 'Congratulations - Applicant'
})
const appData = useAppDataStore()
</script>
<template>
    <!-- Start  Form -->
<section class="contact-area">
    <div class="container justify-content-center">
        <div class="flex justify-center" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    
                    <h2 class=" uppercase">CONGRATULATIONS</h2>
                    <p class="deadline text-center">You application submitted successfull</p>
                    <div class="flex justify-center">
                        <img width="350px" height="350px" src="/assets/img/icon/congratulation.png" alt="icon/congrats">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Form Section -->
</template>
