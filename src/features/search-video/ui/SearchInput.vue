<template>
  <UPopover
    v-model:open="open"
    :dismissible="false"
    :ui="{
      content: 'w-[600px] p-4 border-[1px] border-white rounded-[5px] bg-gray-100',
    }"
  >
    <template #anchor>
      <Input
        v-model="value"
        placeholder="Search videos"
        trailing-icon="i-codicon:search"
        type="text"
        variant="none"
        :delete-button="true"
        :ui="{
          root: 'w-[600px]',
          base: 'w-full px-[18px] pr-[40px] py-[10px] text-[15px] placeholder:text-[15px] placeholder:text-white/50 bg-transparent border border-[#333] rounded-[5px] hover:border-[#fff] focus:border-[#fff]',
          trailingIcon: 'w-5 h-5 text-white',
        }"
        @focus="open = true"
        @blur="open = false"
      />
    </template>

    <template #content>
      <slot />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { Input } from "@/shared/ui";

const value = ref("");
const open = ref(false);
</script>
