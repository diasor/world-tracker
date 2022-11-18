<template>
  <div class="badge" :style="badgeStyle">
    {{ props.text }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  text: String,
  color: String,
});

const badgeStyle = computed(() => {
  return {
    backgroundColor: props.color,
  };
});
</script>

<style lang="scss" scoped>
.badge {
  border-radius: 20px;
  min-height: 20px;
  min-width: 30px;
  color: antiquewhite;
}
</style>
