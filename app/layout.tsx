import { Nunito } from 'next/font/google'

import "./globals.css"
import Navbar from './components/navbar/Navbar'
import ClientOnly from './ClientOnly'
import Modal from './components/modals/Modal'

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <ClientOnly>
          <Modal
            isOpen
            actionLabel='Submit'
            title="Login"
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
