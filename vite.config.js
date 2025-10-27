import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
    ,
  },
  server: {
    host: '0.0.0.0', // Binds to all network interfaces
    port: 5173, // Default Vite port, change if needed
    watch: {
      usePolling: true, // Often helpful in WSL environments
    },
  }
})