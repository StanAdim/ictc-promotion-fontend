<script lang="ts" setup>
useHead({
  title: "ICTC - SIDO Incubation Programme",
});
</script>

<template>
  <section class="hero-area">
    <div class="shap-1"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-caption">
            <div class="hero-caption-full pt-100">
              <h2>SIDO Incubation Programme</h2>
              <div class="partner-logo">
                <nuxt-link to="/">
                  <img src="/logo/sido.png" alt="" />
                </nuxt-link>
              </div>
              <p>Application for individuals with Innovative Ideas to participate in SIDO incubation Program.</p>
              <div class="hero-btn mt-30">
                <nuxt-link to="/sido/applicant-profile" class="button-1"
                  >Start Now</nuxt-link
                >
                <!-- <a class="button-1" href="#">Get Started</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-img">
            <img src="assets/img/banner.svg" alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Start Features Box Area -->
  <section class="awesome-features pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title mb-50 text-center">
            <h2>Programme Features</h2>
            <div class="section-devider"></div>
            <p>
              Donec consectetur est gravida eros porta congue. Vivamus eleifend,
              tortor vel porta eleifend, odio orci dapibus sapien, nec feugiat
              enim nisi non lorem.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Single -->
        <div class="col-lg-4">
          <div class="awesome-features-item mb-30">
            <div class="awesome-features-item-full">
              <div class="icon">
                <i class="fa-solid fa-bars-staggered"></i>
              </div>
              <div class="content">
                <h3>Custom options</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Single -->
        <div class="col-lg-4">
          <div class="awesome-features-item mb-30">
            <div class="awesome-features-item-full">
              <div class="icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div class="content">
                <h3>Secure Integration</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Single -->
        <div class="col-lg-4">
          <div class="awesome-features-item mb-30">
            <div class="awesome-features-item-full">
              <div class="icon">
                <i class="fa-solid fa-circle-up"></i>
              </div>
              <div class="content">
                <h3>Always Up-to-date</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.partner-logo {
  height: 160px;
  width: 200px;
  margin-bottom: 1rem;
}
</style>
