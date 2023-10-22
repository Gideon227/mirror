import '@app/globals.css'

import { Providers } from '@components/Providers'
import { Arimo } from 'next/font/google'


const arimo = Arimo({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <main className={arimo.className}>
      <Providers> 
        {children}  
      </Providers>
    </main>
  )
}
