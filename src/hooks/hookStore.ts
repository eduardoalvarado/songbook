import { reactive } from 'vue'

export const hookStore = reactive({
  titlePage: ''
})

export const mutation = {
  setTitlePage: (titlePage:string) => {
    hookStore.titlePage = titlePage
  }
}
