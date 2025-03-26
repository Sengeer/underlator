const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  run: (messages, options) =>
    ipcRenderer.invoke('transformers:run', { messages, options }),
  onStatus: (callback) =>
    ipcRenderer.on('transformers:status', (_, message) => callback(message)),
  updateTranslations: (translations) => {
    ipcRenderer.send('update-translations', translations);
  },
});
