<script setup>
useHead({
  title: "Application Submission",
});
const route = useRoute();
const isPersonOpen = ref(true);

function toogleAccordion(option){
    return (option.value = !option.value)
}
</script>
<template>
  <section class="dosoft-faq-section mt-4 pt-100 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title mb-50 text-center">
            <h2>
              <i class="fa-regular fa-face-smile"></i>Application Overview
              <i class="fa-regular fa-face-smile"></i>
            </h2>
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
        <div class="col-lg-9 offset-lg-2">
          <div class="dosoft-faq-full">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2
                  class="accordion-header text-center text-capitalize"
                  id="headingOne"
                  @click.prevent="toogleAccordion(isPersonOpen)"
                >
                  <a
                    class="accordion-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    href="#"
                    >Applicant Personal Profile {{ isPersonOpen }}</a
                  >
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  :class="{ show: isPersonOpen }"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                  style=""
                >
                  <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">An item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                      <li class="list-group-item">And a fifth one</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>