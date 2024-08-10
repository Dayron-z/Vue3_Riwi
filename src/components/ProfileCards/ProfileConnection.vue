<script setup>
import { ref } from "vue";
import { users, showUsers } from "@/assets/data/usersData";
const numberOfUsers = 4;
const updatedData = ref(showUsers(users, numberOfUsers));

// Función para hacer toggle al estado de un usuario
const toggleRequest = (item) => {
  item.isRequestSent = !item.isRequestSent;
};
</script>
<template>
  <div class="connections_container">
    <div class="connections_header">
      <span>Connection</span>
      <i class="bi bi-three-dots-vertical"></i>
    </div>
    <div class="connections">
      <div class="connection" v-for="(item, index) in updatedData" :key="index">
        <div class="left-section">
          <div class="user-info">
            <img src="/src/assets/images/man_banner.jpg" alt="" />
            <div class="info">
              <h5>{{ item.nombre }}</h5>
              <p>connections: {{ item.conexiones }}</p>
            </div>
          </div>
          <div class="rigth-section">
            <div
              class="state"
              @click="toggleRequest(item)"
              :class="{ active: item.isRequestSent }"
            >
              <i
                :class="
                  item.isRequestSent ? 'bi bi-person-check' : 'bi bi-person-x'
                "
              ></i>
            </div>
          </div>
        </div>
      </div>
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

  .connections {
    .connection {
      .left-section {
        display: flex;
        justify-content: space-between;

        .user-info {
          gap: 0.625rem;
          display: flex;

          .info {
            h5 {
              align-self: self-start;
              @include subtitle-format;
            }

            p {
              font-size: $t3;
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

          // Estilo por defecto
          background: $purple-color;
          i {
            color: $primary-color;
            font-size: 20px;
          }

          &.active {
            background: $secondary-color; // Color de fondo cuando el estado es activo
          }
        }
      }
    }
  }

  .more-connections {
    color: $purple-color;
    @include flex-center;
  }
}
</style>