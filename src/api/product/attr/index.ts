import request from "@/utils/request";

enum API {
  C1_URL = '/admin/product/getCategory1',
  C2_URL = '/admin/product/getCategory2/',
  C3_URL = '/admin/product/getCategory3/'
}

export const reqC1 = () => request.get<any, any>(API.C1_URL)
export const reqC2 = (category1Id: number) => request.get<any, any>(API.C2_URL+category1Id)
export const reqC3 = (category2Id: number) => request.get<any, any>(API.C2_URL+category2Id)
