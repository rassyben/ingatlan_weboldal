import Link from "next/link";
import { ClipboardCheck, Handshake } from "lucide-react";
import { getProperties } from "@/lib/properties";
import { PropertyCard } from "@/components/Chrome";
import Hero from "@/components/Hero";
export default async function Home() {
  const props = (await getProperties()).slice(0, 3);
  return (<main>
    <Hero />
    <section className="mx-auto grid max-w-6xl gap-px bg-mist px-0 md:grid-cols-2">
      {[{ i: ClipboardCheck, t: "Ingatlanértékbecslés", d: "Lakások, házak és telkek piaci értékének meghatározása, részletes dokumentációval.", h: "/ertekbecsles" },
        { i: Handshake, t: "Ingatlanközvetítés", d: "Értékesítési stratégia, hirdetéskezelés és az adásvétel koordinálása egy kézben.", h: "/ingatlankozvetites" }].map(({ i: I, t, d, h }) => (
        <Link key={h} href={h} className="bg-ivory p-10 hover:bg-white"><I className="text-gold" size={28} /><h2 className="mt-4 text-3xl">{t}</h2><p className="mt-3 max-w-md">{d}</p></Link>))}
    </section>
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="max-w-xl text-4xl">Miért érdemes velünk dolgozni?</h2>
      <dl className="mt-10 grid gap-8 md:grid-cols-3">
        {[["Piaci összehasonlításon alapuló érték", "Az értékbecslés összehasonlítható, dokumentált adatokra épül."], ["Egy kapcsolattartó", "Az első egyeztetéstől az adásvételig ugyanazzal a szakemberrel dolgozik."], ["Átlátható folyamat", "Minden lépésről előre tájékoztatjuk, rejtett költség nélkül. [Helyőrző – véglegesítendő]"]].map(([t, d]) => (
          <div key={t} className="border-t-2 border-gold pt-4"><dt className="font-serif text-xl text-navy">{t}</dt><dd className="mt-2 text-sm">{d}</dd></div>))}
      </dl>
    </section>
    <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-5">
      <div className="flex items-end justify-between"><h2 className="text-4xl">Kiemelt ingatlanok</h2><Link href="/elado-ingatlanok" className="text-sm underline">Összes ingatlan</Link></div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{props.map((p) => <PropertyCard key={p.id} p={p} />)}</div></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><h2 className="text-4xl">Ügyfélvélemények</h2>
      <p className="mt-4 max-w-xl text-anthracite/70">Ide kerülhetnek a valódi ügyfelek visszajelzései, amint rendelkezésre állnak. Kitalált véleményeket nem közlünk.</p></section>
    <section className="bg-navy py-20 text-center text-ivory"><h2 className="text-4xl text-ivory">Beszéljük meg az ingatlanát</h2>
      <p className="mx-auto mt-3 max-w-lg text-ivory/80">Az első konzultáció során felmérjük a célját, és javaslatot adunk a következő lépésre.</p>
      <Link href="/kapcsolat" className="btn btn-gold mt-8">Felveszem a kapcsolatot</Link></section>
  </main>);
}
