<template>
  <div class="container">
    <h1>EventBinding (gérer les event)</h1>
    <br><br>
    <input v-on:keyup="displayInput1" />
    <p>{{ input1 }}</p>
    
    <input v-on:keyup="displayInput2" v-on:keyup.esc="displayInput2"/>
    <p>{{ input2 }}</p>
    
    <button v-on:click="showAlert" class="button">Alerte</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input1 = ref('')
    const input2 = ref('')

    const displayInput1 = (event) => {
      input1.value = event.target.value
    }

    const displayInput2 = (event) => {
      input2.value = event.target.value
    }

    const showAlert = () => {
      alert('Alerte générale !')
    }

    return {
      input1,
      input2,
      displayInput1,
      displayInput2,
      showAlert
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .button {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    background-color:aqua;
  }
  </style>