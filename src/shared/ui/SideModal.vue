<template>
  <USlideover
    v-model:open="isOpen"
    v-model:close="isOpen"
    side="left"
    :ui="{ overlay: 'bg-black/50', content: 'w-[300px]' }"
  >
    <template #body>
      <slot />
    </template>
  </USlideover>


</template>

<script setup lang="ts">
import { useSideOver } from "@/shared/hook/useSideOver";
const { isOpen } = useSideOver();
</script>
