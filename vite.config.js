import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NailEnvyManicure/',  // <-- добавь эту строку
  plugins: [react()],
})

