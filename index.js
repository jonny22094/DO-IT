const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({width: 360, height: 640, resizable: false });
    win.setMenu(null);
    win.loadURL(`file://${__dirname}/client/index.html`);
})
