<template>
  <div class="category-container">
    <span class="category-title">{{title}}</span>
    <span class="product-list">
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
  </span>
  </div>
</template>
<script setup>
import {defineProps} from "vue";
import ProductItem from "@/components/ProductItem.vue";
defineProps({
  title: {
    type: String,
    default: "PC GAMING INTEL"
  }
})
</script>
<style scoped>
.category-container {
  margin-bottom: 20px;
}
.category-title {
  align-items: center;
  margin-bottom: 12px;
  display: inline-block;
  background-color: #00a450;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 25px;
}
.product-list {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding-bottom: 10px;
}
</style>
