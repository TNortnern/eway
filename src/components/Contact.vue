
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
          <form
            class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-6/12"
            @submit.prevent="sendEmail()"
          >
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
                <div class="relative">
                  <label
                    class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                  >First Name</label>
                  <input
                    v-model="form.first_name"
                    type="text"
                    class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="John"
                  />
                </div>
                <div class="relative">
                  <label
                    class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                  >Last Name</label>
                  <input
                    v-model="form.last_name"
                    type="text"
                    class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="Doe"
                  />
                </div>
                <div class="relative">
                  <label
                    class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                  >Email Address</label>
                  <input
                    v-model="form.email"
                    type="text"
                    class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="janedoe@email.com"
                  />
                </div>
                <div class="relative">
                  <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Phone</label>
                  <input
                    v-model="form.phone"
                    type="number"
                    class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="relative">
                  <label
                    class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                  >Service Needed</label>
                  <textarea
                    v-model="form.service"
                    class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    placeholder="Describe a service you are requesting for"
                  />
                </div>
                <div class="relative">
                  <button
                    class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
                    @click="() => { }"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <svg
              class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-yellow-400 fill-current"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </form>
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
interface ContactForm {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  service?: string
}
const form = ref<ContactForm>({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  service: '',
})
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink('')
    router?.push('#book-now')
  }
}
const sendEmail = async() => {
  sentMessage.value = ''
  const emailBase = 'ewayllc@icloud.com'
  try {
    const { data } = await axios.post('http://localhost:5000/mail', {
      subject: `Message from website by: ${form.value.first_name} ${form.value.last_name}`,
      to: emailBase,
      html: `
        Hi Eway, I'm ${form.value.first_name} ${form.value.last_name},
        <br>
        I am messaging you to: ${form.value.service}.
        <br>
        <br>
        My email is: ${form.value.email}
        <br>
        ${form.value.phone ? `My phone number is: ${form.value.phone}` : ''}
        `,

    })
    sentMessage.value = `Thank you ${form.value.first_name} ${form.value.last_name}, we've received your message.`
    form.value = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      service: '',
    }
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
