'use strict';
const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');

//If the process is on production, then reloads automatically the window on __dirname
if(process.env.NODE_ENV !== 'production'){
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  })
}

function createWindow(){
  let window = new BrowserWindow({
    fullscreen: true
    //Agregar ícono para la barra
  })
  window.loadFile("lotes/cargar/cargar.html")
  window.on('closed', () => {
    window = null;
  })
}

app.on('ready', createWindow);
