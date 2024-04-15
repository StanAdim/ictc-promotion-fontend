<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
    <NuxtLayout>
        <div class="row my-3">
            <section class="breadcrumb-area image-bg "
                >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb-content">
                                <h3 class="breadcrumb-title">Error!</h3>
                                <div class="breadcrumb-list">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                <div class="error-content text-center">
                    <!-- <img src="assets/img/error.png" alt="error"> -->
                    <h4 class="deadline">Oops, {{ error.message }}</h4>
                    <div class="error-btn mt-30">
                        <a class="button-2" @click.prevent="handleError()">Go to Home</a>
                    </div>
                </div>
            </div>
                </div>
            </section>

        </div>

    </NuxtLayout>
</template>
<style scoped>
.image-bg{
    background-image: url('/assets/img/breadcrumb-bg.jpg');
    padding:10lvh;
}
</style>