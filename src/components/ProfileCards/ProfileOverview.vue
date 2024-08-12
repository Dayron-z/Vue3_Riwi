<script setup>
</script>

<template>
    <div class="about_container">
      <div class="design">
      </div>
      <div class="section-container">
        <span class="section-label" id="about-label">ABOUT</span>
        <div id="about-content" class="section-content">
          <ul>
            <li><i class="bi bi-person"></i>Task compiled:  <span>13.5K</span>   </li>
            <li><i class="bi bi-check2"></i>Connections:  <span>897</span>  </li>
            <li><i class="bi bi-chat-square"></i>Projects Compiled: <span>146</span>  </li>
          </ul>  
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/styles/variable';
    @import '/src/assets/styles/mixins';
    .about_container{
       @include structure; 
        .section-container{
          .section-label{color: $shadow-color; font-size: $t2;}
          .section-content{
            margin-top: 10px;
            ul{
              display: flex;
              flex-direction: column;
              gap: .756rem;
              list-style: none;
              li{
                display: flex;
                gap: 6px;
                span{
                  font-size: $t3;
                  font-weight: 500;
                }
              }
            }
          }
        }
    }
</style>