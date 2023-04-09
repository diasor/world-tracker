<template>
  <b-card v-if="showGraph" min-width="200px" class="pa-2">
    <b-card-title> COVID19 Overview {{ covidByDate }}</b-card-title>
    <bar-chart
      v-if="showGraph"
      :labels="chartLabels"
      :data="chartData"
      :titleDate="covidByDate"
    />

    <b-button @click="backToMainMenu" class="mt-4">
      Back to Country List
    </b-button>
  </b-card>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BarChart from "@/components/charts/BarChart.vue";
const store = useStore();

const infectedCountries = computed(
  () => store.getters.mostCOVIDInfectedCountries || []
);
const covidByDate = computed(() => store.getters.covidDate || "diana");
const showGraph = computed(() => infectedCountries.value.length > 0);
const chartLabels = computed(() =>
  infectedCountries.value.map((country) => country.name)
);
const chartData = computed(() =>
  infectedCountries.value.map((country) => country.todayConfirmed)
);

onMounted(async () => {
  await store.dispatch("generateMostInfected");
});

const router = useRouter();
const backToMainMenu = () => {
  router.push({ name: "covid19-tracker" });
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";

.btn {
  background-color: transparent !important;
  border-color: $titleColor;
  color: $titleColor;
  font-family: "Roboto-Bold";
  font-variant: small-caps;
}
</style>
