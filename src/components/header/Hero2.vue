<template>
  <div class="h-screen bg-black relative font-quicksand">
    <nav class="w-full border-b border-yellow-400 relative py-12 z-15 absolute top-0">
      <div class=" h-full mx-auto max-w-7xl w-full px-6 lg:px-8 2xl:px-4 justify-between flex items-center">
        <div class="flex items-center gap-12 text-white uppercase font-bold">
          <div>EWAY</div>
          <ul class="flex items-center gap-10">
            <li
              v-for="navLink in navLinks"
              :key="navLink.name"
            >
              <a
                v-if="!navLink.action"
                v-smooth-scroll
                :title="navLink.name"
                :href="navLink.href"
                class=" scrollactive-item"
                :class="[navLink.class, active.isActiveLink(navLink?.href || '') ? 'text-yellow-400' : `hover:text-yellow-400 transition duration-300`]"
              >{{
                navLink.name }}</a>
              <!-- <button
                v-else
                class="transition duration-150"
                :class="navLink.class"
                v-on="{
                  ...( navLink.action && { click: navLink.action } )
                }"
              >
                {{ navLink.name }}
              </button> -->
            </li>
          </ul>
        </div>
        <div class="ml-auto flex gap-5 items-center">
          <a
            href="tel:+14175090120"
            class="text-yellow-400 self-center hover:underline font-bold duration-300 text-lg"
          >
            +1(417)-509-8901
          </a>
          <button
            class="flex duration-300 items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white)"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
    <div class="max-w-8xl h-full pt-20 text-center lg:(absolute top-0 left-0 bottom-0 right-0 mx-auto pt-0 text-left)">
      <img
        id="heading"
        class="hidden absolute flex items-center z-10 w-[65%] lg:(flex -right-32 -right-23 top-[52%]) xl:(-right-28 top-[55%]) 2xl:(-right-42) at scroll"
        src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/60dbc09f0cbec8621f83fc1d_BOLT-Devices-2021-2.png"
        alt="scooter"
      >
      <div class="flex flex-wrap lg:(justify-between items-center h-full) text-6xl leading-72px w-full px-6 lg:px-8">
        <div class="w-full lg:w-[44%]">
          <div class="text-white font-bold text-3xl md:text-4xl lg:text-6xl xl:text-7xl whitespace-nowrap">
            <p class="left">
              Book Your New
            </p>
            <p class="text-yellow-400 right">
              Eco-Friendly <span class="text-white">Ride.</span>
            </p>
          </div>
          <div class="mt-8 text-white text-base lg:text-lg w-full">
            Eway LLC is an electric scooter rental company based in Springfield, Missouri. Our scooters are used for
            recreational
            use, public tours, romatic dates, and school visitations. Riding with Eway LLC will show you the city like
            you've never
            seen it before.
          </div>
          <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <button
              class="inline-flex items-center justify-center uppercase font-bold border border-transparent shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-white text-black) fancy duration-300 relative z-10"
            >
              Book Now for $30 / Day
            </button>
          </div>
        </div>
        <img
          class="w-full hidden relative z-10 mt-5 md:mt-12"
          src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/60dbc09f0cbec8621f83fc1d_BOLT-Devices-2021-2.png"
          alt="scooter"
        >
      </div>
    </div>
    <img
      class="absolute right-0 bottom-0"
      src="/hero/roundbig.png"
      alt="round"
    >
    <img
      class="absolute -left-36 -top-22"
      src="/hero/roundsmall.png"
      alt="round"
    >
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'ScrollTrigger'
import { navLinks } from '../Navbar/state'
// import { open } from './state'
// import { links } from '~/store/routes'
import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.fromTo(
    '#heading',
    {
      opacity: 0,
      x: '-100%',
    },
    {
      duration: 1.5,
      opacity: 1,
      x: 0,
    },
  )

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.slide-in',
      },
    }).from('.slide-in p', {
      opacity: 0,
      x: '-100%',
      duration: 8,
    }).to('.slide-in p', { x: 0, opacity: 1, duration: 8 })
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.slide-in',
      },
    }).from('.slide-in .left', {
      opacity: 0,
      x: '-100%',
    }).to('.slide-in .left', { x: 0, opacity: 1, duration: 8 })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.slide-in',
      },
    })

    .from('.slide-in .right', {
      opacity: 0,
      x: '-100%',
    })
    .to('.slide-in .right', { x: 0, duration: 8 })
})
</script>

<style>
.fancy {
  border-radius: 20px 0;
  padding: 20px 40px;
}

.fancy:hover {
  border-radius: 0 20px 0 20px;
}

.at {
  position: absolute;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
