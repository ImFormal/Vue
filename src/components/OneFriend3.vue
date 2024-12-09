<template>
    <div class="friend-card">
      <h2>{{ unAmiName }} {{ premium === 'abc' ? 'Ami premium' : 'Ami nul' }}</h2>
      <p><strong>Téléphone :</strong> {{ unAmiPhone }}</p>
      <p><strong>Email :</strong> {{ unAmiMail }}</p>
      <button @click="afficherDetails = !afficherDetails">
        {{ afficherDetails ? 'Masquer Détails' : 'Voir Détails' }}
      </button>
      <div v-if="afficherDetails">
        <p>Détails : {{ premium }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      unAmiName: {
        type: String,
        required: true,
      },
      unAmiPhone: {
        type: String,
        required: true,
      },
      unAmiMail: {
        type: String,
        required: true,
      },
      premium: {
        type: String,
        default: '0',
        validator: (value) => value === 'abc' || value === 'xyz',
      },
    },
    data() {
      return {
        afficherDetails: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .friend-card {
    border: 2px solid #cce7ff;
    background-color: #eaf4ff;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    text-align: center;
  }
  </style>
  