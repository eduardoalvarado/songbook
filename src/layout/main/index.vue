<template>
  <div class="bg-sb-blue-100 text-sb-primary-200">
    <div class="px-6 pt-10 h-full">
      <div class="text-2xl font-bold">{{ titlePage }}</div>
      <div class="text-lg mb-8">{{ subTitlePage }}</div>
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
    const subTitlePage = computed(() => hookStore.subTitlePage)
    const menuItems:Array<NavbarModel> = reactive([])

    const buildMenu = () => {
      menuMock.forEach((item) => {
        let menuOption = new NavbarModel(item.redirectTo, item.iconName, item.order)
        menuItems.push(menuOption)
      })
    }
    onMounted(() => {
      buildMenu()
    })
    return {
      titlePage,
      subTitlePage,
      menuItems
    }
  }
})
</script>

<style scoped>

</style>
