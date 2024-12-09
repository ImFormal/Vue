<template>
    <div id="app">
      <div class="container">
        <h1>Exercice : v-for</h1>
        <div class="input-container">
            <input type="text" v-model="newFilm" v-on:keyup.enter="addToList" placeholder="Entrez le nom d'un film" />
            <div class="buttons">
                <button class="add" v-on:click="addToList">Ajouter à la liste</button>
                <button class="supp" v-on:click="suppList">Supprimer toute la liste</button>
            </div>
        </div>
        <div class="list-container">
          <h2>Watch List (Films à voir)</h2>
          <ul>
            <li v-for="(film, index) in filmList" :key="index" v-on:click="suppToList(index)">{{ `${index} - ${film}` }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const newFilm = ref('')
      const filmList = ref([])
  
      const addToList = () => {
        if (newFilm.value.trim() !== '') {
          filmList.value.push(newFilm.value)
          newFilm.value = ''
        }
    }

    const suppToList = (index) => {
      filmList.value.splice(index, 1)
    }

    const suppList = () => {
      filmList.value = []
    }
  
      return {
        newFilm,
        filmList,
        addToList,
        suppToList,
        suppList
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
  
  .input-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap:5px;
  }
  
  .input-container input {
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .input-container button {
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }

  .buttons{
    display: flex;
    gap:10px;
  }

  .add {
    background-color: blue;
  }

  .supp {
    background-color: red;
  }
  
  .list-container {
    margin-top: 20px;
  }
  
  .list-container ul {
    list-style-type: none;
    padding: 0;
  }
  
  .list-container li {
    margin-bottom: 10px;
    cursor: pointer;
  }
  </style>