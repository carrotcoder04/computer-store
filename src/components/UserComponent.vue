<template>
  <div class="order-card">
    <IconProfile class="customer-profile"></IconProfile>
    <div class="info">
      <div>
        <span>Họ và tên: </span>
        <span class="customer-name">{{ customerName }}</span>
      </div>
      <div>Email: {{ customerEmail }}</div>
      <div>Số điện thoại: {{ customerPhoneNumber }}</div>
      <div>Địa chỉ: {{ customerAddress }}</div>
    </div>
    <div class="action">
      <button class="update" @click="editProfile">Sửa thông tin</button>
      <button class="delete">Xóa tài khoản</button>
      <button class="order" @click="showOrder">Đơn hàng đã đặt</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import IconProfile from "./icons/IconProfile.vue";
defineProps({
  userId: {
    type: String,
    default: "GAMING2929",
  },
  customerName: {
    type: String,
    default: "Nguyễn Hoàng Phát",
  },
  customerEmail: {
    type: String,
    default: "mailinh04.work@gmail.com",
  },
  customerPhoneNumber: {
    type: String,
    default: "0367342354",
  },
  customerAddress: {
    type: String,
    default: "Số 2, Ngõ 83/58 Tân Triều, Thanh Trì, Hà Nội",
  },
});
const showOrder = () => {
  window.location.href = "/order-manager";
};
const editProfile = () => {
  window.location.href = "/profile";
};
</script>

<style scoped>
.order-card {
  display: flex;
  position: relative;
  border: 1px solid #ddd;
  width: 800px;
  height: 220px;
}
.customer-name {
  font-weight: 700;
  text-decoration: underline;
  color: #8b33ff;
}
.info {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 180px;
  top: 35px;
}
.customer-profile {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
}
.payment-method {
  position: absolute;
  left: 180px;
  top: 60px;
}
.order-date {
  position: absolute;
  left: 180px;
  top: 85px;
}
.customer-name:hover {
  cursor: pointer;
}
.total {
  position: absolute;
  left: 180px;
  top: 110px;
}
.image {
  width: 160px;
  height: 160px;
}
.product-name {
  margin-left: 20px;
  margin-top: 10px;
  height: 20px;
  text-decoration: underline;
}
.product-name:hover {
  cursor: pointer;
  color: rgb(221, 170, 111);
}
.action {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 40px;
  gap: 10px;
}
.status {
  text-align: center;
  width: 180px;
  height: 40px;
}
.update {
  width: 187px;
  height: 40px;
  color: white;
  background-color: #4ca474;
  cursor: pointer;
}
.delete {
  width: 187px;
  color: white;
  height: 40px;
  background-color: rgb(238, 89, 89);
  cursor: pointer;
}
.order {
  width: 187px;
  height: 40px;
  color: white;
  background-color: #e0ae97;
  cursor: pointer;
}
</style>
