import { createPinia } from 'pinia'
import { useRootStore } from '~/stores/root'
import { UserModule } from '~/types'

export const install: UserModule = ({ initialState, app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  if (import.meta.env.SSR)
    initialState.pinia = pinia.state.value

  else
    pinia.state.value = initialState.pinia || {}

  router.beforeEach(async(to, from, next) => {
    const rootStore = useRootStore(pinia)
    if (!rootStore.dataLoaded)
      await rootStore.initialize()

    next()
  })
}
