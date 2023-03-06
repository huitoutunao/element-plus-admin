import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    rollupOptions: {
      output: {
        // 组件按组分块
        manualChunks: {
          layout: ['./src/layout/IndexView.vue'],
        },
      },
    },
  },
  esbuild: {
    pure: ['console.log'], // 生产环境去除 console.log
    drop: ['debugger'], // 生产环境去除 debugger
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
  base: './',
})
