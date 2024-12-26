import request from '@/utils/request'
import type { HasSpuResponseData, AllTradeMark } from './type'

enum API {
  HASSPU_URL = '/admin/product/',
  ALLTREADMARK_URL = '/admin/product/baseTrademark/getTrademarkList'
}

export const reqHasSpu = (page: number, limit: number, category3Id: string|number) => request.get<any, HasSpuResponseData>(API.HASSPU_URL + `${page}/${limit}?category3Id=${category3Id}`)

export const reqAllTradeMark = () => request.get<any, AllTradeMark>(API.ALLTREADMARK_URL)