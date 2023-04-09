<template>
  <div class="country-info-container">
    <country-header
      :countryName="props.country.name"
      :countryCapital="props.country.capital"
      :countryFlag="props.country.flag"
    />
    <b-container class="ma-0 pa-0">
      <b-row no-gutters class="mt-2">
        <b-col cols="4"> Official name: </b-col>
        <b-col cols="8">
          <b> {{ props.country.officialName }} </b>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-2">
        <b-col cols="4"> Region: </b-col>
        <b-col cols="8">
          <b> {{ props.country.region }} - {{ props.country.subregion }} </b>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-2">
        <b-col cols="4"> Calling code: </b-col>
        <b-col cols="8">
          <b> {{ props.country.callingCodes }} </b>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-2">
        <b-col cols="4"> Coordinates: </b-col>
        <b-col cols="8">
          <b> {{ props.country.latlng }} </b>
        </b-col>
      </b-row>
    </b-container>

    <div class="mt-3 ml-0 pb-0"><h3>Languages</h3></div>
    <div class="d-flex justify-content-start flex-wrap mx-2">
      <base-badge
        v-for="(language, i) in props.country.languages"
        :key="i"
        class="mt-1 mx-1"
        color="grey"
        :text="language"
      />
    </div>

    <div class="mt-3 ml-0 pb-0"><h3>Currencies</h3></div>
    <div class="d-flex justify-content-start flex-wrap mx-2">
      <base-badge
        v-for="(currency, i) in props.country.currencies"
        :key="i"
        color="grey"
        class="mt-1 mx-1"
        :text="`${currency.name} (${currency.symbol})`"
      />
    </div>

    <div class="mt-3 ml-0 pb-0"><h3>Borders</h3></div>
    <div class="d-flex justify-content-start flex-wrap mx-2">
      <base-badge
        v-for="(border, i) in countryBorders"
        :key="i"
        class="mt-1 mx-1"
        color="lightgrey"
        fontSize="30px"
        :text="border.flag"
        :toolTip="border.name"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CountryHeader from "./CountryHeader.vue";
import BaseBadge from "@/components/generic/BaseBadge.vue";

const props = defineProps({
  country: {},
  countryBorders: Array,
  countryFlag: String,
});
</script>

<style lang="scss">
.country-info-container {
  display: flex;
  flex-direction: column;
  margin: 0 4.5rem;
  padding: 0;
  height: 100% !important;

  & h3 {
    font-size: 18px;
  }
}
</style>
