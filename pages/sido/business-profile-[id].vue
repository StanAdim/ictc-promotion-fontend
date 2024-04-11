<script  setup>

definePageMeta({
  layout: 'default',
}) 

useHead({
  title:'SIDO Incubation Programme'
})
const route = useRoute()
const formData = ref({
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
const  handleForm = async ()=> {
    await businessProfile.createBusinessProfile(formData.value)
    if(businessProfile.saveError){
        validationError.value = businessProfile.saveError
        hasError.value = true
    }
    else{
        validationError.value = null
        hasError.value = false;
        // formData.value = null
    }
//   console.log(formData.value)
}
</script>

<template>
<!-- Start  Form -->
<section class="contact-area pt-100 pb-100">
    <toasting-tip message="Tool tip message"/>
    <div class="container">
      <progress-bar />
      <loading-bars v-if="appData.isloading" />
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Applicant Business Profile <i class="fa-solid fa-network-wired"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-12">
                                <label for="background">Applicant Background</label>
                                <textarea v-model="formData.background" id="background" 
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
                            <div class="col-12">
                                <button class="button-1" type="submit">Save and Continue</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Contact Form Sidebar -->
            <div class="col-lg-3">
              <circular-progress />
                <div class="contact-detail">
                  <template v-if="hasError">
                    <h2>Errors</h2>
                    
                      <p class="ajax-response" v-for="error in validationError" 
                      :key="error">{{error[0]}}</p>
                    </template>
                    <h2>Our contact details</h2>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> -->
                    <div class="contact-detail-list">
                        <ul>
                            <li>
                                <span>Phone</span>
                                <small>+255 738 424 217</small><br>
                                <small>+255 738 424 217</small>
                            </li>
                            <li>
                                <span>Email</span>
                                <small>ictsupport@ictc.go.tz</small><br>
                                <small>info@ictc.go.tz</small>
                            </li>


                        </ul>
                    </div>
                    <!-- Follow area -->
                    <ul class="social-link">
                        <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Form Section -->
</template>

<style scoped></style>
