<template>
  <div class="wrapper">
    <header>
      <Header />
    </header>

    <main>
      <slot />
    </main>

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/widgets";
</script>
