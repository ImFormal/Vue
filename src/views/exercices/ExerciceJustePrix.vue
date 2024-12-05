<template>
    <div class="container">
      <h1>TP : Le numéro gagnant</h1>
      <br><br>
      <div class="buttons">
        <button class="decrement" v-on:click="decrement(1)">-1</button>
        <button class="decrement" v-on:click="decrement(5)">-5</button>
        <div class="number-display">
          <span>Le nombre : </span>
          <span>{{ GuessNumber }}</span>
        </div>
        <button class="increment" v-on:click="increment(1)">+1</button>
        <button class="increment" v-on:click="increment(5)">+5</button>
      </div>
      <div class="message" :class="{ 'success': isSuccess == 1, 'failure': isSuccess == 0, 'none': isSuccess == 2 }">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue'
  
  export default {
    setup() {
      const number = ref(1)
      const secretNumber = Math.floor((Math.random()+1)*10);
      const isSuccess = ref(2)
      const message = ref('')
  
      const GuessNumber = computed(() => {
        return number.value.toString()
      })
  
      const decrement = (amount) => {
        number.value = Math.max(number.value - amount, 1)
      }
  
      const increment = (amount) => {
        number.value = Math.min(number.value + amount, 100)
      }
  
      watch(number, (newValue) => {
        if (newValue === secretNumber) {
          isSuccess.value = 1
          message.value = 'Bravo, vous avez trouvé le nombre mystère !'
        } 
        else if (newValue === '') {
            isSuccess.value = 2;
            
        }else {
          isSuccess.value = 0
          message.value = 'Essaie encore !'
        }
      })
  
      return {
        number,
        GuessNumber,
        decrement,
        increment,
        isSuccess,
        message
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
  
  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .increment {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .decrement {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .number-display {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .message {
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 4px;
  }
  
  .success {
    background-color: #4CAF50;
    color: white;
  }
  
  .failure {
    background-color: #f44336;
    color: white;
  }
  .none {
    background-color: none;
    color:white;
  }
  </style>