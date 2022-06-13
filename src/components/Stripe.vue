<template>
  <div class="bg-white my-4 shadow p-8 rounded-lg">
    <StripeElements
      v-if="stripeLoaded"
      v-slot="{ elements, instance }"
      ref="elms"
      :stripe-key="stripeKey"
      :instance-options="instanceOptions"
      :elements-options="elementsOptions"
    >
      <StripeElement
        ref="card"
        class="w-5/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
        :elements="elements"
        :options="cardOptions"
      />
    </StripeElements>
    <button
      type="button"
      @click="pay"
    >
      Pay
    </button>
  </div>
</template>

<script lang="ts">
import { StripeElements, StripeElement } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { defineComponent, ref, onBeforeMount } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'CardOnly',

  components: {
    StripeElements,
    StripeElement,
  },

  setup() {
    onMounted(async() => {

    })
    const stripeKey = ref('pk_test_51L9J0FHfacsFb9U4JInYy5gwUIxuaDkZrVeNtDYoC8p6nw6EhXHL3BcLfyh82DeLGsfbSTxB6kAj0D10Th3kGHiI00tS7cxFnr') // test key
    const instanceOptions = ref({
      // https://stripe.com/docs/js/initializing#init_stripe_js-options
    })
    const elementsOptions = ref({
      // https://stripe.com/docs/js/elements_object/create#stripe_elements-options

    })
    const cardOptions = ref({
      // https://stripe.com/docs/stripe.js#element-options
      value: {
        postalCode: '12345',
      },
    })
    const stripeLoaded = ref(false)
    const card = ref()
    const elms = ref()

    onBeforeMount(() => {
      const stripePromise = loadStripe(stripeKey.value)
      stripePromise.then(() => {
        stripeLoaded.value = true
      })
    })

    return {
      stripeKey,
      stripeLoaded,
      instanceOptions,
      elementsOptions,
      cardOptions,
      card,
      elms,
    }
  },

  methods: {
    async pay() {
      const ap = axios.create({
        baseURL: 'http://localhost:4242',
      })
      try {
        const { data } = await axios.post('http://localhost:4242/create-checkout-session')
        console.log('data', data)
        window.location.href = data.url
      }
      catch (error) {
        console.log('error', error)
      }
      // Get stripe element
      const cardElement = this.card.stripeElement

      // Access instance methods, e.g. createToken()
      this.elms.instance.createToken(cardElement).then(async(result: object) => {
        // Handle result.error or result.token
        console.log(result)
        const { data } = await ap.post('/charge', {
          token: result.token,
        })
        console.log('data', data)
      })
    },
  },
})
</script>
