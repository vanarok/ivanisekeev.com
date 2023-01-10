// these APIs are auto-imported from @vueuse/core
import { useTheme } from 'vuetify'

export const isDark = useDark()

export const useToggleDark = () => {
  const toggleNativeDark = useToggle(isDark)
  const vuetifyTheme = useTheme()

  vuetifyTheme.global.name.value = isDark.value ? 'dark' : 'light'

  const toggleVuetifyDark = () => {
    vuetifyTheme.global.name.value = vuetifyTheme.global.current.value.dark
      ? 'light'
      : 'dark'
  }

  const toggleDark = () => {
    toggleVuetifyDark()
    toggleNativeDark()
  }

  return toggleDark
}
export const preferredDark = usePreferredDark()
