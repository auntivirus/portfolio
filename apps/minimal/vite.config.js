import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "minimal_app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "framer-motion",
        "react-scroll",
      ],
    }),
  ],
  server: {
    port: 5002,
    strictPort: true,
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
