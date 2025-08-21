import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts'
  }
  // define: {
  //   'process.env.VITE_APP_TITLE': JSON.stringify(env.VITE_APP_APIURL_)
  // },
  // server: {
  //   port: env.VITE_APP_APIURL_ ? parseInt(env.VITE_APP_APIURL_) : 3000
  // }
})
