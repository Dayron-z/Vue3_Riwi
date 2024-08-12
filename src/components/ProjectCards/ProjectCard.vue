<script setup>
import { users, showUsers } from "@/assets/data/usersData";
import { ref } from "vue";
import ContainerMembers from "../vbase/Container-members.vue";
import InfoContainer from "../vbase/InfoContainer.vue";
import Progress from "../vbase/Progress.vue";

// Imagenes que deseo mostrar
const numberOfImages = 3;

// Data hasta donde la necesito
const updatedData = showUsers(users, numberOfImages);

// Data restante
const count = ref(users.length - numberOfImages);
const percentage = ref(80 );
</script>

<template>
  <div class="card">
    <div class="header">
      <div class="left-section">
        <img src="/src/assets/images/man_banner.jpg" alt="" />
        <div>
          <h5>Social banners</h5>
          <div><span>Client: </span> <span>Christian Jimenez</span></div>
        </div>
      </div>
      <div class="right-section">
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>
    <div class="content">
      <div class="first-content-section">
        <div class="budget">
          <div><span>$24.k </span> / $18.2k</div>
          <span>Total Budget</span>
        </div>
        <div class="time">
          <div><span>Start Date: </span>/ 14/2/21</div>
          <div><span>Deadline: </span> /28/2/22</div>
        </div>
      </div>
      <div class="text-content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, rerum.
        </p>
      </div>
    </div>
    <hr />
    <div class="project-footer">
      <div class="time-footer">
        <div><span>All hours:</span> 380/244</div>
        <div class="buttons-team">
          <div><span>Developer</span></div>
        </div>
      </div>
      <div class="task-footer">
        <span>Task: 237/420</span>
        <span>{{ percentage }} % completed</span>
      </div>
      <div class="progress-bar-footer">
        <Progress :percentage="percentage" />
      </div>
      <div class="members-and-messages">
        <div class="info-members">
          <ContainerMembers :format-list="updatedData" :count="count" />
          <span>137 members</span>
        </div>
        <div class="messages">
          <i class="bi bi-chat-left-dots"></i>
          <span>15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.card {
  @include structure;
  background: $primary-color;
  .header {
    display: flex;
    justify-content: space-between;
    .left-section {
      display: flex;
      align-items: center;
      gap: 0.825rem;
      img {
        width: 3.25rem;
        height: 3.25rem;
        border-radius: 100%;
      }
      div {
        h5 {
          @include t1;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .first-content-section {
      display: flex;
      justify-content: space-between;
      .budget {
        background: $shadow-button-color;
        padding: 0.425rem 0.625rem;
        border-radius: 5px;
        div {
          span {
            color: $secondary-color;
            font-weight: 500;
          }
        }
      }
      .time {
        div {
          span {
            color: $secondary-color;
            font-weight: 500;
          }
        }
      }
    }
  }

  .project-footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .time-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .buttons-team {
        @include button-team-style;
        @include design-support;
      }
    }
    .task-footer {
      display: flex;
      justify-content: space-between;
    }
    .members-and-messages{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .messages{
        display: flex;
        gap: 10px;
        align-items: center;
        i{
          font-size: $icon-size;
        }
      }
      .info-members{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        color: $shadow-color;
      }
    }
  }
}
</style>
