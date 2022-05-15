<template>
  <div>
    <div
      id="snipcart"
      hidden
      data-api-key="OWIyZWFlODItMWIwNi00OTc0LWI0MjMtZjQzYjg4YTA4M2RlNjM3ODQ0OTk1NDQ2NzY2NjYw"
    >
    </div>
    <transition name="fade">
      <div v-if="product && open" class="fixed z-17 bg-black bg-opacity-60 inset-0">
        <div v-if="route" class="text-center">
          <div>
            <button
              class="shadow-2xl px-4 py-2 text-white rounded-sm duration-200 hover:(ring-2 ring-white) bg-black text-xl m-3 text-sm mt-8"
              @click="$router.push('/')"
            >
              Go back to main site
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="book-now-drawer">
      <div
        v-if="product && open"
        ref="drawer"
        class="h-screen inset-0 fixed bg-white shadow-2xl w-64 py-6 z-18"
      >
        <div class="flex justify-between px-4">
          <p class="text-xl font-bold mb-4 self-center">
            Book Now
          </p>
          <button class="text-3xl font-bold p-0 relative bottom-2 hover:text-yellow-400 duration-200" @click="route ? $router.push('/') : toggleBookNow()">
            &times;
          </button>
        </div>
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
    </transition>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, numeric, between } from '@vuelidate/validators'
import { useNewElement } from '~/composables/useNewElement'
import { useRootStore } from '~/stores/root'
import { useSnipCart } from '~/composables/useSnipCart'
import { defaultDateTimeValue } from '~/helpers'
import { toggleBookNow } from '~/components/Navbar/state'
const drawer = ref<any>(null)
onClickOutside(drawer, () => toggleBookNow(false))
const props = defineProps<{ open: boolean; route?: boolean }>()
watch(() => props.open, (v) => {
  if (v) document.querySelector('body')?.classList.add('overflow-hidden')
})
const rootStore = useRootStore()
const product = rootStore.products?.[0]
const bookDateName = 'Book Date'
const Snipcart = ref(null)
const errors = ref<{ date: string }>({
  date: '',
})
const form = reactive({
  name: '',
  quantity: 1,
  date: defaultDateTimeValue(),
})
const rules = {
  form: {
    name: { required },
    quantity: { required, numeric, between: between(1, 9) },
  },
}
const v$ = useVuelidate(rules, { form })
const parseDate = (date: Date = new Date()) => {
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - (offset * 60 * 1000))
  return date.toISOString().split('T')[0]
}
const submit = async() => {
  if (!Snipcart.value) return
  errors.value.date = ''
  const isFormCorrect = await v$.value.$validate()
  // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
  if (!isFormCorrect) return
  if (!form.date) errors.value.date = 'Value is required.'
  if (new Date(form.date).getTime() < new Date().getTime())
    errors.value.date = 'Pick a date in the future.'
  if (errors.value.date) return
  rootStore.appLoading = true
  try {
    toggleBookNow(false)
    const dateParsed = parseDate(new Date(form.date))
    const cartItems = Snipcart.value.store?.getState()?.cart?.items?.items
    const cartItemExist = cartItems.find((item) => {
      const fieldsToCheck: ['name', 'price', 'Book Date'] = ['name', 'price', bookDateName]
      let exists = true
      for (let i = 0; i < fieldsToCheck.length; i++) {
        const cartValue = fieldsToCheck[i] === bookDateName ? item?.customFields[0]?.displayValue : item[fieldsToCheck[i]].toString()
        const formValue = fieldsToCheck[i] === bookDateName ? parseDate(new Date(form.date)).toString() : product[fieldsToCheck[i]].toString()
        if (cartValue?.toLowerCase() !== formValue?.toLowerCase()) {
          exists = false
          break
        }
      }
      return exists
    })
    if (cartItemExist) {
      await Snipcart.value.api.cart.items.update({
        uniqueId: cartItemExist.uniqueId,
        quantity: form.quantity + cartItemExist.quantity <= 9 ? form.quantity + cartItemExist.quantity : 9,
      })
      Snipcart.value.api.theme.cart.open()
    }
    else {
      await Snipcart.value?.api.cart.items.add({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        minQuantity: 1,
        maxQuantity: 9,
        customFields: [
          {
            id: 'Reseravation Date',
            name: bookDateName,
            type: 'dropdown',
            options: dateParsed,
            value: dateParsed,
          },
        ],
        url: 'https://moonlit-pixie-20706b.netlify.app/book-now',
        quantity: form.quantity,
      },
      )
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    rootStore.appLoading = false
  }
}
const schema = {
  first_name: {
    rules: {
      isRequired: true,
    },
  },
  // last_name: {
  //   rules: {
  //     isRequired: true,
  //   },
  // },
  // email: {
  //   rules: {
  //     isRequired: true,
  //     email: {
  //       message: '^Please enter a valid email.',
  //     },
  //   },
  // },
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
  // {
  //   el: 'div',
  //   attributes: {
  //     'hidden': true,
  //     'id': 'snipcart',
  //     'data-api-key': 'OWIyZWFlODItMWIwNi00OTc0LWI0MjMtZjQzYjg4YTA4M2RlNjM3ODQ0OTk1NDQ2NzY2NjYw',
  //   },
  //   appendTo: 'body',
  // },
],
)

useSnipCart('#snipcart-script', (snipcart) => {
  Snipcart.value = snipcart
})
watch(Snipcart, (instance) => {
  instance.events.on('item.adding', (parsedCartItem) => {
    // console.log(parsedCartItem)
  })
})

</script>

<style lang="scss">
.book-form {
  .app-input {
    @apply text-sm py-3;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.book-now-drawer-enter-active,
.book-now-drawer-leave-active {
  transition: all 0.35s;
  /* position: absolute; */
}

.book-now-drawer-enter-from,
.book-now-drawer-leave-to {
  transform: translateX(-1000px) scale(0.5);
}

.book-now-drawer-leave-from,
.book-now-drawer-enter-to {
  transform: translateX(0) scale(1);
}
</style>
