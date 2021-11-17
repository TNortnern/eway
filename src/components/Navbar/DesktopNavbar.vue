<template>
  <nav class="hidden lg:flex flex-row ml-auto space-x-12 items-center font-bold">
    <div v-for="navLink in navLinks" :key="navLink.name">
      <a
        v-smooth-scroll
        :href="navLink.href"
        class=" scrollactive-item"
        :class="[navLink.class, active.isActiveLink(navLink.href) ? 'text-yellow-400' : 'hover:text-yellow-400 transition duration-150']"
      >{{ navLink.name }}</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { navLinks } from './state'
import useActiveLink from '~/composables/useActiveLink'
export default {
  props: {
    toggleModal: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const active = useActiveLink()
    return {
      navLinks,
      active,
    }
  },
}
</script>
