import Image from 'next/image'
import Link from 'next/link'
import { Shield, Zap, MapPin, Star, ChevronRight, Phone } from 'lucide-react'
import { buildWALink } from '@/lib/utils/phone'

const FEATURES = [
  { icon: Shield, title: 'Produits garantis',        desc: 'Chaque iPhone est vérifié et testé avant la vente. Qualité assurée.' },
  { icon: Star,   title: 'Meilleurs prix',            desc: "L'accord parfait entre qualité et prix — comparez et revenez chez nous." },
  { icon: Zap,    title: 'Commande rapide',           desc: 'Sélectionnez votre modèle et commandez en quelques secondes sur WhatsApp.' },
  { icon: MapPin, title: 'Sur place à Treichville',   desc: 'Passez nous voir au Marché Samsung de Treichville pour tester avant achat.' },
]

const SERIES = [
  { name: 'iPhone 17', slug: '17', sub: 'La toute dernière génération', color: 'from-cyan-500 to-blue-600',    badge: 'Nouveau ✨' },
  { name: 'iPhone 16', slug: '16', sub: 'Puissance et élégance',        color: 'from-violet-500 to-purple-700', badge: null },
  { name: 'iPhone 15', slug: '15', sub: 'Pro photo, Pro performance',   color: 'from-teal-500 to-emerald-700', badge: null },
  { name: 'iPhone 14', slug: '14', sub: 'Le rapport qualité-prix idéal',color: 'from-amber-500 to-orange-600', badge: null },
]

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0a1e27] via-[#1A3A4A] to-[#0d4c65]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(41,185,232,0.15)_0%,transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-[#29B9E8]/15 border border-[#29B9E8]/30 text-[#29B9E8] text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wide">
            <Star size={12} fill="currentColor" /> Meilleur prix à Abidjan · Marché Samsung de Treichville
          </div>

          <div className="mb-8">
            <Image src="/images/logo-withoutbg.png" alt="Roma Store" width={260} height={100}
              className="mx-auto drop-shadow-[0_8px_24px_rgba(41,185,232,0.35)]" priority />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            L'iPhone de vos rêves<br />au <span className="text-[#29B9E8]">meilleur prix</span>
          </h1>

          <p className="text-lg text-white/60 italic mb-10 max-w-xl mx-auto leading-relaxed">
            <strong className="text-[#29B9E8] not-italic font-bold">L'accord entre la qualité et le prix</strong>{' '}
            c'est chez Roma Store — de l'iPhone X au tout dernier iPhone 17.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#29B9E8] hover:bg-[#1A9FC8] text-white font-bold rounded-full px-8 py-3 text-base transition-colors">
              Voir le catalogue <ChevronRight size={18} />
            </Link>
            <a href={buildWALink("Bonjour Roma Store ! Je voudrais des informations.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 rounded-full px-8 py-3 text-base font-bold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Nous contacter
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[['48+','Modèles'],['8','Générations'],['100K F','Dès'],['Abidjan','Livraison']].map(([n,l]) => (
              <div key={l} className="text-center">
                <span className="block text-3xl font-black text-[#29B9E8]">{n}</span>
                <span className="text-xs text-white/40 font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#29B9E8] uppercase tracking-widest">Pourquoi Roma Store ?</span>
            <h2 className="text-3xl font-black text-[#1A3A4A] mt-2">La référence iPhone à Abidjan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:border-[#29B9E8]/40 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#29B9E8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#29B9E8]/20 transition-colors">
                  <Icon size={22} className="text-[#29B9E8]" />
                </div>
                <h3 className="font-bold text-[#1A3A4A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SÉRIES POPULAIRES ===== */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#29B9E8] uppercase tracking-widest">Catalogue</span>
            <h2 className="text-3xl font-black text-[#1A3A4A] mt-2">Séries populaires</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERIES.map((s) => (
              <Link key={s.name} href={`/shop?series=${s.slug}`}
                className={`group relative overflow-hidden rounded-2xl p-6 text-white flex flex-col justify-between min-h-[160px] hover:scale-[1.02] transition-transform bg-gradient-to-br ${s.color}`}>
                <div>
                  {s.badge && <span className="inline-block bg-white/25 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">{s.badge}</span>}
                  <h3 className="text-xl font-black">{s.name}</h3>
                  <p className="text-sm text-white/75 mt-1">{s.sub}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-white/90 group-hover:text-white mt-4">
                  Voir les prix <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop"
              className="inline-flex items-center justify-center bg-[#1A3A4A] hover:bg-[#29B9E8] text-white font-bold rounded-full px-10 py-3 transition-colors">
              Voir tout le catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / CONTACT ===== */}
      <section className="py-24 bg-[#1A3A4A] px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold text-[#29B9E8] uppercase tracking-widest">À propos</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4">Votre boutique de <span className="text-[#29B9E8]">confiance</span></h2>
            <p className="text-white/65 leading-relaxed mb-6">
              Roma Store, c'est votre boutique iPhone au cœur du Marché Samsung de Treichville. Nous sélectionnons des iPhones de toutes générations — neufs et reconditionnés — avec le meilleur rapport qualité-prix d'Abidjan.
            </p>
            <ul className="space-y-3">
              {['Produits vérifiés et testés','Prix transparents et sans surprise','Commande directe via WhatsApp','Au Marché Samsung de Treichville'].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#29B9E8]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#29B9E8" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-[#29B9E8] font-bold text-lg mb-6">📍 Nous contacter</h3>
            <div className="space-y-3">
              {[{href:'tel:+2250712570709',label:'07 12 57 07 09'},{href:'tel:+2250768066698',label:'07 68 06 66 98'}].map(c=>(
                <a key={c.href} href={c.href} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-[#29B9E8]/10 rounded-xl transition-colors">
                  <Phone size={18} className="text-[#29B9E8]" />
                  <div>
                    <p className="text-[10px] text-white/35 uppercase tracking-wider">Téléphone</p>
                    <p className="text-white font-bold">{c.label}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <MapPin size={18} className="text-[#29B9E8] flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-white/35 uppercase tracking-wider">Adresse</p>
                  <p className="text-white font-bold text-sm">Marché Samsung, Treichville · Abidjan</p>
                </div>
              </div>
            </div>
            <a href={buildWALink("Bonjour Roma Store ! Je voudrais des informations.")} target="_blank" rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DAE54] text-white font-bold py-4 rounded-xl transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
