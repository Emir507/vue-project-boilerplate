import { createApp, Plugin } from "vue"
import Root from "./App.vue"
import "@/app/assets/styles/global.scss"

const app = createApp(Root)
const plugins = import.meta.glob<{ default: Plugin }>("./plugins/*.ts", { eager: true })
Object.values(plugins).forEach(p => app.use(p.default))

app.mount("#app")
