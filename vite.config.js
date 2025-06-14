import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/laser-site/',   // 你的github repo 名稱
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
