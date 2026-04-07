import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Permite que o Docker acesse o servidor
    port: 5173,        // Garante a porta correta
    watch: {
      usePolling: true // Faz o Docker atualizar quando você salva o código no Windows/Mac
    },
    historyApiFallback: true // ESSENCIAL: Faz as rotas do React Router funcionarem
  }
})