
export default defineNuxtRouteMiddleware((to, from) => {
const applicantStore = useApplicantStore()
const route = useRoute()
applicantStore.applicationBeforeSubmit(route.params.id as string)
console.log(applicantStore.dataOnSubmitApplication);

  if (!applicantStore.dataOnSubmitApplication) {
    return navigateTo("/", {replace: true});
  }
})