<template>
  <HeaderComponent/>
  <main>
    <div class="container">
      <div class="welcome">Đăng kí tài khoản mới</div>
      <div>
        <div class="auth-form">
          <InputComponent v-model="username" label="Email" type="email"/>
          <InputComponent v-model="fullName" label="Họ và tên"/>
          <InputComponent v-model="phoneNumber" label="Số điện thoại" type="tel"/>
          <SelectComponent :options="genders" label="Giới tính" v-model="gender"/>
          <InputComponent v-model="password" label="Mật khẩu" type="password"/>
          <InputComponent v-model="rePassword" label="Nhập lại mật khẩu" type="password"/>
          <InputComponent v-model="address" label="Địa chỉ" type="address"/>
        </div>
      </div>
      <button @click="register">
        ĐĂNG KÍ
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
import {ref} from "vue";
import NotificationPopup from "@/components/NotificationPopup.vue";
import SelectComponent from "@/components/SelectComponent.vue";

const username = ref("");
const fullName = ref("");
const phoneNumber = ref("");
const genders = [
  {
    value: "male",
    label: "Nam"
  },
  {
    value: "female",
    label: "Nữ"
  }
]
const gender = ref("male");
const password = ref("");
const rePassword = ref("");
const address = ref("");
const notification = ref(null);
const register = () => {
  console.log("register");
  if (!username.value ||
      !fullName.value ||
      !phoneNumber.value ||
      !gender.value ||
      !password.value ||
      !rePassword.value ||
      !address.value ) {
    showNotification("Không thể bỏ trống trường thông tìn nào!", "#ff5959");
    return;
  }
  if(rePassword.value !== password.value) {
    showNotification("Mật khẩu nhập lại không khớp!", "#ff5959");
    return;
  }
  showNotification("Đăng kí thành công!", "#8863ff")
}

function showNotification(message, color) {
  notification.value.showNotification(message, color)
}
</script>
<style scoped>
.container {
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: calc(50% - 400px);
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
}

button {
  transform: translate(0, 40px);
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