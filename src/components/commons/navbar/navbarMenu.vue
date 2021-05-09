<template>
  <div class="w-full h-20 fixed bottom-0">
    <div class="flex justify-center h-full">
      <router-link
        v-for="item in menuItems"
        :to="{ name: item.redirectTo }"
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
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'navbarMenu',
  props: {
    menuItems: Array
  }
})
</script>

<style scoped></style>
