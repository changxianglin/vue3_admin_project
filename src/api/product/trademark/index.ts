import request from '@/utils/request'
import type { TradeMarkResponseData, TradeMark } from './type'

enum API {
  TRADEMARK_URL = "/admin/product/baseTrademark/",
  ADDTRADEMARK_URL = "/admin/product/baseTrademark/save",
  UPDATETRADEMARK_URL = "/admin/product/baseTrademark/update",
}

export const reqHasTrademark = (page: number, limit: number) => request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)

// add or update
export const reqAddOrUpdateTrademark = (data: TradeMark) => {
  // update
  if(data.id) {
    return request.put(API.UPDATETRADEMARK_URL, data)
  } else { // update
    return request.post(API.ADDTRADEMARK_URL, data)
  }
}