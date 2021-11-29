<template>
  <nav class="ml-auto lg:hidden text-center">
    <MobileNavDrawer />
    <div class="cursor-pointer">
      <button
        class="rounded-md px-2 inline-flex items-center justify-center text-yellow-400 hover:text-gray-200 hover:(bg-opacity-70) focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
        @click="toggleMenu()"
      >
        <span class="sr-only">Open menu</span>
        <MenuIcon class="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import {

  MenuIcon,
} from '@heroicons/vue/outline'
import { toggleMenu, mobileMenuOpen } from './state'
export default {
  components: {
    MenuIcon,
  },
  props: {
    navLinks: {
      type: Object,
      required: true,
    },
    toggleModal: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      toggleMenu,
      mobileMenuOpen,
    }
  },
}
</script>
