<template>
  <UFormField :label="label" :error="error">
    <UInput
      :model-value="modelValue"
      :placeholder="placeholder"
      :type="type"
      :icon="icon"
      :variant="variant"
      :trailing-icon="trailingIcon"
      :delete-button="deleteButton"
      :ui="ui"
      @update:model-value="(value) => $emit('update:modelValue', value)"
    >
      <template v-if="value?.length && deleteButton" #trailing>
        <Button
          icon="codicon:close"
          :ui="{ base: 'bg-transparent text-white hover:bg-[#333] p-[4px]' }"
          @click="value = ''"
        />
      </template>
    </UInput>
  </UFormField>
</template>

<script setup lang="ts">
import { Button } from "@/shared/ui";

interface Props {
  placeholder?: string;
  type?: string;
  icon?: string;
  trailingIcon?: string;
  deleteButton?: boolean;
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none";
  modelValue: string;
  label?: string;
  error?: string;
  ui?: Record<string, string>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>
