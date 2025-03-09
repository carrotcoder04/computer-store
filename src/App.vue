<template>
  <router-view></router-view>
</template>
<script setup>
import {ref, provide} from "vue";

const isLogin = ref(false);
provide("isLogin", isLogin);
</script>