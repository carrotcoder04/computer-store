<template>
    <div class="feature-container">
      <span class = "feature-item">
        <IconTruck color="#00A851FF"/>
        <span class = "feature-text">
          <span class = "feature-title">GIAO HÀNG TOÀN QUỐC</span>
          <span class = "feature-description">Giao hàng trước trả tiền sau COD</span>
        </span>
      </span>
      <span class = "feature-item">
          <IconPiggyBank color="#00A851FF"/>
        <span class = "feature-text">
          <span class = "feature-title">ĐỔI TRẢ DỄ DÀNG</span>
          <span class = "feature-description">Đổi mới trong 30 ngày đầu</span>
        </span>
      </span>
      <span class = "feature-item">
        <IconPayment color="#00A851FF"/>
        <span class = "feature-text">
          <span class = "feature-title">THANH TOÁN TIỆN LỢI</span>
          <span class = "feature-description">Trả tiền mặt,chuyển khoản, trả góp 0%</span>
        </span>
      </span>
  </div>
</template>
<style scoped>
.feature-container {
  display: flex;
  padding-top: 20px;
  padding-bottom: 80px;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.test {
  color: #00a851;
}
.feature-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.feature-text {
  display: flex;
  flex-direction: column;
}
.feature-title {
  font-weight: bold;
  font-size: 16px;
}
.feature-description {
  font-size: 14px;
  color: gray;
}
</style>
<script setup>
import IconTruck from "@/components/icons/IconTruck.vue";
import IconPiggyBank from "@/components/icons/IconPiggyBank.vue";
import IconPayment from "@/components/icons/IconPayment.vue";
</script>