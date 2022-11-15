import { createReducer } from '@reduxjs/toolkit'

import { updateDarkMode, updateTheme } from './action'

export interface ApplicationState {
  isDarkMode: boolean
  theme: string
}

const initialState: ApplicationState = {
  isDarkMode: true,
  theme: 'dark',
}

export default createReducer(initialState, (builder: any) =>
  builder
    .addCase(updateTheme, (state, { payload: { theme } }) => {
      state.theme = theme
    })
    .addCase(updateDarkMode, (state, { payload: { isDarkMode } }) => {
      state.isDarkMode = isDarkMode
    })
)
