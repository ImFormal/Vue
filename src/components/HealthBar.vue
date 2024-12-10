<template>
    <div>
        <h3>{{ label }}</h3>
        <div class="bar" :style="{ width: health + '%' }"></div>
        <p>Vie : {{ health }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      health: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .bar {
    width: 100%;
    height: 20px;
    background-color: green;
    border: 1px solid #000;
    margin: 5px 0;
    transition: width 0.3s;
  }
  </style>
  