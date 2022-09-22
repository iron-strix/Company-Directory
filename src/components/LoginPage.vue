<script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/composables/useAuth'

  const { login, logout } = useAuth()
  const username = ref('')
  const password = ref('')

  const logUserIn = () => {
    if (login(username.value, password.value)) {
      console.log('logged in')
    } else {
      logout()
    }
  }
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-600 py-4 px-4">Log In</button>
  </form>
</template>

<style lang="postcss" scoped>
  .login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-zinc-500 p-8;
    & input {
      @apply rounded-md px-4 py-2 font-sans text-xl ring-1 ring-zinc-700;
    }
  }
</style>
