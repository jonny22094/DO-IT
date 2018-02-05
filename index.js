const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({x: 10, y: 10 , width: 360, height: 640, resizable: false, frame: false});

    win.setMenu(null);
    win.loadURL(`file://${__dirname}/client/index.html`);
})
