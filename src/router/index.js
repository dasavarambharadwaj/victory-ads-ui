import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import AddBusinessPage from "@/pages/addBusiness";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/add-business",
    name: "AddBusiness",
    component: AddBusinessPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;