<script setup>
  import { ref } from 'vue'
  import { faker } from '@faker-js/faker'
  import { useAuth } from '@/composables/useAuth'

  const { isAuthenticated, logout, user } = useAuth()

  const brand = ref('🏦 Fake Company Directory')
</script>
<template>
  <nav class="bg-red-500">
    <div class="wrapper">
      <RouterLink :to="{ name: 'home' }" class="brand">
        <span class="brand-title">{{ brand }}</span>
        <span class="brand-slogan">{{ faker.company.bsAdjective() }}</span>
      </RouterLink>

      <div class="menu">
        <div v-if="isAuthenticated">
          <p class="font-serif text-rose-500">
            Welcome, <strong>{{ user.name }}</strong
            >.
          </p>
        </div>
        <div>
          <RouterLink :to="{ name: 'departments' }" href="#" class="menu-item">Departments</RouterLink>
        </div>
        <div v-if="isAuthenticated">
          <RouterLink :to="{ name: 'settings' }" href="#" class="menu-item">Settings</RouterLink>
          <RouterLink :to="{ name: 'home' }" href="#" class="menu-logout" @click="logout()">Logout</RouterLink>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'login' }" href="#" class="menu-login">Login</RouterLink>
        </div>
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
          @apply flex justify-end text-center font-sans text-sm italic text-zinc-300;
        }
      }

      .menu {
        @apply flex font-sans;

        div {
        }

        &-item {
          @apply mx-2 rounded-md px-4 py-2 hover:bg-amber-500 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-green-600 px-4 py-2 hover:bg-green-400 hover:text-slate-900;
        }

        &-logout {
          @apply rounded-md bg-rose-600 px-4 py-2 hover:bg-amber-500 hover:text-slate-900;
        }
      }
    }
  }
</style>
