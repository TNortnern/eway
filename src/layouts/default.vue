<template>
  <main class="text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer v-if="!['/book-now'].includes($route.path)" />
  </main>
</template>
