<template>
  <div class="container my-1 p-3">
      <ul class="list-group">
          <h2 class="list-group-item">{{ unAmiName }} {{ premiumData ? 'Ami premium' : 'Ami nul' }}</h2> 
          <button @click="afficherPremium" class="btn btn-danger mb-1">Premium ?</button>
          <button @click="afficherDetails" class="btn btn-outline-dark">{{ detailsVisibles ? 'Masquer' : 'Afficher' }}</button>           
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ unAmiPhone }}</li>
              <li class="list-group-item">{{ unAmiMail }}</li>
          </ul>
          <!-- Bouton pour supprimer l'ami -->
          <button @click="supprimerAmi" class="btn btn-danger mt-2">Supprimer</button>
      </ul>
  </div> 
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// Déclaration des props
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  unAmiName: {
    type: String,
    required: true
  },
  unAmiPhone: {
    type: String,
    required: true
  },
  unAmiMail: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    required: false,
    default: false
  }
});

// Déclarer l'événement émis
const emit = defineEmits(['deleteFriend']);

// Références pour l'état local
const detailsVisibles = ref(false);
const premiumData = ref(props.premium);

// Fonction pour afficher/masquer les détails
function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}

// Fonction pour basculer le statut premium
function afficherPremium() {
  premiumData.value = !premiumData.value;
}

// Fonction pour émettre l'événement de suppression
function supprimerAmi() {
  emit('deleteFriend', props.id);
}
</script>
