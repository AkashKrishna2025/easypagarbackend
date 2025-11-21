import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // base: "/easypagarwebsite/", // Comment out or remove for development
  build: {
    assetsDir: "assets",
    sourcemap: true,
  },
});
