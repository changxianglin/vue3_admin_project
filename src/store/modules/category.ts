// shop type 
import { defineStore } from "pinia";
import { reqC1 } from '@/api/product/attr'

const useCategoryStore = defineStore('Category', {
  state: () => {
    return {
      c1Arr: [],
      c1Id: '',
    }
  },
  actions: {
    async getC1() {
      const result: any = await reqC1()
      console.log(result)
      if(result.code == 200) {
        this.c1Arr = result.data
      }
    }
  },
  getters: {

  }
})

export default useCategoryStore