<template>
  <router-view></router-view>
</template>
<script setup>
import {ref, provide} from "vue";

const isLogin = ref(true);
provide("isLogin", isLogin);
</script>