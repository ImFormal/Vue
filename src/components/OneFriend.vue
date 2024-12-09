<template>
  <div class="container p-3 my-2 bg-primary-subtle">
      <ul class="list-group">
          <h2 class="list-group-item">{{ unAmiName }}</h2>
          <button @click="afficherDetails" class="btn btn-outline-dark">
              {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
          </button>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ unAmiPhone }}</li>
              <li class="list-group-item">{{ unAmiMail }}</li>
          </ul>
      </ul>
  </div>
</template>

<script setup lang='js'>
import { ref,defineProps } from 'vue';

const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail']);
const detailsVisibles = ref(false);

function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}
</script>

<style scoped>
.friend-card {
  border: 2px solid #cce7ff;
  background-color: #eaf4ff;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

.details {
  margin: 10px 0;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #0056b3;
}
</style>