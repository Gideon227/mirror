import './globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

import { Providers } from '@components/Providers'
import { Arimo } from 'next/font/google'

import { Toaster } from 'react-hot-toast'

const arimo = Arimo({
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'MIRROR',
  description: 'For Artists, By Artist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={arimo.className}>
        <Providers>
          <Toaster /> 
            <Navbar />
              {children}
            <Footer />
          </Providers>
        </body>
      </html>
  )
}
