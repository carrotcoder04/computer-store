<template>
  <div class="dropdown-container">
    <ul v-show="isOpen" class="dropdown-list">
        <li v-for="(item,index) in items" :key="index" @click="item.onClick">{{item.text}}</li>
    </ul>
  </div>
</template>

<script setup>
import {ref, defineProps, defineExpose} from "vue";
defineProps({
  items: [],
})
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
defineExpose({ toggleDropdown });

</script>

<style scoped>
.dropdown-container {
  z-index: 10;
  position: relative;
  display: inline-block;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 5px 0;
  width: 160px;
  text-align: left;
}

.dropdown-list li {
  padding: 10px;
  color: black;
  cursor: pointer;
}
.dropdown-list li:hover {
  background: #f0f0f0;
}
</style>
