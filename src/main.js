'use strict';
const { app, BrowserWindow, remote } = require('electron');
const path = require('path');
var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

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
  window.loadFile("login/login.html")
  window.on('closed', () => {
    window = null;
  })
}

app.on('ready', createWindow);