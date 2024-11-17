import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import Layouts from "vite-plugin-vue-layouts"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Layouts({
      defaultLayout: "MainLayout",
      importMode: () => "async",
      layoutsDirs: "src/app/layouts"
    }),
    AutoImport({
      dts: "src/app/shims/auto-imports.d.ts",
      imports: ["@vueuse/core", "vue-router", "vue"],
      vueTemplate: true
    }),
    Components({
      dirs: ["src/app/components"],
      dts: "src/app/shims/components.d.ts",
      resolvers: [NaiveUiResolver()]
    })
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "#shared": resolve(__dirname, "src/shared"),
      "#modules": resolve(__dirname, "src/modules"),
      "#pages": resolve(__dirname, "src/views/pages"),
      "#services": resolve(__dirname, "src/shared/services")
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:map";
          @use "@/app/assets/styles/variables" as *;
          @use "@/app/assets/styles/mixins" as *;
        `
      }
    }
  }
})
