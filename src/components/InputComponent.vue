<template>
  <div class="form-group">
    <label>
      {{label}}
    </label>
    <input :type="type" v-model="model">
  </div>
</template>
<script setup>
import {defineProps,defineModel} from "vue";
const model = defineModel();
defineProps({
  label: String,
  type: String,
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
input {
  width: 280px;
  height: 35px;
  border: 2px solid #6b6b77;
  border-radius: 6px;
  font-size: 18px;
  outline: none;
}
</style>