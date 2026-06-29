import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roma Store – iPhone Abidjan | Marché Samsung Treichville',
  description: "Roma Store : iPhones neufs et reconditionnés au meilleur prix à Abidjan. iPhone X au 17. Marché Samsung de Treichville.",
  keywords: "iPhone Abidjan, iPhone Treichville, Roma Store, iPhone pas cher Côte d'Ivoire",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CartDrawer />
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  )
}
