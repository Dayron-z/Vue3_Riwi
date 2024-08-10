<script setup>
import {users, showUsers} from '@/assets/data/usersData';
import { ref } from 'vue';

//Imagenes que deseo mostrar
const numberOfImages = 3; 
//Data hasta donde la necesito
const updatedData = showUsers(users, numberOfImages); 
//Data restante
const count = ref(users.length - numberOfImages); 

console.log(count);




console.log(updatedData);
</script>
<template>
  <div class="activity-container">
    <div class="header">
      <span>Activty Timeline</span>
    </div>
    <div class="invoice flex">
      <div class="content">
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="image-pdf-container">
            <i class="bi bi-filetype-pdf"></i> <span>invoice.pdf</span>
        </div>
      </div>
      <span>12 min ago</span>
    </div>
    <div class="meeting flex">
      <div class="content">
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="client-container">
           <img src="/src/assets/images/man_banner.jpg" alt="" />
          <div class="info-client">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <span>12 min ago</span>
    </div>
    <div class="new-project flex">
      <div class="content">
        <h5>Lorem ipsum dolor sit amet.</h5>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div class="container-members">
          <div v-for="(item , index) in updatedData" :key="index"><img :src="item.foto" :alt="user" /></div>
          <div>+{{ count }}</div>
        </div>
      </div>
      <span>12 min ago</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/variable";
@import "/src/assets/styles/mixins";

.activity-container {
  @include structure;
  .header {
    span {
      font-size: $t1;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    .content {
      display: flex;
      color: $shadow-color;
      flex-direction: column;
      gap: 6.8px;
      h5 {
        @include subtitle-format; 
      }
      .client-container{
        display: flex;
        gap: 20px;  
        img{
            width: 3.25rem;
            height: 3.25rem;
            border-radius: 100%;
        }
      }
      .container-members {
        display: flex;
        div {
          border: 2px solid $primary-color;
          background: $secondary-color;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 100%;
          margin-left: -20px; 
          @include flex-center;
        }
        div:first-child{
            margin-left: 0px;
        }
        img {
          border-radius: 100%;
          width: 99%;
          height: 99%;
        }
      }
    }
  }
}
</style>