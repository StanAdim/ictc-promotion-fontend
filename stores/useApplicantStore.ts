
type ApplicantProfile = {
    message: string,
    data: ApplicantInfo
    code : number
}
type ApplicantInfo = {
  action:string,
  id: string
  fullName:string,
  birthYear:string,
  nidaNumber:string,
  educationLevel:string,
  BusinessRegStatus:string,
  phoneNumber:string,
  email:string,
  businessSector:string,
  businessName:string,
  businessLocation:string,
  applicationCode:string,
}
type Application = {
  message: String,
  data:{
  }
}
type Response = {
  message: string,
  data: object,
  code: number
}
export const useApplicantStore = defineStore('applicantStore', () => {
    const applicantProfile = ref < ApplicantProfile | null>(null)
    const allApplicants = ref <any>([]);
    const saveError = ref <any>(null)
    const dataOnSubmitApplication = ref<any>(null)
    
    const appData = useAppDataStore()

    //Saving Applicant Profile Info 
    async function createApplicantProfile(info: ApplicantInfo){
        let postAction = info.action        
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');
        const {data, error} = await useApiFetch(`/api/${postAction}-applicant-profile`,{
          method: 'POST',
          body: info as ApplicantInfo
        });
        // console.log(data.value);
        if(data.value){
            appData.toogleLoading()
            applicantProfile.value = data.value as ApplicantProfile
            appData.setSidoApplicationCode(applicantProfile.value?.data?.applicationCode)
            saveError.value = null
            // next Form
            appData.AssignNotificationMessage(applicantProfile.value?.message)
            if(postAction != 'update'){postAction = 'create'}
            navigateTo(`/sido/${postAction}-business-profile-${applicantProfile.value?.data.id}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors            
        }
        return {data, error};
    }
    async function applicationBeforeSubmit (uuid :string){
      appData.toogleLoading()
      const {data, error, refresh} = await useApiFetch(`/api/application-before-submission/${uuid}`)
      if(data.value){
        appData.toogleLoading()
        dataOnSubmitApplication.value = data.value as Application
        saveError.value = null
      }
      else{
        appData.toogleLoading()
        if( error.value?.data) saveError.value = error.value?.data.errors
    }
    return {data , error, refresh}
    }
    async function captureApplication(applicationKey:string) {      
      appData.toogleLoading()
      const {data} = await useApiFetch(`/api/get-applicant-details/code-${applicationKey}`)
      if(data.value){
        appData.toogleLoading()
        applicantProfile.value = data.value as ApplicantProfile
        const action = ref('update')
        const message = ref('')
        if(applicantProfile.value.code == 300){
          message.value = applicantProfile.value.message
          return {data, message}
        }

        message.value = `${applicantProfile.value.message}`
        appData.AssignNotificationMessage(message.value)
        navigateTo(`/sido/${action.value}-applicant-profile`)
        return { data, message}
      }
    }
    //Fetch Applicant Store
    async function  retriveApplicantProfiles() {
      const {data} = await useApiFetch(`/api/retrieve-applicant-profiles`);
      if(data){
        allApplicants.value = data.value as ApplicantInfo[]
      }
    }
    
    async function submitApplication(applicationKey:string) {
      //Change application status
      const {data} = await useApiFetch(`/api/application-submission/${applicationKey}`);
      const response = data.value as Response;
      if(response.code  == 200){
        appData.AssignNotificationMessage(response.message)
        navigateTo(`/sido/finalize-application`)
      }
      
      return;
    } 

    async function handleSearchByName (seachKey: string){
            //Search application In admin
            appData.toogleLoading()
            const {data} = await useApiFetch(`/api/application-search-by-name/${seachKey}`);
            const response = data.value as Response;
            if(response.code  == 200){
              appData.AssignNotificationMessage(response.message)
              appData.toogleLoading()
        return response.data

      }
    }

    async function downloadApplication (uuid :string){
        appData.toogleLoading()
        const {data} = await useApiFetch(`/api/application-download/${uuid}`)
        if(data.value){
            appData.toogleLoading()
            saveError.value = null
        }
        else{
            appData.toogleLoading()
        }
        return {data}
    }
    return { 
      applicantProfile, dataOnSubmitApplication, 
      submitApplication,captureApplication, 
      saveError , createApplicantProfile, 
      retriveApplicantProfiles,allApplicants,
      applicationBeforeSubmit,
      handleSearchByName, downloadApplication,
    }
  })