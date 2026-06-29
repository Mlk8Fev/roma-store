'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import { Product, Series } from '@/types'

const PHONES: Product[] = [
  { id:1,  series:'X',  model:'iPhone X',         storage:'64GB',  price:100000, badge:'hot',  stock:5 },
  { id:2,  series:'XR', model:'iPhone XR',        storage:'64GB',  price:120000, badge:'hot',  stock:5 },
  { id:3,  series:'11', model:'iPhone 11',        storage:'64GB',  price:155000, badge:null,   stock:5 },
  { id:4,  series:'11', model:'iPhone 11 Pro',    storage:'64GB',  price:190000, badge:null,   stock:5 },
  { id:5,  series:'11', model:'iPhone 11 Pro',    storage:'256GB', price:210000, badge:null,   stock:5 },
  { id:6,  series:'11', model:'iPhone 11 Pro Max',storage:'64GB',  price:210000, badge:null,   stock:5 },
  { id:7,  series:'11', model:'iPhone 11 Pro Max',storage:'256GB', price:220000, badge:null,   stock:5 },
  { id:8,  series:'12', model:'iPhone 12',        storage:'64GB',  price:185000, badge:null,   stock:5 },
  { id:9,  series:'12', model:'iPhone 12',        storage:'128GB', price:210000, badge:null,   stock:5 },
  { id:10, series:'12', model:'iPhone 12 Pro',    storage:'128GB', price:225000, badge:null,   stock:5 },
  { id:11, series:'12', model:'iPhone 12 Pro',    storage:'256GB', price:240000, badge:null,   stock:5 },
  { id:12, series:'12', model:'iPhone 12 Pro Max',storage:'128GB', price:275000, badge:null,   stock:5 },
  { id:13, series:'12', model:'iPhone 12 Pro Max',storage:'256GB', price:290000, badge:null,   stock:5 },
  { id:14, series:'12', model:'iPhone 12 Pro Max',storage:'512GB', price:310000, badge:null,   stock:5 },
  { id:15, series:'13', model:'iPhone 13',        storage:'128GB', price:240000, badge:null,   stock:5 },
  { id:16, series:'13', model:'iPhone 13',        storage:'256GB', price:255000, badge:null,   stock:5 },
  { id:17, series:'13', model:'iPhone 13 Pro',    storage:'128GB', price:290000, badge:null,   stock:5 },
  { id:18, series:'13', model:'iPhone 13 Pro',    storage:'256GB', price:320000, badge:null,   stock:5 },
  { id:19, series:'13', model:'iPhone 13 Pro',    storage:'512GB', price:350000, badge:null,   stock:5 },
  { id:20, series:'13', model:'iPhone 13 Pro Max',storage:'128GB', price:320000, badge:null,   stock:5 },
  { id:21, series:'13', model:'iPhone 13 Pro Max',storage:'256GB', price:350000, badge:null,   stock:5 },
  { id:22, series:'14', model:'iPhone 14',        storage:'128GB', price:280000, badge:null,   stock:5 },
  { id:23, series:'14', model:'iPhone 14',        storage:'256GB', price:300000, badge:null,   stock:5 },
  { id:24, series:'14', model:'iPhone 14 Plus',   storage:'128GB', price:300000, badge:null,   stock:5 },
  { id:25, series:'14', model:'iPhone 14 Plus',   storage:'256GB', price:340000, badge:null,   stock:5 },
  { id:26, series:'14', model:'iPhone 14 Pro',    storage:'128GB', price:360000, badge:null,   stock:5 },
  { id:27, series:'14', model:'iPhone 14 Pro',    storage:'256GB', price:390000, badge:null,   stock:5 },
  { id:28, series:'14', model:'iPhone 14 Pro Max',storage:'128GB', price:390000, badge:null,   stock:5 },
  { id:29, series:'14', model:'iPhone 14 Pro Max',storage:'512GB', price:440000, badge:null,   stock:5 },
  { id:30, series:'15', model:'iPhone 15',        storage:'128GB', price:375000, badge:null,   stock:5 },
  { id:31, series:'15', model:'iPhone 15 Pro',    storage:'128GB', price:450000, badge:null,   stock:5 },
  { id:32, series:'15', model:'iPhone 15 Pro Max',storage:'256GB', price:550000, badge:null,   stock:5 },
  { id:33, series:'15', model:'iPhone 15 Pro Max',storage:'512GB', price:610000, badge:null,   stock:5 },
  { id:34, series:'16', model:'iPhone 16e',       storage:'128GB', price:360000, badge:null,   stock:5 },
  { id:35, series:'16', model:'iPhone 16',        storage:'128GB', price:450000, badge:'na',   stock:5, sim_note:'Non Activé' },
  { id:36, series:'16', model:'iPhone 16',        storage:'256GB', price:500000, badge:'na',   stock:5, sim_note:'Non Activé' },
  { id:37, series:'16', model:'iPhone 16 Plus',   storage:'128GB', price:500000, badge:null,   stock:5 },
  { id:38, series:'16', model:'iPhone 16 Plus',   storage:'256GB', price:570000, badge:null,   stock:5 },
  { id:39, series:'16', model:'iPhone 16 Pro',    storage:'128GB', price:560000, badge:null,   stock:5 },
  { id:40, series:'16', model:'iPhone 16 Pro',    storage:'256GB', price:600000, badge:null,   stock:5 },
  { id:41, series:'16', model:'iPhone 16 Pro Max',storage:'256GB', price:670000, badge:null,   stock:5 },
  { id:42, series:'17', model:'iPhone 17',        storage:'256GB', price:560000, badge:'new',  stock:5, sim_type:'E-SIM' },
  { id:43, series:'17', model:'iPhone 17',        storage:'256GB', price:590000, badge:'new',  stock:5, sim_type:'Nano-SIM' },
  { id:44, series:'17', model:'iPhone 17 Air',    storage:'256GB', price:620000, badge:'new',  stock:5 },
  { id:45, series:'17', model:'iPhone 17 Pro',    storage:'256GB', price:750000, badge:'new',  stock:5, sim_type:'E-SIM' },
  { id:46, series:'17', model:'iPhone 17 Pro',    storage:'256GB', price:820000, badge:'new',  stock:5, sim_type:'Nano-SIM' },
  { id:47, series:'17', model:'iPhone 17 Pro Max',storage:'256GB', price:850000, badge:'new',  stock:5, sim_type:'E-SIM' },
  { id:48, series:'17', model:'iPhone 17 Pro Max',storage:'256GB', price:910000, badge:'new',  stock:5, sim_type:'Nano-SIM' },
]

