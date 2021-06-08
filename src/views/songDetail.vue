<template>
  <div class="container-song relative" ref="containerSong">
    <div
        class="height-calc px-3 overflow-hidden overflow-y-scroll text-center"
        ref="scrollContainer"
        @scroll="getScrollPosition($refs.scrollContainer)"
    >
      <div class="mb-44">
        <div class="text-4xl font-bold leading-normal mb-10">
          <span class="font-medium pb-5 block">Estrofa 1</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="text-4xl font-bold leading-normal mb-10">
          <span class="font-medium pb-5 block">Coro</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="text-4xl font-bold leading-normal mb-10">
          <span class="font-medium pb-5 block">Estrofa 2</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, ref} from 'vue'
import SongService from '@/services/songService'

export default defineComponent({
  name: 'songDetail',
  setup() {
    const INITIAL_POS = 0
    const scrollContainer = ref(null)
    const containerSong = ref(null)
    const songContent = ref(null)
    const storeTitle: any = inject('mutation')
    storeTitle.setTitlePage('Primera cancion')
    storeTitle.setSubTitlePage('Autor de esta cancion')

    const getScrollPosition = (el:HTMLElement) => {
      let visibleStyle = 'block'
      if (el.scrollTop === INITIAL_POS) {
        visibleStyle = 'none'
      }
      (<HTMLElement><any>containerSong.value).style.setProperty('--is-visible', visibleStyle)
    }
    onMounted(() => {
      getScrollPosition((<HTMLElement><any>scrollContainer.value))
      requestGetSong('60b5b42a3ac5cb5e23c8851d')
    })

    const requestGetSong = async (id:string) => {
      const response = await SongService.getSong(id)
      console.log('response graphql', response)
    }
    return {
      getScrollPosition,
      scrollContainer,
      containerSong,
      songContent
    }
  }
})
</script>

<style scoped lang="css">
.height-calc {
  height: calc(100vh - 210px);
}
.container-song {
  --is-visible: block;
}
.container-song::before {
  content: '';
  display: var(--is-visible);
  pointer-events: none;
  position: absolute;
  top: -2px;
  left:0;
  width: 100%;
  height: 210px;
  background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%);
}
.container-song::after {
  content: '';
  pointer-events: none;
  position: absolute;
  bottom: -2px;
  left:0;
  width: 100%;
  height: 210px;
  background: linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%);
}
</style>
