<template>
    <div>
      <NewFriend @add-ami="ajouterAmi" />
      <EmitOneFriend
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :unAmiName="unAmi.name" 
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="reactionStatus"
        @deleteFriend="effacerAmi"
      />
    </div>
  </template>
  
  
  <script setup>
  import { ref, defineAsyncComponent } from 'vue';
  import NewFriend from '../../components/NewFriend.vue';
  
  // Chargement asynchrone du composant enfant existant
  const EmitOneFriend = defineAsyncComponent(() => import('../../components/Emit.vue'));
  
  const lesAmis = ref([
  {
    id: 'lasticot',
    name: 'COCO L ASTICOT',
    phone: '01234 5678 991',
    email: 'coco@lasticot.com',
    premium: true
  },
  {
    id: 'kimonoSurUnFrigo',
    name: "Steven Seagal",
    phone: '+338765477',
    email: 'steven@seagal.com',
    premium: true
  }
]);

// Fonction pour gérer l'ajout d'un nouvel ami
function ajouterAmi({ name, phone, email }) {
  const newAmiContact = {
    id: new Date().toISOString(),
    name,
    phone,
    email,
    premium: false // Par défaut
  };
  lesAmis.value.push(newAmiContact);
}

// Fonction pour réagir à l'événement premium
function reactionStatus(leIdDansUnAmi) {
  const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
  unAmiIdentified.premium = !unAmiIdentified.premium;
}

// Fonction pour supprimer un ami
function effacerAmi(id) {
  lesAmis.value = lesAmis.value.filter(unAmi => unAmi.id !== id);
  console.log('Ami supprimé avec l\'ID :', id);
}
</script>