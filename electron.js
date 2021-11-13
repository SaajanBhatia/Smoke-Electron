const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
 
const path = require('path');
const url = require('url');

const isDev = require('electron-is-dev');



let mainWindow;
function createWindow() {

  const APP_PATH = path.resolve(__dirname, './smokebots-backend.exe');
  console.log(APP_PATH)
  var child = require('child_process').execFile;

  child(APP_PATH, function(err, data) {
    if(err){
      console.error(err);
      return;
    }

    console.log(data.toString());
  });



  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    autoHideMenuBar: true,
    icon:"./favicon.png",
    webPreferences: {
      devTools: false 
      }
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
}); 