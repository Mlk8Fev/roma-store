export interface Product {
  id: number
  series: string
  model: string
  storage: string
  price: number
  badge?: 'new' | 'hot' | 'na' | null
  sim_type?: string | null
  sim_note?: string | null
  stock: number
  created_at?: string
  updated_at?: string
}

export interface CartItem extends Product {
  cartId: string
}

export interface Order {
  id?: number
  items: CartItem[]
  total: number
  customer_name?: string
  customer_phone?: string
  notes?: string
  status?: 'pending' | 'confirmed' | 'delivered'
  created_at?: string
}

export type Series = 'all' | 'X' | 'XR' | '11' | '12' | '13' | '14' | '15' | '16' | '17'
