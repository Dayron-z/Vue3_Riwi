<script setup>
import { users, showUsers } from "@/assets/data/usersData";
import { ref, defineProps} from "vue";
import ContainerMembers from "../vbase/Container-members.vue";

// Imagenes que deseo mostrar
const numberOfImages = 3;
// Data hasta donde la necesito
const updatedData = showUsers(users, numberOfImages);
// Data restante
const count = ref(users.length - numberOfImages);
//Prop
const prop = defineProps({
  
technologyName: {
    type: String,
    default: "Technology"
  },

  imgSRC: {
    type: String,
    default: "/src/assets/images/defaultTeam.png"
  }


})

</script>

<template>
  <div class="card">
    <div class="header">
      <div class="left-section">
        <img :src="imgSRC" alt="" />
        <h4>{{ technologyName }}</h4>
      </div>
      <div class="right-section">
        <i class="bi bi-star"></i>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>
    <div class="content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        totam esse quaerat odio nemo, ea harum veritatis. Lorem, ipsum dolor.
      </p>
    </div>
    <div class="card-footer">
      <ContainerMembers :format-list="updatedData" :count="count" />
      <div class="buttons-team">
        <div><span>Developer</span></div>
        <slot name="extra-topic"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

@mixin header-sections {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.825rem;
  font-size: $t1;
}

.card {
  @include structure;
  background: $primary-color;

  .header {
    display: flex;
    justify-content: space-between;

    .left-section {
      @include header-sections;

      h4 {
        font-weight: 500;
      }

      img {
        @include div-image-format; 
      }
    }

    .right-section {
      @include header-sections;
      font-size: $icon-size;
    }
  }

  .content {
    color: $shadow-color;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons-team {
        display: flex;
        gap: 5px;
      div {
        @include button-team-style;
        @include design-developer;
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
  }
}
</style>
