import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node
  }
})
