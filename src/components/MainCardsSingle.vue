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
        {{ faker.commerce.department() }}
      </p>
      <p class="card-text-title">{{ faker.name.jobTitle() }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    @apply rounded-md bg-zinc-500 p-4 shadow-md transition duration-300 hover:scale-105 hover:bg-zinc-600 hover:shadow-2xl hover:shadow-zinc-900;
    img {
      @apply m-2 mx-auto rounded-full object-contain shadow-lg shadow-zinc-600 ring-4 ring-zinc-400;
    }
  }

  .card-text {
    @apply flex flex-col pt-2 text-center font-sans;

    &-name {
      @apply font-serif text-3xl font-bold text-amber-500;
    }

    &-email {
      @apply font-sans text-sm text-zinc-400;
    }

    &-dept {
      @apply pt-4 font-serif text-lg font-bold text-amber-500;
    }

    &-title {
      @apply font-sans text-sm italic text-zinc-300;
    }
  }
</style>
