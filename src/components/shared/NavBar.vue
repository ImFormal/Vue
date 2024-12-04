<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <a href="#">MonLogo</a>
        </div>
  
        <!-- Bouton Menu Burger -->
        <button class="menu-toggle" @click="toggleMenu">
          &#9776;
        </button>
  
        <!-- Menu -->
        <ul class="menu" :class="{ active: isMenuActive }">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
  
        <!-- Bouton pour changer le mode -->
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDarkMode ? '🌞 Mode Clair' : '🌙 Mode Sombre' }}
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isMenuActive = ref(false);
  const isDarkMode = ref(false);
  
  // Toggle menu burger
  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  };
  
  // Toggle light/dark mode
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    const newTheme = isDarkMode.value ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarde le thème dans le localStorage
  };
  
  // Lors du montage, vérifie et applique le thème sauvegardé dans le localStorage
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      isDarkMode.value = savedTheme === 'dark';
    } else {
      // Applique par défaut le mode sombre
      document.documentElement.setAttribute('data-theme', 'dark');
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
  
  .menu li a {
    color: white;
    text-decoration: none;
  }
  
  .menu li a:hover {
    color: #00bcd4;
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
  
    .menu-toggle {
      display: block;
    }
  }
  </style>
  