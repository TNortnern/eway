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
    class="py-16 bg-[#0d0d0d] overflow-hidden lg:py-18 lg:mt-48"
  >
    <!-- <div class="flex flex-col items-center mb-8">
      <SectionHeader class="text-white">
        Features
      </SectionHeader>
      <div class="block w-full h-0.5 max-w-sm mt-5 bg-yellow-100 rounded-full"></div>
    </div> -->
    <div class="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="bg-white shadow-2xl py-8 rounded-lg">
        <SectionHeader class="pl-8 md:pl-14 lg:(text-center pl-0) leading-8 tracking-tight mb-2 lg:mb-8">
          Features
        </SectionHeader>
        <FeatureItem class="lg:mb-12" title="Bolt 2" :features="bolt2Features" src="/bolt2.png" :image="{ alt: 'bolt 2 scooter', title: 'bolt 2 scooter' }" />
        <!-- <FeatureItem title="OJO Cruisers" :features="cruiserFeatures" src="/featurecruiser.png" :image="{ alt: 'red ojo cruiser', title: 'red ojo cruiser' }" /> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { GlobeIcon, LightBulbIcon, LightningBoltIcon, PlusCircleIcon, SparklesIcon, VolumeUpIcon, WifiIcon } from '@heroicons/vue/outline'
import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
const router = useRouter()
const bolt2Features = [
  { text: 'Wireless phone charger', icon: WifiIcon },
  { text: 'Up to 15 MPH', icon: LightningBoltIcon },
  { text: '40 mile range', icon: GlobeIcon },
  { text: '4 hours of battery time', icon: LightBulbIcon },
  { text: 'Front shocks', icon: SparklesIcon },
  { text: 'Pneumatic tubeless tires', icon: PlusCircleIcon },
]
const cruiserFeatures = [
  { text: 'Built in bluetooth speaker', icon: VolumeUpIcon },
  { text: 'Up to 20 MPH', icon: LightningBoltIcon },
  { text: '40 mile range', icon: GlobeIcon },
  { text: '4 hours of battery time', icon: LightBulbIcon },
  { text: 'Sit down', icon: '' },
]
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink(`#${entry?.target?.id}`)
    router?.push(`#${entry?.target?.id}`)
  }
}
</script>
