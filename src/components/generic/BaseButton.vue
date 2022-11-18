<template>
  <b-button @click="onClick" class="mt-1">
    {{ props.text }}
  </b-button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: String,
  color: String,
});

const emit = defineEmits(["clickButton"]);
const onClick = () => {
  emit("clickButton");
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";

.btn {
  background-color: transparent !important;
  border-color: $titleColor !important;
}

.btn-content {
  color: $titleColor;
  font-family: "Roboto-Bold";
  font-variant: small-caps;
}
</style>
