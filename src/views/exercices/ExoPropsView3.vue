<template>
    <div>
      <h1>Les Amis</h1>
      <!-- Composant avec des props valides -->
      <UnAmi unAmiName="Steven Seagal" unAmiPhone="0987654321" unAmiMail="steven@seagal.com" premium="abc" />
      <!-- Composant avec des props erronées -->
      <UnAmi unAmiPhone="0987654321" unAmiMail="gerard@menvuca.com" premium="1000" />
    </div>
  </template>
  
  <script setup lang='js'>
  import { defineAsyncComponent } from 'vue'
  const UnAmi = defineAsyncComponent(() => import('../../components/OneFriend3.vue'))
  </script>
  
  <style>
  h1 {
    text-align: center;
  }
  </style>
  
  