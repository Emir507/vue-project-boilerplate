import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("./ui/Home.vue")
  }
]

export default routes
