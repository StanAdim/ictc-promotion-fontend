
type ApplicantProfile = {
    message: string,
    data: ApplicantInfo
}
type ApplicantInfo = {
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
}
type Application = {
  message: String,
  data:{

  }
}


export const useApplicantStore = defineStore('applicantStore', () => {
    const applicantProfile = ref < ApplicantProfile | null>(null)
    const saveError = ref <any>(null)
    const OnSubmitApplication = ref<any>(null)
    
    const appData = useAppDataStore()

    //Saving Applicant Profile Info 
    async function createApplicantProfile(info: ApplicantProfile){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');
        const applicantProfileRespose = await useApiFetch('/api/create-applicant-profile',{
          method: 'POST',
          body: info as ApplicantProfile
        });
        // console.log(applicantProfileRespose?.data.value);
        if(applicantProfileRespose?.data.value){
            appData.toogleLoading()
            applicantProfile.value = applicantProfileRespose?.data.value as ApplicantProfile
            saveError.value = null
            // next Form
            navigateTo(`/sido/business-profile-${applicantProfile.value?.data.id}`)
          }
          else{
            appData.toogleLoading()
            if( applicantProfileRespose?.error.value?.data) saveError.value = applicantProfileRespose?.error.value?.data.errors
        }
        return applicantProfileRespose;
    }
    async function applicationBeforeSubmit (uuid :string){
      appData.toogleLoading()
      const {data, error} = useApiFetch(`/api/application-before-submission/${uuid}`)
      if(data.value){
        appData.toogleLoading()
        OnSubmitApplication.value = data.value as Application
        saveError.value = null
      }
      else{
        appData.toogleLoading()
        if( error.value?.data) saveError.value = error.value?.data.errors
    }
    return {data , error}
    }

    return { applicantProfile, OnSubmitApplication, saveError , createApplicantProfile, applicationBeforeSubmit}
  })