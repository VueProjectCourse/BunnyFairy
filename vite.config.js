import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   assetsInlineLimit: 1024,
  // },
  define: {
    "process.env": {
      BASE_URL: "http://pcapi-xiaotuxian-front-devtest.itheima.net/",
      NODE_ENV: "development",
    },
  },
  server: {
    port: 8080,
  },
});
