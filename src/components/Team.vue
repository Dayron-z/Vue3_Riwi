<script setup>
import TeamCard from "./TeamCards/TeamCard.vue";
</script>

<template>
  <div class="team">
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard>
      <template v-slot:extra-topic>
        <div class="custom-slot-support"><span>Support</span></div>
      </template>
    </TeamCard>
    <TeamCard>
      <template v-slot:extra-topic>
        <div class="custom-slot-support"><span>Support</span></div>
      </template>
    </TeamCard>
    <TeamCard />
    <TeamCard />
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