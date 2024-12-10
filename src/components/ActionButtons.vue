<template>
    <div class="actions">
      <button @click="onAttack">Attaque</button>
      <button @click="onSpecialAttack" :disabled="!canUseSpecialAttack">Attaque Magique</button>
      <button @click="onHeal">Se Soigner</button>
      <button @click="onGiveUp">Abandonner</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      canUseSpecialAttack: {
        type: Boolean,
        required: true,
      },
    },
    emits: ["attack", "special-attack", "heal", "give-up"],
    methods: {
      onAttack() {
        this.$emit("attack");
      },
      onSpecialAttack() {
        this.$emit("special-attack");
      },
      onHeal() {
        this.$emit("heal");
      },
      onGiveUp() {
        this.$emit("give-up");
      },
    },
  };
  </script>
  
  <style scoped>
  .actions button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
  }
  </style>
  