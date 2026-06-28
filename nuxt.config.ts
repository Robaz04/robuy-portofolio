export default defineNuxtConfig({
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  app: {
    head: {
      title: 'Robby Azwan | Full Stack Web Developer', 
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/images/logos/logo.webp'  
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
        }
      ]
    }
  }
})