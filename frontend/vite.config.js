import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@add_yours' : path.resolve(__dirname,'../add_yours/src'),
      '@user_profile' : path.resolve(__dirname,'../add_yours/src')
    }
  }
})
