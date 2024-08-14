<script setup>
import ProjectCard from "../components/ProjectCards/ProjectCard.vue";
const showCard = 6;
</script>

<template>
  <div class="project" >
    <ProjectCard v-for="j in showCard" :key="j" />
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.project {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $general-gap;
}

@media (max-width: 1600px) {
  .project {
  grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 1100px) {
  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}
</style>