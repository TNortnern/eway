<template>
  <!-- Section 1 -->
  <section class="relative leading-7 text-gray-900 bg-white border-solid">
    <div class="box-border mx-auto border-solid lg:pl-8 ">
      <div class="flex flex-col items-center lg:items-start leading-7 text-gray-900 border-0 border-gray-200" :class="inverse ? 'lg:flex-row-reverse' : 'lg:flex-row'">
        <div
          class="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:mt-12"

          :class="inverse ? 'lg:pl-20' : 'lg:pl-48 lg:pr-20'"
        >
          <h2 class="m-0 text-3xl font-medium leading-tight tracking-tight text-left text-black sm:text-4xl md:text-4xl">
            {{ title }}
          </h2>
          <p class="mt-2 text-base text-yellow-400 text-left border-0 border-gray-200">
            Fleet
          </p>
          <div class="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-6 lg:gap-4">
            <div v-for="feature in features" :key="feature" class="box-border flex items-start text-gray-900 border-solid">
              <div class="flex items-center justify-center w-11 h-11 leading-7 bg-yellow-400 border-0 border-gray-200 rounded-full">
                <p class="box-border m-0 text-xl text-white border-solid">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                </p>
              </div>
              <div class="flex-1 ml-6 leading-7 border-0 border-gray-200">
                <h3 class="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-lg">
                  {{ feature }}
                </h3>
                <!-- <p class="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                  No more wasting time on manual tasks, you can leverage our automated tasks to make your life easier.
                </p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
          <img :src="src || 'https://lh3.googleusercontent.com/p/AF1QipMDk0mVK-y8SBfGIwoTVKK9NFim-VbRnrKE-wsH=w960-h960-n-o-v1'" class="object-cover w-full h-full rounded-none">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  inverse?: boolean
  src?: string
  features: string[]
  title: string
}>()
</script>
