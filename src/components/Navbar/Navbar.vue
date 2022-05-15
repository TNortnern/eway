<template>
  <!-- This component needs to have a fixed drawer animate in after it's been scrolled by so we keep 2 instances of the navbar to prevent page jumping -->
  <div>
    <div id="nav" class="py-8" always-track active-class="text-yellow-400" :offset="170">
      <div
        class="mx-auto max-w-7xl px-4 2xl:px-0 justify-between flex flex-row items-center"
        :class="border ? 'border-b border-yellow-400 pb-4' : ''"
      >
        <router-link title="Home" to="/" class="cursor-pointer">
          <NavbarLogo />

          <!-- <img
            src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/5ea825e6e815478d9817266a_BOLT-logo-Yellow-Higher%20Res.png"
            alt="logo"
            class="w-20"
          /> -->
        </router-link>
        <!-- show this if screen is lg (desktop view) -->
        <DesktopNavbar :nav-links="navLinks" :toggle-modal="toggle" />
        <!-- show this if screen is not lg (mobile view) -->
        <MobileNavbar :nav-links="navLinks" :toggle-modal="toggle" />
      </div>
    </div>
    <!-- This will only render once you've scrolled past the static navbar -->
    <div
      id="nav"
      class="mx-auto fixed top-0 text-gray-700 inset-x-0 bg-white duration-500 ease-in-out shadow-xl py-4.5 z-15 w-full"
      :class="toggleNavClass()"
      always-track
      active-class="text-yellow-400"
      :offset="170"
    >
      <div class="mx-auto max-w-7xl px-4 2xl:px-0 justify-between flex flex-row items-center">
        <router-link title="Home" to="/" class="cursor-pointer">
          <NavbarLogo />
          <!-- <img
            src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/5ea825e6e815478d9817266a_BOLT-logo-Yellow-Higher%20Res.png"
            alt="logo"
            class="w-20"
          /> -->
        </router-link>
        <!-- show this if screen is lg (desktop view) -->
        <DesktopNavbar :nav-links="navLinks" :toggle-modal="toggle" />
        <!-- show this if screen is not lg (mobile view) -->
        <MobileNavbar :nav-links="navLinks" :toggle-modal="toggle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { open } from './state'
import { links } from '~/store/routes'
export default {
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const active = ref(false)
    const toggleNavClass = () => {
      // toggles the animated slide
      if (active.value)
        return 'transform translate-y-0'

      else
        return 'transform -translate-y-64'
    }
    onMounted(() => {
      window.document.onscroll = () => {
        const navBar: any = document.getElementById('nav')
        // have we scrolled past this element?
        if (window.scrollY > navBar.offsetTop + navBar.offsetHeight)
          active.value = true

        else
          active.value = false
      }
    })

    return {
      open,
      toggleNavClass,
      active,
      toggle: () => (open.value = !open.value),
      navLinks: links,
    }
  },
}
</script>

<style>
.cls-1 {
  @apply fill-yellow-400;
}
</style>
