import { createReducer } from '@reduxjs/toolkit'

import { updateDarkMode, updateTheme } from './action'

export interface ApplicationState {
  isDarkMode: boolean
  theme: string
}

const initialState: ApplicationState = {
  isDarkMode: false,
  theme: 'lofi',
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateTheme, (state, { payload: { theme } }) => {
      state.theme = theme
    })
    .addCase(updateDarkMode, (state, { payload: { isDarkMode } }) => {
      state.isDarkMode = isDarkMode
    })
)
