import { reactive } from 'vue'

export const hookStore = reactive({
  titlePage: '',
  subTitlePage: ''
})

export const mutation = {
  setTitlePage: (titlePage:string) => {
    hookStore.titlePage = titlePage
  },
  setSubTitlePage: (subTitlePage:string) => {
    hookStore.subTitlePage = subTitlePage
  }
}
