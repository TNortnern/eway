<template>
  <div>
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed z-40 bg-black bg-opacity-25 inset-0"></div>
    </transition>
    <transition name="mobile-drawer">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-box shadow-2xl fixed top-0 right-0 flex flex-col p-8 border-black space-y-8 bg-white text-black w-2/5 min-w-96 h-full z-45"
      >
        <button class="ml-auto rounded-xl cursor-pointer" @click="toggleMenu">
          <XIcon class="w-7 h-7" />
          <!-- <Icon name="Close" /> -->
        </button>
        <div v-for="navLink in navLinks" :key="navLink.name">
          <a
            v-if="navLink.name !== 'About'"
            class="scrollactive-item"
            :class="navLink.class"
            :href="navLink.href"
          >{{ navLink.name }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { XIcon } from '@heroicons/vue/solid'
import { mobileMenuOpen, navLinks, toggleMenu, openContactModal } from './state'
export default {
  components: {
    XIcon
  },
  setup() {
    const $route = useRoute()
    const activeHash = computed(() => $route.hash)
    return {
      toggleMenu,
      mobileMenuOpen,
      navLinks,
      openContactModal,
      activeHash,
    }
  },
}
</script>

<style>
.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: all 0.35s;
  /* position: absolute; */
}

.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(1000px) scale(0.5);
}

.mobile-drawer-leave-from,
.mobile-drawer-enter-to {
  transform: translateX(0) scale(1);
}
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.32s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
