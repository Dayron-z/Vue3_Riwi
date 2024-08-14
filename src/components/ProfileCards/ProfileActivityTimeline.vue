<script setup>
import {users, showUsers} from '@/assets/data/usersData';
import { ref } from 'vue';
import ContainerMembers from '../vbase/Container-members.vue';

//Imagenes que deseo mostrar
const numberOfImages = 4; 
//Data hasta donde la necesito
const updatedData = showUsers(users, numberOfImages); 
//Data restante
const count = ref(users.length - numberOfImages);
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



        <ContainerMembers :format-list="updatedData" :count="count" />






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
      .image-pdf-container{
        border-radius: 10px;
        background: $shadow-button-color;
        width: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .bi-filetype-pdf{
          height: 80%;
          padding-bottom: 5px;
          font-size: $icon-size ;
          background: rgb(201, 6, 6);
          border-radius: 3px;
          color: rgb(255, 255, 255);
        }
        span{
          color: $secondary-color;
        }
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

    }
  }
}
</style>