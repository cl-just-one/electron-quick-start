const { app, BrowserWindow, ipcMain } = require('electron')
app.on('ready', () => {
  require('devtron').install()
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
  ipcMain.on('message', (event, arg) => {
    console.log(arg)
    event.reply('reply', 'hello from main process')
  })

  // const secondWindow = new BrowserWindow({
  //   width: 400,
  //   height: 300,
  //   webPreferences: {
  //     nodeIntegration: true
  //   },
  //   parent: mainWindow
  // })
  // secondWindow.loadFile('second.html')
})