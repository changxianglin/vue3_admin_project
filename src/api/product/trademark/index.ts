import request from '@/utils/request'
import type { TradeMarkResponseData, TradeMark } from './type'

enum API {
  TRADEMARK_URL = "/admin/product/baseTrademark/",
  ADDTRADEMARK_URL = "/admin/product/baseTrademark/save",
  UPDATETRADEMARK_URL = "/admin/product/baseTrademark/update",
  DELETE_URL = '/admin/product/baseTrademark/remove/'
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

export const reqDeleteTrademark = (id: number) => request.delete<any, any>(API.DELETE_URL + id)