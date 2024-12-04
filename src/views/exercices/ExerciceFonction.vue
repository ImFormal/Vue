<template>
  <div>
    <h1>Utilisation des methods</h1>
    <p>{{ getRandomMessage }}</p>
    <p>Le nombre est : {{ randomNumber }}</p>
  </div>
</template> 

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const randomNumber = ref(Math.random());

    const getRandomMessage = computed(() => {
      if (randomNumber.value > 0.5) {
        return "Le Livre de Boba Fet";
      } else {
        return "Le Livre de la Jungle";
      }
    });

    return {
      getRandomMessage,
      randomNumber,
    };
  },
};
</script>