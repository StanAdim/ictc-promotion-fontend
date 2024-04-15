<script  setup>
useHead({
  title:'Business Profile'
})
definePageMeta({
    middleware: 'code-checker'
})
const route = useRoute()
const formData = ref({
    action : route.params.action,
    applicationCode: route.params.id,
    background:'',
    marketProblem:'',
    marketBase:'',
    prototypeDescription:'',
    marketSize:'',
})
const hasError = ref(false);
const validationError = ref(null);
const businessProfile = useBusinessStore()
const appData = useAppDataStore()
// handle the form
const businessStore = useBusinessStore()
if(route.params.action == 'update'){
    const {data} = await businessStore.fetchBusinessData(route.params.id);
    if(data.value){
        formData.value = businessStore.retrivedBusinessProfile?.data 
        formData.value.id = businessStore.retrivedBusinessProfile?.data.id
        formData.value.action = route.params.action
    }
}
const  handleForm = async ()=> {
    showSaveBtn.value = false;
    await businessProfile.createBusinessProfile(formData.value)
    if(businessProfile.saveError){
        validationError.value = businessProfile.saveError
        hasError.value = true
    }
    else{
        validationError.value = null
        hasError.value = false;
        //reset Values
        // formData.value = null
    }
}
const showSaveBtn = ref(false)
const verifyPlease = ()=>{
    showSaveBtn.value = true;
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
        <progress-bar stage1="complete" stage2="current" />
        <loading-bars v-if="appData.isloading" />
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Applicant Business Profile <i class="fa-solid fa-network-wired"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="flex justify-center mx-auto my-4 text-xl bg-lime-300 py-2 px-1">
                            <usable-paragraph :key-name=" `${appData.sidoApplicationCode} ` " data="Please Note: Your Application Code" :has-hr="false" />
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="background">Applicant Background</label>
                                <textarea v-model="(formData.background  )" id="background" 
                                placeholder="Brief: Tell us about your Background"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="marketProblem">The Market|Community Problem your business is solving</label>
                                <textarea v-model="formData.marketProblem" id="marketProblem" 
                                placeholder="Brief: What problem in the market/community is your business solving"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="marketBase">The target customer|market and why?</label>
                                <textarea v-model="formData.marketBase" id="marketBase" 
                                placeholder="Brief: Who is your current customers/markets or your target customer/market and why"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="prototypeDescription">Brief on Model or Prototype</label>
                                <textarea v-model="formData.prototypeDescription" id="prototypeDescription" 
                                placeholder="Illustrate the model or prototype in place. The Solution with all its features/ description and its current status. The prototype current status (include all images and links)."></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="marketSize">Brief on Target Market Size</label>
                                <textarea v-model="formData.marketSize" id="marketSize" 
                                placeholder="Tell us about your market size and the targeted market"></textarea>
                            </div>
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
