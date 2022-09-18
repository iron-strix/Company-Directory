<script setup>
  import { ref } from 'vue'
  import { faker } from '@faker-js/faker'
  const brand = ref('🏦 Fake Company Directory')
</script>
<template>
  <nav class="bg-red-500">
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
        <span class="brand-slogan">{{ faker.company.bsAdjective() }}</span>
      </div>
      <div class="menu">
        <a href="#" class="menu-item">Departments</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-login">Logout</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav {
    @apply flex h-20 bg-red-800 text-slate-200;

    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;

      .brand {
        &-title {
          @apply font-serif text-3xl font-bold text-amber-500;
        }

        &-slogan {
          @apply flex justify-center text-center font-sans text-sm italic text-zinc-300;
        }
      }

      .menu {
        @apply flex gap-2 font-sans;
        &-item {
          @apply rounded-md px-4 py-2 hover:bg-amber-500 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-rose-600 px-4 py-2 hover:bg-amber-500 hover:text-slate-900;
        }
      }
    }
  }
</style>
