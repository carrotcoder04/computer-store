<template>
  <router-view></router-view>
</template>
<script setup>
import {ref, provide} from "vue";

const isLogin = ref(false);
const isAdmin = ref(false);
provide("isLogin", isLogin);
provide("isAdmin", isAdmin);
</script>