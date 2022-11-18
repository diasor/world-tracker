<template>
  <div class="country-population-container">
    <country-header
      :countryName="chartTitle"
      :countryCapital="country.capital"
      :countryFlag="country.flag"
      class="country-population-header"
    />
    <b-card v-if="showGraph" min-width="200px" class="pa-2">
      <div class="population-map">
        <line-chart
          v-if="countryPopulation"
          :labels="chartLabels"
          :data="chartData"
          :titleDate="chartTitle"
          :dataSetLabel="dataSetLabel"
          style="height: 300px"
        />
      </div>
    </b-card>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import { forEach, reverse, replace } from "lodash";
import CountryHeader from "./CountryHeader.vue";
import LineChart from "@/components/charts/LineChart.vue";

const props = defineProps({
  country: Object,
  countryPopulation: Object,
});

const showGraph = computed(
  () =>
    props.countryPopulation &&
    Object.entries(props.countryPopulation).length > 0
);

const chartTitle = computed(
  () => `${props.country.name}'s historical population per year`
);
const dataSetLabel = computed(
  () => `${props.country.name}'s population per year`
);
const chartLabels = computed(() => {
  return [
    1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ];
});

const chartData = computed(() => {
  const populationEntries = Object.entries(props.countryPopulation);
  const population = [];
  forEach(populationEntries, (entry) => {
    if (entry[1].TotalPopulation) {
      const numericPopulation = replace(entry[1].TotalPopulation, ".", "");
      population.push(numericPopulation);
    }
  });
  return reverse(population);
});
</script>
<style lang="scss" scoped>
.country-population-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 4rem;
  padding: 0;
}

.country-population-header {
  max-height: 6rem !important;
}
</style>
