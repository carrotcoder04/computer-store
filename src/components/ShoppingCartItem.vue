<template>
<div class="container">
  <input type="checkbox">
  <img :src="imageUrl" class="item-image" alt="">
  <span class="item-name">{{itemName}}</span>
  <span class="price">{{formatPrice(price)}}</span>
  <IconDelete @click="onRemove(itemId)" class="delete"/>
</div>
</template>
<script setup>
import {defineProps} from 'vue'
import IconDelete from "@/components/icons/IconDelete.vue";
  defineProps({
    itemId: Number,
    onRemove: Function,
    imageUrl: {
      type: String,
      default: 'https://hoanglongcomputer.vn/media/product/1828-keno-mk200.jpg'
    },
    itemName: {
      type: String,
      default: 'Core I5 13400F | RTX 2060 Super 8G |Ram 16G | NVME 512G |  Màn 24 inch (Wifi / Bluetooth)',
    },
    price: {
      type: Number,
      default: 15939000,
    }
  });
const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + '₫';
}
</script>
<style scoped>
.container {
  display: flex;
}
.item-name {
  max-width: 650px;
  text-align: left;
}
.item-image {
  width: 200px;
}
.delete {
  margin:auto;
  transition: transform 0.5s;
  cursor: pointer;
}
.delete:hover {
  transform: scale(1.2);
}
.price {
  margin:auto;
  padding-right: 20px;
  font-weight: 500;
}
</style>