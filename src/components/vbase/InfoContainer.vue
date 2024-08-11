<script setup>
import { defineProps } from "vue";

const props = defineProps({
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
    default: () => []
  },
});
</script>

<template>
  <div class="connection" v-for="(item, index) in formatList" :key="index">
    <div class="left-section">
      <div class="user-info">
        <img :src="item.foto" alt="" />
        <div class="info">
          <!-- Acceso dinámico a las propiedades del objeto item -->
          <h5>{{ item[name] }}</h5>
          <p>{{ item[attribute] }} {{ title_attribute }}</p>
        </div>
      </div>
    </div>
    <div class="rigth-section" v-if="$slots.extraButton">
      <!-- Inyección del contenido del slot -->
      <slot name="extraButton" :item="item"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";
    .connection {
      display: flex;
      justify-content: space-between;
      align-items: center; // Alinea verticalmente los elementos hermanos

      .left-section {
        display: flex;
        justify-content: space-between;

        .user-info {
          gap: 0.625rem;
          display: flex;

          .info {
            h5 {
              @include subtitle-format;
              align-self: start;
            }

            p {
              font-size: $t3;
              align-self: start;
            }

            @include flex-center;
            flex-direction: column;
          }

          img {
            @include div-image-format;
          }
        }
      }

      .rigth-section {
        @include flex-center;

        .state {
          cursor: pointer;
          @include flex-center;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          background: $purple-color; // Estilo por defecto

          i {
            color: $primary-color;
            font-size: 20px;
          }

          &.active {
            background: $shadow-button-color;
            i {
              color: $purple-color;
            }
            // Color de fondo cuando el estado es activo
          }
        }
      }
    }
</style>