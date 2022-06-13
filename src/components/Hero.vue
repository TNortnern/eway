<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    id="hero"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.4,
      },
    }"
    class="bg-[#0d0d0d] mb-12 lg:mb-0 text-white"
  >
    <Navbar />
    <div class="relative mx-auto -mt-2 max-w-7xl">
      <main class="lg:relative">
        <div class="w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">If there's a way</span>
              {{ ' ' }}
              <span class="block text-yellow-400">It's Eway</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-lg text-gray-50 sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Eway LLC is an electric scooter rental company based in Springfield, Missouri. Our scooters are used for recreational use, public tours, romatic dates, and school visitations. Riding with Eway LLC will show you the city like you've never seen it before. Give us a call to rent your scooters.
            </p>
            <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button
                class="inline-flex items-center justify-center px-8 py-2.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white)"
                @click="toggleBookNow(true)"
              >
                Start riding now!
              </button>
              <!-- <p class="text-base font-medium text-gray-50">
                Subscribe to our newsletter
              </p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <label for="email" class="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:flex-1 border-gray-300"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Notify me
                </button>
              </form>
              <p class="mt-3 text-sm text-gray-50">
                We care about the protection of your data. Read our
                <a
                  href="#"
                  class="font-medium text-yellow-400 underline"
                >Privacy Policy</a>.
              </p>-->
            </div>
          </div>
        </div>
        <div
          class="relative hidden lg:block w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="/3scoots.jpg"
            alt="scooter hero"
            title="scooter hero"
          />
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import {
//   MenuIcon,
//   XIcon,
// } from '@heroicons/vue/outline'
// import { ChevronDownIcon } from '@heroicons/vue/solid'
import useActiveLink from '~/composables/useActiveLink'
import { toggleBookNow } from '~/components/Navbar/state'
const active = useActiveLink()
const router = useRouter()
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink('')
    router?.push('')
  }
}
</script>
