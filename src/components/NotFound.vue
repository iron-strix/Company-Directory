<template>
  <div class="not-found">
    <h2 class="not-found-h2">404 Page Not Found</h2>
  </div>
</template>

<style lang="postcss" scoped>
  .not-found {
    @apply flex min-h-screen items-center justify-center bg-amber-400 text-center;

    &-h2 {
      @apply font-serif text-5xl font-bold text-zinc-700;
    }
  }
</style>
