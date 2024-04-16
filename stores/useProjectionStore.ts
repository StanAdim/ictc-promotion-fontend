
type ProjectionDetail = {
    message: string,
    data: ProjectionData,
    code : number
}
type ProjectionData = {
    action:string,
    id:string,
    applicationCode:string,
    expectedRevenue:string,
    machineEquipment:string,
    workingCapital:string,
    investmentPlan:string,
    financingSource:string,
    supportNeeded:string,
    challenges:string,
}

export const useProjectionStore = defineStore('projectionStore', () => {
    const projectionDetail = ref < ProjectionDetail | null>(null)
    const retriveProjectionDetail = ref < ProjectionDetail | null>(null)
    const saveError = ref <any>(null)
    const appData = useAppDataStore()
    const  applicantStore = useApplicantStore()
    
    //Saving Competions  Info 
    async function createProjectionDetail(info: ProjectionData){
      let postAction = info.action        
      appData.toogleLoading()
      await useApiFetch('/sanctum/csrf-cookie');                
      const {data,error} = await useApiFetch(`/api/${postAction}-business-projection/${info.applicationCode}`,{
        method: 'POST',
        body: info as ProjectionData
      });
      // console.log(ProjectionDetailRespose?.data.value);
      if(data.value){
            appData.toogleLoading()
            projectionDetail.value = data.value as ProjectionDetail
            saveError.value = null
            //Move next Submission
            appData.AssignNotificationMessage(projectionDetail.value?.message)
            await applicantStore.applicationBeforeSubmit(info.applicationCode);
            navigateTo(`/sido/profile-submission-${projectionDetail.value.data?.applicationCode}`)
          }
          else{
            appData.toogleLoading()
            // appData.AssignNotificationMessage(error.value?.message)
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }

    //Fetching the Single Projection
    async function fetchProjectionDetails(applicationCode:string) {
      const {data , error} =  await useApiFetch(`/api/get-projection-detail/${applicationCode}`);      
      if(data){        
        retriveProjectionDetail.value = data.value as ProjectionDetail
        // console.log(retriveProjectionDetail.value);
        appData.AssignNotificationMessage(retriveProjectionDetail.value.message)
      }
      else{
        saveError.value = error.value?.message as string
      }
        // console.log(retrivedBusinessProfile.value?.data);
      return {data, error}
    }

    //General Return
    return { 
      projectionDetail, saveError, 
      fetchProjectionDetails,retriveProjectionDetail,
      createProjectionDetail}
  })