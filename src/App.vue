<script setup>
import { ref } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchBar from "./components/SearchBar.vue";
import Banner from './components/Banner.vue';
import Profile from './components/Profile.vue';
import Navigation from './components/Navigation.vue';
import Projects from './components/Projects.vue';

// Definir estado reactivo
const activeSection = ref('profile');

const changeSection = (section) => {
  activeSection.value = section;
};
</script>

<template>
   <main class="main">
    <section class="principal_section">
      <SearchBar />
      <Banner />
      
      <!-- Pasar la sección activa como prop al componente de navegación -->
      <Navigation :activeSection="activeSection" @changeSection="changeSection" />
      
      <!-- Mostrar la sección activa -->
      <div v-if="activeSection === 'profile'">
        <Profile />
        <banner/>
        <banner/>
      </div>
      <div v-if="activeSection === 'team'">
        <Team />
      </div>
      <div v-if="activeSection === 'projects'">
        <Projects />
      </div>
      <div v-if="activeSection === 'connections'">
        <Connections />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
/* Aquí puedes agregar tus estilos SCSS */
</style>
