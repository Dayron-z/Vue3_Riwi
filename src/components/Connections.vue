<script setup>
import ConnectionCard from "./ConnectionsCards/ConnectionCard.vue";
</script>

<template>
  <div class="connections">
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
    <ConnectionCard/>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.connections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $general-gap;
}
</style>