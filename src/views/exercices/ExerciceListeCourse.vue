<template>
  <div id="app">
    <div class="container">
      <h1>TP : Conditional Rendering / List Rendering</h1>
      <div class="input-container">
        <input type="text" v-model="newItem" v-on:keyup.enter="addToList" placeholder="Entrez le nom d'un produit" />
        <div class="buttons">
          <button class="add" v-on:click="addToList">Ajouter à la liste</button>
          <button class="supp" v-on:click="suppList">Supprimer toute la liste</button>
        </div>
      </div>
      <div class="list-container" v-if="isListVisible">
        <h2>Liste des courses 🛒</h2>
        <ul>
          <li v-for="(item, index) in courseList" :key="index" v-on:click="suppToList(index)">{{ `${index} - ${item}` }}</li>
        </ul>
      </div>
      <button v-on:click="toggleListVisibility" class="list-toggle">
        {{ isListVisible ? 'Masquer Liste' : 'Afficher Liste' }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const newItem = ref('')
    const courseList = ref([])
    const isListVisible = ref(true)

    const addToList = () => {
      if (newItem.value.trim() !== '') {
        courseList.value.push(newItem.value)
        newItem.value = ''
      }
    }

    const suppToList = (index) => {
      courseList.value.splice(index, 1)
    }

    const suppList = () => {
      courseList.value = []
    }

    const toggleListVisibility = () => {
      isListVisible.value = !isListVisible.value
    }

    return {
      newItem,
      courseList,
      isListVisible,
      addToList,
      suppToList,
      suppList,
      toggleListVisibility
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
  gap: 5px;
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

.buttons {
  display: flex;
  gap: 10px;
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

.list-toggle {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
