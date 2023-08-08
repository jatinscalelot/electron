const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let festumEvento, eventoPackage;
function createWindow() {
    festumEvento = new BrowserWindow();
    festumEvento.loadURL('https://festumevento.com');
    festumEvento.once('ready-to-show', () => {
        festumEvento.show();
    })
    festumEvento.webContents.openDevTools();
    festumEvento.on('closed', () => {
        festumEvento = null;
    })

    eventoPackage = new BrowserWindow();
    eventoPackage.loadURL('https://eventopackage.com');
    eventoPackage.once('ready-to-show', () => {
        eventoPackage.show();
    })
    eventoPackage.webContents.openDevTools();
    eventoPackage.on('closed', () => {
        eventoPackage = null;
    })
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
app.on('activate', () => {
    if(festumEvento === null){
        createWindow();
    }
    if(eventoPackage === null){
        createWindow();
    }
})