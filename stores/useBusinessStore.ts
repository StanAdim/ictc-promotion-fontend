
type BusinessProfile = {
    message: string,
    data : BusinessData
    code: number
}
type BusinessData = {
    action: string,
    applicationCode:string,
    background:string,
    marketProblem:string,
    marketBase:string,
    prototypeDescription:string,
    marketSize:string,
}
export const useBusinessStore = defineStore('businesProfileStore', () => {
    const businessProfile = ref < BusinessProfile | null>(null)
    const saveError = ref <any>(null)
    const appData = useAppDataStore()
    const retrivedBusinessProfile = ref <BusinessProfile | null>(null)

    //Saving Applicant Profile Info 
    async function createBusinessProfile(info: BusinessData){
      const postAction = info.action as string       
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');                
        const {data,error} = await useApiFetch(`/api/${postAction}-business-profile/${info.applicationCode}`,{
          method: 'POST',
          body: info as BusinessData
        });
        // console.log(BusinessProfileRespose?.data.value);
        if(data.value){
            appData.toogleLoading()
            businessProfile.value = data.value as BusinessProfile
            saveError.value = null
            //Move next Form
            appData.AssignNotificationMessage(businessProfile.value?.message)
            navigateTo(`/sido/${postAction}-competition-profile-${businessProfile.value?.data.applicationCode}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }
    async function fetchBusinessData(applicationCode:string) {
      const {data , error} =  await useApiFetch(`/api/get-business-profile/${applicationCode}`);
      if(data){
        retrivedBusinessProfile.value = data.value as BusinessProfile
      }
      else{
        saveError.value = error.value?.message as string
      }
        // console.log(retrivedBusinessProfile.value?.data);
      return {data, error}
    }

    return { 
      businessProfile,saveError , retrivedBusinessProfile,
      createBusinessProfile, fetchBusinessData}
  })