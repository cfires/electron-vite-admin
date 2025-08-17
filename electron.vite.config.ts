import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      // 配置自动导入 Element Plus API
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // 自动导入的类型声明文件存放位置
        dts: resolve('src/renderer/src/auto-imports.d.ts')
      }),
      // 配置自动导入 Element Plus 组件
      Components({
        resolvers: [ElementPlusResolver()],
        // 自动导入的组件类型声明文件存放位置
        dts: resolve('src/renderer/src/components.d.ts')
      })
    ],
    // 添加 vue-i18n 配置
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
      __VUE_I18N_PROD_DEVTOOLS__: false
    }
  }
})
