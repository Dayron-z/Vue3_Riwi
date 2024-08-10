<script setup>
import { ref } from "vue";
import { users, showUsers } from "@/assets/data/usersData";
const numberOfUsers = 5;
const updatedData = ref(showUsers(users, numberOfUsers));

// Función para hacer toggle al estado de un usuario

// 3. ¿Por qué es booleano?:
// El operador ! (negación lógica) convierte el valor en su opuesto booleano.
// Si item.isRequestSent no existía antes, su valor inicial sería undefined. Al aplicar ! a undefined, se convierte en true.
// Después, cuando vuelvas a ejecutar la misma línea, item.isRequestSent ya tendrá un valor booleano (true o false), y el operador ! cambiará ese valor al opuesto.
const toggleRequest = (item) => {
  item.isRequestSent = !item.isRequestSent;
  console.log(item);
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
  }

  .more-connections {
    color: $purple-color;
    @include flex-center;
  }
}
</style>