const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile('index.html');
  win.setMenu(null);

  win.on('closed', () => {
    win = null;
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
