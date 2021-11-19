import { ref, watch } from 'vue'
export const open = ref(false)
export const toggleModal = () => (open.value = !open.value)
export const openContactModal = () => (open.value = true)
export const mobileMenuOpen = ref(false)
export const toggleMenu = (v?: Boolean) => (mobileMenuOpen.value = v === true || v === false ? v : !mobileMenuOpen.value)
interface navLink {
  name: string
  href: string
  class?: string
}

watch(mobileMenuOpen, (val) => {
  if (val) {
    if (window) document.body.classList.add('overflow-y-hidden')
  }
  else
  if (window) { document.body.classList.remove('overflow-y-hidden') }
})

export const navLinks: navLink[] = [
  {
    name: 'Who we are',
    href: '#who-we-are',
  },
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
    class: 'flex items-center justify-center px-8 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-yellow-400 hover:(bg-yellow-500 text-white)',
  },
]
