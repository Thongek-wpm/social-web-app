import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ตรวจสอบ path ที่ถูกต้อง

const app = createApp(App);
app.use(router);
app.mount("#app");
