<script setup>
  import { ref } from 'vue'
  const pages = ref(10)
  const activePage = ref(4)

  const prevPage = () => {
    if (activePage.value > 1) {
      activePage.value--
    }
  }

  const nextPage = () => {
    if (activePage.value < pages.value) {
      activePage.value++
    }
  }
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage"></button>
    <button v-for="page in pages" class="page" :class="page === activePage ? 'active' : ''" @click="activePage = page">
      {{ page }}
    </button>
    <button class="action" :disabled="activePage === pages" @click="nextPage"></button>
  </div>
</template>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-2;
    .action {
      @apply rounded-md bg-zinc-400 p-2 font-medium text-zinc-700 shadow-md hover:bg-zinc-200 disabled:text-slate-400 hover:disabled:bg-zinc-700;
    }
    .page {
      @apply rounded-md bg-zinc-400 p-2 font-medium text-zinc-700 shadow-md hover:bg-zinc-200;
      &.active {
        @apply bg-amber-500 text-zinc-200 hover:bg-amber-600;
      }
    }
  }
</style>
