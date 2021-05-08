<template>
  <div class="px-2 w-full xs:w-1/2 mb-8">
    <div class="bg-blue-400 p-4 rounded-xl flex flex-col h-full min-height">
      <h1 class="text-2xl">Title</h1>
      <p class="flex-grow">Type</p>
      <p>Autor</p>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "songItem"
})
</script>

<style scoped lang="css">
.min-height {
  min-height: 176px;
}
</style>
