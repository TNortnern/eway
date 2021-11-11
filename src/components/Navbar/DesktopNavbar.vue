<template>
  <nav
    class="hidden lg:flex flex-row ml-auto space-x-12 items-center font-bold"
  >
    <div v-for="navLink in navLinks" :key="navLink.name">
      <a
        :href="navLink.href"
        class="hover:text-yellow-400 transition duration-150 scrollactive-item"
        :class="navLink.class"
      >
        {{ navLink.name }}
      </a>
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
