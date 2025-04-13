<template>
  <div
    class="upload-container"
    @dragover.prevent
    @dragenter.prevent
    @drop="handleDrop"
  >
    <p>Kéo & thả ảnh vào đây hoặc</p>
    <input
      type="file"
      accept="image/*"
      ref="fileInput"
      @change="handleFileUpload"
      hidden
    />
    <button @click="openFileDialog">Chọn tệp</button>
    <img
      v-if="imagePreview"
      :src="imagePreview"
      alt="Ảnh tải lên"
      class="preview"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const fileInput = ref(null);
const imagePreview = ref(null);
const props = defineProps({
  onFileUpload: Function,
});
const openFileDialog = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  previewImage(file);
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const file = event.dataTransfer.files[0];
  previewImage(file);
};

const previewImage = (file) => {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
    props.onFileUpload(file);
  } else {
    alert("Vui lòng chọn một tệp ảnh hợp lệ!");
  }
};
</script>

<style scoped>
.upload-container {
  width: 243px;
  height: 170px;
  border: 2px dashed #3498db;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  padding: 20px;
}
.upload-container:hover {
  background-color: #f0f8ff;
}
button {
  margin-top: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
.preview {
  margin-top: 10px;
  max-width: 100%;
  max-height: 100px;
  border-radius: 5px;
}
</style>
