<template>
  <!-- Section 1 -->
  <div>
    <section
      id="testimonials"
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.7,
        },
      }"
      class="flex items-center justify-center py-20 bg-white max-w-7xl mx-auto"
    >
      <div class="px-16 bg-white">
        <div
          class="container flex flex-col items-start mx-auto lg:items-center text-center md:text-left"
        >
          <p
            class="relative flex items-start justify-start w-full text-lg lg:text-lg font-bold tracking-wider text-yellow-400 uppercase lg:justify-center lg:items-center"
          >
            Don't just take our word for it
          </p>
          <h2
            class="relative flex items-start justify-start w-full max-w-3xl lg:(text-5xl) text-3xl font-bold lg:justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
              />
            </svg>
            See what people are saying
          </h2>
          <div class="block w-full h-0.5 max-w-lg mt-6 bg-yellow-100 rounded-full"></div>
          <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
            <TestimonialItem
              name="Sean Erpelding"
              testimonial="Cheap, Great Customer service, easy travel, handy for short distance as well as long! SUPPORT YOUR LOCAL BUSINESSES! You wont regret it!"
              href="https://www.facebook.com/BraxDad32/posts/4344924098878514"
            />
            <TestimonialItem
              testimonial="awesome young people who are getting this business off the ground..stop and see them..you won't be disappointed"
              name="Pickles Salsa N More"
              href="https://www.facebook.com/permalink.php?story_fbid=120125800374342&id=100071307661667"
              border-left
              border-right
            />
            <TestimonialItem
              testimonial="These are so fun! 10/10 recommend."
              name="Lindsay Blake Freres"
              href="https://www.facebook.com/lindsay.freres/posts/10207966948567878"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import useActiveLink from '~/composables/useActiveLink'
const active = useActiveLink()
const router = useRouter()
// const testimonials = [
//   {

//   }
// ]
const visibilityChanged = (v: any, entry: any) => {
  if (v) {
    active.setActiveLink(`#${entry?.target?.id}`)
    router?.push(`#${entry?.target?.id}`)
  }
}
</script>
