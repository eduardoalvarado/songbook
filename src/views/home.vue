<template>
  <div>
    <finder />
    <div class="mt-14 height-calc overflow-hidden overflow-y-scroll">
      <div class="h-full xs:flex xs:flex-wrap content-stretch">
        <song-item />
        <song-item />
        <song-item />
        <song-item />
        <song-item />
        <song-item />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted} from 'vue';
import finder from "@/components/home/finder.vue";
import SongItem from "@/components/home/songItem.vue";

export default defineComponent({
  name: 'Home',
  components: {SongItem, finder },
  setup() {
    const title:any = inject('mutation')
    title.setTitlePage('Cancionero')

    onMounted(() => {})
    return { title }
  }
});
</script>

<style scoped lang="css">
.height-calc {
  height: calc(100vh - 310px);
}
</style>
