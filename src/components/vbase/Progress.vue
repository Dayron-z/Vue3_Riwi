<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: `${percentage}%` }"></div>
  </div>
</template>
  
  <script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
});

const percentage = ref(props.percentage);
</script>


<style scoped lang="scss">
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.progress-bar {
  position: relative;
  width: 100%;
  background-color: $shadow-button-color  ;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 0.4375rem;
  background-color: $purple-color;
  transition: width 0.3s ease;
}

.progress-bar__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
  