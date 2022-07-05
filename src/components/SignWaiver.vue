<template>
  <div class="inset-0 overflow-y-auto w-[90%] md:w-[75%] mx-auto border p-4">
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="mt-2">
        <a v-smooth-scroll href="#signature">
          <AppButton
            v-if="!screenshotting"
            class="mb-4"
          >
            Scroll to signature
          </AppButton>
        </a>
        <p class="font-bold text-xl border-b border-black pr-4 mb-4">
          State of Missouri
        </p>
        <p class="px-4 text-4xl font-black border-b-4 border-black pb-3 w-full mb-12">
          Release For Participation in Event or Activity
        </p>
        <div>
          <div class="mb-10">
            In exchange for participation in <span class="prefilled-centered">Riding Electric
              Scooters</span> the "Activity" organized by
            <span class="prefilled">
              EWAY LLC
            </span> located at <span class="prefilled">
              821 South Ave, Springfield, Missouri, 65806
            </span>, I hereby agree as follows:
          </div>

          <ol class="number mb-6">
            <li
              v-for="(term, i) in terms"
              :key="i"
              class="flex gap-4"
            >
              <p>{{ i + 1 }}.</p>
              <p>
                {{ term }}
              </p>
            </li>
          </ol>
        </div>
        <div class="mb-20">
          <h2
            id="signature"
            class="text-2xl font-bold mb-12"
          >
            SIGNATURES
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-stretch mb-20">
            <SignatureItem
              text="EWAY LLC"
              :cursive="true"
              label="Signature of Releasee"
            />
            <SignatureItem
              :text="today"
              :cursive="true"
              label="Date"
            />
            <SignatureItem
              text="EWAY LLC"
              label="Printed Name of Releasee"
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-stretch items-center">
            <SignatureItem
              v-model="signature"
              label="Signature of Releasor"
              :signature="true"
            />
            <SignatureItem
              label="Date"
              :fill-date="true"
              @filled-date="() => filledDate = true"
            />
            <SignatureItem
              v-model="printedName"
              label="Printed Name of Releasor"
              :typing="true"
            />
          </div>
        </div>
        <div class="text-sm text-gray-500">
        </div>
        <div v-if="!screenshotting" class="mt-4">
          <AppButton
            :class="{
              'disabled opacity-40 pointer-events-none': !validForm
            }"
          >
            Submit
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jump from 'jump.js'

const printedName = ref('')
const signature = ref('')
const signaturePad = ref()
const filledDate = ref(false)
const validForm = computed(() => printedName.value && signature.value && filledDate.value)
const screenshotting = ref(false)
const today = computed(() => {
  const date = new Date()
  const year = date.getFullYear()

  let month = (1 + date.getMonth()).toString()
  month = month.length > 1 ? month : `0${month}`

  let day = date.getDate().toString()
  day = day.length > 1 ? day : `0${day}`

  return `${month}/${day}/${year}`
})
const scrollToSignature = async() => {
  if (!signaturePad.value) return
  jump('#signature', {
    duration: 1000,
    offset: 50,
    callback: undefined,
    // easing: 'easeInOutQuad',
    a11y: false,
  })
}

const terms = [
  'I and anyone claiming on my behalf release and forever discharge Releasee and its affiliates, successors and assigns, officers, employees, representatives, partners, agents and anyone claiming through them (collectively, the "Released Parties"), in their individual and/or corporate capacities from causes of action of any nature and kind, known or unknown, which I may have agains Releasee or any Released Parties arising out of or relating to any injury, loss or damage to person and property that may be sustained as a result of participation in the Activity ("Claims").',
  'I understand that participation in the Activity involves inherent risks, including risk of physical or psychological injury, pain, suffering, illness, disfigurement, temporary or permanent paralysis and/or death, and I assume all related risks and voluntarily participate in the Activity',
  'I agree to indemnify Releasee against any and all claims, actions, lawsuits, damages and judgments, including attorney\'s fees, arising out of or relating to my participation in the Activity.',
  'This Release for Participation in Event or Activity ("Release") shall not be in any way construed as an admission by the Releasee that it has acted wrongfully with respect to me or any other person, that it admits liability or responsability at any time for any purpose, or that I have any rights whatsoever agains the Releasee.',
  'This Release shall be binding upon the parties and their respective heirs, administrators, personal representatives, executors, successors and assigns. I have the authority to release the Claims and have not assigned or transferred any Claims to any other party. The provisions of this Release are severable. If any provision is helf to be invalid or unenforceable, it shall not affect the validity or enforceability of any other provision. This Release constitutes the entire agreement between the parties and supersedes any prior oral or written agreements or understandings between the parties concerning the subject matter of this Release. This Release may not be altered, amended or modified, except by a written document signed by both parties. The terms of this release shall be governed by and construed in accordance with the laws of the state of Missouri.',
  'I have carefully read and fully understand all the provisions of this Release and am freely, knowingly and voluntarily entering into this Release.',
]

const submit = async() => {
  await console.log('submit')
}
</script>

<style lang="scss">

.prefilled {
  @apply inline-block pr-2 border-b border-black font-bold;
}
.prefilled-centered {
  @apply min-w-56 inline-flex justify-center border-b border-black font-bold;
}
</style>
