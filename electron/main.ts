import { app, BrowserWindow } from "electron";
import path from "path";
import { pathToFileURL } from "url";

process.env.ROOT = path.join(__dirname, "..");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? path.join(process.env.ROOT, "public")
  : path.join(process.env.ROOT, "../.output/public");

/**
 * Create function to run website in SSR
 */
const startWebServer = async () => {
  try {
    // If it's not a development instance, load the server module top enable the server API
    if (!process.env.VITE_DEV_SERVER_URL) {
      const modulePath = path.join(
        process.resourcesPath,
        ".output/server/index.mjs"
      );
      const moduleUrl = pathToFileURL(modulePath).href;
      console.log(moduleUrl);
      const { default: startServer } = await import(moduleUrl);

      if (typeof startServer === "function") {
        startServer();
      }
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
};
//const preload = fileURLToPath("../dist-electron/preload.js");
/**
 * Create function to create window
 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      //preload,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadURL("http://localhost:3000");
  }
};

app.whenReady().then(startWebServer).then(createWindow);
