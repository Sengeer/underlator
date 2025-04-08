const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  run: (messages, options) =>
    ipcRenderer.invoke('run', { messages, options }),
  onStatus: (callback) =>
    ipcRenderer.on('status', (_, message) => callback(message)),
  updateTranslations: (translations) => {
    ipcRenderer.send('update-translations', translations);
  },
});
