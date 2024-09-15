import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import TestPage from "@/views/TestPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/our-foods",
    name: "OurFoods",
    component: () => import("@/views/OurFoods.vue"),
  },
  {
    path: "/food-details",
    name: "FoodDetails",
    component: () => import("@/views/FoodDetails.vue"),
    props: true,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("@/views/Checkout.vue"),
    props: true,
  },
  {
    path: "/test",
    name: "TestPage",
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
