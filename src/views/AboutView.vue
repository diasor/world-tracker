<template>
  <div class="about-container">
    <b-tabs>
      <b-tab title="About the Application" active>
        <about-application />
      </b-tab>
      <b-tab title="About the Author">
        <about-author />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script setup>
import AboutApplication from "@/components/about/AboutApplication.vue";
import AboutAuthor from "@/components/about/AboutAuthor.vue";
</script>

<style lang="scss">
@import "@/assets/colors.scss";

.about-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 1rem 6rem;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.nav-link {
  font-family: "Roboto-Bold-Italic" !important;
  font-size: 1rem;
  color: $navBackgroundColor !important;
  text-transform: uppercase;
}
</style>
