import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        mainApp: "http://localhost:5001/assets/remoteEntry.js",
        minimalApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "framer-motion",
        "framer-motion",
      ],
    }),
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
