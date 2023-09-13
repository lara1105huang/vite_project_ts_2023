import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';/*element 自動導入*/
import Components from 'unplugin-vue-components/vite';/*element 自動導入*/
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';/**/
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    /*element 自動導入*/
    AutoImport({
     resolvers: [ElementPlusResolver()],
    }),
    /*element 自動導入*/
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: resolve(__dirname, './env'),
})
