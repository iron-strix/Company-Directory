<!-- eslint-disable vue/script-indent -->
<script setup>
  import useAPI from '@/composables/useAPI'
  const { activePage, pages, getEmployees } = useAPI()

  const prevPage = async () => {
    if (activePage.value > 1) {
      activePage.value--
      await getEmployees()
    }
  }

  const nextPage = async () => {
    if (activePage.value < pages.value) {
      activePage.value++
      await getEmployees()
    }
  }

  const jumpPage = async (page) => {
    activePage.value = page
    await getEmployees()
  }
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage">Prev</button>
    <button
      v-for="page in pages"
      :key="page"
      class="page"
      :class="page === activePage ? 'active' : ''"
      @click="jumpPage(page)"
    >
      {{ page }}
    </button>
    <button class="action" :disabled="activePage === pages" @click="nextPage">Next</button>
  </div>
</template>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-2;
    .action {
      @apply rounded-md bg-zinc-400 p-2 font-medium text-zinc-700 shadow-md hover:bg-zinc-200 disabled:bg-zinc-700 disabled:text-slate-200 hover:disabled:bg-zinc-900 hover:disabled:text-slate-500;
    }
    .page {
      @apply rounded-md bg-zinc-400 p-2 font-medium text-zinc-700 shadow-md hover:bg-zinc-200;
      &.active {
        @apply bg-amber-500 text-zinc-200 hover:bg-amber-600;
      }
    }
  }
</style>
