<template>
    <div class="container">
        <h1>Dynamic Styling (inline) Mode : Composition</h1>
        <div class="card-container">
          <div class="card" :style="{ backgroundColor: firstCardColor }" v-on:click="changeFirstCardColor">
            <p>Card title</p>
          </div>
          <div class="card" :style="{ backgroundColor: secondCardColor }" v-on:click="changeSecondCardColor">
            <p>Card title</p>
          </div>
        </div>
    </div>
</template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'App',
    setup() {
      const firstCardColor = ref('aqua'); 
      const secondCardColor = ref('pink'); 
  
      const changeFirstCardColor = () => {
        firstCardColor.value = firstCardColor.value === 'aqua' ? 'red' : 'aqua';
      };
  
      const changeSecondCardColor = () => {
        secondCardColor.value = secondCardColor.value === 'pink' ? 'green' : 'pink'; 
      };
  
      return {
        firstCardColor,
        secondCardColor,
        changeFirstCardColor,
        changeSecondCardColor,
      };
    },
  };
  </script>
  
  <style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .card-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .card {
    width: 400px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer; 
  }
  </style>
  