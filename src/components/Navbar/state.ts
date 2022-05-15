import { ref, watch } from 'vue'
export const open = ref(false)
export const toggleModal = () => (open.value = !open.value)
export const openContactModal = () => (open.value = true)
export const bookNowDrawerOpen = ref(false)
export const mobileMenuOpen = ref(false)
export const toggleMenu = (v?: boolean) => {
  if (v === true || v === false) mobileMenuOpen.value = v
  else mobileMenuOpen.value = !mobileMenuOpen.value
}
export const toggleBookNow = (v?: boolean) => {
  if (mobileMenuOpen.value) mobileMenuOpen.value = false
  if (v === true || v === false) bookNowDrawerOpen.value = v
  else bookNowDrawerOpen.value = !bookNowDrawerOpen.value
}
interface navLink {
  name: string
  href?: string
  action?: () => any
  class?: string
}

watch(mobileMenuOpen, (val) => {
  if (val) {
    if (window) document.body.classList.add('overflow-y-hidden')
  }
  else
  if (window) { document.body.classList.remove('overflow-y-hidden') }
})
watch(bookNowDrawerOpen, (val) => {
  if (val) {
    if (window) document.body.classList.add('overflow-y-hidden')
  }
  else
  if (window) { document.body.classList.remove('overflow-y-hidden') }
})

export const navLinks: navLink[] = [
  // {
  //   name: 'Who we are',
  //   href: '#who-we-are',
  // },
  {
    name: 'Why choose micromobility?',
    href: '#why-choose-micromobility',
  },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    name: 'Book Now',
    href: '#book-now',
    action: toggleBookNow,
    class: 'flex items-center justify-center px-8 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white)',
  },
]
