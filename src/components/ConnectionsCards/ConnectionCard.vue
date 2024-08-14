<script setup>
import { users, showUsers } from "@/assets/data/usersData";
import { ref } from "vue";

// Imagenes que deseo mostrar
const numberOfImages = 3;

// Data hasta donde la necesito
const updatedData = showUsers(users, numberOfImages);

// Data restante
const count = ref(users.length - numberOfImages);
const percentage = ref(80);

//Prop
const prop = defineProps({
  userName: {
    type: String,
    default: "Andres",
  },
  area: {
    type: String,
    default: "UI Designer",
  },

  imgSRC: {
    type: String,
    default: "/src/assets/images/defaultTeam.png",
  },
});
</script>

<template>
  <div class="card">
    <div class="header">
      <i class="bi bi-three-dots-vertical"></i>
    </div>
    <div class="content-main">
      <img :src="imgSRC" alt="" />
      <div class="description">
        <h5>{{ userName }}</h5>
        <span>{{ area }}</span>
      </div>
      <div class="tech-stack">
        <div><span>Developer</span></div>
        <div class="support"><span>Support</span></div>
        <slot name="extra-topic"></slot>
      </div>
    </div>
    <div class="card-footer">
      <div class="info-footer">
        <div>
          <h4>86</h4>
          <span>Projects</span>
        </div>
        <div>
          <h4>12.4k</h4>
          <span>Tasks</span>
        </div>
        <div>
          <h4>890K</h4>
          <span>Connections</span>
        </div>
      </div>
      <div class="buttons-footer">
        <div class="button">
          <i class="bi bi-person-add"></i><span>Connected</span>
        </div>
        <div class="message"><i class="bi bi-envelope"></i></div>
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
    justify-content: flex-end;
  }
  .content-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h5 {
        @include t1;
      }
    }
    .tech-stack {
      display: flex;
      gap: 5px;
      div {
        @include button-team-style;
        @include design-developer;
      }
      .support {
        @include design-support;
      }

      // Aplicar estilos a los elementos dentro del slot usando ::v-deep
      ::v-deep .custom-slot-developer {
        @include button-team-style;
        @include design-developer;
      }

      ::v-deep .custom-slot-support {
        @include button-team-style;
        @include design-support;
      }
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      border: 2px solid $purple-color;
      object-fit: cover;
    }
  }
  .card-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .info-footer {
      display: flex;
      gap: 50px;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .buttons-footer {
      display: flex;
      align-items: center;
      gap: $general-gap;
      .button {
        color: $primary-color;
        gap: 10px;
        font-size: 13px;
        border-radius: 0.425rem;
        background-color: $purple-color;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        i {
          font-size: 20px;
        }
      }
      .message {
        padding: 10px;
        border-radius: 0.425rem;
        color: $secondary-color;
        background: $shadow-button-color;
      }
    }
  }
}
</style>
