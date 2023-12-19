// https://nuxt.com/docs/api/configuration/nuxt-config
const year = 31536000;
const path = require("path");

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["nuxt-electron"],
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
    ],
    disableDefaultOptions: true,
  },
  nitro: {
    output: {
      dir: path.join(__dirname, ".output"),
      serverDir: path.join(__dirname, ".output/server"),
      publicDir: path.join(__dirname, ".output/public"),
    },
    routeRules: {
      "/img/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/_nuxt/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
    },
  },
  modulesDir: ["../node_modules"],
});
