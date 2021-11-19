<template>
  <!-- Section 1 -->
  <section
    id="features"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.5,
      },
    }"
    class="w-full bg-white pt-7 pb-7 md:pt-48 md:pb-24"
  >
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-gray-900">
        Features
      </h2>
      <p class="mt-4 text-center px-3 mb-2 md:(text-lg px-0) text-gray-500">
        Build, operate, maintain, manage, and market a modern bike share
        system through a network of publicly-accessible bicycles/ e-bikes/
      </p>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-0">
      <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img src="https://lh3.googleusercontent.com/p/AF1QipMDk0mVK-y8SBfGIwoTVKK9NFim-VbRnrKE-wsH=w960-h960-n-o-v1" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
      </div>

      <!-- Content -->
      <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:(text-2xl text-left) text-center">
          Bolt 2
        </h2>
        <!-- <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
         Build an atmosphere that creates productivity in your organization and your company culture.
        </p> -->
        <ul class="p-0 m-0 leading-6 border-0 border-gray-300 mt-4">
          <li v-for="feature in bolt2Features" :key="feature" class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> {{ feature }}
          </li>
        </ul>
      </div>
      <!-- End  Content -->
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
      <!-- Content -->
      <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
        <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:(text-2xl text-left) text-center">
          Cruisers
        </h2>
        <!-- <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
          Save time and money with our revolutionary services. We are the leaders in the industry.
        </p> -->
        <ul class="p-0 m-0 leading-6 border-0 border-gray-300 mt-4">
          <li v-for="feature in cruiserFeatures" :key="feature" class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span>{{ feature }}
          </li>
        </ul>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src="https://media.discordapp.net/attachments/703391736650530861/911303289872724058/65887810983__70C15A4E-6179-4F63-A236-34E16BA0C037.jpeg?width=520&height=559" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
const router = useRouter()
const bolt2Features = [
  'Wireless phone charger',
  'Up to 15 MPH',
  '40 mile range',
  '4 hours of battery time',
  'Front shocks',
  'Pneumatic tubeless tires',
]
const cruiserFeatures = [
  'Built in bluetooth speaker',
  'Up to 20 MPH',
  '40 mile range',
  '4 hours of battery time',
  'Sit down',
]
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink(`#${entry?.target?.id}`)
    router?.push(`#${entry?.target?.id}`)
  }
}
</script>
