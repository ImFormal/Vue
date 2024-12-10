<template>
    <div>
      <h1>API Fetcher</h1>
  
      <section>
        <h2>Pokémon</h2>
        <ul v-if="pokemonList.length">
          <li v-for="(pokemon, index) in pokemonList" :key="index">
            {{ pokemon.name }}
          </li>
        </ul>
        <p v-else>Chargement des Pokémon...</p>
      </section>
  
      <section>
        <h2>Météo - Toulouse</h2>
        <div v-if="weatherInfo">
          <p><strong>Ville :</strong> {{ weatherInfo.city_info.name }}</p>
          <p><strong>Température :</strong> {{ weatherInfo.current_condition.tmp }}°C</p>
          <p><strong>Condition :</strong> {{ weatherInfo.current_condition.condition }}</p>
        </div>
        <p v-else>Chargement des informations météo...</p>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  export default {
    name: "ApiFetcher",
    setup() {
      const pokemonList = ref([]);
      const weatherInfo = ref(null);
  
      const fetchPokemon = async () => {
        try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
          const data = await response.json();
          pokemonList.value = data.results; 
        } catch (error) {
          console.error("Erreur lors de la récupération des Pokémon :", error);
        }
      };
  
      const fetchMeteo = async () => {
        try {
          const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
          weatherInfo.value = await response.json(); 
        } catch (error) {
          console.error("Erreur lors de la récupération de la météo :", error);
        }
      };
  
      onMounted(() => {
        fetchPokemon();
        fetchMeteo();
      });
  
      onBeforeUnmount(() => {
        console.log("Le composant est sur le point d'être démonté.");
      });
  
      return {
        pokemonList,
        weatherInfo,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  section {
    margin: 20px 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  p {
    font-size: 16px;
  }
  </style>
  