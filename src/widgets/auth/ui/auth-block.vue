<template>
  <div
    class="flex flex-col items-center mx-auto max-w-[400px] w-full bg-[#181818] p-6 rounded-2xl"
  >
    <Logo class="mb-[10px]" />
    <UTabs
      :items="items"
      variant="link"
      color="primary"
      class="gap-4 w-full"
      :ui="{ trigger: 'grow' }"
    >
      <template #Login>
        <UForm
          :schema="loginSchema"
          :state="loginForm"
          class="flex flex-col gap-4 w-full"
          @submit="login"
        >
          <Input
            v-model="loginForm.email"
            label="Email"
            placeholder="Enter email"
            type="email"
            variant="none"
            :ui="uiInput"
          />
          <Input
            v-model="loginForm.password"
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="none"
            :ui="uiInput"
          />
          <Button label="Login" type="submit" :loading="true" :ui="uiButton" />
        </UForm>
      </template>

      <template #Register>
        <UForm
          :schema="registerSchema"
          :state="registerForm"
          class="flex flex-col gap-4 w-full"
          @submit="register"
        >
          <Input
            v-model="registerForm.name"
            label="Nick"
            placeholder="Enter nick"
            type="text"
            variant="none"
            :ui="uiInput"
          />
          <Input
            v-model="registerForm.email"
            label="Email"
            placeholder="Enter email"
            type="email"
            variant="none"
            :ui="uiInput"
          />
          <Input
            v-model="registerForm.password"
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="none"
            :ui="uiInput"
          />
          <Input
            v-model="registerForm.passwordConfirm"
            label="Password confirm"
            placeholder="Enter password again"
            type="password"
            variant="none"
            :ui="uiInput"
          />
          <Button label="Register" :ui="uiButton" />
        </UForm>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { Input, Logo, Button } from "@/shared/ui";
import { uiButton, uiInput } from "@/shared/models/ui";

const items = [
  {
    label: "Login",
    icon: "i-codicon:sign-in",
    slot: "Login" as const,
  },
  {
    label: "Register",
    icon: "i-codicon:person-add",
    slot: "Register" as const,
  },
] satisfies TabsItem[];

const loginForm = reactive({
  email: "",
  password: "",
});

const registerForm = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const login = async () => {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: loginForm,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const register = async () => {
  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: registerForm,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
</script>
