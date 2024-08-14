<script setup>
import { ref, computed } from "vue";

const input = ref('');

const isInputEmpty =  computed(() => input.value === '');
</script>
<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <i class="bi bi-search search-icon"></i>
      <input
        type="text"
        placeholder="Search"
        class="search-input"
        v-model="input"
      />
      <i class="bi bi-explicit right-icon" v-if="isInputEmpty"></i>
    </div>

    <div class="right-icons">
      <a href="#translate">
        <i class="bi bi-translate"></i>
      </a>
      <a href="#sun">
        <i class="bi bi-sun"></i>
      </a>
      <a href="#boxes">
        <i class="bi bi-boxes"></i>
      </a>
      <a href="#bell">
        <i class="bi bi-bell"></i>
      </a>
      <a href="#person">
        <i class="bi bi-person-circle"></i>
      </a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
@import "@/assets/styles/mixins.scss";

.search-bar {
  padding: 0px 2.5rem;
  width: 100%;
  height: 3.125rem;
  background-color: $primary-color;
  border-radius: 5px;
  @include box-shadow($shadow-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;

    .search-input {
      padding: 0 2.5rem 0 3rem;
      border: none;
      outline: none;
      font-size: 1rem;
      background-color: $primary-color;
      border-radius: 0.25rem;
      height: 2rem;
      flex: 1;
      max-width: 100%;
    }

    .search-input:focus + .right-icon {
      opacity: 0;
    }
  }

  .search-icon {
    position: absolute;
    left: 0.625rem;
    color: $secondary-color;
    font-size: 1.25rem;
  }

  .right-icon {
    position: absolute;
    left: 110px;
    top: 5px;
    color: $secondary-color;
    font-size: 16px;
  }

  .right-icons {
    display: flex;
    align-items: center;

    a {
      margin-left: 1rem;
      color: $secondary-color;
      text-decoration: none;

      i {
        font-size: 1.25rem;
      }
    }
  }
}

@media (max-width: 750px) {
  .search-bar {
    .right-icons {
      display: none;
    }
  }
}
</style>
