<template>
  <div class="mt-4 mx-1 mb-0">
    <b-tabs>
      <b-tab title="Country Information" active>
        <b-card v-if="showCountry" class="m-4">
          <country-information
            :country="currentCountry"
            :countryBorders="countryBorders"
          />
        </b-card>
      </b-tab>
      <b-tab title="Population">
        <b-card v-if="showCountry" class="m-4">
          <country-population
            :country="currentCountry"
            :countryPopulation="currentPopulation"
          />
        </b-card>
      </b-tab>
      <b-tab title="Map">
        <b-card v-if="showCountry" class="m-4">
          <country-map :country="currentCountry" />
        </b-card>
      </b-tab>
    </b-tabs>

    <base-button class="mx-4 mt-0" :text="buttonText" @click="backToMainMenu" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { forEach } from "lodash";
import CountryInformation from "@/components/country/CountryInformation";
import CountryMap from "@/components/country/CountryMap";
import CountryPopulation from "@/components/country/CountryPopulation";
import BaseButton from "@/components/generic/BaseButton.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const buttonText = "Back to Country List";

let showCountry = ref(false);

const currentCountry = computed(() => store.getters.currentCountry);
const currentPopulation = computed(() => store.getters.currentPopulation);
const countryBorders = computed(() => {
  let borders = [];
  if (
    currentCountry.value &&
    currentCountry.value.borders &&
    currentCountry.value.borders.length > 0
  ) {
    forEach(currentCountry.value.borders, (countryCode) => {
      const border = store.getters.getCountryByCode(countryCode);
      if (border) {
        borders.push(border);
      }
    });
  }
  return borders;
});

onMounted(async () => {
  if (!currentCountry.value.name) {
    const alpha2Code = route.params.code;
    await store.dispatch("setCurrentCountry", alpha2Code);
    showCountry.value = true;
  } else {
    showCountry.value = true;
  }
});

const backToMainMenu = () => {
  router.push({ name: "covid19-tracker" });
};
</script>

<style lang="scss">
@import "./../assets/colors.scss";
button.nav-link {
  display: inline-block;
  font-family: "Roboto-Bold-Italic";
  font-size: 1rem;
  color: $titleColor !important;
  text-decoration: none;
  font-variant: small-caps;
  cursor: pointer;
}
</style>
