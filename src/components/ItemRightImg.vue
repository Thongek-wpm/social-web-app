<template>
  <div class="image-container">
    <img src="@/assets/artsy.jpg" alt="artsy" class="right-image" />
    <div class="image-text">
      <h4>Blog Diary</h4>
      <p>
        Welcome to BLOG DIARY for yourself everyday. You can write notes every day and
        share them with others, You share your feel eveydays for social network.<br />
        Other get experience and feel.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // ... ส่วนอื่น ๆ ที่คุณต้องการ
};
</script>

<style>
.right-image {
  width: 1600px;
  border-radius: 30px;
  right: 50;
  left: 60;
  height: 800px;
  padding-left: 10px;
  object-fit: cover;
}

.image-container {
  position: relative;
}

.image-text {
  position: absolute;
  bottom: 0; /* จัดตำแหน่งให้อยู่ด้านล่าง */
  left: 0; /* จัดตำแหน่งให้อยู่ด้านซ้าย */
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  color: #f2f3f4;
}
</style>
