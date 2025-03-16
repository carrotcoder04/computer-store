<template>
  <title>Sửa sản phẩm</title>
  <HeaderComponent/>
  <main>
    <div class="container">
      <div class="welcome">Cập nhật sản phẩm</div>
      <div>
        <div class="auth-form">
          <InputComponent label="Mã sản phẩm" v-model="productId" isDisabled="true"/>
          <InputComponent label="Loại sản phẩm" v-model="productType" />
          <InputComponent label="Tên sản phẩm" v-model="productName" />
          <InputComponent label="Giá bán" v-model="price" />
          <InputComponent label="Số lượng" v-model="quantity" />
          <InputComponent label="Giảm giá (%)" v-model="discount"/>
          <InputComponent label="Ngày kết thúc giảm giá" type="date" v-model="discountEndDate"/>
          <InputComponent label="Thời hạn bảo hành" v-model="warrantyDuration"/>
          <ImageFileComponent label="Hình ảnh mô tả" :onFileUpload="onFileUpload"/>
        </div>
      </div>
      <button @click = "updateProduct">
        CẬP NHẬT SẢN PHẨM
      </button>
      <NotificationPopup ref="notification"></NotificationPopup>
    </div>
  </main>
  <FooterComponent/>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import InputComponent from "@/components/InputComponent.vue";
import { ref} from "vue";
import NotificationPopup from "@/components/NotificationPopup.vue";
import {useRoute} from "vue-router";
import ImageFileComponent from "@/components/ImageFileComponent.vue";
const notification = ref(null);
const route = useRoute();
const productId = route.params.id;
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
}
const updateProduct = () => {
  showNotification("Cập nhật thành công!","#8863FFFF");
}
function showNotification(message,color) {
  notification.value.showNotification(message,color)
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
  transform: translate(-15px);
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
  transform: translate(0,40px);
  width: 290px;
  height: 50px;
  background-color: #408FEA;
  border: none;
  border-radius: 7px;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
</style>