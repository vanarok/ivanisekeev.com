import { useDark, usePreferredDark, useToggle } from '@vueuse/core'

export const isDark = useDark()

export const useToggleDark = () => {
  const toggleNativeDark = useToggle(isDark)

  const toggleDark = () => {
    toggleNativeDark()
  }

  return toggleDark
}
export const preferredDark = usePreferredDark()
