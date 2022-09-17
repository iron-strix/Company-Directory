<script setup>
  import { faker } from '@faker-js/faker'
  const fullName = faker.name.fullName()

  const selectCard = () => {
    console.log(`${fullName} selected`)
  }
</script>

<template>
  <div class="card" @click="selectCard">
    <img :src="faker.internet.avatar()" :alt="fullName" srcset="" />
    <div class="card-text">
      <p class="card-text-name">{{ fullName }}</p>
      <p class="card-text-email">{{ faker.internet.exampleEmail(fullName) }}</p>
      <p class="card-text-dept">
        {{ faker.commerce.department() }}<br />
        {{ faker.name.jobTitle() }}
      </p>
      <p class="card-text-title"></p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    @apply rounded-md bg-slate-200 p-4 shadow-md transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zinc-900;
    img {
      @apply m-2 mx-auto rounded-full ring-4 ring-red-900;
    }
  }

  .card-text {
    @apply text-center;

    &-name {
      @apply font-bold;
    }
  }
</style>
