<script setup>
import ProfileAbout from './ProfileCards/ProfileAbout.vue';
import ProfileActivityTimeline from './ProfileCards/ProfileActivityTimeline.vue';
import ProfileConnection from './ProfileCards/ProfileConnection.vue';
import ProfileProjecList from './ProfileCards/ProfileProjecList.vue';
import ProfileTeams from './ProfileCards/ProfileTeams.vue';


</script>

<template>
    <div class="profile">
        <div class="left-section">
            <ProfileAbout class="profile_about"/>
        </div>

        <div class="right-section">
            <ProfileActivityTimeline class="profile_activity_timeline"/>
            <!-- <div class="min-section">
                <ProfileConnection class="proof"/>
                <ProfileTeams class="proof"/>
            </div> -->
            <ProfileProjecList/>

        </div>

    </div>
</template>

<style lang="scss" scoped>
    .profile{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .left-section{
            width: 25% ;
        }
        .right-section{
            width: 70%;
            .min-section{
                display: flex;
                justify-content: space-between;
                width: 100%;
                display: flex;
                .proof{
                    width: 48%;
                }
            }
        }
    }
</style>