<script setup>
  import { ref } from 'vue'

  import useAPI from '@/composables/useAPI'

  import { faker } from '@faker-js/faker'

  const { getDepartment } = useAPI()

  //const fullName = faker.name.fullName()

  const selectCard = () => {
    console.log(`${props.employee.name} selected`)
  }

  const props = defineProps({
    employee: {
      type: Object,
      required: true,
      default: () => {
        return {
          createdAt: '2022-01-01',
          departmentId: '123',
          email: 'John_doe@example.com',
          employeeId: '123',
          name: 'John Doe',
          quote: 'Quote here.',
          title: 'Postion at company here',
          updatedAt: '2022-01-01',
        }
      },
    },
  })

  const departmentResponse = await getDepartment(props.employee.departmentId)
  const department = ref(departmentResponse)
  const show = ref(false)
</script>

<template>
  <div class="card" @click="selectCard">
    <img :src="faker.internet.avatar()" :alt="props.employee.name" srcset="" />
    <div class="card-text" @mouseover="show = true" @mouseleave="show = false">
      <p class="card-text-name">{{ props.employee.name }}</p>
      <p class="card-text-email">{{ props.employee.email }}</p>
      <p v-if="!show" class="card-text-title">...</p>
      <p v-if="show" class="card-text-title">"{{ props.employee.quote }}"</p>
      <p class="card-text-dept">
        {{ department.name }}
      </p>
      <p class="card-text-title">{{ props.employee.title }}</p>
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
