
type CompetitionDetail = {
    message: string,
    data: CompetionData
}
type CompetionData = {
  applicationCode: string,
  competitors: string,
  competitiveAdvantage: string,
  marketStrategy: string,
  teamCapacity: string,
}


export const useCompetitionStore = defineStore('competitionStore', () => {
    const competitionDetail = ref < CompetitionDetail | null>(null)
    const saveError = ref <any>(null)
    const appData = useAppDataStore()

    //Saving Competions  Info 
    async function createCompetitionDetail(info: CompetionData){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');                
        const {data,error} = await useApiFetch(`/api/create-competition-profile/${info.applicationCode}`,{
          method: 'POST',
          body: info as CompetionData
        });
        // console.log(CompetitionDetailRespose?.data.value);
        if(data.value){
            appData.toogleLoading()
            competitionDetail.value = data.value as CompetitionDetail
            saveError.value = null
            //Move next Form
            appData.AssignNotificationMessage(competitionDetail.value?.message)
            navigateTo(`/sido/create-projection-profile-${competitionDetail.value.data?.applicationCode}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }
    async function fetchCompetitinDetails(applicationCode:string) {
      const {data , error} =  await useApiFetch(`/api/get-competition-details/${applicationCode}`);
      if(data){
        competitionDetail.value = data.value as CompetitionDetail
      }
      else{
        saveError.value = error.value?.message as string
      }
        // console.log(retrivedBusinessProfile.value?.data);
      return {data, error}
    }


    return { 
      competitionDetail,
      fetchCompetitinDetails,
      saveError , 
      createCompetitionDetail}
  })