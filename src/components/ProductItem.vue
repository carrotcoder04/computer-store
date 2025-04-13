<template>
  <span class="product-container">
    <div class="product-item">
      <IconEdit v-if="isAdmin" class="icon-edit" @click="editProduct" />
      <img :src="imageUrl" @click="viewProduct" alt="" class="product-image" />
      <div class="product-id">Mã sản phẩm: {{ productId }}</div>
      <div class="product-title">{{ productName }}</div>
      <div class="product-price">{{ formatPrice(price) }}</div>
      <div>
        <span class="original-price">{{ formatPrice(originalPrice) }}</span>
        <span class="discount">-{{ discount }}%</span>
      </div>
      <div>
        <span v-if="inStock" class="in-stock">
          <span class="align-element-center">
            <IconCheck />
            <span style="color: #0fae80">Còn hàng</span>
          </span>
          <span @click="addToCart" class="align-element-center add-to-cart">
            <IconCartNoFill />
            <span>Thêm vào giỏ</span>
          </span>
        </span>
        <span v-else class="out-of-stock">
          <IconClose />
          Hết hàng
        </span>
      </div>
    </div>
  </span>
</template>
<script setup>
import { defineProps, inject } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import IconClose from "@/components/icons/IconClose.vue";
import IconCartNoFill from "@/components/icons/IconCartNoFill.vue";
import IconEdit from "@/components/icons/IconEdit.vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: "pc/250-1828-keno-mk200.jpg",
  },
  productId: {
    type: String,
    default: "GA2923",
  },
  productName: {
    type: String,
    default:
      "Core I5 13400F | RTX 2060 6G |Ram 16G | NVME 512G (Wifi / Bluetooth)",
  },
  price: {
    type: Number,
    default: 13200000,
  },
  originalPrice: {
    type: Number,
    default: 14000000,
  },
  discount: {
    type: Number,
    default: 3,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});
const formatPrice = (price) => {
  return price.toLocaleString("vi-VN") + "₫";
};
const editProduct = () => {
  window.location.href = "/edit-product/" + props.productId;
};
const viewProduct = () => {
  window.location.href = "/view/" + props.productId;
};
const addToCart = () => {
  window.location.href = "/cart/" + props.productId;
};
const isAdmin = inject("isAdmin");
</script>
<style scoped>
.product-container {
  position: relative;
  border-radius: 5px;
}
.icon-edit {
  position: absolute;
  cursor: pointer;
  right: 10px;
}
.align-element-center {
  display: flex;
  align-items: center;
}
.product-id {
  display: flex;
  background-color: #e4e1e1;
  padding-left: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 5px;
}

.product-item {
  width: 224px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  transition: 0.3s;
}

.product-item:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

.product-image {
  width: 80%;
  cursor: pointer;
  height: auto;
  border-radius: 5px;
}

.product-title {
  font-size: 16px;
  word-wrap: break-word;
  margin-top: 10px;
}

.product-price {
  font-size: 18px;
  color: #000000;
  font-weight: bold;
  margin-top: 5px;
}
.add-to-cart {
  cursor: pointer;
}
.in-stock {
  display: flex;
  align-items: center;
  gap: 18px;
}

.out-of-stock {
  display: flex;
  color: #ff2424;
  align-items: center;
}

.original-price {
  font-size: 15px;
  color: #636262;
  text-decoration: line-through;
}

.discount {
  margin-left: 10px;
  color: #ff0000;
  font-weight: bold;
}
</style>
