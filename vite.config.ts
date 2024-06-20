import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest: defineManifest({
        manifest_version: 3,
        name: "CRXJS React Vite Example",
        version: "1.0.0",
        content_scripts: [
          {
            js: ["src/main.tsx"],
            matches: ["https://www.google.com/*"],
          },
        ],
      }),
    }),
  ],
});
