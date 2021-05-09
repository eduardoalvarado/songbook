<template>
  <div class="rounded-xl bg-gray-200 flex w-full">
    <input
      class="w-full h-12 bg-transparent focus:outline-none pl-4 leading-snug"
      type="text"
    />
    <div class="w-12 flex items-center justify-center">
      <font-awesome-icon icon="search" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'finder'
})
</script>

<style scoped></style>
