import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import AddBusinessPage from "@/pages/addBusiness";
import CategoriesPage from '@/pages/categoryList';
import SubCategoryPage from '@/pages/category';
import BusinessDetails from '@/pages/businessDetails';

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
    path: "/category/:id",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;