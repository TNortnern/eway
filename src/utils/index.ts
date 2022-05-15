import { isClient } from '@vueuse/shared'

export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined
