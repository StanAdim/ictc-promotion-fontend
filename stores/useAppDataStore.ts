export const useAppDataStore = defineStore('appData', () => {
  const isloading = ref(false);
  const eduLevels = [
        'Primary School',
        'Secondary School',
        'Certificate',
        'Diploma',
        'Bachellor',
        'Masters',
      ];

    const economySector = [
      'E-commerce',
      'Fin Tech',
      'Edu Tech',
      'Agro Tech',
      'Health Tech',
      'Artificial Intelligence',
    ];

    const getYearsArray = computed(() => {
      // const currentYear = new Date().getFullYear();
      const startYear = 1984;
      const yearsArray = [];
      for (let year = startYear; year <= 2006; year++) {
        yearsArray.push(year);
      }
      return yearsArray;
    })
    // toogle laoding 
    const toogleLoading = ()=> isloading.value ? isloading.value = false : isloading.value = true

  
    return { eduLevels, economySector, getYearsArray, isloading, toogleLoading}
  })