import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

export default defineConfig({
  base: '/',
  plugins: [vue({
    script: {
      defineModel: true
    }
  })],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'node_modules')}/`,
      '@/': `${resolve(__dirname, 'src')}/`
    },
    extensions: ['.js', '.json', '.vue', '.ts']
  }
})
