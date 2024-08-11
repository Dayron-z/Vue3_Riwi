<script setup>
import BaseLeftSection from "./InfoContainer.vue";
import { defineProps } from "vue";

const props = defineProps({
  card_title: {
    type: String,
    default: "card",
  },
  name: {
    type: String,
    default: "name",
  },
  title_attribute: {
    type: String,
    default: "title",
  },
  attribute: {
    type: String,
    default: "attribute",
  },
  formatList: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="connections_container">
    <div class="connections_header">
      <span>{{ card_title }}</span>
      <i class="bi bi-three-dots-vertical"></i>
    </div>
    <div class="connections">
      <BaseLeftSection
        :formatList="formatList"
        :name="name"
        :title_attribute="title_attribute"
        :attribute="attribute"
      >
        <template v-slot:extraButton="{ item }">
          <slot name="extraButton" :item="item"></slot>
        </template>
      </BaseLeftSection>


    </div>
    <div class="more-connections">
      <p>View all connections</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.connections_container {
  @include structure;
  border: 2px solid $secondary-color;

  .connections_header {
    display: flex;
    justify-content: space-between;
  }

  // .connections {
  //   .connection {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center; // Alinea verticalmente los elementos hermanos

  //     .left-section {
  //       display: flex;
  //       justify-content: space-between;

  //       .user-info {
  //         gap: 0.625rem;
  //         display: flex;

  //         .info {
  //           h5 {
  //             @include subtitle-format;
  //             align-self: start;
  //           }

  //           p {
  //             font-size: $t3;
  //             align-self: start;
  //           }

  //           @include flex-center;
  //           flex-direction: column;
  //         }

  //         img {
  //           @include div-image-format;
  //         }
  //       }
  //     }

  //     .rigth-section {
  //       @include flex-center;

  //       .state {
  //         cursor: pointer;
  //         @include flex-center;
  //         width: 40px;
  //         height: 40px;
  //         border-radius: 5px;
  //         transition: background-color 0.3s ease;
  //         background: $purple-color; // Estilo por defecto

  //         i {
  //           color: $primary-color;
  //           font-size: 20px;
  //         }

  //         &.active {
  //           background: $shadow-button-color;
  //           i {
  //             color: $purple-color;
  //           }
  //           // Color de fondo cuando el estado es activo
  //         }
  //       }
  //     }
  //   }
  // }

  .more-connections {
    color: $purple-color;
    @include flex-center;
  }
}
</style>