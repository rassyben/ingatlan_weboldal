import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { site, nav } from "@/lib/site";
import { huf, type Property } from "@/lib/properties";
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy/95 text-ivory backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
        <Link href="/" className="font-serif text-xl">{site.name}</Link>
        <nav aria-label="Főmenü" className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-gold">{n.label}</Link>)}
        </nav>
      </div>
    </header>);
}
export function Footer() {
  return (
    <footer className="bg-anthracite text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm md:grid-cols-3">
        <div><p className="font-serif text-lg text-ivory">{site.name}</p><p className="mt-2">Ingatlanértékbecslés és ingatlanközvetítés.</p></div>
        <div className="space-y-2"><a className="flex items-center gap-2" href={`tel:${site.phone}`}><Phone size={16} className="text-gold" />{site.phone}</a>
          <a className="flex items-center gap-2" href={`mailto:${site.email}`}><Mail size={16} className="text-gold" />{site.email}</a></div>
        <div className="flex flex-col gap-1"><Link href="/adatkezeles">Adatkezelési tájékoztató</Link><Link href="/cookie">Cookie tájékoztató</Link><Link href="/impresszum">Impresszum</Link></div>
      </div>
    </footer>);
}
export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href={`/elado-ingatlanok/${p.id}`} className="group block overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-md">
      <div className="aspect-[4/3] bg-gradient-to-br from-navy to-anthracite p-4 text-xs text-ivory/60">Fotó helye</div>
      <div className="p-5"><p className="font-serif text-xl text-navy">{huf(p.price)}</p>
        <p className="mt-1 text-sm">{p.title}</p>
        <p className="mt-2 text-sm text-anthracite/70">{p.city} · {p.area} m²{p.rooms ? ` · ${p.rooms} szoba` : ""}</p></div>
    </Link>);
}
