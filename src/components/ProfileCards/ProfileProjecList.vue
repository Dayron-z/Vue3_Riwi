<script setup>
import ContainerMembers from "../vbase/Container-members.vue";
import { teams, showUsers } from "@/assets/data/usersData";
import { ref } from "vue";
import Progress from "../vbase/Progress.vue";
const numberOfTeams = 3;
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
                :count="numberOfTeams"
              ></ContainerMembers>
            </td>
            <td>
              <div class="percentage-class">
                <Progress :percentage="progress"></Progress>
                <span>%{{ progress }}</span>
              </div>
            </td>
            <td><i class="bi bi-three-dots-vertical"></i></td>
          </tr>
        </tbody>
      </table>
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
}
</style>