<template>
    <div class="container mt-5 text-center">
      <h1 class="display-4 text-primary">Compteur de mensonges ou excuses bidons des CDA Bratisla Bios avec Pinia</h1>
      <p class="fs-5">Gérez un compteur avec l'état global fourni par Pinia.</p>
  
      <!-- Affichage du compteur -->
      <div class="my-4">
        <h2 class="text-success">{{ counterStore.count }}</h2>
      </div>
  
      <!-- Boutons d'action utilisez les fonction qu'on a dans le counterStore -->
      <div class="btn-group">
        <button class="btn btn-primary" @click="counterStore.increment">Incrémenter</button>
        <button class="btn btn-danger" @click="counterStore.decrement">Décrémenter</button>
        <button class="btn btn-secondary" @click="counterStore.reset">Réinitialiser</button>
      </div>
    </div>
  </template>
  
  <script setup lang='js'>
  import { useCounterStore } from '../store/counter';
  const counterStore = useCounterStore();
  </script>
  
  <style scoped lang="css">
  h2 {
    font-size: 4rem;
  }
  .btn-group button {
    margin: 0 0.5rem;
  }
  </style>