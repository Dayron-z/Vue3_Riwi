<script setup>
import Button from '@/components/vbase/Button.vue';





</script>
<template>
  <div class="banner_container">
    <div class="banner_up">
      <img src="/src/assets/images/colour_banner.jpg" alt="colour_banner" />
    </div>
    <div class="banner_down">
      <div class="left_secction">
        <div class="profile_image">
          <img src="/src/assets/images/man_banner.jpg" alt="" />
        </div>
        <div class="info_secction">
          <div class="name">
            <h3>John Doe</h3>
          </div>

          <div class="profile_info">
            <h5><i class="bi bi-palette"></i> <span>Coder</span></h5>
            <h5><i class="bi bi-geo-alt"></i><span>Medellin</span></h5>
            <h5>
              <i class="bi bi-calendar4"></i><span>Joined April 2021</span>
            </h5>
          </div>
        </div>
      </div>

      <div class="rigth_secction">
       <Button/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins";
@import "@/assets/styles/variable";

.banner_container {
  height: 23.5rem;
  border-radius: 10px;
  background-color: $primary-color;
  justify-content: space-between;
  align-items: center;
  .left_secction {
    display: flex;
  }
  .banner_up {
    height: 68%;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .banner_down {
    display: flex;
    height: 32%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0rem 3.125rem 0.9375rem 3.125rem;
    .left_secction {
      gap: 35px;
      .profile_image {
        border-radius: 0.25rem;
        background: $primary-color;
        z-index: 2;
        display: flex;
        justify-content: center;
        height: 8rem;
        align-items: center;
        img {
          align-self: center;
          object-fit: cover;
          height: 8.375rem;
          width: 94%;
          height: 94%;
        }
      }

      .info_secction {
        color: $shadow-color;
        padding-top: 2.125rem;
        align-self: center;
        .name h3 {
          color: $secondary-color;
          font-weight: 500;
          font-size: 21px;
        }
        .profile_info {
          margin-top: 1.25rem;
          display: flex;
          gap: 25px;
          i {
            font-size: medium;
            margin-right: 0.55rem;
          }
        }
      }
    }
    .rigth_secction {
    }
  }
}

@media (max-width: 800px) {
  .banner_container {
    height: 28.5rem;
    .banner_up {
      height: 20%;
    }
    .banner_down {
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.125rem;
      .left_secction {
        display: flex;
        flex-direction: column;
        .info_secction {
          order: 0;
        }
        .profile_image {
          order: 1;
          height: 30%;
          img {
            object-fit: contain;
            border-radius: 10px;
            width: 6.125rem;
          }
        }
        .info_secction {
          text-align: center;
          .profile_info {
            h5 {
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
