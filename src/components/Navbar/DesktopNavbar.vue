<template>
  <nav class="hidden lg:flex flex-row ml-auto space-x-12 items-center font-bold">
    <div v-for="navLink in navLinks" :key="navLink.name">
      <client-only>
        <a
          v-smooth-scroll
          :href="navLink.href"
          class="scrollactive-item"
          :class="[navLink.class, activeHash === navLink.href ? 'text-yellow-400' : 'hover:text-yellow-400 transition duration-150']"
        >{{ navLink.name }}</a>
      </client-only>
    </div>
  </nav>
</template>

<script lang="ts">
import { navLinks } from './state'
export default {
  props: {
    toggleModal: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      navLinks,
    }
  },
}
</script>
