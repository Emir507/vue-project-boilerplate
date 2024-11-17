import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
// import { useAuthStore } from "../stores/authStore"

const modules = import.meta.glob<{ default: RouteRecordRaw[] }>("../../pages/*/routes.ts", { eager: true })
const routes = Object.values(modules)
  .map(v => v.default)
  .flat()
const generated = setupLayouts(routes)

const router = createRouter({
  history: createWebHistory(),
  routes: generated,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _, next) =>
  // if (!useAuthStore().isAuthenticated && to.path !== "/auth") {
  //   return next({ name: "/auth" })
  // }

  next()
)

export default router
