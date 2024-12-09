<template>
    <div >
      <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
      <PropsOneFriendComp unAmiName="Dr.Azerty" unAmiPhone="098765234" unAmiMail="a@a.aa"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com"></PropsOneFriendComp>
    </div>
  </template>
  
  
  <script setup lang='js'>
  import { defineAsyncComponent } from 'vue'
  const PropsOneFriendComp = defineAsyncComponent(() => import('../../components/OneFriend.vue'))
  </script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>