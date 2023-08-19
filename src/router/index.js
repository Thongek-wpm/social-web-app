import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // ตัวอย่างเท่านั้น

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: () => import('@/views/RegisterPage.vue')
  },
  
  // ... เส้นทางอื่น ๆ ...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
