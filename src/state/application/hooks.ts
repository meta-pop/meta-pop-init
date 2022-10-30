import { AppState } from 'app/state'
import { useAppSelector } from 'app/state/hooks'


export function useTheme(): AppState['application']['theme'] {
  return useAppSelector((state) => state.application.theme)
}

export function useIsDarkMode(): AppState['application']['isDarkMode'] {
  return useAppSelector((state) => state.application.isDarkMode)
}

