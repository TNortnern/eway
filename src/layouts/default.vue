<template>
  <main class="text-gray-700 dark:text-gray-200">
    <transition name="fade">
      <div v-if="rootStore.appLoading" class="bg-black z-19 bg-opacity-85 fixed inset-0 h-screen w-full flex justify-center items-center">
        <PageSpinner />
      </div>
    </transition>
    <BookNowDrawer :open="bookNowDrawerOpen" />
    <router-view />
    <Footer v-if="!['/book-now', '/complete-order'].includes($route.path)" />
  </main>
</template>

<script lang="ts" setup>
import { bookNowDrawerOpen } from '~/components/Navbar/state'
import { useRootStore } from '~/stores/root'

const rootStore = useRootStore()
onMounted(() => {

})
</script>

<style>

  html {
    font-family: Quicksand, sans-serif;
  }
</style>
