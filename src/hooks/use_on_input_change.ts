'use client'

import { type ChangeEvent, useCallback } from 'react'

// prettier-ignore
export const useOnInputChange = <T, V>(
  onChange: (value: V) => void
): ((e: ChangeEvent<T>) => void) =>
    useCallback(
      (e: ChangeEvent<T>): void => {
        const { currentTarget } = e as any
        const { value } = currentTarget

        onChange(value as V)
      },
      [onChange]
    )
