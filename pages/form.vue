<script lang="ts" setup>
const formData = {
  name: ''
}
const hasError = ref(true);
// handle the form
const handleForm = ()=> {
  console.log('Hi', formData)
}
</script>

<template>
<!-- Start  Form -->
<section class="contact-area pt-100 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="contact-form">
                    <h2>Get in touch</h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-6">
                              <label for="">Enter</label>
                                <input type="text" v-model="formData.name" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                              <label for="">Enter</label>
                                <input type="email" v-model="formData.name" placeholder="Your Email">
                            </div>
                            <div class="col-md-12">
                              <label for="">Enter</label>
                                <input type="text" v-model="formData.name" placeholder="Your Subjects">
                            </div>
                            <div class="col-md-12">
                              <label for="">Enter</label>
                              <select v-model="formData.name" id="">
                                <option value="">Hello</option>
                                <option value="">Change</option>
                              </select>
                            </div>
                            <div class="col-md-12">
                              <label for="">Enter</label>
                                <textarea v-model="formData.name" placeholder="Write Your Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="button-1" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                    <template v-if="hasError">
                      <p class="ajax-response">Hello</p>
                    </template>
                </div>
            </div>
            <!-- Contact Form Sidebar -->
            <div class="col-lg-4">
                <div class="contact-detail">
                    <h2>Our contact details</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <div class="contact-detail-list">
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>address</span>
                                <small>112 Strina, lite House</small>
                            </li>
                            <li>
                                <i class="fas fa-phone-volume"></i>
                                <span>phone</span>
                                <a href="#">+00 132 369</a>
                                <a href="#">+88 164 518</a>
                            </li>
                            <li>
                                <i class="far fa-envelope"></i>
                                <span>email</span>
                                <a href="#">example@gmail.com</a>
                                <a href="#">info@example.com</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Follow area -->
                    <ul class="social-link">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Form Section -->
</template>

<style scoped></style>
