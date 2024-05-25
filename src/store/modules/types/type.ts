import type { RouteRecordRaw } from "vue-router";
import type { CategoryObj } from "@/api/product/attr/type";

export interface UserState {
  token: string|null;
  menuRoutes: RouteRecordRaw[];
  username: string;
  avatar: string;
}

export interface CategorySate {
  c1Id: string|number;
  c1Arr: CategoryObj[];
}