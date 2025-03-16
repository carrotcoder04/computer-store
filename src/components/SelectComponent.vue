<template>
  <div class="form-group">
    <label>
      {{label}}
    </label>
    <select v-model="model">
      <option v-for="item in options" :key="item.value" :value="item.value">{{item.label}}</option>
    </select>
  </div>
</template>
<script setup>
import {defineProps,defineModel} from "vue";
const model = defineModel();
defineProps({
  label: String,
  options: {
    type: Array,
  }
})
</script>
<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
label {
  font-size: 18px;
}
select {
  width: 285px;
  height: 40px;
  border: 2px solid #6b6b77;
  border-radius: 6px;
  font-size: 18px;
  outline: none;
}
</style>