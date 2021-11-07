<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-gray-50">
        <div class="relative container mx-auto">
            <Popover class="relative bg-white shadow">
                <div class="max-w-7xl mx-auto px-4 sm:px-6">
                    <div
                        class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
                    >
                        <div class="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span class="sr-only">Workflow</span>
                                <img
                                    class="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-yellow-400.svg"
                                    alt
                                />
                            </a>
                        </div>
                        <div class="-mr-2 -my-2 md:hidden">
                            <PopoverButton
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                            >
                                <span class="sr-only">Open menu</span>
                                <MenuIcon class="h-6 w-6" aria-hidden="true" />
                            </PopoverButton>
                        </div>
                        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
                            <Popover class="relative" v-slot="{ open }">
                                <PopoverButton
                                    :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400']"
                                >
                                    <span>Solutions</span>
                                    <ChevronDownIcon
                                        :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                                        aria-hidden="true"
                                    />
                                </PopoverButton>

                                <transition
                                    enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 translate-y-1"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 translate-y-1"
                                >
                                    <PopoverPanel
                                        class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    >
                                        <div
                                            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                        >
                                            <div
                                                class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                            >
                                                <a
                                                    v-for="item in features"
                                                    :key="item.name"
                                                    :href="item.href"
                                                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                >
                                                    <component
                                                        :is="item.icon"
                                                        class="flex-shrink-0 h-6 w-6 text-yellow-400"
                                                        aria-hidden="true"
                                                    />
                                                    <div class="ml-4">
                                                        <p
                                                            class="text-base font-medium text-gray-900"
                                                        >{{ item.name }}</p>
                                                        <p
                                                            class="mt-1 text-sm text-gray-500"
                                                        >{{ item.description }}</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                                            >
                                                <div
                                                    v-for="item in callsToAction"
                                                    :key="item.name"
                                                    class="flow-root"
                                                >
                                                    <a
                                                        :href="item.href"
                                                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                    >
                                                        <component
                                                            :is="item.icon"
                                                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span class="ml-3">{{ item.name }}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </transition>
                            </Popover>

                            <a
                                href="#"
                                class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Pricing</a>
                            <a
                                href="#"
                                class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Docs</a>

                            <Popover class="relative" v-slot="{ open }">
                                <PopoverButton
                                    :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400']"
                                >
                                    <span>More</span>
                                    <ChevronDownIcon
                                        :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                                        aria-hidden="true"
                                    />
                                </PopoverButton>

                                <transition
                                    enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 translate-y-1"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 translate-y-1"
                                >
                                    <PopoverPanel
                                        class="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                    >
                                        <div
                                            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                        >
                                            <div
                                                class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                            >
                                                <a
                                                    v-for="item in resources"
                                                    :key="item.name"
                                                    :href="item.href"
                                                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                >
                                                    <component
                                                        :is="item.icon"
                                                        class="flex-shrink-0 h-6 w-6 text-yellow-400"
                                                        aria-hidden="true"
                                                    />
                                                    <div class="ml-4">
                                                        <p
                                                            class="text-base font-medium text-gray-900"
                                                        >{{ item.name }}</p>
                                                        <p
                                                            class="mt-1 text-sm text-gray-500"
                                                        >{{ item.description }}</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                <div>
                                                    <h3
                                                        class="text-sm tracking-wide font-medium text-gray-500 uppercase"
                                                    >Recent Posts</h3>
                                                    <ul role="list" class="mt-4 space-y-4">
                                                        <li
                                                            v-for="item in recentPosts"
                                                            :key="item.id"
                                                            class="text-base truncate"
                                                        >
                                                            <a
                                                                :href="item.href"
                                                                class="font-medium text-gray-900 hover:text-gray-700"
                                                            >{{ item.name }}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-5 text-sm">
                                                    <a
                                                        href="#"
                                                        class="font-medium text-yellow-400 hover:text-yellow-400"
                                                    >
                                                        View all posts
                                                        <span aria-hidden="true">&rarr;</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </transition>
                            </Popover>
                        </PopoverGroup>
                        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            >Sign in</a>
                            <a
                                href="#"
                                class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-700"
                            >Sign up</a>
                        </div>
                    </div>
                </div>

                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                >
                    <PopoverPanel
                        focus
                        class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div
                            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                        >
                            <div class="pt-5 pb-6 px-5">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <img
                                            class="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-yellow-400.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                                        >
                                            <span class="sr-only">Close menu</span>
                                            <XIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <nav class="grid gap-y-8">
                                        <a
                                            v-for="item in features"
                                            :key="item.name"
                                            :href="item.href"
                                            class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <component
                                                :is="item.icon"
                                                class="flex-shrink-0 h-6 w-6 text-yellow-400"
                                                aria-hidden="true"
                                            />
                                            <span
                                                class="ml-3 text-base font-medium text-gray-900"
                                            >{{ item.name }}</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="py-6 px-5 space-y-6">
                                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a
                                        href="#"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >Pricing</a>

                                    <a
                                        href="#"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >Docs</a>
                                    <a
                                        v-for="item in resources"
                                        :key="item.name"
                                        :href="item.href"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >{{ item.name }}</a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-700"
                                    >Sign up</a>
                                    <p class="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?
                                        <a
                                            href="#"
                                            class="text-yellow-400 hover:text-yellow-400"
                                        >Sign in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <main class="lg:relative">
                <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1
                            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                        >
                            <span class="block xl:inline">If there's a way</span>
                            {{ ' ' }}
                            <span
                                class="block text-yellow-400"
                            >It's Eway</span>
                        </h1>
                        <p
                            class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
                        >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div
                            class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                        >
                            <p
                                class="text-base font-medium text-gray-900"
                            >Sign up to get notified when it’s ready.</p>
                            <form action="#" method="POST" class="mt-3 sm:flex">
                                <label for="email" class="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:flex-1 border-gray-300"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                                >Notify me</button>
                            </form>
                            <p class="mt-3 text-sm text-gray-500">
                                We care about the protection of your data. Read our
                                <a
                                    href="#"
                                    class="font-medium text-gray-900 underline"
                                >Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
                >
                    <img
                        class="absolute inset-0 w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/p/AF1QipPzlZ1ePxhVU0NWADSP9VmOMi33mSn88KWfo7zp=w960-h960-n-o-v1"
                        alt
                    />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const features = [
    {
        name: 'Analytics',
        href: '#',
        description: 'Get a better understanding of where your traffic is coming from.',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        href: '#',
        description: 'Speak directly to your customers in a more meaningful way.',
        icon: CursorClickIcon,
    },
    { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        href: '#',
        description: "Connect with third-party tools that you're already using.",
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        href: '#',
        description: 'Build strategic funnels that will drive your customers to convert',
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
        ChevronDownIcon,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            features,
            callsToAction,
            resources,
            recentPosts,
        }
    },
}
</script>