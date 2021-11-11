<template>
  <nav v-scroll-spy  v-scroll-spy-active="{selector: 'div a', class: 'text-5xl'}" class="hidden lg:flex flex-row ml-auto space-x-12 items-center font-bold">
    <li class="block list-none"  v-for="navLink in navLinks" :key="navLink.name">
      <a
        :href="navLink.href"
        class="link-item hover:text-yellow-400 transition duration-150"
        :class="[navLink.class]"
      >{{ navLink.name }}</a>
    </li>
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
