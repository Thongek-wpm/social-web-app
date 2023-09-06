// src/router/index.js
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import { createRouter, createWebHistory } from "vue-router"; // ตรวจสอบให้แน่ใจว่าคุณนำเข้า createRouter และ createWebHistory มาอย่างถูกต้อง

const routes = [
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/RegisterPage",
    name: "RegisterPage",
    component: RegisterPage, // ตรวจสอบว่ามีค่าอยู่หรือไม่
  },
  // ... กำหนดเส้นทางอื่น ๆ ต่อจากนี้
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
