<template>
  <title>Thông tin cá nhân</title>
  <HeaderComponent />
  <main>
    <div class="container">
      <div class="welcome">Thông tin cá nhân</div>
      <div>
        <div class="auth-form">
          <InputComponent
            label="Email"
            v-model="username"
            type="email"
            isDisabled="true"
          />
          <InputComponent label="Họ và tên" v-model="fullName" />
          <InputComponent label="Số điện thoại" v-model="phoneNumber" />
          <SelectComponent
            :options="genders"
            label="Giới tính"
            v-model="gender"
          />
          <InputComponent label="Địa chỉ" v-model="address" />
        </div>
      </div>
      <button @click="save">LƯU THÔNG TIN</button>
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
import SelectComponent from "@/components/SelectComponent.vue";
const username = ref("mailinh04.work@gmail.com");
const fullName = ref("");
const phoneNumber = ref("");
const genders = [
  {
    value: "male",
    label: "Nam",
  },
  {
    value: "female",
    label: "Nữ",
  },
];
const gender = ref("male");
const address = ref("");
const notification = ref(null);
const save = () => {
  if (
    !username.value ||
    !fullName.value ||
    !phoneNumber.value ||
    !address.value
  ) {
    showNotification("Không thể bỏ trống trường thông tin nào!!", "#ff5959");
    return;
  }
  showNotification("Lưu thông tin thành công!", "#8863ff");
};

function showNotification(message, color) {
  notification.value.showNotification(message, color);
}
</script>
<style scoped>
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
  transform: translate(0, 40px);
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
