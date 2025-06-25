<template>
  <UButton
    :label="label"
    :icon="icon"
    :disabled="disabled"
    :ui="ui"
    :to="navigate"
    :loading-auto="loading"
  />
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  icon?: string;
  disabled?: boolean;
  ui?: Record<string, string>;
  navigate?: string;
  loading?: boolean;
}

defineProps<Props>();
</script>
