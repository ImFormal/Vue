<template>
    <div id="app">
    <div class="container">
      <h1>TP: Dynamic Styling</h1>
        <br><br>
      <input type="text" v-model="inputText" />
      <p v-show="showFirstParagraph" :class="dynamicClass">
        Hello World (class dynamique)
      </p>
  
      <input type="text" v-model="inputColor" />
      <p :style="{ backgroundColor: inputColor }">Hello World (couleur dynamique)</p>
  
      <button v-on:click="toggleFirstParagraph">
        {{ showFirstParagraph ? "Masquer" : "Afficher" }} 1er Titre
      </button>
    </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    name: "App",
    setup() {
      const inputText = ref("");
      const inputColor = ref("");
      const showFirstParagraph = ref(true);
  
      const dynamicClass = computed(() => {
        if (inputText.value === "hello") {
          return "maClasseHello";
        } else if (inputText.value === "world") {
          return "maClasseWorld";
        } else {
          return "";
        }
      });
  
      const toggleFirstParagraph = () => {
        showFirstParagraph.value = !showFirstParagraph.value;
      };
  
      return {
        inputText,
        inputColor,
        showFirstParagraph,
        dynamicClass,
        toggleFirstParagraph,
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

  .maClasseHello {
    background-color: #6495ed;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px;
  }
  
  .maClasseWorld {
    background-color: #ff6347;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px;
  }
  
  button {
    margin-top: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  input {
    display: block;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }
  </style>
  