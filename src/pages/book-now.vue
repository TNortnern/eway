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
    <div
      v-if="product"
      class="h-screen inset-0 fixed bg-white shadow-2xl w-64 py-6"
    >
      <p class="text-xl font-bold px-4 mb-4">
        Book Now
      </p>
      <form
        class="w-full px-4 text-sm book-form"
        :schema="schema"
        @submit.prevent="submit()"
      >
        <AppInput
          v-model="form.name"
          label="Name"
          :class="{
            'mb-5': v$?.form.name?.$errors?.[0]?.$message
          }"
          placeholder="Your Name"
          :error-message="(v$?.form.name?.$errors?.[0]?.$message as string)"
        />
        <AppInput
          v-model="form.quantity"
          label="Amount of riders"
          :class="{
            'mb-5': v$?.form.quantity?.$errors?.[0]?.$message
          }"
          placeholder="Rider count"
          :error-message="(v$?.form.quantity?.$errors?.[0]?.$message as string)"
        />
        <div class="mb-5">
          <label
            for="date"
            class="-mt-3 block font-medium text-gray-600 bg-white"
          >Reservation date</label> <input
            id="date"
            v-model="form.date"
            name="datetime"
            class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-black app-input"
            type="datetime-local"
          />
          <ErrorMessage :message="errors.date" />
        </div>
        <!-- {{ product }} -->
        <button
          class="flex items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white) duration-200 mb-5"
        >
          Checkout
        </button>
        <!-- <button
          class="flex items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white) duration-200 snipcart-add-item"
          :data-item-name="product.name"
          :data-item-id="product.id"
          :data-item-price="product.price"
          :data-item-url="`https://moonlit-pixie-20706b.netlify.app/book-now`"
          :data-item-description="product.description"
          :data-item-image="product.image"
        >
          Book Now
        </button> -->
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, numeric, between, minValue } from '@vuelidate/validators'
import { useNewElement } from '~/composables/useNewElement'
import { useRootStore } from '~/stores/root'
import { useSnipCart } from '~/composables/useSnipCart'
const product = useRootStore().products?.[0]
const Snipcart = ref(null)
const errors = ref<{ date: string }>({
  date: '',
})
const form = reactive({
  name: '',
  quantity: 1,
  bookDate: new Date(),
  date: '',
})
const rules = {
  form: {
    name: { required },
    quantity: { required, numeric, between: between(1, 9) },
  },
}
const v$ = useVuelidate(rules, { form })
const submit = async() => {
  // if (Snipcart.value) {
  //   console.log('Snipcart.value.cart', await Snipcart.value.api.cart?.initializePaymentSession())
  //   return
  // }
  errors.value.date = ''
  const isFormCorrect = await v$.value.$validate()
  // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
  if (!isFormCorrect) return
  if (!form.date) errors.value.date = 'Value is required.'
  if (new Date(form.date).getTime() < new Date().getTime())
    errors.value.date = 'Pick a date in the future.'
  if (errors.value.date) return
  try {
    await Snipcart.value?.api.cart.items.add({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      customFields: [
        {
          name: 'Size',
          options: 'S|M|L',
          type: 'dropdown',
          value: 'M',
        },
      ],
      url: 'https://moonlit-pixie-20706b.netlify.app/book-now',
      quantity: form.quantity,
    },
    )
  }
  catch (error) {
    console.log(error)
  }
}
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
      id: 'snipcart-script',
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

useSnipCart('#snipcart-script', (snipcart) => {
  Snipcart.value = snipcart
})
watch(Snipcart, (instance) => {
  instance.events.on('item.adding', (parsedCartItem) => {
    console.log(parsedCartItem)
  })
})

</script>

<style lang="scss">
.book-form {
  .app-input {
    @apply text-sm py-3;
  }
}
</style>
