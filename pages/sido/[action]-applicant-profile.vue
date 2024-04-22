<script  setup>

definePageMeta({
  layout: 'default',
}) 
useHead({
  title:'Applicant profile'
})
const route = useRoute() 
const formData = ref({
  action: route.params.action,
  fullName: '',
  birthYear: 'none',
  nidaNumber: '',
  educationLevel: 'none',
  BusinessRegStatus: '0',
  phoneNumber: '',
  email: '',
  businessSector: 'none',
  businessName: '',
  businessLocation: '',
})
const hasError = ref(false);
const validationError = ref(null);
const appData = useAppDataStore()
const applicantStore = useApplicantStore()

// handle the form
const  handleForm = async ()=> {
  formData.value.action = route.params.action
  showSaveBtn.value = false;
   await applicantStore.createApplicantProfile(formData.value)
  if(applicantStore.saveError){
    hasError.value = true
    validationError.value = applicantStore.saveError
    console.log(validationError.value);
  }
  else{
    validationError.value = null
    hasError.value = false;
    // formData.value = null
  }
}
const showSaveBtn = ref(false)
const verifyPlease = ()=>{  showSaveBtn.value = true}

// EDIT profile Controllers
if(route.params.action == 'update' &&  applicantStore.applicantProfile){
  formData.value = applicantStore.applicantProfile?.data
  formData.value.action = route.params.action
}
</script>

<template>
<!-- Start  Form -->
<div class="absolute top-10 left-5">
  <template v-if="hasError">
    <toasting-tip :message=" error[0]" v-for="error in validationError" :key="error" :is-failed="hasError" :is-succeed="!hasError"/>
  </template>
</div>
<section class="contact-area">
  <div class="container">
    <progress-bar stage1="current" />
        <div class="flex justify-center" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Applicant Personal Profile <i class="fa-solid fa-address-card"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-6">
                              <label for="fullName">Applicant Full Name </label>
                                <input type="text" 
                                v-model="formData.fullName" id="fullName" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                              <label for="birthYear">Birth Year</label>
                              <select v-model="formData.birthYear" id="birthYear">
                                <option value="none" disabled>Choose birth Year</option>
                                <option v-for="year in appData.getYearsArray" 
                                :key="year">{{year}}</option>
                              </select>                            
                            </div>
                            <div class="col-md-6">
                              <label for="nidaNumber">NIDA Number</label>
                                <input type="text" id="nidaNumber"
                                v-model="formData.nidaNumber" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                              <label for="educationLevel">Education Level</label>
                              <select v-model="formData.educationLevel" id="educationLevel">
                                <option value="none" disabled>Choose Education Level</option>
                                <option v-for="level in appData.eduLevels" :key="level">{{level}}</option>
                              </select>                            
                            </div>
                            <div class="col-md-6">
                                <label for="phoneNumber">Phone Number</label>
                                <input type="text" id="phoneNumber" :readonly="route.params.action == 'update'"
                                 v-model="formData.phoneNumber" placeholder="+255..">
                            </div>
                            <div class="col-md-6">
                                <label for="email">E-mail</label>
                                <input type="text" id="email" :readonly="route.params.action == 'update'" 
                                v-model="formData.email" placeholder="Your Email">
                            </div>
                            <div class="col-md-12">
                              <label for="BusinessRegStatus">Business Registration Status</label>
                              <select v-model="formData.BusinessRegStatus" id="BusinessRegStatus">
                                <option value="0">NO</option>
                                <option value="1">YES</option>
                              </select>
                            </div>
                            <template v-if="formData.BusinessRegStatus === '1' ">
                              <div class="col-md-4">
                                <label for="businessName">Business Name</label>
                                <input type="text" id="businessName"
                                v-model="formData.businessName" placeholder="Business Name">
                              </div>
                              <div class="col-md-4">
                                <label for="businessLocation">Business Location</label>
                                <input type="text" id="businessLocation"
                                v-model="formData.businessLocation" placeholder="Business Location">
                              </div> 
                              <div class="col-md-4">
                                  <label for="businessSector">Business Sector</label>
                                  <select v-model="formData.businessSector" id="businessSector">
                                    <option value="none" disabled>Choose Economic Sector</option>
                                    <option v-for="sector in appData.economySector" :key="sector">{{sector}}</option>
                                  </select>                                    
                              </div>
                            </template>
                            <div class="col-12" >
                                <button class=" bg-blue-400  py-2 text-xl hover:text-white hover:bg-blue-500 
                                hover:border round px-20 text-slate-100" @click.prevent="verifyPlease" v-if="!showSaveBtn">Save</button>
                                <div class=" bg-slate-50 p-3 m-2 rounded" v-if="showSaveBtn">
                                        <span class=" bg-red-200 text-xl py-2 px-3 rounded-md">Confirm your Details<i class="fa-solid fa-triangle-exclamation"></i></span>
                                    <button class="button-1" type="submit">
                                      <span v-if="route.params.action == 'create'">Save and Continue</span>
                                      <span v-if="route.params.action == 'update'">Update and Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Contact Form Sidebar -->
            <div class="col-lg-3">
                <contact-card />
            </div>
        </div>
    </div>
</section>
<!-- End Form Section -->
</template>

<style scoped></style>
