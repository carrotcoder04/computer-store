<template>
  <div class="header">
        <span class="contact-group">
            <span @click="openFacebook" class="contact-button" style="width: 120px;">
                <IconFacebook class="icon"/>
                <span class="text-bold">Liên hệ</span>
            </span>
            <span @click="openPhone" class="contact-button" style="margin-left:50px;width: 300px;">
                <IconPhone class="icon"/>
                <span class="text-bold">Kỹ thuật, bảo hành</span>
                <span class="text-bold phone-number">0367342354</span>
            </span>
        </span>
    <span class="user">
            <IconUser style="margin-right: 5px;"/>
            <span v-if="!isLogin">
                <span class="hover-effect">Đăng kí</span>
                <span class="separator">|</span>
                <span class="hover-effect">Đăng nhập</span>
            </span>
            <span v-else class="hover-effect">Mai Xuân Lĩnh</span>
        </span>
  </div>
  <div class="body">
        <span class="search-box">
            <span class="category">
                Tất cả danh mục
                <IconDropdown class="dropdown-btn"/>
            </span>
            <input class="search-content" placeholder="Nhập nội dung tìm kiếm..."/>
        </span>
  </div>
</template>
<script setup>
import {inject} from "vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";

const isLogin = inject("isLogin");
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
  border: 1px solid red;
  height: 300px;
}

.contact-group {
  display: flex;
  align-items: center;
  position: absolute;
  left: 5%;
}

.user {
  display: flex;
  position: absolute;
  right: 5%;
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
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 34px;
  text-indent: -20px;
  transform: translateY(-50%);
  border: 1px solid rgba(88, 88, 88, 0.507);
  border-radius: 10px;
}

.category:hover {
  cursor: pointer;
}

.search-content {
  position: absolute;
  top: 50%;
  right: 8%;
  width: 200px;
  height: 30px;
  font-size: 18px;
  border: 0;
  outline: none;
  transform: translateY(-50%);
}

.icon {
  margin-left: 12px;
  margin-right: 15px;
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

.hover-effect:hover {
  text-decoration: underline;
  cursor: pointer;
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
  animation: moveUp 0.25s;
  animation-fill-mode: forwards;
}

.contact-button:not(:hover) .icon {
  animation: moveDown 0.25s;
  animation-fill-mode: forwards;
}

.dropdown-btn {
  position: absolute;
  right: 5%;
}

@keyframes moveUp {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-3px);
  }
}

@keyframes moveDown {
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>