<script setup>
const route = useRoute()
useHead({
    title: 'Business Projection profile'
})
const formData = ref({
    applicationCode: route.params.id,
    action: route.params.action,
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
    showSaveBtn.value = true;
    await businessProjection.createProjectionDetail(formData.value)
    if(businessProjection.saveError){
        validationError.value = businessProjection.saveError
        hasError.value = true
    }
    else{
        validationError.value = null
        hasError.value = false;
    }
}
// On update projection
if(route.params.action == 'update'){
    const {data} = await businessProjection.fetchProjectionDetails(route.params.id);
    if(data.value?.code == 200){
        formData.value = businessProjection.retriveProjectionDetail?.data 
        formData.value.id = businessProjection.retriveProjectionDetail?.data.id
        formData.value.action = route.params.action
    }
    if(data.value?.code == 300){
        formData.value.action = 'create'
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
        <toasting-tip :message=" error[0]" v-for="error in validationError" :key="error" :is-failed="hasError" :is-succeed="hasError"/>
    </template>
</div>
<section class="contact-area">
    <div class="container">
    <progress-bar stage1="complete" stage2="complete"  stage3="complete" stage4="current"/>
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Business Projections <i class="fa-solid fa-arrow-up-right-dots"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="flex justify-center mx-auto my-4 text-xl bg-lime-300 py-2 px-1">
                            <usable-paragraph :key-name=" `${appData.sidoApplicationCode} ` " data="Please Note: Your Application Code" :has-hr="false" />
                        </div>
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
