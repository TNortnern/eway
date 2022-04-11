<template>
  <div>
    <div class="text-center">
      <div>
        <button
          class="btn bg-black text-xl m-3 text-sm mt-8"
          @click="$router.back()"
        >
          Go Back
        </button>
      </div>
    </div>
    <div v-if="product" class="h-screen inset-0 fixed bg-white shadow-2xl w-64 py-6">
      <p class="text-xl font-bold px-4 mb-4">
        Book Now
      </p>
      <v-generic-form
        ref="genericForm"
        class="w-full px-4 text-sm book-form space-y-3"
        :schema="schema"
      >
        <ContactInput v-model="form.name" label="Name" placeholder="Your Name" />
        <ContactInput v-model="form.name" label="Name" placeholder="Your Name" />
        <!-- {{ product }} -->
        <button
          class="flex items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white) duration-200 snipcart-add-item"
          :data-item-name="product.name"
          :data-item-id="product.id"
          :data-item-price="product.price"
          :data-item-url="`https://moonlit-pixie-20706b.netlify.app/book-now`"
          :data-item-description="product.description"
          :data-item-image="product.image"
          @click="submit()"
        >
          Book Now
        </button>
      </v-generic-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewElement } from '~/composables/useNewElement'
import { useRootStore } from '~/stores/root'
const product = useRootStore().products?.[0]
const genericForm = ref(null)
const submit = () => {
  (genericForm.value as any).action()
}
const form = reactive({
  name: '',
  email: '',
  bookDate: new Date(),
})
const schema = {
  first_name: {
    rules: {
      isRequired: true,
    },
  },
  last_name: {
    rules: {
      isRequired: true,
    },
  },
  email: {
    rules: {
      isRequired: true,
      email: {
        message: '^Please enter a valid email.',
      },
    },
  },
  bookDate: {
    rules: {
      isRequired: true,
    },
  },
}
useNewElement([
  {
    el: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://app.snipcart.com',
    },
    appendTo: 'head',
  },
  {
    el: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://cdn.snipcart.com',
    },
    appendTo: 'head',
  },
  {
    el: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css',
    },
    appendTo: 'head',
  },
  {
    el: 'script',
    attributes: {
      async: true,
      src: 'https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js',
    },
    appendTo: 'body',
  },
  {
    el: 'div',
    attributes: {
      'hidden': true,
      'id': 'snipcart',
      'data-api-key': 'OWIyZWFlODItMWIwNi00OTc0LWI0MjMtZjQzYjg4YTA4M2RlNjM3ODQ0OTk1NDQ2NzY2NjYw',
    },
    appendTo: 'body',
  },
],
)

</script>

<style lang="scss">
.book-form {
    .app-input {
        @apply text-sm py-3;
    }
}
</style>
