<script setup>
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { useHead } from '@vueuse/head'
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

<template>
  <div id="snipcart" hidden data-api-key="OWIyZWFlODItMWIwNi00OTc0LWI0MjMtZjQzYjg4YTA4M2RlNjM3ODQ0OTk1NDQ2NzY2NjYw">
    <billing section="bottom">
      <fieldset class="snipcart-form__set">
        <!-- <div class="snipcart-form__field">
          <div class="snipcart-form__field-checkbox">
            <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
            <snipcart-label for="subscribeToNewsletter" class="snipcart__font--tiny snipcart-form__label--checkbox">
              Subscribe to newsletter
            </snipcart-label>
          </div>
        </div> -->
        <!-- <div class="snipcart-form__field">
          <p>Pick your date</p>
          <input id="" name="">
          <snipcart-label class="snipcart__font--tiny" for="vatNumber">
            VAT Number
          </snipcart-label>
          <snipcart-input type="date" name="vatNumber"></snipcart-input>
        </div>

        <div class="snipcart-form__field">
          <p class="snipcart__font--tiny">
            Customer type
          </p>
          <snipcart-radio name="customerType" value="Corporate">
            Corporate
          </snipcart-radio>
          <snipcart-radio name="customerType" value="Personal">
            Personal
          </snipcart-radio>
          <snipcart-radio name="customerType" value="NonProfit">
            Non-profit
          </snipcart-radio>
        </div> -->
      </fieldset>
    </billing>
  </div>
  <router-view />
</template>
