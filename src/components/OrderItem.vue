<template>
  <div class="order-card">
    <img :src="imageUrl" class="image" />
    <span @click="viewProduct" class="product-name">{{ productName }}</span>
    <div class="customer-name">{{ customerName }}</div>
    <div class="payment-method">{{ paymentMethod }}</div>
    <div class="order-date">Ngày đặt hàng: {{ orderDate }}</div>
    <div class="total">Tổng tiền: {{ formatPrice(total) }}</div>
    <div class="action">
      <div>Trạng thái</div>
      <input class="status" type="text" value="Chờ xử lý" />
      <button v-if="isAdmin" class="update">Cập nhật</button>
      <button class="delete">Hủy đơn hàng</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
const isAdmin = inject("isAdmin");
const props = defineProps({
  productId: {
    type: String,
    default: "GAMING2929",
  },
  productName: {
    type: String,
    default: "Core I5 13400F | RTX 3060 12G | Ram 16G | NVME 512G",
  },
  imageUrl: {
    type: String,
    default: "pc/250-1828-keno-mk200.jpg",
  },
  customerName: {
    type: String,
    default: "Nguyễn Hoàng Phát",
  },
  paymentMethod: {
    type: String,
    default: "Thanh toán chuyển khoản",
  },
  orderDate: {
    type: String,
    default: "17/03/2025",
  },
  total: {
    type: Number,
    default: 130303892,
  },
});
const formatPrice = (price) => {
  return price.toLocaleString("vi-VN") + "₫";
};
const viewProduct = () => {
  window.location.href = "/view/" + props.productId;
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
  position: absolute;
  left: 180px;
  top: 35px;
  font-weight: 700;
  text-decoration: underline;
  color: #8b33ff;
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
  top: 20px;
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
</style>
