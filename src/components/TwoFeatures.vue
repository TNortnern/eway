<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section
    id="features"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.2,
      },
    }"
    class="py-16 bg-[#0d0d0d] overflow-hidden lg:py-18 mt-48"
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <!-- <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-yellow-400"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg> -->

      <div class="relative mb-12">
        <SectionHeader class="text-center leading-8 tracking-tight text-white">
          <!-- Features -->
        </SectionHeader>
        <!-- <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p> -->
      </div>

      <!-- <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-yellow-400"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg> -->
      <!-- Section 1 -->
      <div class="bg-white shadow-2xl py-8 rounded-lg">
        <SectionHeader class="text-center leading-8 tracking-tight mb-8">
          Features
        </SectionHeader>
        <FeatureItem title="Bolt 2" :features="bolt2Features" src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/60dbd11b391050754a7b1449_Bolt-TWO-SCOOTER.png" inverse />
        <!-- Section 1 -->
        <FeatureItem title="Cruisers" :features="cruiserFeatures" src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/60dbd0c6d5bf0c6ad3edaf37_Ojo-ByBolt-angle-Red.png" inverse />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
