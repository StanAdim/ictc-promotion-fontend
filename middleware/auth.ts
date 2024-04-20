
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
    // console.log(auth.isLoggedIn);
    if(process.client){
          if (!auth.isLoggedIn) {
            return navigateTo("/auth/login", {replace: true});
          }
    }
  return
})