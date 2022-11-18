<template>
  <div class="country-map-container">
    <country-header
      :countryName="props.country.name"
      :countryCapital="props.country.capital"
      :countryFlag="props.country.flag"
    />
    <GoogleMap
      api-key="AIzaSyB7I17dpKCQV-ZSo5ABIFyIh1Cu27TMcoo"
      style="width: 100%; height: 400px"
      :center="center"
      :zoom="3"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
    <div>center : {{ center }}</div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import CountryHeader from "./CountryHeader.vue";
import { GoogleMap, Marker } from "vue3-google-map";

const props = defineProps({
  country: Object,
});

const center = computed(() =>
  props.country
    ? { lat: props.country.latlng[0], lng: props.country.latlng[1] }
    : { lat: 0, lng: 0 }
);
</script>

<style lang="scss" scoped>
.country-map-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 3.5rem 0 4rem;
  padding: 0;
  height: 100%;
}
</style>

<style lang="scss">
.ol-unselectable {
  overflow: hidden !important;
}

.ol-viewport {
  max-width: 98%;
  border: 1px solid grey !important;
  border-radius: 5px !important;
  height: 400px !important;
}
</style>
