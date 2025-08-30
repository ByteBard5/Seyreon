import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-email/, "/send-email"),
      },
      "/add-note": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/add-note/, "/add-note"),
      },
    },
  },
});
