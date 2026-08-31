import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'ascii-image.js',
      name: 'AsciiImage',
      formats: ['es', 'umd'],
      fileName: 'ascii-image'
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [],
      output: {
        globals: {
          // Define global names for external dependencies
        }
      }
    }
  }
});