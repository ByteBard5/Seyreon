import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect environment (development or production)
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  server: !isProd
    ? {
        proxy: {
          "/api": {
            target: "http://localhost:5000", // Local backend
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""), // Keep for dev
          },
        },
      }
    : {},
});
