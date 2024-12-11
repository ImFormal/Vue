<template>
    <div class="container my-3">
      <h3>Ajouter un nouvel ami</h3>
      <form @submit.prevent="submitForm" class="form-group">
        <input v-model="enteredName" type="text" class="form-control my-2" placeholder="Nom" required />
        <input v-model="enteredPhone" type="text" class="form-control my-2" placeholder="Téléphone" required />
        <input v-model="enteredMail" type="email" class="form-control my-2" placeholder="Email" required />
        <button type="submit" class="btn btn-success mt-2">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  // Définir les événements émis
  const emit = defineEmits(['add-ami']);
  
  // Références pour les données du formulaire
  const enteredName = ref('');
  const enteredPhone = ref('');
  const enteredMail = ref('');
  
  // Fonction pour émettre l'événement lors de la soumission
  function submitForm() {
    emit('add-ami', {
      name: enteredName.value,
      phone: enteredPhone.value,
      email: enteredMail.value
    });
  
    // Réinitialiser les champs après l'envoi
    enteredName.value = '';
    enteredPhone.value = '';
    enteredMail.value = '';
  }
  </script>
  