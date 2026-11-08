import type { Metadata } from "next";
import Page from "@/components/Page";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Kapcsolat", description: "Vegye fel velünk a kapcsolatot telefonon, e-mailben vagy az űrlapon." };
export default function Kapcsolat() {
  return (<Page title="Kapcsolat"><div className="grid gap-12 md:grid-cols-2">
    <div className="space-y-4"><p>Telefon: <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></p><p>E-mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <p>Működési terület: {site.area}</p>
      <p className="space-x-4">{Object.entries(site.social).map(([k, v]) => <a key={k} href={v} className="underline capitalize">{k}</a>)}</p>
      <div className="flex aspect-video items-center justify-center rounded-lg bg-mist text-sm">Térkép helye (pl. Google Maps vagy OpenStreetMap beágyazás)</div></div>
    <LeadForm kind="kapcsolat" /></div></Page>);
}
