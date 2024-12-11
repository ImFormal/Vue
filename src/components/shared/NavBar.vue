<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <a href="#">MonLogo</a>
      </div>

      <!-- Bouton Menu Burger -->
      <button class="menu-toggle" v-on:click="toggleMenu">&#9776;</button>

      <!-- Menu -->
      <ul class="menu" :class="{ active: isMenuActive }">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/lessons/text-interpolation">Lessons</router-link></li>
        <li class="dropdown">
          <a href="#" v-on:click.prevent="toggleExerciceMenu">Exercices</a>
          <ul class="dropdown-menu" :class="{ active: isExerciceMenuActive }">
            <li><router-link to="/exercices/ex-interpolation">Exercice Interpolation</router-link></li>
            <li><router-link to="/exercices/ex-fonction">Exercice Fonction</router-link></li>
            <li><router-link to="/exercices/ex-drmario">Exercice Dr Mario</router-link></li>
            <li><router-link to="/exercices/ex-count">Exercice Count</router-link></li>
            <li><router-link to="/exercices/ex-input">Exercice Input</router-link></li>
            <li><router-link to="/exercices/ex-bug">Exercice Bug</router-link></li>
            <li><router-link to="/exercices/ex-watcher">Exercice Watcher</router-link></li>
            <li><router-link to="/exercices/ex-justeprix">Exercice JustePrix</router-link></li>
            <li><router-link to="/exercices/ex-card">Exercice Card</router-link></li>
            <li><router-link to="/exercices/ex-stydyn">Exercice Styling Dynamic</router-link></li>
            <li><router-link to="/exercices/ex-liste">Exercice Liste</router-link></li>
            <li><router-link to="/exercices/ex-listecourse">Exercice Liste Course</router-link></li>
            <li><router-link to="/exercices/ex-props">Exercice Props</router-link></li>
            <li><router-link to="/exercices/ex-props2">Exercice Props2</router-link></li>
            <li><router-link to="/exercices/ex-props3">Exercice Props3</router-link></li>
            <li><router-link to="/exercices/ex-combat">Exercice Combat</router-link></li>
            <li><router-link to="/api-fetcher">API Fetcher</router-link></li>
            <li><router-link to="/exercices/emit">Emit</router-link></li>
          </ul>
        </li>
        <li><router-link to="/lesson-router">Lesson Router</router-link></li>
      </ul>

      <!-- Bouton pour changer le mode -->
      <button class="theme-toggle" @click="toggleTheme">
        {{ isDarkMode ? "🌞 Mode Clair" : "🌙 Mode Sombre" }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMenuActive = ref(false);
const isExerciceMenuActive = ref(false);
const isDarkMode = ref(false);

// Toggle menu burger
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
  isExerciceMenuActive.value = false; // Ferme le menu des exercices si le menu principal est ouvert
};

// Toggle menu des exercices
const toggleExerciceMenu = () => {
  isExerciceMenuActive.value = !isExerciceMenuActive.value;
  isMenuActive.value = false; // Ferme le menu principal si le menu des exercices est ouvert
};

// Toggle light/dark mode
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const newTheme = isDarkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Sauvegarde le thème dans le localStorage
};

// Lors du montage, vérifie et applique le thème sauvegardé dans le localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    isDarkMode.value = savedTheme === "dark";
  } else {
    // Applique par défaut le mode sombre
    document.documentElement.setAttribute("data-theme", "dark");
    isDarkMode.value = true;
  }
});
</script>

<style scoped>
.navbar {
  background: #333;
  color: #fff;
  padding: 10px 0px;
  width: 100vw;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px 5px 20px;
}

.logo a {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.menu {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.menu li {
  position: relative;
}

.menu li a {
  color: white;
  text-decoration: none;
}

.menu li a:hover {
  color: #00bcd4;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dropdown-menu.active {
  display: block;
}

.dropdown-menu li {
  margin-bottom: 5px;
}

.dropdown-menu li a {
  white-space: nowrap;
}

.menu-toggle {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding-right: 50px;
}

.theme-toggle {
  background: none;
  border: 1px solid #fff;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 50px;
    right: 20px;
    background: #333;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding-right: 50px;
  }

  .menu.active {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    display: block;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>