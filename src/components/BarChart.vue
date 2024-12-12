<template>
  <h1 class="text-center">Bar Chart</h1>
  <div class="container">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Histoire', 'Géographie', 'Maths'],
  datasets: [{
    label: 'Utilisateur',
    data: [80, 40, 50],
    backgroundColor: 'rgba(75, 192, 192, 0.7)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  },
  {
    label: 'Global',
    data: [60, 50, 50],
    backgroundColor: 'rgba(192, 75, 192, 0.7)',
    borderColor: 'rgba(192, 75, 192, 1)',
    borderWidth: 1
  }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  y:{
    beginAtZero: true,
    max: 100
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
  }
})
</script>


<style scoped>
canvas {
  display: block;
  max-width: 100%;
  height: 100%;
}

div {
  position: relative;
  width: 100%;
  height: 50vh;
}
</style>