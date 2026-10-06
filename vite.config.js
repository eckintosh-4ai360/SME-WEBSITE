import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  // Only scan the app entry (not the old static pages kept in _legacy/).
  optimizeDeps: { entries: ["index.html"] },
  preview: { port: 4173 },
  build: {
    // Photos are already optimised WebP; never inline them into the JS bundle.
    assetsInlineLimit: 0,
  },
});
