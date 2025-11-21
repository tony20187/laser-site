import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // ✅ 讓 file:// 模式（Electron）能正確載入圖片、CSS、音效
  plugins: [react()],
  build: {
    outDir: 'dist',   // 輸出資料夾
    emptyOutDir: true // 每次建置前清空舊檔
  },
  server: {
    port: 5173,       // 可選：本地測試固定 port
    open: true        // 可選：開啟時自動啟動瀏覽器
  }
})
