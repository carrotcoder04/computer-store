<template>
  <title>Giỏ hàng</title>
  <HeaderComponent />
  <main>
    <div class="space"></div>
    <div class="container">
      <div class="cart-text">Giỏ hàng</div>
      <div class="shopping-item-container">
        <ShoppingCartItem
          v-for="item in carts.items"
          :key="item.itemId"
          :imgUrl="item.imgUrl"
          :itemId="item.itemId"
          :itemName="item.itemName"
          :on-remove="onRemove"
          :price="item.price"
        />
      </div>
    </div>
    <div class="container">
      <div class="payment-info">
        <span>
          <div class="title">Thông tin người mua</div>
          <div class="info">
            <span>Họ tên</span>
            <input disabled :value="paymentInfo.fullName" />
          </div>
          <div class="info">
            <span>SĐT</span>
            <input disabled :value="paymentInfo.phoneNumber" />
          </div>
          <div class="info">
            <span>Địa chỉ</span>
            <input disabled :value="paymentInfo.address" />
          </div>
        </span>
        <span>
          <div class="title">Phương thức thanh toán</div>
          <div class="payment-method">
            <input type="radio" v-model="option" value="cash-on-bank" />
            <label>Chuyển khoản ngân hàng</label>
          </div>
          <div class="payment-method">
            <input type="radio" v-model="option" value="cash-on-delivery" />
            <label>Thanh toán khi nhận hàng</label>
          </div>
        </span>
        <span>
          <div class="title">Tổng tiền</div>
          <div class="total-amount">
            <span>Tổng cộng</span>
            <span class="price">{{ formatPrice }}</span>
          </div>
          <button>ĐẶT HÀNG</button>
        </span>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";
import { reactive, ref, computed } from "vue";
const total = ref(133003030);
const option = ref("");
const carts = reactive({
  items: [
    {
      itemId: 1,
      imgUrl: "pc/250-1828-keno-mk200.jpg",
      itemName:
        "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
      price: 15939000,
    },
    {
      itemId: 2,
      imgUrl: "pc/250-1828-keno-mk200.jpg",
      itemName:
        "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
      price: 15939000,
    },
    {
      itemId: 3,
      imgUrl: "pc/250-1828-keno-mk200.jpg",
      itemName:
        "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
      price: 15939000,
    },
  ],
});
const paymentInfo = {
  fullName: "Mai Xuân Lĩnh",
  phoneNumber: "0367342354",
  address: "Ngõ 83/58 Tân Triều, Thành Trì, Hà Nội",
};
function onRemove(itemId) {
  carts.items = carts.items.filter((item) => item.itemId !== itemId);
}
const formatPrice = computed(() => {
  return total.value.toLocaleString("vi-VN") + "₫";
});
</script>
<style scoped>
.space {
  padding-top: 30px;
}
.title {
  padding: 10px 5px;
  background-color: #a9a6a68a;
  min-width: 220px;
  font-weight: 500;
}

.payment-info {
  display: flex;
  justify-content: space-around;
}
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}
.total-amount {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.cart-text {
  margin-bottom: 20px;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
  color: #6a6a6a;
}
.price {
  font-weight: 600;
}
input {
  margin-top: 10px;
  width: auto;
  background-color: #f0f0f0;
  height: 35px;
  border: 2px solid #6b6b77;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}
span button {
  padding: 14px;
  margin-top: 20px;
  color: white;
  font-weight: bold;
  background-color: #ec4a46;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}
.info {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.payment-method {
  display: flex;
  align-items: center;
}
.payment-method input {
  margin: 0;
}
.payment-method label {
  margin-left: 20px;
}
.shopping-item-container {
  padding-bottom: 30px;
}
</style>
