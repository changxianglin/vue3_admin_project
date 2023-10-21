import { defineStore } from 'pinia'

const userLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
    }
  }
})

export default userLayoutSettingStore