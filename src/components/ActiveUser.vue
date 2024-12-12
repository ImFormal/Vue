<template>
    <div class="active-user">
        <p class="name">{{ name }}</p>
        <p>{{ age }} ans</p>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'
  
    const name = ref('')
    const age = ref(null)
  
    const updateUserData = (data) => {
        name.value = data.name
        age.value = data.age
    }
  
    defineExpose({ updateUserData })
</script>
  
<style scoped>
    .active-user {
        width:60vw;
        margin-top: 100px;
        padding: 10px;
        background-color: rgb(0, 0, 255);
        border-radius: 4px;
        color: white;
    }
    .name{
        background-color: rgb(22, 22, 209);
    }
</style>