import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (cartId: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product) => {
        const cartId = `${product.id}-${Date.now()}`
        set((s) => ({ items: [...s.items, { ...product, cartId }] }))
      },

      removeItem: (cartId) => {
        set((s) => ({ items: s.items.filter((i) => i.cartId !== cartId) }))
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () => get().items.reduce((sum, i) => sum + i.price, 0),
    }),
    { name: 'roma-cart' }
  )
)
