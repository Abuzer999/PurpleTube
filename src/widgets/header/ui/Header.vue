<template>
  <div
    ref="headerRef"
    class="py-[25px] px-[20px] flex items-center justify-between"
    :class="{ 'bg-background/10 backdrop-blur-sm': scrolled }"
  >
    <div class="flex items-end gap-[40px]">
      <Button
        icon="i-codicon:menu"
        :ui="{
          base: 'bg-transparent rounded-full p-[7px] text-white hover:bg-[#333]',
          leadingIcon: 'w-6 h-6',
        }"
        @click="toggle"
      />
      <Logo />
    </div>

    <SearchInput />

    <Button icon="codicon:account" label="Login" to="/auth" />
  </div>
</template>

<script setup lang="ts">

import { Logo, Button } from "@/shared/ui";
import { SearchInput } from "@/features";
import { useSideOver } from "@/shared/hook/useSideOver";

const headerRef = ref<HTMLElement | null>(null);
const scrolled = ref(false);

const { toggle } = useSideOver();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};
</script>
