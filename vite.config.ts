import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
// provides Vue 3 specific features including HMR, global component resolving, directives and slots.
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

export default defineConfig({
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true,
      },
    },
  },
  // 插件
  plugins: [
    vue(),  
    vueJsx({// options are passed on to @vue/babel-plugin-jsx
    }),
  styleImport({
    libs: [{
      libraryName: 'ant-design-vue',
      esModule: true,
      resolveStyle: (name) => {
        return `ant-design-vue/es/${name}/style/css`;
      },
    }]
  })
],
  //开发配置
  server: {
    port: 3000,
    open: '/index.html',
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: process.env.VITE_APP_API,
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: true,
    },
  },
  //打包配置
  build: {
    // 服务端渲染
    ssr: false,
    base: './',
    rollupOptions: {
      output: {
        compact: true,
      },
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: process.env.VITE_DROP_CONSOLE as unknown as boolean,
      },
    },
  },
  //优化配置
  optimizeDeps:{
    // include:['ant-design-vue','axios','createjs-module','lodash','vue','vue-router','vuex']
  }
})
