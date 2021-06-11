<template>
  <div class="px-2 w-full xs:w-1/2 mb-8">
    <div
      @click="gotoSong(song._id)"
      class="bg-sb-primary-100 py-4 px-5 rounded-3xl flex flex-col min-height text-white"
    >
      <h1 class="text-2xl font-bold">{{ song.title }}</h1>
      <p class="flex-grow text-sb-blue-200">{{ song.gender }}</p>
      <p class="flex">
        <font-awesome-icon icon="feather-alt" class="mr-2 mt-1" />
        {{ song.author }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import router from "@/router";
import { useStore } from 'vuex'

export default defineComponent({
  name: 'songItem',
  props: {
    song: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  setup(props) {
    const song = ref(props.song)
    const store = useStore()
    const gotoSong = songID => {
      router.push({ name: 'song', params: { id: songID } })
      store.state.songID = songID
    }
    return {
      song,
      gotoSong
    }
  }
})
</script>

<style scoped lang="css">
.min-height {
  min-height: 196px;
}
</style>
