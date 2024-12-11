<template>
    <div>
      <NewFriend @add-ami="ajouterAmi" />
      <EmitOneFriendIdComp
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :unAmiName="unAmi.name" 
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="reactionStatus"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, defineAsyncComponent } from 'vue';
  
  // Chargement asynchrone du composant enfant existant
  const EmitOneFriendIdComp = defineAsyncComponent(() => import('../../components/Emit.vue'));
  const NewFriend = defineAsyncComponent(() => import('../../components/NewFriend.vue'));

  // Liste des amis
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
    console.log('Nouvel ami ajouté :', newAmiContact);
  }
  
  // Fonction pour réagir à l'événement premium
  function reactionStatus(leIdDansUnAmi) {
    const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
    console.log('amiIdentified : ', unAmiIdentified);
    unAmiIdentified.premium = !unAmiIdentified.premium;
    console.log('amiIdentified : ', unAmiIdentified);
  }
  </script>
  