type LiteralUnion<T extends U, U = string> = T | (U & {})
type CommonAttributes = 'rel' | 'href' | 'src' | 'hidden' | 'id' | 'class'
interface ElementCreation { el: keyof HTMLElementTagNameMap; attributes: Partial<Record<LiteralUnion<CommonAttributes>, any>>; appendTo?: LiteralUnion<'head' | 'body'> }
const generateElement = ({ attributes, el, appendTo }: ElementCreation) => {
  const element = document.createElement(el)
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
  if (appendTo) document.querySelector(appendTo as any)?.appendChild(element)
  return element
}
export function useNewElement(elementCreationType: ElementCreation | ElementCreation[]): HTMLElement | HTMLElement[] | void {
  if (typeof window === 'undefined') return
  if (Array.isArray(elementCreationType)) {
    const els: HTMLElement[] = []
    for (let i = 0; i < elementCreationType.length; i++) {
      const elc = elementCreationType[i]
      els.push(generateElement(elc))
    }
    return els
  }
  else {
    return generateElement(elementCreationType)
  }
}
