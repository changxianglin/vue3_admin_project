import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// import svg need plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assts/icon')],
    symbolId: 'icon-[dir]-[name]',
  })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
