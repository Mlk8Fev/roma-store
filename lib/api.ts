import axios from 'axios'
import { Product, Order } from '@/types'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true,
})

// Products
export const getProducts = (params?: { series?: string; search?: string }) =>
  api.get<Product[]>('/products', { params }).then((r) => r.data)

export const getProduct = (id: number) =>
  api.get<Product>(`/products/${id}`).then((r) => r.data)

// Orders
export const createOrder = (order: Omit<Order, 'id' | 'created_at'>) =>
  api.post<Order>('/orders', order).then((r) => r.data)

export default api
