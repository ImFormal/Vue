<template>
    <div class="container">
      <h1>EventBinding (gérer les event)</h1>
      <div class="buttons">
        <button class="decrement" v-on:click="decrement">-</button>
        <p>le nombre : {{ count }}</p>
        <button class="increment" v-on:click="increment">+</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const count = ref(33)
  
      const decrement = () => {
        count.value--
      }
  
      const increment = () => {
        count.value++
      }
  
      return {
        count,
        decrement,
        increment
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
  
  .decrement, .increment {
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
  }
  </style>