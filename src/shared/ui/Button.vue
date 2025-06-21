<template>
  <UButton :label="label" :icon="icon" :disabled="disabled" />
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  icon?: string;
  disabled?: boolean;
}

defineProps<Props>();
</script>
