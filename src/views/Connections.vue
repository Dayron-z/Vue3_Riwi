<script setup>
import ConnectionCard from "../components/ConnectionsCards/ConnectionCard.vue";
const showCard = 9;
</script>

<template>
  <div class="connections">
    <ConnectionCard v-for="j in showCard" :key="j"/>
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

@media (max-width: 1100px) {
  .connections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}

</style>