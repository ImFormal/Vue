<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/shared/NavBar.vue";
import Footer from "./components/shared/Footer.vue";
</script>

<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped></style>


<!--<template>
  <div class="container">
    <ActiveUser ref="activeUserRef"></ActiveUser>
    <UserData :activeUser="activeUserData" v-on:update-user="updateActiveUser"></UserData>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ActiveUser from './components/ActiveUser.vue'
  import UserData from './components/UserData.vue'

const activeUserData = ref({
  name: '',
  age: null
})

const activeUserRef = ref(null)

const updateActiveUser = (data) => {
  activeUserData.value = data
  activeUserRef.value.updateUserData(data)
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: auto;
  }
</style>
-->