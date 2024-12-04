<template>
    <div>
      <img v-bind:src="`https://jvmag.ch/wp-content/uploads/2019/02/DRMarioiOS.jpg`" :alt="userName">
      <div>
        <h2>{{ userName }}</h2>
        <input v-model="userName" type="text">
        <p>{{ userAge }} ans</p>
        <p>age + 10 : {{ userAgeWithTen }} ans</p>
        <p>NB Fétiche : {{ userFetiche }}</p>
      </div>
    </div>
</template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    setup() {
      const userName = ref('Dr.Mario')
      const userAge = ref(45)
      const userFetiche = ref(Math.random())
      const userAgeWithTen = computed(() => userAge.value + 10)
  
      return {
        userName,
        userAge,
        userFetiche,
        userAgeWithTen
      }
    }
  }
  </script>

<style scoped>
    img{
        width:auto;
        height:300px;
        margin-top:20px;
    }
</style>