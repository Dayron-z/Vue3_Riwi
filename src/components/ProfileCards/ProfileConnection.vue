<script setup>
import Base from '../vbase/Base.vue';
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
  <Base :format-list="updatedData" :name="`nombre`"  :attribute="`conexiones`" :title_attribute="`Conecctions`"  :card_title="`Connections`">
  <template  v-slot:extraButton="{ item }">
    <div
    class="state"
    @click="toggleRequest(item)"
    :class="{active: item.isRequestSent}"
  >
    <i
      :class="
        item.isRequestSent ? 'bi bi-person-check' : 'bi bi-person-x'
      "
    ></i>
  </div>
  </template>
  </Base>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

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
</style>



