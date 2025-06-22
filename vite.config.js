import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/laser-site/",   // ✅ 跟 Repo 名稱一致
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
