import { theme } from '@unocss/preset-wind'

export const useBreakpoint = () => {
  return useBreakpoints(theme.breakpoints || {})
}
