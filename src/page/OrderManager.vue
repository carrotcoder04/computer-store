<template>
  <title>Quản lý đơn hàng</title>
  <HeaderComponent />
  <main>
    <div class="space"></div>
    <div class="container">
      <div class="welcome">Quản lý đơn hàng</div>
      <div class="order-list">
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import OrderItem from "@/components/OrderItem.vue";
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
