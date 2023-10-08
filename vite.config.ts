import { fileURLToPath, URL } from 'node:url'
import type { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
        logger: false,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'
          setupProdMockServer()
        `,
      }),
      checker({
        vueTsc: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{vue,ts,tsx}"',
        },
      }),
      visualizer({
        filename: 'analyze.html',
        open: false,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/helpers/mixins.scss";`,
        },
      },
    },
    build: {
      sourcemap: false,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 4000,
      assetsDir: 'static',
      rollupOptions: {
        output: {
          entryFileNames: 'static/js/[name]-[hash].js',
          chunkFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
    esbuild: {
      // pure: ['console.log'],
      drop: ['console', 'debugger'],
    },
  }
}
