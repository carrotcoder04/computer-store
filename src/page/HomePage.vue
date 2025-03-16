<template>
  <title>Trang chủ</title>
  <HeaderComponent/>
  <main>
    <div class="product-list">
      <ProductCategory/>
      <ProductCategory/>
      <ProductCategory/>
      <ProductCategory/>
      <ProductCategory/>
    </div>
  </main>
  <FooterComponent/>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProductCategory from "@/components/ProductCategory.vue";

</script>
<style scoped>
.product-list {
  padding-left: max(50px,calc(50% - 960px));
  padding-top: 20px;
  padding-bottom: 40px;
}
</style>