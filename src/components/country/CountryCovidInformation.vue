<template>
  <div class="country-covid-container">
    <country-header
      :countryName="props.country.name"
      :countryCapital="props.country.capital"
      :countryFlag="props.country.flag"
    />

    <b-container class="ma-0 pa-0">
      <b-row no-gutters>
        <b-col cols="6" md="3" class="mt-2"> Open Cases: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <b> {{ props.country.openCases }} </b>
        </b-col>
        <b-col cols="6" md="3" class="mt-2"> Total Cases: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <base-badge
            :color="countryCovidColor(props.country.todayConfirmed)"
            :text="props.country.todayConfirmedFormat"
          />
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="6" md="3" class="mt-2"> New Cases: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <b> {{ props.country.newConfirmedFormat }} </b>
        </b-col>
        <b-col />
        <b-col />
      </b-row>
      <b-row no-gutters>
        <b-col cols="6" md="3" class="mt-2"> Total Deaths: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <b> {{ props.country.todayDeathsFormat }} </b>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="6" md="3" class="mt-2"> Today Recovered: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <b> {{ props.country.todayRecovered }} </b>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="6" md="3" class="mt-2"> Source: </b-col>
        <b-col cols="6" md="3" class="mt-2">
          <b> {{ props.country.source || "" }} </b>
        </b-col>
        <b-col />
        <b-col />
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { getCovidColor } from "@/utils/utils.js";
import CountryHeader from "./CountryHeader.vue";
import BaseBadge from "@/components/generic/BaseBadge.vue";

const props = defineProps({
  country: Object,
});

const countryCovidColor = (covidNumber) => {
  return getCovidColor(covidNumber);
};
</script>

<style lang="scss" scoped>
.country-covid-container {
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  padding: 0;
  height: 100%;
}
</style>

<style lang="scss">
.v-chip {
  max-height: 24px !important;
}
</style>
