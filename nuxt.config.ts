// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'ICTC Innovation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1', }
      ],
      script: [// {type:"text/javascript",src :"/js/script.js",},
      ],
      link: [// <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'ico', href: '/public/logo/ico.png' }
        { rel: 'icon', type: 'image/x-icon', href: '/logo/ico.png' }
      ],
      style: [ 
        // <style type="text/css">:root { color: red }</style> 
      ],
    }
  },
  css: [
    '/assets/css/custom.style.css','/assets/fontawesome/css/fontawesome.min.css',
    '/assets/fontawesome/css/solid.min.css','/assets/fontawesome/css/brands.min.css',
  ],
  runtimeConfig:{
    public:{
      appName:  'ICT Innovation',
      // apiBaseUlr: process.env.BASE_URL || 'http://41.59.225.216:3050/public',
      apiBaseUlr: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
      // apiBaseUlr: 'http://41.59.225.216:3050/public',
      // apiBaseUlr: 'http://41.59.225.216:9050/public', ///- ------ Live
    }
  }
  
})

