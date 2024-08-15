<script setup>
import { ref } from "vue";
const isActive = ref(false);
const buttonText = ref("Connected");
const toggleActive = () => {
  isActive.value = !isActive.value;
  buttonText.value = isActive.value ? "Disconnected" : "Connected";
};
</script>
<template>
  <div class="button" :class="{ active: isActive }" @click="toggleActive">
    <i class="bi bi-person-check"></i> <span>{{ buttonText }}</span>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins";
@import "@/assets/styles/variable";

.button {
  cursor: pointer;
  color: $primary-color;
  gap: 10px;
  font-size: 13px;
  border-radius: 10px;
  background-color: $purple-color;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  i {
    font-size: 20px;
  }
}

.button.active {
  background-color: $shadow-color;
  transition: 0.3ms;
}
</style>