import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@service-worker": path.resolve(__dirname, "./service-worker"),
      "@content-script": path.resolve(__dirname, "./content-script"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
})
