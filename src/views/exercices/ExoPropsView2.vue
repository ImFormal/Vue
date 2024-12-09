<template>
    <PropsOneFriendBugComp unAmiName="Dr.BUUUUUUG" unAmiPhone="0000" unAmiMail="lol@lol.com" premium="abc"></PropsOneFriendBugComp>
  </template>
  
  <script setup lang='js'>
  import { defineAsyncComponent } from 'vue'
  const PropsOneFriendBugComp = defineAsyncComponent(() => import('../../components/OneFriend2.vue'))
  </script>
  
  <style>
  h1 {
    text-align: center;
  }
  </style>
  