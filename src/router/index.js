// src/router/index.js
import RegisterPageVue from '@/views/RegisterPage.vue';
import { createRouter, createWebHistory } from 'vue-router'; // ตรวจสอบให้แน่ใจว่าคุณนำเข้า createRouter และ createWebHistory มาอย่างถูกต้อง

const routes = [
  {
    path: '/Register',
    component: RegisterPageVue,
  },
  // ... กำหนดเส้นทางอื่น ๆ ต่อจากนี้
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
