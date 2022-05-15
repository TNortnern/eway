<template>
  <main class="text-gray-700 dark:text-gray-200">
    <BookNowDrawer :open="bookNowDrawerOpen" />
    <router-view />
    <Footer v-if="!['/book-now'].includes($route.path)" />
  </main>
</template>

<script lang="ts" setup>
import { bookNowDrawerOpen } from '~/components/Navbar/state'

</script>
