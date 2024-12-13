import Header from './components/Header'
import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'] })

export const metadata = {
  title: 'CityZen',
  description: 'Място за хора с планове и идеи',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${openSans}`}>
        <Header />
        <main className="pt-16 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
