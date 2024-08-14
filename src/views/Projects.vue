<script setup>
import ProjectCard from "../components/ProjectCards/ProjectCard.vue";
import TeamCard from "../components/TeamCards/TeamCard.vue";
const showCard = 9;
</script>

<template>
  <div class="project" v-for="j in showCard" :key="j">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
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