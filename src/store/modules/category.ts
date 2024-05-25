// shop type 
import { defineStore } from "pinia";
import { reqC1 } from '@/api/product/attr'
import type { CategoryResponseData }from '@/api/product/attr/type'
import type { CategorySate } from "./types/type";

const useCategoryStore = defineStore('Category', {
  state: (): CategorySate => {
    return {
      c1Arr: [],
      c1Id: '',
    }
  },
  actions: {
    async getC1() {
      const result: CategoryResponseData = await reqC1()
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