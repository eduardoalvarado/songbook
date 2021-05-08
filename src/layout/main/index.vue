<template>
  <div class="px-6 pt-10 h-full">
    <div class="text-2xl mb-12">{{ titlePage }}</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, provide} from "vue";
import { hookStore, mutation } from '@/hooks/hookStore'

export default defineComponent({
  name: 'Main',
  setup() {
    provide('mutation', mutation)
    const titlePage = computed(() => hookStore.titlePage)
    return {
      titlePage
    }
  }
})
</script>

<style scoped>

</style>
