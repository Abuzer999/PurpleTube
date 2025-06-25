<script setup>
import { AuthPage } from "@/pages/auth";
useHead({
  title: "PurpleTube",
});
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <AuthPage />
</template>
