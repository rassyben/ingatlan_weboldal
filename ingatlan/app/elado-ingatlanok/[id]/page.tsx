import { notFound } from "next/navigation";
import Link from "next/link";
import Page from "@/components/Page";
import { getProperty, huf } from "@/lib/properties";
export async function generateMetadata({ params }: { params: { id: string } }) { const p = await getProperty(params.id); return { title: p?.title ?? "Ingatlan" }; }
export default async function Adatlap({ params }: { params: { id: string } }) {
  const p = await getProperty(params.id); if (!p) notFound();
  return (<Page title={p.title} lead={p.city}>
    <div className="grid gap-10 md:grid-cols-2">
      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-navy to-anthracite p-4 text-xs text-ivory/60">Fotó helye</div>
      <div><p className="font-serif text-4xl text-navy">{huf(p.price)}</p>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm"><dt>Típus</dt><dd>{p.type}</dd><dt>Alapterület</dt><dd>{p.area} m²</dd>{p.rooms > 0 && <><dt>Szobák</dt><dd>{p.rooms}</dd></>}</dl>
        <p className="mt-6">{p.description}</p><Link href="/kapcsolat" className="btn btn-navy mt-8">Érdeklődöm</Link></div>
    </div></Page>);
}
