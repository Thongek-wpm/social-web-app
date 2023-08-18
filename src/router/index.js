import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue'; // ตรวจสอบ path ให้ถูกต้อง

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginPage },
  { path: '/register', component: RegisterPage }, // เพิ่มเส้นทางสำหรับหน้า RegisterPage.vue
];

const router = new VueRouter({
  routes,
});

export default router;
