import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
im

export default defineConfig({
  publicDir: 'public',
  plugins: [react(), vitePluginSass()],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
});
