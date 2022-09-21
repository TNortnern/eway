<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Why choose micromobility?
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          Build, operate, maintain, manage, and market a modern bike share
          system through a network of publicly-accessible bicycles/ e-bikes/
        </p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div> -->

  <!-- Section 1 -->
  <section
    id="why-choose-micromobility"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.7,
      },
    }"
    class="pt-4 pb-16 lg:pt-40 lg:pb-18 bg-white"
  >
    <div class="items-center max-w-7xl px-12 mx-auto sm:px-10 md:px-5">
      <div class="flex flex-wrap items-center -mx-3">
        <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div class="w-full xl:max-w-xl slide-in">
            <SectionHeader class="relative left text-center lg:text-left mb-6 font-semibold leading-tight tracking-tight xl:font-bold">
              Why choose micromobility?
            </SectionHeader>
            <p>atest</p>
            <ul class="w-full lg:w-4/5 xl:flex-1 right">
              <li v-for="{ name } in features" :key="name" class="flex justify-center w-full md:w-120 lg:w-auto mx-auto xl:justify-start items-center py-2 space-x-4 xl:py-3">
                <img src="/greencheckmark.png" class="w-4 h-4" title="checkmark" alt="green checkmark">
                <span class="font-medium font-bold text-gray-700 flex-1">{{ name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative hidden lg:block w-full px-3 mb-12 lg:-ml-10 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
          <img class="absolute top-0 right-0 z-10 hidden mx-auto -mt-32 rounded-lg shadow-2xl opacity-100 xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="/forward5.jpeg" title="5 bolt 2 scooters forwards" alt="5 bolt 2 scooters forward">
          <img class="relative z-14 w-full mx-auto mt-3 rounded-lg shadow-2xl sm:max-w-none lg:-ml-10 lg:max-w-sm" src="/forward2.jpeg" title="2 bolt 2 scooters forwards" alt="2 bolt 2 scooters forwards">
          <img class="absolute bottom-0 right-0 z-10 hidden mx-auto -mb-48 rounded-lg shadow-2xl xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="/sideways2.jpeg" title="2 bolt 2 scooters sideways" alt="2 bolt 2 scooters sideways">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { CheckIcon } from '@heroicons/vue/outline'
import useActiveLink from '~/composables/useActiveLink'
const features = [
  {
    name: 'Enhance the public transit network',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Promote travel to landmarks, parks, trails, and shopping districts',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'Increase physical activity to benefit public health',
    description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Increase access to job opportunities and education',
    description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Expand mobility options for low-income neighborhoods',
    description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Connect neighborhoods across racial, cultural, and physical divides ',
    description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Use bike share to leverage more bike infrastructure',
    description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: ' Improve air quality and reduce motor vehicle traffic',
    description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]
export default {
  components: {
    CheckIcon,
  },
  setup() {
    const router = useRouter()
    const active = useActiveLink()
    const visibilityChanged = (v: any, entry: any) => {
      if (v) {
        active.setActiveLink(`#${entry?.target?.id}`)
        router?.push(`#${entry?.target?.id}`)
      }
    }
    return {
      visibilityChanged,
      features,
    }
  },
}
</script>
