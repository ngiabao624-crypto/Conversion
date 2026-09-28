import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, 'index.html'),
        weight: resolve(projectRoot, 'weight.html'),
        distance: resolve(projectRoot, 'distance.html'),
        temperature: resolve(projectRoot, 'temperature.html'),
      },
    },
  },
});