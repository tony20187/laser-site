// main.js
// ============================================================
// 完整版本：禁止開發者工具 + 可切換開發/應用程式模式
// ============================================================
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// 🚫 禁用硬體加速（避免 GPU Cache 錯誤）
app.disableHardwareAcceleration();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: false,
    fullscreenable: true,
    autoHideMenuBar: false,
    frame: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    closable: true,
    title: '華谷電機 機工課-雷射組 | 版本: EXE 2025.11.22-1 | 製作時間 2025/11/22 | 製作人:李書宏',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false,           // ✅ 禁止開發者工具
      contextIsolation: true,    // ✅ 安全隔離
    },
  });

  // ============================================================
  // 1️⃣ 自訂選單（移除 Developer Tools）
  // ============================================================
  const template = [
    {
      label: 'File',
      submenu: [{ role: 'quit', label: 'Exit' }],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'copy', label: 'Copy' },
        { role: 'paste', label: 'Paste' },
        { role: 'selectAll', label: 'Select All' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload', label: 'Reload' },
        { role: 'togglefullscreen', label: 'Fullscreen' },
        // ❌ 不放 toggleDevTools
      ],
    },
    { label: 'Window', submenu: [{ role: 'minimize', label: 'Minimize' }] },
    { label: 'Help', submenu: [] },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // ============================================================
  // 2️⃣ 封鎖快捷鍵（F12 / Ctrl+Shift+I）
  // ============================================================
  mainWindow.webContents.on('before-input-event', (event, input) => {
    const isDevToggle =
      (input.key.toLowerCase() === 'i' && input.control && input.shift) ||
      input.key === 'F12';
    if (isDevToggle) event.preventDefault();
  });

  // ============================================================
  // 3️⃣ 禁用右鍵選單（防止 Inspect Element）
  // ============================================================
  mainWindow.webContents.on('context-menu', (e) => e.preventDefault());

  // ============================================================
  // 4️⃣ 視窗設定
  // ============================================================
  mainWindow.maximize();
  mainWindow.setMenuBarVisibility(true);

  // 固定標題，防止前端修改
  mainWindow.on('page-title-updated', (event) => event.preventDefault());

  // ============================================================
  // 5️⃣ 模式判斷：開發 / 應用程式
  // ============================================================
  const forceApp = process.env.APP_MODE === 'app'; // 🚩 從環境變數決定
  const isDev = !app.isPackaged && !forceApp;

  if (isDev) {
    // 🔧 開發模式：Vite 開發伺服器
    mainWindow.loadURL('http://localhost:5173');
    // ❌ 不開啟 DevTools
  } else {
    // 📦 應用程式模式：讀取打包後檔案
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // 防呆：若載入失敗顯示錯誤
  mainWindow.webContents.on('did-fail-load', (e, code, desc) => {
    console.error('頁面載入失敗:', code, desc);
  });
}

// ============================================================
// App lifecycle
// ============================================================
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
