<script setup>
const route = useRoute()
useHead({
    title: 'Competition profile'
})
const formData = ref({
    applicationCode: route.params.id,
    id: '',
    action: 'create',
    competitors:'',
    competitiveAdvantage:'',
    marketStrategy:'',
    teamCapacity:'',
})
const hasError = ref(false);
const validationError = ref(null);
const competitionStore = useCompetitionStore()
const appData = useAppDataStore()
// route and update | Create
if(route.params.action == 'update'){
    const {data} = await competitionStore.fetchCompetitinDetails(route.params.id);
    if(data.value?.code == 200){
        formData.value = competitionStore.retrieveCompetitionDetail?.data 
        formData.value.id = competitionStore.retrivedcompetition?.data.uuid
        formData.value.action = route.params.action
    }
    if(data.value?.code == 300){
        formData.value.action = 'create'
    }
}
// handle the form
const  handleForm = async ()=> {
    showSaveBtn.value = false;
    await competitionStore.createCompetitionDetail(formData.value)
    if(competitionStore.saveError){
        validationError.value = competitionStore.saveError
        hasError.value = true
    }
    else{
        validationError.value = null
        hasError.value = false;
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
        <progress-bar stage1="complete" stage2="complete"  stage3="current"/>
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Competition Status <i class="fa-solid fa-people-group"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="flex justify-center mx-auto my-4 text-xl bg-lime-300 py-2 px-1">
                            <usable-paragraph :key-name=" `${appData.sidoApplicationCode} ` " data="Please Note: Your Application Code" :has-hr="false" />
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <label for="competitors">Who are the competitors <span class="addNewInput">Add competitor <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.competitors" id="competitors" placeholder="Competitor's Name">
                            </div>
                            <div class="col-md-12">
                                <label for="competitiveAdvantage">The competitive advantages</label>
                                <textarea v-model="formData.competitiveAdvantage" id="competitiveAdvantage" 
                                placeholder="Brief: What are the competitive advantages of your products"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="marketStrategy">The marketing strategies</label>
                                <textarea v-model="formData.marketStrategy" id="marketStrategy" 
                                placeholder="Brief: What will be your marketing strategies and channel of distribution"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="teamCapacity">The skills, expertise of Management Team</label>
                                <textarea v-model="formData.teamCapacity" id="teamCapacity" 
                                placeholder="Describe the skills, expertise and functions/duties of your management team. Team skills, experience and qualification."></textarea>
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
