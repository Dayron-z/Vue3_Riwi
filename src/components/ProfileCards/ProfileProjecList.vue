<script setup>
import ContainerMembers from "../vbase/Container-members.vue";
import { teams, showUsers } from "@/assets/data/usersData";
import { ref } from "vue";
import Progress from "../vbase/Progress.vue";
const numberOfTeams = 4;
const count = ref(teams.length - numberOfTeams);
const updatedData = showUsers(teams, numberOfTeams);

const progress = ref(50);
</script>
<template>
  <div class="project-list-container">
    <div class="header">
      <span>Project list</span>
      <input type="text" placeholder="Search Project" />
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Project</th>
            <th>Leader</th>
            <th>Team</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in updatedData" :key="index">
            <td><input type="checkbox" /></td>
            <td>
              <div class="left-section">
                <div class="user-info">
                  <img :src="item.foto" alt="" />
                  <div class="info">
                    <!-- Acceso dinámico a las propiedades del objeto item -->
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
            </td>
            <td>Lorem, ipsum.</td>
            <td>
              <ContainerMembers
                :format-list="updatedData"
                :count="count"
              ></ContainerMembers>
            </td>
            <td>
              <div class="percentage-class">
                <Progress :percentage="progress"></Progress>
                <span>%{{ progress }}</span>
              </div>
            </td>
            <td>
              <div class="icon">
                <i class="bi bi-three-dots-vertical"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div class="footer">
      <span>Showing 1 to 5 of 7 entries</span>
      <div class="page-container">
        <div>&lt;&lt;</div>
        <div>&lt;</div>
        <div>1</div>
        <div>2</div>
        <div>&gt;</div>
        <div>&gt;&gt;</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";
.project-list-container {
  @include structure;

  .header {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.1125rem;
      color: $secondary-color;
    }
    input {
      padding: 0.45rem;
      width: 16.25rem;
      height: 2.425rem;
      border-radius: 5px;
      border: 0.0125rem solid $shadow-button-color;
      color: $secondary-color;
      &::placeholder {
        border: none;
        color: #999; // Color del texto del placeholder
        font-style: italic; // Estilo del texto del placeholder
        font-size: 0.9rem; // Tamaño del texto del placeholder
        opacity: 1; // Controla la opacidad (0 es transparente, 1 es opaco)
      }
      &:focus::placeholder {
        color: $secondary-color; // Cambia el color del placeholder cuando el input está en foco
      }
    }
  }
  .table {
    width: 100%;
    table {
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
      width: 100%;
      border-collapse: collapse;

      thead,
      tbody {
        width: 100%;
        background: rgb(255, 255, 255);
      }

      th,
      td {
        padding: 8px;
        text-align: left;
        white-space: pre-wrap; /* Mantiene los saltos de línea */
        word-wrap: break-word; /* Ajusta el texto al ancho disponible */
        .percentage-class {
          justify-content: center;
          width: 7.525rem;
          align-items: center;
          display: flex;
          gap: 10px;
        }
        .icon {
          display: flex;
          justify-content: center;
          padding-right: 1.25rem;
        }
      }

      // Selecciona todas las filas, tanto del encabezado como del cuerpo
      //   thead tr, tbody tr {
      //     &:nth-child(odd) {
      //       background: #000000; // Color para las filas impares
      //     }

      //     &:nth-child(even) {
      //       background: #ececec; // Color para las filas pares
      //     }
      //   }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    .page-container {
      display: flex;
      gap: 5px;
      div {
        @include flex-center;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-color: $shadow-button-color;
      }
    }
  }
}
</style>