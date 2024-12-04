<template>
    <footer id="footer">
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div>
        © 2024 Mon Application. Tous droits réservés.
      </div>
    </footer>
</template>
  
  <style scoped>
  #footer {
    width: 100vw;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    }
  
  #footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1rem; /* Espacement entre les liens */
  }
  
  #footer a {
    color: #fff;
    text-decoration: none;
  }
  
  #footer a:hover {
    text-decoration: underline;
  }
  </style>
  