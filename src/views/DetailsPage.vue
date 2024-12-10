<template>
    <div class="container py-5 text-center">
      <h1>Détails de l'utilisateur</h1>
      <div class="card mx-auto mt-4" style="max-width: 400px;">
        <div class="card-body">
          <h5 class="card-title">Identifiant : {{ id }}</h5>
          <p class="card-text">
            Voici une description de l'utilisateur ayant l'identifiant <strong>{{ id }}</strong>.
          </p>
          <router-link to="/lesson-router" class="btn btn-secondary">
            Retour à la liste
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    id: {
      type: [String, Number],
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  </style>
  