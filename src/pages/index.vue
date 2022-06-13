<template>
  <div class="overflow-x-hidden">
    <Hero />
    <!-- <WhoWeAre /> -->
    <MainIntro />
    <TwoFeatures />
    <Testimonials />
    <div class="pb-12">
      <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">Ready to dive in?</span>
          <span class="block">Book your ride today.</span>
        </h2>
        <div class="mt-8 flex justify-center">
          <AppButton @click="toggleBookNow">
            Book Now
          </AppButton>
        </div>
      </div>
    </div>
    <Order />

    <!-- <Contact /> -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { toggleBookNow } from '~/components/Navbar/state'
useHead({
  title: 'EwayScooters',
  meta: [
    {
      name: 'description',
      content: 'Eway LLC is an electric scooter rental company based in Springfield, Missouri. Our scooters are used for recreational use, public tours, romantic dates, and school visitations. Riding with Eway LLC will show you the city as you\'ve never seen it before. Give us a call to rent your scooters.',
    },
    { name: 'og:title', content: 'Eway scooters' },
    {
      name: 'og:description',
      content: 'Eway LLC is an electric scooter rental company based in Springfield, Missouri. Our scooters are used for recreational use, public tours, romantic dates, and school visitations. Riding with Eway LLC will show you the city as you\'ve never seen it before. Give us a call to rent your scooters.',
    },
    {
      name: 'og:image',
      content: 'https://lh3.googleusercontent.com/p/AF1QipPGecb1C2LnU4DrBObeRdYlseqZECx-tGusFiSW=w960-h960-n-o-v1',
    },
    { name: 'twitter:title', content: 'Eway scooters' },
    {
      name: 'twitter:description',
      content: 'Eway LLC is an electric scooter rental company based in Springfield, Missouri. Our scooters are used for recreational use, public tours, romantic dates, and school visitations. Riding with Eway LLC will show you the city as you\'ve never seen it before. Give us a call to rent your scooters.',
    },
    {
      name: 'twitter:image',
      content: 'https://lh3.googleusercontent.com/p/AF1QipPGecb1C2LnU4DrBObeRdYlseqZECx-tGusFiSW=w960-h960-n-o-v1',
    },
  ],
  link: [
    {
      rel: 'icon', type: 'image/x-icon', href: 'https://media.discordapp.net/attachments/874257099822075914/911391031898025994/e2.PNG?width=444&height=559',
    },
  ],
})

</script>
