import request from "@/utils/request";

enum API {
  C1_URL = '/admin/product/getCategory1'
}

export const reqC1 = () => request.get<any, any>(API.C1_URL)