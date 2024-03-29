<template>
  <div>
    <div
      :style="`${cursive ? 'font-family: cursive' : ''}`"
      class="w-full lg:w-92 relative border-b border-black font-bold h-8"
    >
      <template v-if="!signature && !typing">
        {{ textDisplay }}
      </template>
      <template v-else-if="signature">
        <VueSignaturePad
          ref="signaturePad"
          width="100%"
          height="75px"
          :options="{ onEnd }"
          class="absolute bottom-0"
          :class="{
            'border': showAttributes
          }"
        />
      </template>
      <template v-if="fillDate">
        <button
          v-if="textDisplay === text"
          class="hover:(ring-2) duration-200 font-bold"
          @click="textDisplay = today, onDateClicked()"
        >
          Click to fill date
        </button>
      </template>
      <template v-if="typing">
        <input
          class="clear-input hover:ring-2 focus:(ring-4) w-full block duration-200 absolute bottom-0 pl-1 font-bold"
          type="text"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
        >
      </template>
    </div>
    <div class="flex gap-3 text-sm">
      <span>{{ label }}</span>
      <button v-if="signature && modelValue && showAttributes" class="font-bold underline" @click="clearSignature()">
        Clear Signature
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  cursive?: boolean
  label: string
  text?: string
  signature?: boolean
  fillDate?: boolean
  typing?: boolean
  modelValue?: string
  showAttributes?: boolean
}>(), {
  showAttributes: true,
})
const signaturePad = ref()

const emit = defineEmits(['update:modelValue', 'filledDate'])
const textDisplay = ref(props.text)
const today = computed(() => {
  const date = new Date()
  const year = date.getFullYear()

  let month = (1 + date.getMonth()).toString()
  month = month.length > 1 ? month : `0${month}`

  let day = date.getDate().toString()
  day = day.length > 1 ? day : `0${day}`

  return `${month}/${day}/${year}`
})

const onEnd = () => {
  const { isEmpty, data } = signaturePad.value.saveSignature()
  if (isEmpty) return
  emit('update:modelValue', data)
}
const clearSignature = () => {
  signaturePad.value.clearSignature()
  emit('update:modelValue', '')
}
const onDateClicked = () => {
  emit('filledDate')
}
defineExpose({
  clickedDate: () => textDisplay.value = today.value,
})
</script>

<style lang="scss">
.clear-input {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
</style>
