const electron = require("electron");
const {app, BrowserWindow, MEnu, ipcMain} = electron;

let todayWindow;
let createWindow;
let listWindow;

app.on("ready", ()=>{
    todayWindow = new BrowserWindow({
         webPreferences: {
             nodeIntegration: true
         },
         title: "Menghitung Bangun Ruang dan Bangun Datar"
    });

    todayWindow.loadURL(`file://${__dirname}/home.html`);
    todayWindow.on("closed", ()=>{
        app.quit();
        todayWindow = null;
    });
});





