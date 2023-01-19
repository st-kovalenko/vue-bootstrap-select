import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path")

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "vue-bootstrap-select",
            fileName: (format) => `vue-bootstrap-select.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
    ],
})
