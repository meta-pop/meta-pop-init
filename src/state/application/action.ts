import { createAction } from '@reduxjs/toolkit'

export const updateTheme = createAction<{ theme: string }>('application/updateTheme')
export const updateDarkMode = createAction<{ isDarkMode: boolean }>('application/updateDarkMode')
