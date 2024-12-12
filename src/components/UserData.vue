<template>
    <div class="user-data">
      <form v-on:submit.prevent="updateData">
        <p>Formulaire d'édition :</p>
        <input v-model="userName" type="text" required />
        <input v-model.number="userAge" type="number" required min="1" />
        <button type="submit">MAJ des Data</button>
      </form>
    </div>
  </template>
  
<script setup>
    import { ref, defineProps, watch } from 'vue'
  
    const props = defineProps({
        activeUser: {
            type: Object,
            required: true
        }
    })
  
    const userName = ref('')
    const userAge = ref(null)
  
    watch(() => props.activeUser, (newUser) => {
        userName.value = newUser.name
        userAge.value = newUser.age
    })
  
    const emit = defineEmits(['update-user'])
  
    const updateData = () => {
        if(userName.value && userAge.value) {
            emit('update-user', { name: userName.value, age: userAge.value })
        }
    }
</script>
  
<style scoped>
    .user-data {
        width: 60vw;
        background-color: yellow;
        padding: 20px;
        border-radius: 4px;
        color: black;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .input-field {
        width: 100%;
        padding: 10px;
        border: 1px solid black;
        border-radius: 4px;
    }

    .button {
        background-color: yellow;
        border: 2px solid black;
        border-radius: 4px;
        padding: 10px;
        align-self: flex-start;
        cursor: pointer;
    }
</style>
