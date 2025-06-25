export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "nuxt-typed-router",
    "@pinia/nuxt",
    "@nuxt/ui",
  ],
  alias: {
    "@": "../src",
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    middleware: "./src/app/middleware",
    plugins: "./src/app/plugins",
  },
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/logo-icon.svg",
        },
      ],
    },
  },
  css: ["./src/app/styles/main.css"],
  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
        punycode: "punycode/",
      },
    },
  },
});
