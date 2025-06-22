// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// 🚫 禁用硬體加速，避免 GPU Cache 錯誤
app.disableHardwareAcceleration();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: false,           // ❌ 不用 fullscreen 模式
    fullscreenable: true,        // ✅ 允許使用者按 F11 進入全螢幕
    autoHideMenuBar: false,      // ✅ 顯示系統選單
    frame: true,                 // ✅ 保留標準視窗列 (最小化/最大化/關閉)
    resizable: true,             // ✅ 可調整大小
    minimizable: true,           // ✅ 可最小化
    maximizable: true,           // ✅ 可最大化
    closable: true,              // ✅ 可關閉
    title: '華谷電機 機工課-雷射組 | 版本: EXE 2025.6.22-3 | 製作時間 2025/6/22|製作人:李書宏',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // ✅ 一開啟就最大化
  mainWindow.maximize();

  // ✅ 載入編譯後的前端頁面
  mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));

  // ✅ 選單顯示
  mainWindow.setMenuBarVisibility(true);

  // ✅ 如果要固定標題列的文字，不讓前端改寫：
  mainWindow.on('page-title-updated', (event) => {
    event.preventDefault();
  });

  // ✅ 開發用：打開 DevTools
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
