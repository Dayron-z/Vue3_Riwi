<script setup>
import ProjectCard from "../components/ProjectCards/ProjectCard.vue";
import TeamCard from "../components/TeamCards/TeamCard.vue";
</script>

<template>
  <div class="project">
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
</style>