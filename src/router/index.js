// src/router/index.js
import Login from "@/views/LoginPage.vue";
import Register from "@/views/RegisterPage.vue";
import { createRouter, createWebHistory } from "vue-router"; // ตรวจสอบให้แน่ใจว่าคุณนำเข้า createRouter และ createWebHistory มาอย่างถูกต้อง

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register, // ตรวจสอบว่ามีค่าอยู่หรือไม่
  },
  // ... กำหนดเส้นทางอื่น ๆ ต่อจากนี้
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
