<template>
  <div
    class="fixed left-0 top-[95px] h-full bg-[#121212] transition-all duration-75 ease-in-out "
    :class="isOpen ? 'w-[300px]' : 'w-[80px]'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSideOver } from "@/shared/hook/useSideOver";
const { isOpen } = useSideOver();
</script>
