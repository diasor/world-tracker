<template>
  <nav class="navbar px-4 d-flex justify-content-between">
    <div class="navbar__title d-flex align-items-center">
      <b-img
        src="./../../assets/flags-ring-2.png"
        fluid
        center
        alt="Flags picture"
        v-bind="mainProps"
      />
      <b-link @click="gotToHome" class="mx-2">Country tracker</b-link>
    </div>
    <div
      class="navbar__submenu d-flex justify-content-end align-items-center flex-grow-1"
    >
      <a @click="gotToOverview">Overview</a>
      <a @click="gotToAbout">About</a>
      <a @click="gotToLastReview"> Last Release </a>
      <font-awesome-icon icon="fa-6x fa-pen-to-square" class="icon" />
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const mainProps = {
  width: 70,
  height: 70,
};
const router = useRouter();
const gotToHome = () => {
  router.push({ name: "covid19-tracker" });
};
const gotToOverview = () => {
  router.push({ name: "covid-overview" });
};
const gotToAbout = () => {
  router.push({ name: "about" });
};
const gotToLastReview = () => {
  window.open("https://github.com/diasor/world-tracker/tree/master");
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";
.navbar {
  background-color: $navBackgroundColor !important;
  height: 3.5rem;

  &__title {
    > a {
      display: inline-block;
      font-family: "Roboto-Bold-Italic";
      font-size: 1.2rem;
      color: $navFontColor !important;
      text-decoration: none;
      font-variant: small-caps;
      cursor: pointer;
    }
  }

  &__submenu {
    > a {
      display: flex;
      margin-left: 1rem;
      width: auto;
      font-family: "Roboto-Bold";
      font-size: 1rem;
      color: $navFontColor !important;
      text-decoration: none;
      font-variant: small-caps;
      cursor: pointer;
    }
  }
}

.icon {
  display: flex;
  margin-left: 0.5rem;
  color: white;
}
</style>
