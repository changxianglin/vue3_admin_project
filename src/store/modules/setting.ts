import { defineStore } from 'pinia'

const userLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
      refsh: false,
    }
  }
})

export default userLayoutSettingStore