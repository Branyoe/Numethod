const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const createMainWindow = () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 700,
    minWidth: 800,
    minHeight: 700,
    title: "Numethod",
    icon: "./dist/assets/images/Logo.png",
    webPreferences: {
      
    }
  })

  mainWin.loadFile(`${__dirname}/dist/index.html`)

  const menu = Menu.buildFromTemplate = [{}]
  Menu.setApplicationMenu(null)

}

app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})