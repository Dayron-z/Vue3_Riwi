<script setup>
import ConnectionCard from "../components/ConnectionsCards/ConnectionCard.vue";
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

@media (max-width: 1600px) {
  .connections {
  grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 1000px) {
  .connections {
  grid-template-columns: repeat(1, 1fr);
}
}

</style>