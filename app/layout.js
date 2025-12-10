import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: 'DEOS DIOS | Know Your Scent',
  description: 'The premier odor profile protocol.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