const SERIES_TABS: { value: Series; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'X',   label: 'iPhone X' },
  { value: 'XR',  label: 'iPhone XR' },
  { value: '11',  label: 'iPhone 11' },
  { value: '12',  label: 'iPhone 12' },
  { value: '13',  label: 'iPhone 13' },
  { value: '14',  label: 'iPhone 14' },
  { value: '15',  label: 'iPhone 15' },
  { value: '16',  label: 'iPhone 16' },
  { value: '17',  label: 'iPhone 17 ✨' },
]

export default function ShopPage() {
  const [series, setSeries] = useState<Series>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return PHONES.filter(p => {
      const matchSeries = series === 'all' || p.series === series
      const matchSearch = !q || p.model.toLowerCase().includes(q) || p.storage.toLowerCase().includes(q) || p.series.toLowerCase().includes(q)
      return matchSeries && matchSearch
    })
  }, [series, search])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A3A4A] pt-10 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-[#29B9E8] uppercase tracking-widest">Roma Store</span>
          <h1 className="text-3xl font-black text-white mt-1">Catalogue iPhone</h1>
          <p className="text-white/50 text-sm mt-1">{filtered.length} produit{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters card */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Rechercher un modèle, stockage…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29B9E8]/40 focus:border-[#29B9E8]"
            />
          </div>

          {/* Series tabs */}
          <div className="flex gap-2 flex-wrap">
            {SERIES_TABS.map(tab => (
              <button
                key={tab.value}
                onClick={() => setSeries(tab.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  series === tab.value
                    ? 'bg-[#1A3A4A] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#29B9E8]/10 hover:text-[#29B9E8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={48} strokeWidth={1} className="mx-auto mb-4 opacity-40" />
            <p className="font-semibold">Aucun produit trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}
