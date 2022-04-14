export function useSnipCart(selector = 'snipcart-script', getInstance: (any: any) => any): void {
  if (!window) return
  const script: HTMLScriptElement = document.querySelector(selector as any)
  script?.addEventListener('load', () => {
    getInstance((window as any)?.Snipcart)
  })
}
