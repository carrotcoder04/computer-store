<template>
  <div class="header">
        <span class="contact-group">
            <span class="contact-button" style="width: 120px;" @click="openFacebook">
                <IconFacebook class="icon"/>
                <span class="text-bold">Liên hệ</span>
            </span>
            <span class="contact-button" style="margin-left:50px;width: 300px;" @click="openPhone">
                <IconPhone class="icon"/>
                <span class="text-bold">Kỹ thuật, bảo hành</span>
                <span class="text-bold phone-number">0367342354</span>
            </span>
        </span>
    <span class="user">
            <IconUser style="padding-right: 12px;"/>
            <span v-if="!isLogin">
                <span @click = "register" class="hover-effect">Đăng kí</span>
                <span class="separator">|</span>
                <span @click="login" class="hover-effect">Đăng nhập</span>
            </span>
            <span v-else class="hover-effect">Mai Xuân Lĩnh</span>
        </span>
  </div>
  <div class="body">
        <span class="search-box">
            <span class="category">
                <select id="productSelect" v-model="selectedOption">
                  <option value="all">Tất cả danh mục</option>
                  <option value="pc-gaming">PC Gaming</option>
                  <option value="pc-office">PC Văn Phòng</option>
                  <option value="pc-server">PC Server</option>
                </select>
            </span>
            <input class="search-content" placeholder="Nhập nội dung tìm kiếm..."/>
        </span>
    <span class="cart text-bold">
              <IconCart style="margin-left: 5px;"/>
              <span class="item-quantity"> {{ quantity }} </span>
              <div>Giỏ hàng</div>
        </span>
    <div class="benefit-item">
          <span class="benefit-container">
            <IconTruck class="benefit-icon"/>
            <span class="text-bold benefit-text">Miễn phí vận chuyển</span>
          </span>
      <span class="benefit-container">
            <IconPiggyBank class="benefit-icon"/>
            <span class="text-bold benefit-text">Đổi trả trong 3 ngày</span>
          </span>
      <span class="benefit-container">
            <IconRefund class="benefit-icon"/>
            <span class="text-bold benefit-text">Trả góp 0%</span>
          </span>
    </div>
  </div>
</template>
<script setup>
import {inject, ref} from "vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconTruck from "@/components/icons/IconTruck.vue";
import IconPiggyBank from "@/components/icons/IconPiggyBank.vue";
import IconRefund from "@/components/icons/IconRefund.vue";

const selectedOption = ref('all');
const isLogin = inject("isLogin");
const quantity = ref(0);
const login = () => {
  window.location.href = "/login";
}
const register = () => {
  window.location.href = "/register";
}
const openFacebook = () => {
  window.open("https://facebook.com/xuanlinh.noname");
}
const openPhone = () => {
  window.open("tel:+84367342354");
}
</script>
<style scoped>
.header {
  display: flex;
  background-color: #00A551;
  height: 45px;
  color: white;
  align-items: center;
}

.body {
  position: relative;
  height: 300px;
}

.contact-group {
  display: flex;
  align-items: center;
  position: absolute;
  left: 15%;
}

.user {
  display: flex;
  position: absolute;
  right: 15%;
}

.search-box {
  position: absolute;
  display: flex;
  align-items: center;
  top: 25%;
  left: 50%;
  width: 480px;
  height: 50px;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.category {
  display: flex;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
select {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border-color: #b5aeae;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}
select:focus {
  outline: none;
}
.category:hover {
  cursor: pointer;
}

.search-content {
  position: absolute;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
  width: 200px;
  height: 30px;
  font-size: 18px;
  border: 0;
  outline: none;
}

.icon {
  margin-left: 12px;
  margin-right: 15px;
  transition: transform 0.25s;
}

.text-bold {
  font-weight: 600;
}

.phone-number {
  color: #FF8888;
  font-size: 21px;
  margin-left: 8px;
  padding-bottom: 2px;
}

.separator {
  margin-right: 5px;
  margin-left: 5px;
}

.hover-effect {
  position: relative;
  display: inline-block;
  padding-bottom: 3px;
}

.hover-effect::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: max-content;
  min-width: 100%;
  height: 2px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.hover-effect:hover {
  cursor: pointer;
}

.hover-effect:hover::after {
  transform: scaleX(1);
}

.contact-button {
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
}

.contact-button:hover {
  cursor: pointer;
}

.contact-button:hover .icon {
  transform: translateY(-3px);
}

.dropdown-btn {
  position: absolute;
  right: 5%;
}

.cart {
  position: absolute;
  top: 15%;
  right: calc(50% - 420px);
  transition: transform 0.2s ease-in-out;
}

.cart:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.item-quantity {
  display: flex;
  width: 22px;
  height: 22px;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #fa4141;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: 5px;
}

.benefit-item {
  position: absolute;
  display: flex;
  top: 60%;
  left: 50%;
  align-content: center;
  transform: translate(-50%, -50%);
}

.benefit-container {
  position: relative;
  color: white;
  background-color: #00A551;
  width: 240px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 55px;
  border-radius: 10px;
}

.benefit-text {
  position: absolute;
  font-size: 18px;
  left: 80px;
}

.benefit-icon {
  position: absolute;
  left: 20px;
}
</style>