<script setup>
import Base from "../vbase/Base.vue";
import { ref } from "vue";
import { teams, showUsers } from "@/assets/data/usersData";
const numberOfUsers = 5;
const updatedData = ref(showUsers(teams, numberOfUsers));


//Este objeto lo tenemos como un diccionario el cual nos ayuda a la identificacion de la clase segun la key del item
const roleClasses = {
  Developer: 'developer',
  Support: 'support',
  Designer: 'designer',
  Marketing: 'marketing',
};
//La clase se le asigna según el role
const toggleRequest = (item) => roleClasses[item.role] || '';




</script>
<template>
  <Base
    :format-list="updatedData"
    :name="`nombre`"
    :attribute="`member`"
    :title_attribute="`Member`"
    :card_title="`Teams`"
  >
    <template v-slot:extraButton="{ item }">
      <div class="container">
        <div :class="['state', toggleRequest(item)]">
          <span>{{ item.role }}</span>
        </div>
      </div>
    </template>
  </Base>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.container {
  .state {
    cursor: pointer;
    @include flex-center;
    width: auto;
    padding: 0.525rem;
    height: 30px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    background: $purple-color; // Estilo por defecto
  }
  .developer {
    @include design-developer;
  }
  .support {
    @include design-support;
  }
  .designer {
    @include design-designer;
  }
  .marketing {
    @include design-marketing;
  }

  span {
  }
}
</style>



