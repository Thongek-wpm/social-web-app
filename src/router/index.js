import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
