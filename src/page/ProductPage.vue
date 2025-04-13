<template>
  <title>Xem sản phẩm</title>
  <HeaderComponent />
  <main>
    <div class="product-page">
      <h2>Core I5 13400F | RTX 3060 12G | Ram 16G | NVME 512G</h2>
      <div class="rating">
        <span v-for="star in 5" :key="star">⭐</span>
        <span>6 lượt đánh giá</span>
      </div>

      <div class="detail-group">
        <span class="product-image">
          <img :src="imageUrl" alt="PC Gaming" />
        </span>

        <ul class="product-details">
          <li>✅ CPU Intel Core i5 13400F</li>
          <li>✅ Ram 16G</li>
          <li>✅ Ổ cứng NVME 500G</li>
          <li>✅ Card đồ họa RTX 3060 12G</li>
          <li>✅ Main GIGABYTE B760M với DDR4</li>
          <li>✅ Nguồn máy tính AIGO VK650 - 650W</li>
          <li>✅ Tản nhiệt CPU Jumbo CR-1000</li>
          <li>✅ Bảo hành 36 tháng</li>
        </ul>
      </div>

      <div class="price-container">
        <div class="discount-box">
          <strong class="discount-price">14.940.000₫</strong>
          <del class="old-price">15.500.000₫</del>
          <span class="countdown">Kết thúc lúc 23:59:59</span>
        </div>
      </div>

      <button @click="order" class="buy-button">ĐẶT HÀNG NGAY</button>
      <p class="delivery-info">Giao hàng tận nơi</p>
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
defineProps({
  imageUrl: {
    type: String,
    default: "https://hoanglongcomputer.vn/media/product/1828-keno-mk200.jpg",
  },
});
const route = useRoute();
const productId = route.params.id;
console.log(productId);
const order = () => {
  window.location.href = "/cart/" + productId;
};
</script>
<style scoped>
.product-page {
  background: #f1f1f1;
  padding-top: 40px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 30px;
  text-align: center;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.rating {
  font-size: 16px;
  margin-bottom: 10px;
}
.detail-group {
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
}
.product-image img {
  max-width: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-details {
  text-align: left;
  font-size: 14px;
  margin-bottom: 15px;
  list-style: none;
  padding: 0;
}

.product-details li {
  margin-bottom: 5px;
}

.price-container {
  text-align: center;
  margin-bottom: 15px;
}

.discount-box {
  background: #ffebeb;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
}

.discount-price {
  color: #d32f2f;
  font-size: 20px;
  font-weight: bold;
}

.old-price {
  color: #999;
  margin-left: 10px;
}

.countdown {
  display: block;
  font-size: 12px;
  color: #d32f2f;
  margin-top: 5px;
}

.buy-button {
  background: #00a32a;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
}

.buy-button:hover {
  background: #008c24;
}

.delivery-info {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
</style>
