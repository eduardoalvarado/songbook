<template>
  <div class="flex flex-col h-full justify-center items-center height-calc">
    <h1 class="text-3xl font-black">Login</h1>
    <div class="flex flex-col items-center w-full px-10">
      <div class="shadow-custom rounded-md m-4 p-4 w-full">
        <input
          class="border-none focus:outline-none"
          placeholder="Ingresa tu usuario"
        />
      </div>
      <div class="shadow-custom rounded-md m-4 p-4 w-full">
        <input
          class="border-none focus:outline-none"
          placeholder="Ingresa tu contrasena"
        />
      </div>
      <div class="w-full bg-sb-secondary-100 rounded-md m-4 flex shadow-custom">
        <button class="w-full text-white p-4">Acceder</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue'

export default defineComponent({
  name: 'login',
  setup() {
    const storeTitle: any = inject('mutation')
    onMounted(() => {
      storeTitle.setTitlePage('')
    })
  }
})
</script>

<style scoped lang="css">
.height-calc {
  height: calc(100vh - 180px);
}
.shadow-custom {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}
</style>
