import { defineStore } from 'pinia'
import { store } from '@/store'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const countValue = ref(0)
  const increment = () => {
    countValue.value += 1
  }

  return { countValue, increment }
})

export function useCounterStoreWithOut() {
  return useCounterStore(store)
}
