<template>
  <div class="country-header-container">
    <div class="country-name-container pt-0">
      <div class="mb-0">
        <h1>{{ props.countryName }}</h1>
      </div>
      <div class="pt-0">
        <h2>{{ props.countryCapital }}</h2>
      </div>
    </div>
    <div class="country-flag pb-0">
      <span>{{ props.countryFlag }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  countryName: String,
  countryCapital: String,
  countryFlag: String,
});
</script>

<style lang="scss" scoped>
.country-header-container {
  display: grid;
  grid-template-columns: 80% 20%;
  border-bottom: 1px solid lightgrey !important;
  width: 60vw;
  margin: 0.5rem 0;

  @media screen and (min-width: 450px) {
    min-width: 100% !important;
  }
}

.country-name-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  padding-bottom: 0;

  & h1 {
    font-size: 18px;
    font-weight: bold;

    @media screen and (min-width: 400px) {
      font-size: 20px;
    }
  }

  & h2 {
    font-size: 16px;
    font-weight: bold;
    color: grey;
  }
}

.country-flag {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  span {
    font-size: 70px;
    line-height: 60px;
    margin: 0;
    padding: 0;
  }
}
</style>
