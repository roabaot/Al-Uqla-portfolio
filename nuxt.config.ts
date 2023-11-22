// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles.scss',
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles.scss"',
        },
      },
    },
    server: {
      fs: {
        allow: ["/home/user/Monorepo"]
      }
    }
  },
  build: {
    transpile: ["primevue"]
  },
  pages: true,
  modules: [
    // '@nuxtjs/eslint-module'
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      script: [
      ]
    }
  },
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  }
})
