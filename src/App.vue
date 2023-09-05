<template>
  <div id="app">
    <LoginPage />
    <!-- เรียกใช้คอมโพเนนต์ LoginPage.vue -->
  </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
export default {
  name: "App",
  components: {
    LoginPage,
  },
};
</script>

<style>
/* เพิ่มสไตล์ที่ต้องการสำหรับหน้า App.vue */
</style>
