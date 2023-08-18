import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue"; // ตรวจสอบ path ให้ถูกต้อง

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginPage },
  {
    path: "/register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
