export const WA_NUMBER = '2250712570709'

export function fmtPrice(n: number): string {
  return n.toLocaleString('fr-FR').replace(/\s/g, '.') + ' F'
}

export function buildWALink(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export function productWAMessage(model: string, storage: string, price: number, simType?: string | null): string {
  return `Bonjour Roma Store ! 👋\nJe souhaite commander :\n📱 ${model} – ${storage}${simType ? ' (' + simType + ')' : ''}\n💰 Prix : ${fmtPrice(price)}\nMerci de confirmer la disponibilité.`
}

export function cartWAMessage(items: { model: string; storage: string; price: number; sim_type?: string | null }[], total: number): string {
  const lines = items.map(i => `• ${i.model} ${i.storage}${i.sim_type ? ' (' + i.sim_type + ')' : ''} → ${fmtPrice(i.price)}`).join('\n')
  return `Bonjour Roma Store ! 👋\n\nJe souhaite commander :\n\n${lines}\n\n💰 Total : ${fmtPrice(total)}\n\nMerci de confirmer la disponibilité !`
}
