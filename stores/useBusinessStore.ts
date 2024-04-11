
type BusinessProfile = {

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

    //Saving Applicant Profile Info 
    async function createBusinessProfile(info: BusinessProfile){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');                
        const {data,error} = await useApiFetch(`/api/create-business-profile/${info.applicationCode}`,{
          method: 'POST',
          body: info as BusinessProfile
        });
        // console.log(BusinessProfileRespose?.data.value);
        if(data.value){
            appData.toogleLoading()
            businessProfile.value = data.value as BusinessProfile
            saveError.value = null
            //Move next Form
            // navigateTo(`/sido/business-profile-${applicantProfile.value?.data.id}`)
            navigateTo(`/`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }

    return { businessProfile,saveError , createBusinessProfile}
  })