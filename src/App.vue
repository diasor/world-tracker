<template>
  <base-nav-bar />
  <router-view />
</template>

<script setup>
import BaseNavBar from "@/components/generic/BaseNavBar.vue";
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Italic";
  src: local("Roboto"), url(./fonts/Roboto/Roboto-Italic.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Bold";
  src: local("Roboto"), url(./fonts/Roboto/Roboto-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Bold-Italic";
  src: local("Roboto"),
    url(./fonts/Roboto/Roboto-BoldItalic.ttf) format("truetype");
}

@font-face {
  font-family: "Lobster";
  src: local("Lobster"),
    url(./fonts/Lobster/Lobster-Regular.ttf) format("truetype");
}
</style>
