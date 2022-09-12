<template>
  <a
    :href="href || '#'"
    target="__blank"
    class="flex flex-col items-start md:text-left text-center justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0 hover:(opacity-100) opacity-69 duration-150"
    :class="{
      'lg:border-gray-200 lg:mx-5 lg:px-5': borderRight || borderLeft,
      'lg:border-l border-t border-b py-5 lg:(py-0 border-t-0 border-b-0)': borderLeft,
      'lg:border-r': borderRight,
    }"
  >
    <div class="flex items-center justify-center text-center w-full md:(text-left w-auto)">
      <!-- <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" class="object-cover w-full h-full">
      </div> -->
      <div class="md:(flex flex-col items-start justify-center) mb-2 lg:w-auto">
        <h4 class="font-bold text-gray-800 text-xl">
          {{ name || 'John Doe' }}
          <!-- </h4>
        <p class="text-gray-600">
          CEO of Something
        </p> -->
        </h4>
      </div>
    </div>
    <blockquote class="text-xl text-gray-500 lg:h-56 xl:h-34 h-auto lg:mt-4">
      {{ testimonial || 'Amet atque nihil eius ea.' }}
    </blockquote>
    <div class="flex justify-center items-center w-full md:w-auto gap-x-1 mt-4">
      <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
      <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
      <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
      <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
      <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
    </div>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  borderRight?: boolean
  borderLeft?: boolean
  testimonial?: string
  name?: string
  href?: string
}>()

</script>
