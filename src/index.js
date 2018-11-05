const electron = require('electron');
const path = require('path');
const notifier = require('node-notifier');
// const server = require('./server/server.js');

const { app, BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on('ready', () =>  {
  mainWindow = new BrowserWindow({
    webPreferences: { backgroundThrottling: false },
    show: false,
    icon: path.join(__dirname,'public','images','favicon3.icns')
  });
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.on('closed', () =>  {
    mainWindow=null;
    app.quit();
  });
  
  
});

// app.on('quit', () => {
//   server.close();
// })

ipcMain.on('playNotif', (event, name, message) => {
  console.log('new message');
  notifier.notify(
    {
      title: name,
      message: message,
      icon: path.join(__dirname, 'public', 'images', 'favicon3.png'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      time: 1000,
      timeout:1000,
      expire:1000,
      wait: false,
      type: 'info'
    },
    function(err, response) {
      // Response is response from notification
    }
  );
});
