<template>
    <h1>Jeu Tour par Tour</h1>
    <div class="bars">
      <HealthBar label="Joueur" :health="playerHealth" />
      <HealthBar label="Adversaire" :health="opponentHealth" />
    </div>

    <ActionButtons v-if="!winner" :canUseSpecialAttack="currentRound % 3 === 0" @attack="attackOpponent" @special-attack="specialAttackOpponent" @heal="healPlayer" @give-up="giveUp" />

    <div v-else>
      <h2>{{ winnerMessage }}</h2>
      <button @click="resetGame">Rejouer</button>
    </div>
</template>

<script setup lang="js">
import { ref, defineAsyncComponent } from "vue";
const ActionButtons = defineAsyncComponent(() => import('../../components/ActionButtons.vue'))
const HealthBar = defineAsyncComponent(() => import('../../components/HealthBar.vue'))

const playerHealth = ref(100);
const opponentHealth = ref(100);
const currentRound = ref(0);
const winner = ref(null);
const winnerMessage = ref("");

const attackOpponent = () => {
  const damage = getRandomValue(5, 12);
  opponentHealth.value = Math.max(opponentHealth.value - damage, 0);
  endTurn();
};

const specialAttackOpponent = () => {
  const damage = getRandomValue(10, 25);
  opponentHealth.value = Math.max(opponentHealth.value - damage, 0);
  endTurn();
};

const healPlayer = () => {
  const heal = getRandomValue(8, 20);
  playerHealth.value = Math.min(playerHealth.value + heal, 100);
  endTurn();
};

const giveUp = () => {
  winner.value = "Adversaire";
  winnerMessage.value = "Vous avez abandonné !";
};

const opponentAttack = () => {
  const damage = getRandomValue(8, 15);
  playerHealth.value = Math.max(playerHealth.value - damage, 0);
};

const endTurn = () => {
  currentRound.value++;
  opponentAttack();
  checkWinner();
};

const checkWinner = () => {
  if (playerHealth.value === 0 && opponentHealth.value === 0) {
    winner.value = "Égalité";
    winnerMessage.value = "Match nul !";
  } else if (playerHealth.value === 0) {
    winner.value = "Adversaire";
    winnerMessage.value = "L'adversaire a gagné !";
  } else if (opponentHealth.value === 0) {
    winner.value = "Joueur";
    winnerMessage.value = "Vous avez gagné !";
  }
};

const resetGame = () => {
  playerHealth.value = 100;
  opponentHealth.value = 100;
  currentRound.value = 0;
  winner.value = null;
};

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

</script>


<style>

.bars {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

h2 {
  color: red;
}
</style>
