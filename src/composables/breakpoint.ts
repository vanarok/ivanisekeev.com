import { theme } from '@unocss/preset-wind'
import { useBreakpoints } from '@vueuse/core'

export const useBreakpoint = () => {
  return useBreakpoints(theme.breakpoints || {})
}
