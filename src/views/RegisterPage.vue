<template>
  <div id="RegisterPage">
    <NavigationBar />
    <div class="flex-container">
      <div class="content-container">
        <div class="text-center mb-4 logo-container">
          <img src="@/assets/diary.png" alt="diary" class="logo" />
          <h1 class="register-heading">Register</h1>
          <br />
          <strong>If you do not have an account,</strong><br />you should create
          a blogdiary account before accessing.
        </div>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="fullname">firstname & Lastname</label>
            <input type="text" id="fullname" v-model="fullname" required />
          </div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" v-model="birthdate" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button class="register-button" type="submit">Register</button>
        </form>
        <div class="text-center"></div>
      </div>
      <ItemBanner />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/FooterItem.vue";
import ItemBanner from "@/components/ItemRightImg.vue";
import NavigationBar from "@/components/NavigationGusst.vue";
import "@/assets/style/global.css";

export default {
  components: {
    Footer,
    NavigationBar,
    ItemBanner,
  },
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      birthdate: "",
      password: "",
    };
  },
  methods: {
    register() {
      // ตรวจสอบข้อมูลลงทะเบียนและทำการเรียก API สำหรับการลงทะเบียน
    },
  },
};
</script>
<style>
.flex-container {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
}

.content-container {
  max-width: 400px;
  padding: 20px;
  height: 750px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1rem;
}

.logo {
  width: 100px;
  height: auto;
}

.form-group {
  margin-bottom: 5px;
}

.mr-4 {
  margin-right: 20px;
  left: 100%;
  right: 100%;
}

.text-center {
  text-align: center;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.mt-3 {
  margin-top: 0.75rem;
}

.subtle-heading {
  color: #999; /* เปลี่ยนสีข้อความให้เป็นสีเทาอ่อนหรือสีที่คุณต้องการ */
}

.register-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.register-button:hover {
  opacity: 1;
}
</style>
