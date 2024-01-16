'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider: React.FC<ThemeProviderProps> = (
  props: ThemeProviderProps
): JSX.Element => {
  const { children, ...otherProps } = props

  return <NextThemesProvider {...otherProps}>{children}</NextThemesProvider>
}

export default ThemeProvider
