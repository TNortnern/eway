
<template>
  <div>
    <!-- Section 1 -->
    <section
      id="book-now"
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.4,
        },
      }"
      class="relative py-0 bg-white lg:py-20"
    >
      <div
        class="flex flex-col items-center justify-between lg:px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row"
      >
        <div
          class="flex flex-col items-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row lg:justify-between"
        >
          <div class="relative w-full max-w-md lg:max-w-full bg-cover lg:flex-1">
            <div class="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
              <img
                src="https://assets-global.website-files.com/5ea823e1cf6ee17f763dcc39/60dbd0c6d5bf0c6ad3edaf37_Ojo-ByBolt-angle-Red.png"
              />
            </div>
          </div>
          <v-generic-form
            ref="genericForm"
            class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-6/12"
            :schema="schema"
            @submit="sendEmail"
          >
            <template #default="{ formData: form, firstError }">
              <div
                class="relative z-10 flex flex-col items-start justify-start p-10 bg-white w-full shadow-2xl rounded-xl"
              >
                <h4
                  class="w-full font-serif text-3xl lg:text-4xl font-medium leading-snug"
                >
                  Book a time to ride today.
                </h4>
                <p v-if="sentMessage" class="text-green-500 success">
                  {{ sentMessage }}
                </p>
                <div class="relative w-full mt-6 space-y-8">
                  <ContactInput v-model="form.first_name" label="First Name" placeholder="John" :error-message="firstError('first_name')" />
                  <ContactInput v-model="form.last_name" label="Last Name" placeholder="Doe" :error-message="firstError('last_name')" />
                  <ContactInput v-model="form.email" label="Email Address" placeholder="johndoe@email.com" :error-message="firstError('email')" />
                  <ContactInput v-model="form.phone" label="Phone Number" placeholder="Phone" :error-message="firstError('phone')" />
                  <div class="relative h-22">
                    <label
                      class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                    >Service Needed</label>
                    <textarea
                      v-model="form.service"
                      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Describe a service you are requesting for"
                    />
                    <ErrorMessage :message="firstError('service')" />
                  </div>
                  <div class="relative">
                    <button
                      :class="!loading ? 'hover:bg-yellow-400 ease' : 'disabled cursor-not-allowed opacity-50'"
                      class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg "
                      @click="() => { }"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <ContactBottomLeftIcon />
              <ContactBottomRightIcon />
            </template>
          </v-generic-form>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { MailIcon, PhoneIcon } from '@heroicons/vue/outline'
import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
const router = useRouter()
const sentMessage = ref('')
const genericForm = ref<any>(null)
const loading = ref(false)
interface ContactForm {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  service?: string
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
  phone: {
    rules: {
      presence: false,
      format: {
        pattern:
              // eslint-disable-next-line no-useless-escape
              /^$|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        flags: 'i',
        message: '^Please enter a valid phone number.',
        allowEmpty: true,
      },
    },
  },
  service: {
    rules: {
      isRequired: true,
    },
  },
}
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink('')
    router?.push('#book-now')
  }
}
const sendEmail = async(form: ContactForm) => {
  loading.value = true
  sentMessage.value = ''
  const emailBase = 'ewayllc@icloud.com'
  setTimeout(() => {
    sentMessage.value = `Thank you ${form.first_name} ${form.last_name}, we've received your message.`
    loading.value = false
  }, 600)
  try {
    const { data } = await axios.post('https://eway-mail.herokuapp.com/mail', {
      subject: `Message from website by: ${form.first_name} ${form.last_name}`,
      to: emailBase,
      html: `
        Hi Eway, I'm ${form.first_name} ${form.last_name},
        <br>
        I am messaging you to: ${form.service}.
        <br>
        <br>
        My email is: ${form.email}
        <br>
        ${form.phone ? `My phone number is: ${form.phone}` : ''}
        `,

    })
    genericForm.value.initializeForm()
  }
  catch (error) {
    console.log('error', error)
  }
}
</script>

<style>
.success {
  -webkit-animation: fadein 1.2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.2s; /* Firefox < 16 */
  -ms-animation: fadein 1.2s; /* Internet Explorer */
  -o-animation: fadein 1.2s; /* Opera < 12.1 */
  animation: fadein 1.2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
