<template>
  <div class="badge" :style="badgeStyle" v-b-tooltip.hover :title="toolTip">
    {{ props.text }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  text: String,
  color: String,
  fontSize: String,
  toolTip: String,
});

const badgeStyle = computed(() => {
  return {
    backgroundColor: props.color,
    fontSize: props.fontSize ? props.fontSize : "13px",
  };
});

const toolTip = computed(() => {
  return props.toolTip ? props.toolTip : props.text;
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
