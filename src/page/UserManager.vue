<template>
  <title>Quản lý người dùng</title>
  <HeaderComponent />
  <main>
    <div class="space"></div>
    <div class="container">
      <div class="welcome">Quản lý người dùng</div>
      <div class="order-list">
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
        <UserComponent></UserComponent>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import UserComponent from "@/components/UserComponent.vue";
</script>
<style scoped>
.space {
  padding: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 90px;
  background-color: white;
}
.welcome {
  font-size: 40px;
  font-weight: 600;
  color: #5e5e5e;
}

.order-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
