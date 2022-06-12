import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import AddBusinessPage from "@/pages/addBusiness";
import CategoriesPage from '@/pages/categoryList';
import SubCategoryPage from '@/pages/category';
import BusinessDetails from '@/pages/businessDetails';
import PageNotFound from '@/pages/notFound'

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
    path: "/category-list",
    name: "CategoryList",
    component: CategoriesPage,
  },
  {
    path: "/category/:id/:name",
    name: "Category",
    component: SubCategoryPage,
  },
  {
    path: "/business-details/:id",
    name: "BusinessDetails",
    component: BusinessDetails,
  },
  {
    path: "/add-business",
    name: "AddBusiness",
    component: AddBusinessPage,
  },
  {
    path:'/:pathMatch(.*)*',
    component:PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    let container = document.querySelector(".router-scroll-container")
    if(container) {
      container.scrollTop = 0
    }
  },
});

export default router;