<template>
  <div>
    <Hero />
    <!-- <WhoWeAre /> -->
    <MainIntro />
    <TwoFeatures />
    <Testimonials />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'EwayScooters',
  meta: [
    {
      name: 'description',
      content: 'We rent scooters to the general public for Recreation, Tours, Dates, and School Visitations. Riding with Eway LLC will show you the city like you\'ve never seen it before. Give us a call to rent your scooters.',
    },
    { name: 'og:title', content: 'Eway scooters' },
    {
      name: 'og:description',
      content: 'We rent scooters to the general public for Recreation, Tours, Dates, and School Visitations. Riding with Eway LLC will show you the city like you\'ve never seen it before. Give us a call to rent your scooters.',
    },
    {
      name: 'og:image',
      content: 'https://lh3.googleusercontent.com/p/AF1QipPGecb1C2LnU4DrBObeRdYlseqZECx-tGusFiSW=w960-h960-n-o-v1',
    },
    { name: 'twitter:title', content: 'Eway scooters' },
    {
      name: 'twitter:description',
      content: 'We rent scooters to the general public for Recreation, Tours, Dates, and School Visitations. Riding with Eway LLC will show you the city like you\'ve never seen it before. Give us a call to rent your scooters.',
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
