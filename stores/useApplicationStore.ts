export const useApplicationStore = defineStore('application', () => {
      const profileForm = {}
      const getProfileFormData = computed(() => profileForm)
      return { profileForm, getProfileFormData }
    })