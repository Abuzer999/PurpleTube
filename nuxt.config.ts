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
    "@prisma/nuxt",
    "nuxt-auth-utils",
    "nuxt-nodemailer",
  ],
  alias: {
    "@": "../src",
  },
  dir: {
    app: "./src/app/entrypoint",
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
  css: ["./src/app/assets/css/main.css"],
  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
        punycode: "punycode/",
      },
    },
  },
  prisma: {
    autoSetupPrisma: true,
  },
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  nodemailer: {
    from: process.env.NUXT_NODEMAILER_FROM,
    service: "gmail",
    host: process.env.NUXT_NODEMAILER_HOST,
    port: 587,
    secure: true,
    auth: {
      user: process.env.NUXT_NODEMAILER_USER,
      pass: process.env.NUXT_NODEMAILER_PASS,
    },
  },
});