'use client'

import NextError from 'next/error'
import React from 'react'

const GlobalError = (): JSX.Element => {
  return (
    <html>
      <body>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  )
}

export default GlobalError
