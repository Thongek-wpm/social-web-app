<template>
  <div id="Login">
    <NavigationBar />
    <div class="flex-container">
      <div class="content-container">
        <div class="text-center mb-4 logo-container">
          <img src="@/assets/diary.png" alt="diary" class="logo" />
          <h2 class="subtle-heading">BLOG DIARY</h2>
          <div class="mb-4">
            <p>
              Welcome to <strong>"Blog Diary"</strong> for yourself everyday.
              <strong
                ><br />The first step is to log in before accessing the
                service.</strong
              >
            </p>
          </div>
        </div>
        <form @submit.prevent="login">
          <div class="form-group flex items-center justify-center mb-4">
            <!-- จัดกึ่งกลางแนวตั้งและแนวนอน -->
            <label for="username" class="mr-4">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              v-model="username"
              required
              class="w-full txt-form"
              placeholder="Username"
            />
          </div>
          <div class="form-group flex items-center justify-center mb-4">
            <!-- จัดกึ่งกลางแนวตั้งและแนวนอน -->
            <label for="password" class="mr-4">Password:</label>
            <br />
            <!-- บรรทัดใหม่ -->
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full txt-form"
              placeholder="Password"
            />
          </div>
          <div class="form-group remember-me">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <div class="text-center mt-3">
            <button class="btn-login" @click="login">
              <strong>Login</strong>
            </button>
          </div>
        </form>
        <div class="text-center">
          <p>
            Don't have an account?
            <router-link to="register" class="nav-link"
              ><p class="p1">Click Here</p></router-link
            >
          </p>
        </div>
      </div>
      <ItemBanner />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/FooterItem.vue"; // ระบุ path ที่ถูกต้อง
import ItemBanner from "@/components/ItemRightImg.vue";
import NavigationBar from "@/components/NavigationGusst.vue"; // ระบุ path ที่ถูกต้อง
import "@/assets/style/global.css";
export default {
  components: {
    Footer,
    NavigationBar,
    ItemBanner,
  },
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      // ตรวจสอบรายละเอียดการเข้าสู่ระบบ และทำการเรียก API สำหรับการตรวจสอบ
      if (
        this.username === "your_username" &&
        this.password === "your_password"
      ) {
        // ส่งผู้ใช้ไปยังหน้าหลังเข้าสู่ระบบ
        this.$router.push("/dashboard");

        // ถ้าตัวเลือก "Remember Me" ถูกเลือก
        if (this.rememberMe) {
          // บันทึกข้อมูลเข้าสู่ระบบ
          localStorage.setItem("rememberedUser", this.username);
        } else {
          // ล้างข้อมูลเข้าสู่ระบบ
          localStorage.removeItem("rememberedUser");
        }
      } else {
        alert("login failed");
      }
    },
  },

  created() {
    // ถ้ามีข้อมูลเข้าสู่ระบบที่จำไว้
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      this.username = rememberedUser;
      this.rememberMe = true;
    }
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

input[type="checkbox"] {
  margin-right: 5px;
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

.btn-login {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  height: 50%;
  width: 50%;
  cursor: pointer;
  font-family: sans-serif; /* เปลี่ยน 'Your Font' เป็นชื่อฟอนต์ที่คุณต้องการใช้ */
  font-size: 14px;
}
.btn-login:hover {
  opacity: 1;
}
.txt-form {
  width: 290px;
}
.btn-register {
  background-color: transparent;
  color: #000;
  opacity: 0.6;
  font-family: sans-serif; /* เปลี่ยน 'Your Font' เป็นชื่อฟอนต์ที่คุณต้องการใช้ */
}
.nav-link svg {
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.nav-link:hover {
  color: #007bff;
}
.nav-link {
  text-decoration: none;
  color: #000;
  transition: color 0.3s;
}
</style>
