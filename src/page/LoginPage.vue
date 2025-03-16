<template>
  <HeaderComponent/>
  <main>
    <div class="container">
      <div class="welcome">Chào mừng bạn trở lại!</div>
      <div>
        <div class="auth-form">
          <InputComponent label="Email đăng nhập" v-model="username" type="email" />
          <InputComponent label="Mật khẩu" v-model="password" type="password"/>
        </div>
        <div class="auth-link">
          <span class="register-link">Đăng kí tài khoản</span>
          <span class="forgot-password">Quên mập khẩu?</span>
        </div>
      </div>
      <button @click = "login">
        ĐĂNG NHẬP
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
const username = ref("");
const password = ref("");
const notification = ref(null);
const login = () => {
  console.log("login");
  if(username.value === "" || password.value === "") {
    showNotification("Không thể bỏ trống tài khoản hoặc mật khẩu!","#ff5959");
    return;
  }
  showNotification("Đăng nhập thành công!","#8863ff")
}
function showNotification(message,color) {
  notification.value.showNotification(message,color)
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