import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "vite-plugin-sass";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), sass(), dotenv.config()],
});
