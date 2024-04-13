// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',

    // '@ant-design-vue',
    
  ],
  app: {
    head: {
      title: 'ICTC Innovation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1', }
      ],
      script: [
        // {type:"text/javascript",src :"/js/script.js",},
        // {type:"text/javascript",src :"/js/modernizr.min.js",},
        // {type:"text/javascript",src :"/js/jquery-3.5.1.min.js",},
        // {type:"text/javascript",src :"/js/popper.min.js",},
        // {type:"text/javascript",src :"/js/bootstrap.min.js",},
        // {type:"text/javascript",src :"/js/owl.carousel.min.js",},
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'ico', href: '/public/logo/ico.png' }
        { rel: 'icon', type: 'image/x-icon', href: '/logo/ico.png' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // '@fortawesome/fontawesome-svg-core/styles.css'
      ],
    }
  },
  css: [
    '/assets/css/custom.style.css',
    '/assets/fontawesome/css/fontawesome.min.css',
    '/assets/fontawesome/css/solid.min.css',
    '/assets/fontawesome/css/brands.min.css',
  ],
  runtimeConfig:{
    public:{
      // apiBaseUlr: process.env.BASE_URL || 'http://41.59.225.216:3050/public',
      apiBaseUlr: 'http://41.59.225.216:3050/public',
      appName:  'ICT Innovation',
    }
  }
  
})

