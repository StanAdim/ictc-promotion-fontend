<script setup>
useHead({
  title: "Application Submission",
});
const router = useRoute();
const id = router.params.id;
let application = ref({})
const openPersonal = ref(false);
const openBusiness = ref(true);
const openCompetition = ref(true);
const openProjection = ref(true);

function toogleAccordion() {
  openBusiness.value = true;
  openCompetition.value = true;
  openProjection.value = true;
  return (openPersonal.value = false);
}
function toogleAccordion2() {
  openPersonal.value = true;
  openCompetition.value = true;
  openProjection.value = true;
  return (openBusiness.value = false);
}
function toogleAccordion3() {
  openPersonal.value = true;
  openBusiness.value = true;
  openProjection.value = true;
  return (openCompetition.value = false);
}
function toogleAccordion4() {
  openPersonal.value = true;
  openCompetition.value = true;
  openBusiness.value = true;
  return (openProjection.value = false);
}
const applicantStore = useApplicantStore();
await applicantStore.applicationBeforeSubmit(id);
application = await applicantStore.OnSubmitApplication;
console.log(application);
</script>
<template>
  <section class="dosoft-faq-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title mb-20 text-center">
            <h2>
              <i class="fa-regular fa-face-smile"></i>
              {{ application?.data.fullName }} Application Overview
              <i class="fa-regular fa-face-smile"></i>
            </h2>
            <div class="section-devider"></div>
            <p>Kindly, Review your informantion before you submit</p>
          </div>
        </div>
      </div>

      <div class="row m-auto mb-4 bg-cyan-100">
        <div class="col-lg-10 offset-lg-2">
          <div class="md:flex py-2">
            <ul
              class="flex-column space-y space-y-4 text-sm font-medium dark:text-lime-900-400 md:me-4 mb-4 md:mb-0"
            >
              <li @click.prevent="toogleAccordion()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                >
                  Personal Profile
                </a>
              </li>
              <li @click.prevent="toogleAccordion2()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Business Profile
                </a>
              </li>
              <li @click.prevent="toogleAccordion3()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Competitors Status
                </a>
              </li>
              <li @click.prevent="toogleAccordion4()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Business Projection
                </a>
              </li>
            </ul>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openPersonal }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Personal Information
              </h3>
              <p class=""><span class="deadline">Name: </span>{{ application?.data.fullName }}</p>
              <p class=""><span class="deadline">Email: </span>{{ application?.data.email }} - {{ application?.data.nidaNumber }}</p>
              <p class=""><span class="deadline">Phone: </span>{{ application?.data.phoneNumber }}</p>
              <p class=""><span class="deadline">Education level: </span>{{ application?.data.educationLevel }}</p>
            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openBusiness }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Business Profile
              </h3>
              <p class="mb-2">
                This is some placeholder content the Profile tab's associated
                content, clicking another tab will toggle the visibility of this
                one for the next.
              </p>
              <p>
                The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openCompetition }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Competitors Information
              </h3>
              <p class="mb-2">
                This is some placeholder content the Profile tab's associated
                content, clicking another tab will toggle the visibility of this
                one for the next.
              </p>
              <p>
                The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openProjection }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Business Projections
              </h3>
              <p class="mb-2">
                This is some placeholder content the Profile tab's associated
                content, clicking another tab will toggle the visibility of this
                one for the next.
              </p>
              <p>
                The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide {
  @apply hidden;
}
</style>