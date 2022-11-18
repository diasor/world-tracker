<template>
  <bar-chart :chartData="chartData" />
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

let chartData = ref({});
const props = defineProps({
  labels: Array,
  data: Array,
  titleDate: String,
});

onMounted(() => {
  chartData.value = {
    labels: props.labels,
    datasets: [
      {
        label: `COVID19 Overview: Total confirmed cases upto ${props.titleDate}`,
        data: props.data,
        backgroundColor: ["#473879"],
        borderRadius: 3,
      },
    ],
  };
});
</script>
