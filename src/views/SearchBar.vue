<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <i class="bi bi-search search-icon"></i>
      <input type="text" placeholder="Search" class="search-input" />
      <i class="bi bi-explicit right-icon"></i>
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

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
@import '@/assets/styles/mixins.scss'; 


.search-bar {
  padding: 0px 2.5rem;
  width: 100%;
  height: 3.125rem;
  background-color:$primary-color;
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
  }

  .search-icon {
    position: absolute;
    left: .625rem;
    color: $secondary-color;
    font-size: 1.25rem;
  }

  .search-input {
    padding: 0 2.5rem 0 3rem; 
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: $primary-color;
    border-radius: .25rem;
    height: 2rem;
    flex: 1;
  }

  .right-icon {
    position: absolute;
    left: 110px;
    top: 8px;
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
</style>
