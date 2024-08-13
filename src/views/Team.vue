<script setup>
import TeamCard from "../components/TeamCards/TeamCard.vue";
import { teams } from "@/assets/data/usersData";
</script>

<template>
  <div class="team">
    <TeamCard v-for="(team, index) in teams" :key="index"  :technology-name="team.nombre" :img-s-r-c="team.foto" />
    <TeamCard>
      <template v-slot:extra-topic>
        <div class="custom-slot-support"><span>Support</span></div>
      </template>
    </TeamCard>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.team {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $general-gap;
}
</style>