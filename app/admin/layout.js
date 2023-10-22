import React from 'react'

import { Providers } from '@components/Providers'
import { Inter } from 'next/font/google'

const inter = Inter({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const layout = ({ children }) => {
  return (
      <>
        <Providers />
        {children}
      </>
  )
}

export default layout