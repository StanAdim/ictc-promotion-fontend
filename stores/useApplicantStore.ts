
type ApplicantProfile = {
    message: string,
    data: {
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
}


export const useApplicantStore = defineStore('applicantStore', () => {
    const applicantProfile = ref < ApplicantProfile | null>(null)
    const saveError = ref <any>(null)
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

    return { applicantProfile,saveError , createApplicantProfile}
  })