<template>
  <p class="text-red-500 mt-1">
    {{ message }}
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  message?: string
}>()
</script>
