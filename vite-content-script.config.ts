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
        emptyOutDir: false, // So that popup build files don't get deleted
        rollupOptions:{
            input:{
                main: "./content-script/main.ts",
            },
            output:{
                entryFileNames: "content-script/[name].js"
            }
        },
    },
})