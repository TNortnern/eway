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
          @submit.prevent="submit()"
        >
          <AppInput
            v-model="form.first_name"
            label="First Name"
            :class="{
              'mb-5': v$?.form.first_name?.$errors?.[0]?.$message
            }"
            placeholder="Your First Name"
            :error-message="(v$?.form.first_name?.$errors?.[0]?.$message as string)"
          />
          <AppInput
            v-model="form.last_name"
            label="Last Name"
            :class="{
              'mb-5': v$?.form.last_name?.$errors?.[0]?.$message
            }"
            placeholder="Your Last Name"
            :error-message="(v$?.form.last_name?.$errors?.[0]?.$message as string)"
          />
          <AppInput
            v-model="form.email"
            label="Email"
            :class="{
              'mb-5': v$?.form.email?.$errors?.[0]?.$message
            }"
            placeholder="Your Email"
            :error-message="(v$?.form.email?.$errors?.[0]?.$message as string)"
          />
          <AppInput
            v-model="form.riders"
            label="Amount of riders"
            :class="{
              'mb-5': v$?.form.riders?.$errors?.[0]?.$message
            }"
            placeholder="Rider count"
            :error-message="(v$?.form.riders?.$errors?.[0]?.$message as string)"
          />
          <!-- <AppInput
            v-model="form.hours"
            label="Amount of hours"
            :class="{
              'mb-5': v$?.form.hours?.$errors?.[0]?.$message
            }"
            placeholder="Rider count"
            :error-message="(v$?.form.hours?.$errors?.[0]?.$message as string)"
          /> -->
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
import { required, numeric, between, email } from '@vuelidate/validators'

import { useRootStore } from '~/stores/root'
import { defaultDateTimeValue } from '~/helpers'
import { toggleBookNow } from '~/components/Navbar/state'
import api from '~/api'
const drawer = ref<any>(null)
onClickOutside(drawer, () => toggleBookNow(false))
const props = defineProps<{ open: boolean; route?: boolean }>()
watch(() => props.open, (v) => {
  if (v) document.querySelector('body')?.classList.add('overflow-hidden')
  else document.querySelector('body')?.classList.remove('overflow-hidden')
})
const rootStore = useRootStore()
const product: any = []
const errors = ref<{ date: string }>({
  date: '',
})
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  riders: 1,
  // hours: 1,
  date: defaultDateTimeValue(),
})
const rules = {
  form: {
    first_name: { required },
    last_name: { required },
    email: { required, email },
    riders: { required, numeric, between: between(1, 9) },
    // hours: { required, numeric, between: between(1, 4) },
  },
}
const v$ = useVuelidate(rules, { form })

const submit = async() => {
  errors.value.date = ''
  const isFormCorrect = await v$.value.$validate()
  // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
  if (!isFormCorrect) return
  if (!form.date) errors.value.date = 'Value is required.'
  if (new Date(form.date).getTime() <= new Date().getTime())
    errors.value.date = 'Pick a date in the future.'
  if (errors.value.date) return
  rootStore.appLoading = true
  try {
    const { data } = await api.post('/api/initialize-payment', form)
    window.location.href = data.url
  }
  catch (error) {
    console.log('error', error)
  }
  finally {
    rootStore.appLoading = false
  }
}

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
