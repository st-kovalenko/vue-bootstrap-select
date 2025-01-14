import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "VueBootstrapSelect",
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
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [vue()],
    server: {
        port: 5176,
    },
});
