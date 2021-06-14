<template>
  <div class="w-full h-20 fixed bottom-0 bg-white text-sb-primary-200 shadow-top z-index-up">
    <div class="flex justify-center h-full">
      <router-link
        v-for="item in menuItems"
        :to="{ name: item.redirectTo, params: { id: songID} }"
        class="w-1/2 flex justify-center items-center cursor-pointer"
        :class="'order-'+item.order"
        :key="item"
      >
        <i class="text-2xl" :class="['uil', item.iconName]"></i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'navbarMenu',
  props: {
    menuItems: Array
  },
  setup() {
    const store = useStore()
    const songID = computed(() => store.state.songID)
    return {
      songID
    }
  }
})
</script>

<style scoped lang="css">
.router-link-exact-active {
  @apply text-sb-secondary-100;
}
.shadow-top {
  box-shadow: 0 -4px 20px -4px rgba(0,0,0,0.25);
}
.z-index-up {
  z-index: 3001;
}
</style>
