<template>
  <div class="rounded-3xl border bg-gray-200 flex w-full">
    <div class="w-16 flex items-center justify-center">
      <i class="uil uil-search text-xl" />
    </div>
    <input
      class="w-full h-12 bg-transparent focus:outline-none pr-4 leading-snug"
      type="text"
      placeholder="Busca una canción"
      v-model="songString"
      @input="searchSongs"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref } from 'vue'

const emits = defineEmits(['songString'])

const songString = ref<string>('')
const searchSongs = () => {
  //if(songString.value.length > 3) {
  emits('songString', songString.value)
  //}
}
</script>

<style scoped></style>
