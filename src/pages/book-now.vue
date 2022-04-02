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
    <div class="h-screen inset-0 fixed bg-white shadow-2xl w-64 py-6">
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
        <button
          class="flex items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white) duration-200 snipcart-add-item"
          :data-item-id="1"
          data-item-price="1"
          :data-item-url="`/.netlify/functions/crawler`"
          data-item-description="Book a ride with your friends"
          data-item-image="image"
          data-item-name="Reservation"
          @click="submit()"
        >
          Book Now
        </button>
      </v-generic-form>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss">
.book-form {
    .app-input {
        @apply text-sm py-3;
    }
}
</style>
