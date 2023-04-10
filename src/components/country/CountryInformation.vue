<template>
  <div class="country-main-container">
    <country-header
      :countryName="props.country.name"
      :countryCapital="props.country.capital"
      :countryFlag="props.country.flag"
    />
    <div class="d-flex">
      <div class="country-main">
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
              <b>
                {{ props.country.region }} - {{ props.country.subregion }}
              </b>
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
      <div class="country-flag" />
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

<style lang="scss" scoped>
.country-main-container {
  display: flex;
  flex-direction: column;
  margin: 0 4.5rem;
  padding: 0;
  height: 100% !important;

  & h3 {
    font-size: 18px;
  }
}

.country-main {
  flex: 2;
}

.country-flag {
  flex: 1;
  background-image: url("./../../assets/globe-flags-of-the-world.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;

  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;

  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
}

.country-flag:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
}
</style>
