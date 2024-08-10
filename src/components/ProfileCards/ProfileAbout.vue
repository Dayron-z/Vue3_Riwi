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
            <li><i class="bi bi-person"></i>Full name:  <span>John Doe</span>   </li>
            <li><i class="bi bi-check2"></i>Status:  <span>Active</span>  </li>
            <li><i class="bi bi-chat-square"></i>Role: <span>Developer</span>  </li>
            <li><i class="bi bi-flag"></i>Country:  <span>COL</span> </li>
            <li><i class="bi bi-translate"></i>Language: <span>English</span> </li>
          </ul>  
        </div>
      </div>
      <div class="section-container">
        <span class="section-label" id="contact-label">CONTACT</span>
        <div id="contact-content" class="section-content">
          <ul>
            <li><i class="bi bi-telephone"></i>Contact:  <span>(123) 456-7890</span>  </li>
            <li><i class="bi bi-chat-left-dots"></i>Skype:  <span>john.doe</span> </li>
            <li><i class="bi bi-envelope"></i>Email: <span>john.doe@example.com</span> </li>
          </ul>  
          <!-- Agrega más contenido relacionado con Contact aquí -->
        </div>
      </div>
      <div class="section-container">
        <span class="section-label" id="about-label">TEAMS</span>
        <div id="team-content" class="section-content">
          <ul>
            <li>Backend developer: <span>(126 members)</span> </li>
            <li>Vue js developer: <span>(98 members)</span> </li>
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