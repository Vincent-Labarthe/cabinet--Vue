import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import HomePageCabinet from "@/components/large-screen/cabinet/HomePageCabinet";
import HomePage from "@/components/large-screen/HomePage";
import BookPage from "@/components/large-screen/book/BookPage";


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const routes = [
  { path: '/osteopathe-paris-15', component : HomePage},
  {  path: '/cabinet-osteopathie-paris-15', component: HomePageCabinet },
  {  path: '/repenser-lequitation', component: BookPage },
  {
    path: "/",
    redirect: "osteopathe-paris-15"
  },
]

const router = new VueRouter({
  mode:'history',
  routes,
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

