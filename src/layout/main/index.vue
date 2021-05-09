<template>
  <div class="">
    <div class="px-6 pt-10 h-full">
      <div class="text-2xl mb-12">{{ titlePage }}</div>
      <router-view />
    </div>
    <!--menu-->
    <navbar-menu :menu-items="menuItems"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, provide, reactive, ref} from "vue";
import { hookStore, mutation } from '@/hooks/hookStore'
import NavbarMenu from "@/components/commons/navbar/navbarMenu.vue";
import { NavbarModel } from '@/models/navbarModel'
import { menuMock } from '@/mocks/menuMock'

export default defineComponent({
  name: 'Main',
  components: {NavbarMenu},
  setup() {
    provide('mutation', mutation)
    const titlePage = computed(() => hookStore.titlePage)
    const menuItems:Array<NavbarModel> = reactive([])

    const buildMenu = () => {
      menuMock.forEach((item) => {
        let menuOption = new NavbarModel(item.redirectTo, item.iconName, item.order)
        menuItems.push(menuOption)
      })
    }
    onMounted(() => {
      buildMenu()
      console.log('array', menuItems)
    })
    return {
      titlePage,
      menuItems
    }
  }
})
</script>

<style scoped>

</style>
