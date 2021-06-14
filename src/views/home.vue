<template>
  <div>
    <finder @songString="songString" />
    <div class="mt-8 height-calc overflow-hidden overflow-y-scroll">
      <vue-loading
        :active="loadingSongs"
        spinner="spinner"
        duration="1.5"
        color="#4f4f4f"
        background-color="rgba(255, 255, 255, 1)"
        size="50"
      />
      <div v-if="songs.length" class="xs:flex xs:flex-wrap">
        <song-item v-for="(song, index) in songs" :key="index" :song="song" />
      </div>
      <div v-else class="h-full flex items-center justify-center">
        <div class="text-center">
          <p class="font-bold text-2xl">No existen resultados!!!</p>
          <p>Puede existir un problema de conexión</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import finder from '@/components/home/finder.vue'
import SongItem from '@/components/home/songItem.vue'
import SongService from '@/services/songService'
import vueLoading from 'vue-element-loading'

export default defineComponent({
  name: 'Home',
  components: { SongItem, finder, vueLoading },
  setup() {
    const title: any = inject('mutation')
    title.setTitlePage('Cancionero')
    title.setSubTitlePage('')
    const songs = ref([])
    const loadingSongs = ref(false)

    const requestGetSongs = async () => {
      loadingSongs.value = true
      const {
        data: {
          data: { getSongs }
        }
      } = await SongService.getAllSongs()
      songs.value = getSongs
      loadingSongs.value = false
    }
    const songString = async (str: string) => {
      loadingSongs.value = true
      const {
        data: {
          data: { getSongByAttr }
        }
      } = await SongService.getSongByString(str)
      songs.value = getSongByAttr
      loadingSongs.value = false
    }

    onMounted(() => {
      requestGetSongs()
    })

    return { title, songs, loadingSongs, songString }
  }
})
</script>

<style scoped lang="css">
.height-calc {
  height: calc(100vh - 234px);
}
</style>
