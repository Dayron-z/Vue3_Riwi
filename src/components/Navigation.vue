<script setup>
// Recibir la prop de la sección activa (La cual se nos proporciona)
defineProps ({
  activeSection: String
});
</script>

<template>
  <div class="buttons-container">
    <button 
      @click="$emit('changeSection', 'profile')" 
      :class="{ active: activeSection === 'profile' }"
    >
      <i class="bi bi-person-check"></i> <span>Profile</span>
    </button>
    <button 
      @click="$emit('changeSection', 'team')" 
      :class="{ active: activeSection === 'team' }"
    >
      <i class="bi bi-people"></i> <span>Team</span>
    </button>
    <button 
      @click="$emit('changeSection', 'projects')" 
      :class="{ active: activeSection === 'projects' }"
    >
      <i class="bi bi-box"></i> <span>Projects</span>
    </button>
    <button 
      @click="$emit('changeSection', 'connections')" 
      :class="{ active: activeSection === 'connections' }"
    >
      <i class="bi bi-link-45deg"></i> <span>Connections</span>
    </button>
  </div>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
@import '@/assets/styles/mixins.scss'; 



.buttons-container {
  display: flex;
  gap: 20px;

  button {
    border: none;
    background-color: transparent;
    gap: 20px;
    padding: 0.225rem;
    transition: background-color 0.3s ease;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &.active {
      background-color: $purple-color; /* Color de fondo del botón activo */
      color: #fff; /* Color del texto del botón activo */
    }
  }
}
</style>

