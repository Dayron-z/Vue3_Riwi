<script setup>
import { defineProps } from "vue";
const props = defineProps({
  formatList: {
    type: Array,
    default: () => {}
  },
  count: {
    type: Number,
    default: 0
  },
});
</script>
<template>
  <div class="container-members">
    <div v-for="(item, index) in formatList" :key="index">
      <img :src="item.foto" :alt="user" />
    </div>
    <div v-if="count >= 1">+{{ count }}</div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.container-members {
  display: flex;
  div {
    color: $black;
    border: 2px solid $primary-color;
    background: $shadow-button-color;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 100%;
    margin-left: -20px;
    @include flex-center;
  }
  div:first-child {
    margin-left: 0px;
  }
  img {
    border-radius: 100%;
    width: 99%;
    height: 99%;
    object-fit: cover;
  }
}
</style>