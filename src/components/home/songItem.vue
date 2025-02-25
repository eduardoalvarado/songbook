<template>
  <div class="px-2 w-full xs:w-1/2 mb-8">
    <div
      @click="gotoSong(song._id)"
      class="bg-sb-primary-300 py-4 px-5 rounded-3xl flex flex-col min-height text-white"
    >
      <h1 class="dynamical-font dynamical-font-xs dynamical-font-sm font-bold">{{ song.title }}</h1>
      <p class="flex-grow text-sb-blue-200">{{ song.gender }}</p>
      <p class="flex">
        <i class="uil uil-pen mr-2" />
        {{ song.author }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from "@/router";
import { useStore } from 'vuex'

export default defineComponent({
  name: 'songItem',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const gotoSong = (songID:string) => {
      router.push({ name: 'song', params: { id: songID } })
      store.state.songID = songID
    }
    return {
      gotoSong
    }
  }
})
</script>

<style scoped lang="css">
.min-height {
  min-height: 196px;
}
.dynamical-font {
  font-size: 6vw;
}
@media (min-width: 380px) {
  .dynamical-font-xs {
    font-size: 4vw;
  }
}
@media (min-width: 640px) {
  .dynamical-font {
    font-size: 20px;
  }
}

</style>
