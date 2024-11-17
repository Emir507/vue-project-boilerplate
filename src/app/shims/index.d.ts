import "vue"
import "vue-router"
import { RouteNames } from "@/shared/enum/routes.enum"

declare module "vue" {
  interface InputHTMLAttributes {
    ["data-maska"]?: string
  }
}

declare module "vue-router" {
  interface RouteMeta {
    permissionKey?: string | string[]
  }
  interface Router {
    push(to: { name: RouteNames }): Promise<NavigationFailure | void | undefined>
  }
}
