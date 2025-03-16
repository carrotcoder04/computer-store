<script setup>
import { ref, defineExpose } from 'vue';

const notifications = ref([]);

const showNotification = (message, color = '#007bff') => {
  const id = Date.now();
  notifications.value.push({ id, message, color });

  setTimeout(() => {
    notifications.value = notifications.value.filter(noti => noti.id !== id);
  }, 2400);
};

defineExpose({ showNotification });
</script>

<template>
  <div class="notifications-container">
    <TransitionGroup name="noti">
      <div
          v-for="noti in notifications"
          :key="noti.id"
          class="notification"
          :style="{ backgroundColor: noti.color }"
      >
        🔔 {{ noti.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.notifications-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.notification {
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.noti-move,
.noti-enter-active,
.noti-leave-active {
  transition: all 0.5s ease;
}
.noti-enter-from,
.noti-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
