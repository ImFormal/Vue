<template>
    <div class="container py-5">
      <h1 class="text-center mb-4">Liste des utilisateurs</h1>
      <p class="text-center text-muted">
        Cliquez sur un utilisateurs pour voir les détails.
      </p>
      <ul class="list-group">
        <li v-for="item in items" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center custom-item">
          <span class="item-name">{{ item.name }}</span>
          <router-link :to="{ name: 'Details', params: { id: item.id } }" class="btn btn-primary btn-sm">Voir les détails</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const items = ref([
    { id: 1, name: "Steven-Vandamme" },
    { id: 2, name: "Jean-Luc Godard" },
    { id: 3, name: "BicVeleda" },
    { id: 4, name: "Savage Henry" },
  ]);
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  
  ul.list-group {
    border: 1px solid #dee2e6; 
    border-radius: 5px; 
    padding:0;
  }

  li.custom-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s ease;
    padding: 10px 15px; /* Ajuster l'espacement interne */
    border-bottom: 1px solid #dee2e6; /* Séparateur entre les éléments */
    list-style-type: none; /* Supprimer les puces */
    }

    li.custom-item:last-child {
        border-bottom: none; /* Pas de bordure pour le dernier élément */
    }

    .item-name {
        font-weight: 500;
        color: #495057;
        margin-right: 15px; /* Espacement entre le nom et le bouton */
        flex-grow: 1; /* Le texte prend tout l'espace disponible */
    }
  
  .btn-primary {
    background-color: #007bff; 
    border-radius: 5px;
    color:white;
    padding:5px;
  }
  </style>