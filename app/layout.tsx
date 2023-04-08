import { Nunito } from 'next/font/google'

import "./globals.css"

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
