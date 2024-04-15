export default defineNuxtRouteMiddleware((to, from) => {
    // this Checks if Form has Application Code
    const appData = useAppDataStore()
    if(appData.sidoApplicationCode === 'APP-CODE'){
        console.log("helo");
        appData.AssignNotificationMessage('Update Your Details')
        return navigateTo('/sido/incubation-programe')
    }
})


