<template>
    <HeaderComponent />
    <main>
        <div>User</div>
        <router-view></router-view>
    </main>
    <FooterComponent />
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>