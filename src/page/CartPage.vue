<template>
  <title>Trang chủ</title>
  <HeaderComponent/>
  <main>
    <div class="space"></div>
    <div class="container">
      <div class="cart-text">Giỏ hàng</div>
      <div class="shopping-item-container">
        <ShoppingCartItem v-for="item in carts.items" :key="item.itemId"
                          :imgUrl="item.imgUrl" :itemId="item.itemId"
                          :itemName="item.itemName" :on-remove="onRemove"
                          :price="item.price"/>
      </div>
    </div>
    <div class="container">

    </div>
  </main>
  <FooterComponent/>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";
import {reactive} from "vue"

const carts = reactive({
      items:
          [
            {
              itemId: 1,
              imgUrl: "pc/250-1828-keno-mk200.jpg",
              itemName: "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
              price: 15939000
            },
            {
              itemId: 2,
              imgUrl: "pc/250-1828-keno-mk200.jpg",
              itemName: "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
              price: 15939000
            },
            {
              itemId: 3,
              imgUrl: "pc/250-1828-keno-mk200.jpg",
              itemName: "Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)",
              price: 15939000
            }
          ]
    });

function onRemove(itemId) {
  carts.items = carts.items.filter(item => item.itemId !== itemId);
}
</script>
<style scoped>
.space {
  padding-top: 30px;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.cart-text {
  margin-bottom: 20px;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
  color: #6a6a6a;
}

.shopping-item-container {
  padding-bottom: 30px;
}
</style>