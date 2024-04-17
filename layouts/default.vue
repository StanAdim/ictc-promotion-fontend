<script lang="ts" setup>
const appData = useAppDataStore()


</script>

<template>
  <div class=" h-fit bg-gray-50">
    <!-- Layout: default -->
    <page-header />
    <usable-custom-spin-load v-if="appData.isloading" />
    <div class="absolute top-20 left-1/4 h-5" v-show="appData.showMessage">
      <toasting-tip :is-succeed="true" :message="appData.notificationMessage"/>
    </div>
    <slot v-if="!appData.isloading"  />
  </div>
  <page-footer/>
</template>

<style >
@import url('~/assets/css/bootstrap.min.css');
@import url('~/assets/css/style.css');
@import url('~/assets/css/fontawesome.all.min.css');
@import url('~/assets/css/normalize.css');
@import url('~/assets/css/owl.carousel.min.css');
@import url('~/assets/css/owl.theme.default.min.css');
@import url('~/assets/css/responsive.css');
@import url('~/assets/css/custom.style.css');
</style>
