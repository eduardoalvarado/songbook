<template>
  <div class="w-full h-20 fixed bottom-0 bg-sb-blue-100 text-sb-primary-200">
    <div class="flex justify-center h-full">
      <router-link
        v-for="item in menuItems"
        :to="{ name: item.redirectTo, params: { id: songID} }"
        class="w-1/2 flex justify-center items-center cursor-pointer"
        :class="'order-'+item.order"
        :key="item"
      >
        <font-awesome-icon :icon="item.iconName" class="fa-2x" />
      </router-link>
    </div>
  </div>
</template>

<script>
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
.router-link-active {
  @apply text-sb-secondary-100;
}
</style>
