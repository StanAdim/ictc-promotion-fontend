<script setup>
definePageMeta({
    layout: 'application',
    middleware: 'auth'
})
//Single Application
const singleApplication = ref(null);
const  applicantStore = useApplicantStore()
const route = useRoute()
const nowDate = new Date()
const retriveData = async ()=>{
    singleApplication.value = null
    if(!singleApplication.value){
        await applicantStore.applicationBeforeSubmit(route.params.id)
        singleApplication.value = applicantStore.dataOnSubmitApplication?.data
        // console.log(singleApplication.value);
    }   
}
retriveData()
</script>
<template>
    <div class="flex justify-center">
        <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <div class="flex justify-center">
                <div class="grid grid-cols-3 ">
                    <div><nuxt-link to="/crm/admin/sido" class="bg-sky-200 rounded-full px-3 py-2"><i class="fa-solid fa-arrow-left-long mx-2"></i></nuxt-link></div>
                    <div><p class="text-2xl font-bold text-gray-900 ">{{singleApplication?.fullName}}</p></div>
                    <div><button @click="retriveData()" class="bg-sky-200 rounded-full px-3 py-1 mx-4"><i class="fa-solid fa-rotate mx-1"></i></button></div>
                </div>
            </div>
        <div class="flex flex-row justify-evenly my-4" v-if="singleApplication">
            <div class="p-2 w-2/5">            
                <p class="text-lg font-bold text-gray-900 mb-2">Personal Details</p>
                <UsableParagraph key-name="Application Code" :data="singleApplication?.applicationCode" :has-hr="false" />
                <UsableParagraph key-name="Name" :data="singleApplication?.fullName" :has-hr="false" />
                <template v-if="singleApplication">
                    <UsableParagraph  key-name="Age" :data="nowDate.getFullYear() - singleApplication?.birthYear" :has-hr="false" />
                </template>
                <UsableParagraph key-name="NIDA Number" :data="singleApplication?.nidaNumber" :has-hr="false" />
                <UsableParagraph key-name="Email" :data="singleApplication?.email" :has-hr="false" />
                <UsableParagraph key-name="Phone" :data="singleApplication?.phoneNumber" :has-hr="false" />
                <UsableParagraph key-name="Education level:" :data="singleApplication?.educationLevel" :has-hr="false" />
            </div>
            <div class="p-2">
                <p class="text-lg font-bold text-gray-900 mb-2">Business Details</p>
                <template v-if="singleApplication.BusinessRegStatus != '0' ">
                <UsableParagraph key-name="Business Name" :data="singleApplication?.businessName" :has-hr="false" />
                <UsableParagraph key-name="Business Sector" :data="singleApplication?.businessSector" :has-hr="false" />
                <UsableParagraph key-name="Business Location" :data="singleApplication?.businessLocation" :has-hr="true" />
            </template>

            <UsableParagraph key-name="Background " :data="singleApplication?.businessDetails?.background" />
            <UsableParagraph key-name="Market | Social Problem " :data="singleApplication?.businessDetails?.marketProblem" />
            <UsableParagraph key-name="Prototype | Model " :data="singleApplication?.businessDetails?.prototypeDescription" />
            <UsableParagraph key-name="Market Base" :data="singleApplication?.businessDetails?.marketBase" />
            <UsableParagraph key-name="Market Size" :data="singleApplication?.businessDetails?.marketSize" />
            </div>
        </div>
        <div class="flex flex-row justify-evenly my-2 w-full">
            <div class="p-2 ">
                <p class="text-lg font-bold text-gray-900 mb-2">Business Competition</p>
                <UsableParagraph key-name="Competitors " :data="singleApplication?.competitorsDetails?.competitors" />
              <UsableParagraph key-name="Competitive Advantage" :data="singleApplication?.competitorsDetails?.competitiveAdvantage" />
              <UsableParagraph key-name="Unique Strategy " :data="singleApplication?.competitorsDetails?.marketStrategy" />
              <UsableParagraph key-name="Team Management " :data="singleApplication?.competitorsDetails?.teamCapacity" />

            </div>
            <div class="p-2">
                <p class="text-lg font-bold text-gray-900 mb-2">Business Projection </p>
                <UsableParagraph key-name="Expected Revenue " :data="singleApplication?.projectionDetails?.expectedRevenue" />
              <UsableParagraph key-name="Financial Sources " :data="singleApplication?.projectionDetails?.financingSource" />
              <UsableParagraph key-name="Machines | Equipment " :data="singleApplication?.projectionDetails?.machineEquipment" />
              <UsableParagraph key-name="Working Capital " :data="singleApplication?.projectionDetails?.workingCapital" />
              <UsableParagraph key-name="Investment Plan " :data="singleApplication?.projectionDetails?.investmentPlan" />
              <UsableParagraph key-name="Challenges " :data="singleApplication?.projectionDetails?.challenges" />
              <UsableParagraph key-name="Support Needed " :data="singleApplication?.projectionDetails?.supportNeeded" />
            </div>
        </div>
        </div>
    </div>
</template>
<style>
.deadline{
    color:#ff7a7a;
    font-weight: 600;
}
</style>