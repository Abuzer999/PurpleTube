<template>
  <div class="wrapper">
    <header class="fixed top-0 left-0 w-full">
      <Header />
    </header>

    <div class="dashboard pt-[95px]">
      <SideOver />

      <main>
        <slot />
      </main>
    </div>

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/widgets";
import { SideOver } from "@/shared/ui";
</script>
