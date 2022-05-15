<template>
  <nav class="hidden lg:flex flex-row ml-auto space-x-12 items-center font-bold">
    <div v-for="navLink in navLinks" :key="navLink.name">
      <a
        v-if="!navLink.action"
        v-smooth-scroll
        :title="navLink.name"
        :href="navLink.href"
        class=" scrollactive-item"
        :class="[navLink.class, active.isActiveLink(navLink?.href || '') ? 'text-yellow-400' : `hover:text-yellow-400 transition duration-150`]"
      >{{ navLink.name }}</a>
      <button
        v-else
        class="transition duration-150"
        :class="navLink.class"
        v-on="{
          ...( navLink.action && { click: navLink.action } )
        }"
      >
        {{ navLink.name }}
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { navLinks } from './state'
import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
defineProps<{toggleModal: Function}>()
</script>
