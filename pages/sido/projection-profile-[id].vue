<script setup>
const route = useRoute()
useHead({
    title: 'Business Projection profile'
})
const formData = ref({
    applicationCode: route.params.id,
    expectedRevenue:'',
    machineEquipment:'',
    workingCapital:'',
    investmentPlan:'',
    financingSource:'',
    supportNeeded:'',
    challenges:'',
})
const hasError = ref(false);
const validationError = ref(null);
const businessProjection = useProjectionStore()
const appData = useAppDataStore()
// handle the form
const  handleForm = async ()=> {
    await businessProjection.createProjectionDetail(formData.value)
    if(businessProjection.saveError){
        validationError.value = businessProjection.saveError
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
                    <h2>Business Projections <i class="fa-solid fa-arrow-up-right-dots"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="expectedRevenue">How much will your business generate</label>
                                <input type="number" 
                                v-model="formData.expectedRevenue" id="expectedRevenue" placeholder="Revenue Projection">
                            </div>
                            <div class="col-md-6">
                                <label for="workingCapital">The current working capital invested</label>
                                <input type="text" 
                                v-model="formData.workingCapital" id="workingCapital" placeholder="The working capital invested and value">
                            </div>

                            <div class="col-md-12">
                                <label for="investmentPlan">The future investment plan</label>
                                <textarea v-model="formData.investmentPlan" id="investmentPlan" 
                                placeholder="Brief: How much do you plan to invest"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="financingSource">The financing sources</label>
                                <textarea v-model="formData.financingSource" id="financingSource" 
                                placeholder="Brief: What will be the financing sources and how much you plan to source"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="supportNeeded">The support needed</label>
                                <textarea v-model="formData.supportNeeded" id="supportNeeded" 
                                placeholder="Brief: What support do you envisage you will need?"></textarea>
                            </div>
                            <div class="col-md-6">
                                <label for="machineEquipment">Business Tools <span class="addNewInput">Add Equipment <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.machineEquipment" id="machineEquipment" placeholder="Add current machines and equipment and its value">
                            </div>
                            <div class="col-md-6">
                                <label for="challenges"> The challenges you foresee <span class="addNewInput">Add Chanllenge <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.challenges" id="challenges" placeholder="Add challenge">
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
