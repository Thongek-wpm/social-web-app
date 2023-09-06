<template>
  <nav class="navbar">
    <div class="logo-button">
      <button class="logo-button">
        <img src="@/assets/diary.png" alt="logo" />
        <div class="nav-link">Blog Diray</div>
      </button>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Login</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="register">Register</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* สไตล์สำหรับ Navigation Bar */
.navbar {
  background-color: #b4d6d8bb;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
  width: auto;
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
}

.nav-item {
  margin-right: 25px;
}

.nav-link {
  text-decoration: none;
  color: #000;
  transition: color 0.3s;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #007bff;
}

/* สไตล์สำหรับไอคอนใน Nav */
.nav-link svg {
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.logo-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 1%;
}
.logo-button img {
  height: 50px;
  width: auto;
}
</style>
