<script setup>
import ProfileAbout from "./ProfileCards/ProfileAbout.vue";
import ProfileActivityTimeline from "./ProfileCards/ProfileActivityTimeline.vue";
import ProfileConnection from "./ProfileCards/ProfileConnection.vue";
import ProfileProjecList from "./ProfileCards/ProfileProjecList.vue";
import ProfileTeams from "./ProfileCards/ProfileTeams.vue";
import ProfileOverview from "./ProfileCards/ProfileOverview.vue";
</script>

<template>
  <div class="profile">
    <div class="left-section">
      <ProfileAbout class="profile_about" />
      <ProfileOverview/>
    </div>

    <div class="right-section">
      <ProfileActivityTimeline class="profile_activity_timeline" />

      <div class="min-section">
        <ProfileConnection class="split" />
        <ProfileTeams class="split" />
      </div>
      <ProfileProjecList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";
.profile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left-section {
    width: 25%;
    display: flex;
    flex-direction: column;
    // gap: $general-gap;
  }
  .right-section {
    width: 73%;
    display: flex;
    flex-direction: column;
    // gap: $general-gap;
    .min-section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      display: flex;
    //   gap: $general-gap;
      .split {
        width: 50%;
      }
    }
  }
}
</style>