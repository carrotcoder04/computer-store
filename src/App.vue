<template>
  <router-view></router-view>
</template>
<script setup>
import { ref, provide } from "vue";

const isLogin = ref(localStorage.getItem("isLogin"));
const isAdmin = ref(true);
provide("isLogin", isLogin);
provide("isAdmin", isAdmin);
</script>
