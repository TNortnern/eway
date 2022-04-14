<template>
  <div class="relative h-16.5">
    <label
      class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
    >{{ label }}</label>
    <input
      :value="modelValue"
      type="text"
      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black app-input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event?.target as any)?.value)"
    />
    <ErrorMessage :message="errorMessage" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  modelValue?: string | number
  placeholder?: string
  errorMessage?: string
}>()
defineEmits(['update:modelValue'])
</script>

<style>

</style>
