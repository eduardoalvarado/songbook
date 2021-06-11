<template>
  <div class="container-song relative bg-sb-blue-100" ref="containerSong">
    <vue-loading
      :active="loadingSongs"
      spinner="spinner"
      duration="1.5"
      color="#4f4f4f"
      background-color="rgba(219, 233, 246, 1)"
      size="50"
    />
    <div v-if="unresolvedSong" class="w-full h-64 flex items-center justify-center">
      <div class="text-center w-3/4 ">
        <p class="font-bold text-2xl">No ha seleccionado ninguna canción!!!</p>
        <p>Debe seleccionar una canción para poder visualizarla aquí</p>
      </div>
    </div>
    <div
      class="height-calc px-3 overflow-hidden overflow-y-scroll text-center"
      ref="scrollContainer"
      @scroll="getScrollPosition($refs.scrollContainer)"
    >
      <div class="mb-44">
        <div
          v-for="(item, index) in itemSong.verse"
          class="text-4xl font-bold leading-normal mb-10"
          :key="index"
        >
          <span class="font-medium pb-5 block uppercase">{{ item.type }}</span>
          <div v-html="paragraphSong"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  reactive,
  ref
} from 'vue'
import SongService from '@/services/songService'
import { useRoute } from 'vue-router'
import vueLoading from 'vue-element-loading'

export default defineComponent({
  name: 'songDetail',
  components: { vueLoading },
  data() {
    return {
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true
  },
  setup() {
    const route: any = useRoute()
    const INITIAL_POS = 0
    const scrollContainer = ref(null)
    const containerSong = ref(null)
    const songContent = ref(null)
    const storeTitle: any = inject('mutation')
    const paragraphSong = ref(null)
    const itemSong = ref({
      title: '',
      author: '',
      verse: [
        {
          type: '',
          paragraph: ''
        }
      ]
    })
    const loadingSongs = ref(false)
    const unresolvedSong = ref(false)

    const getScrollPosition = (el: HTMLElement) => {
      let visibleStyle = 'block'
      if (el.scrollTop === INITIAL_POS) {
        visibleStyle = 'none'
      }
      ;(<HTMLElement>(<any>containerSong.value)).style.setProperty(
        '--is-visible',
        visibleStyle
      )
    }
    onMounted(() => {
      getScrollPosition(<HTMLElement>(<any>scrollContainer.value))
      requestGetSong(route.params.id)
    })

    const requestGetSong = async (id: string) => {
      loadingSongs.value = true
      try {
        const {
          data: {
            data: { getSongById }
          }
        } = await SongService.getSong(id)
        itemSong.value = getSongById
      } catch (e) {
        loadingSongs.value = false
        unresolvedSong.value = true
      }

      storeTitle.setTitlePage(itemSong.value.title)
      storeTitle.setSubTitlePage(itemSong.value.author)
      loadingSongs.value = false
      buildParagraph()
    }
    const buildParagraph = () => {
      itemSong.value.verse.forEach((item: any) => {
        paragraphSong.value = item.paragraph.replace(/(\\r)*\/n/g, '<br>')
      })
    }
    //.replace(/(\\r)*\/n/g, '<br>')
    return {
      getScrollPosition,
      scrollContainer,
      containerSong,
      songContent,
      itemSong,
      loadingSongs,
      paragraphSong,
      unresolvedSong
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
  left: 0;
  width: 100%;
  height: 210px;
  background: linear-gradient(
    180deg,
    rgba(219, 233, 246, 1) 10%,
    rgba(219, 233, 246, 0) 100%
  );
}
.container-song::after {
  content: '';
  pointer-events: none;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 210px;
  background: linear-gradient(
    0deg,
    rgba(219, 233, 246, 1) 10%,
    rgba(219, 233, 246, 0) 100%
  );
}
</style>
