import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import api from '~/api'
import type { Media } from '~/types'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  images: Media[]
  customFields: any
}

interface RootState {
  appLoading: boolean
  products: Product[]
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
    products: [],
  }),
  getters: {
    dataLoaded(): boolean {
      return !!this.products.length
    },
  },
  actions: {
    async initialize() {
      try {
        const { data: { data } }: AxiosResponse<{ data: Product[] }> = await api.get('/api/products')
        this.products = data
      }
      catch (error) {
        console.error('error', error)
      }
    },
  },
})
