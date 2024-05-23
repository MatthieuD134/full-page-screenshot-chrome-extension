import { defineConfig } from 'vite'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@service-worker": path.resolve(__dirname, "./service-worker"),
        "@content-script": path.resolve(__dirname, "./content-script"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
    build:{
        emptyOutDir: false, // So that popup and content build files don't get deleted
        target:"node16",
        rollupOptions:{
            input:{
                main: "./service-worker/main.ts", // Entry Point
            },
            output:{
                entryFileNames: "service-worker/[name].js"
            }
        },
    },
})