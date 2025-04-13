<template>
  <title>Thêm sản phẩm</title>
  <HeaderComponent />
  <main>
    <div class="container">
      <div class="welcome">Thêm sản phẩm</div>
      <div>
        <div class="auth-form">
          <InputComponent label="Mã sản phẩm" v-model="productId" />
          <InputComponent label="Loại sản phẩm" v-model="productType" />
          <InputComponent label="Tên sản phẩm" v-model="productName" />
          <InputComponent label="Giá bán" v-model="price" />
          <InputComponent label="Số lượng" v-model="quantity" />
          <InputComponent label="Giảm giá (%)" v-model="discount" />
          <InputComponent
            label="Ngày kết thúc giảm giá"
            type="date"
            v-model="discountEndDate"
          />
          <InputComponent
            label="Thời hạn bảo hành"
            v-model="warrantyDuration"
          />
          <ImageFileComponent
            label="Hình ảnh mô tả"
            :onFileUpload="onFileUpload"
          />
        </div>
      </div>
      <button @click="addProduct">THÊM SẢN PHẨM</button>
      <NotificationPopup ref="notification"></NotificationPopup>
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import { ref } from "vue";
import NotificationPopup from "@/components/NotificationPopup.vue";
import ImageFileComponent from "@/components/ImageFileComponent.vue";
const notification = ref(null);
const productId = ref("");
const productType = ref("");
const productName = ref("");
const price = ref(0);
const quantity = ref(0);
const discount = ref(0);
const discountEndDate = ref(null);
const warrantyDuration = ref(0);
let fileUpload = null;
const onFileUpload = (file) => {
  fileUpload = file;
  console.log(fileUpload);
};
const addProduct = () => {
  showNotification("Thêm sản phẩm thành công!", "#8863FFFF");
};
function showNotification(message, color) {
  notification.value.showNotification(message, color);
}
</script>
<style scoped>
.test {
  color: #9090f6;
}
.container {
  padding-top: 30px;
  padding-bottom: 90px;
  padding-left: calc(50% - 150px);
}
.welcome {
  font-size: 40px;
  font-weight: 600;
  color: #5e5e5e;
}
.auth-form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
}
.auth-link {
  text-decoration: underline;
  display: flex;
  gap: 80px;
}
.register-link {
  color: #397cc5;
  cursor: pointer;
}
.forgot-password {
  cursor: pointer;
}
button {
  transform: translate(0, 10px);
  width: 290px;
  height: 50px;
  background-color: #408fea;
  border: none;
  border-radius: 7px;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
</style>
