'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/stores/cart'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const NAV_LINKS = [
  { href: '/',        label: 'Accueil' },
  { href: '/shop',    label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { items, openCart } = useCartStore()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0F2530]/95 backdrop-blur-xl border-b border-[#29B9E8]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-withoutbg.png"
            alt="Roma Store"
            width={140}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white rounded-lg hover:bg-white/8 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <a
            href="tel:+2250712570709"
            className="hidden lg:flex items-center gap-2 text-[#29B9E8] text-sm font-semibold px-3 py-2 border border-[#29B9E8]/30 rounded-full hover:bg-[#29B9E8]/10 transition-colors"
          >
            <Phone size={13} />
            07 12 57 07 09
          </a>

          <Button
            onClick={openCart}
            className="relative bg-[#29B9E8] hover:bg-[#1A9FC8] text-white rounded-full px-4 gap-2"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline font-bold">Panier</span>
            {items.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 p-0 flex items-center justify-center rounded-full">
                {items.length}
              </Badge>
            )}
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F2530] border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/8 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+2250712570709"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#29B9E8]"
          >
            <Phone size={14} /> 07 12 57 07 09
          </a>
        </div>
      )}
    </header>
  )
}
