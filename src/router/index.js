import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "@/page/AdminLayout.vue";
import HomePage from "@/page/HomePage.vue";
import LoginPage from "@/page/LoginPage.vue";
import RegisterPage from "@/page/RegisterPage.vue";
import ProductPage from "@/page/ProductPage.vue";
import UserInfoPage from "@/page/UserInfoPage.vue";
import EditProduct from "@/page/EditProduct.vue";
import AddProduct from "@/page/AddProduct.vue";
import CartPage from "@/page/CartPage.vue";
import OrderManager from "@/page/OrderManager.vue";
import UserManager from "@/page/UserManager.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/view/:id",
    component: ProductPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/profile",
    component: UserInfoPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/edit-product/:id",
    component: EditProduct,
  },
  {
    path: "/add-product",
    component: AddProduct,
  },
  {
    path: "/admin",
    component: AdminLayout,
  },
  {
    path: "/cart/:id",
    component: CartPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/order-manager",
    component: OrderManager,
  },
  {
    path: "/user-manager",
    component: UserManager,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const isAuthenticated = () => !!localStorage.getItem("isLogin");
router.beforeEach((to, from, next) => {
  const isLogin = isAuthenticated();
  if (to.path === "/login" && isLogin) {
    next("/");
  } else if (to.path === "/register" && isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
