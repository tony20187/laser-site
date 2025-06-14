import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/laser-site/',  // 這裡改成你的 repo 名稱，最後一定要有斜線 /
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
