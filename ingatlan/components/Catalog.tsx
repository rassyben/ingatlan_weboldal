"use client";
import { useState } from "react";
import type { Property } from "@/lib/properties";
import { PropertyCard } from "./Chrome";
export default function Catalog({ items }: { items: Property[] }) {
  const [f, setF] = useState({ city: "", type: "", pMin: "", pMax: "", aMin: "", aMax: "", rooms: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const out = items.filter((p) => (!f.city || p.city.toLowerCase().includes(f.city.toLowerCase())) && (!f.type || p.type === f.type)
    && (!f.pMin || p.price >= +f.pMin) && (!f.pMax || p.price <= +f.pMax) && (!f.aMin || p.area >= +f.aMin) && (!f.aMax || p.area <= +f.aMax) && (!f.rooms || p.rooms >= +f.rooms));
  return (<>
    <div className="grid gap-3 rounded-lg bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
      <input className="input" placeholder="Település" aria-label="Település" onChange={set("city")} />
      <select className="input" aria-label="Típus" onChange={set("type")}><option value="">Minden típus</option><option>Lakás</option><option>Családi ház</option><option>Telek</option></select>
      <input className="input" inputMode="numeric" placeholder="Min. ár (Ft)" aria-label="Minimum ár" onChange={set("pMin")} />
      <input className="input" inputMode="numeric" placeholder="Max. ár (Ft)" aria-label="Maximum ár" onChange={set("pMax")} />
      <input className="input" inputMode="numeric" placeholder="Min. alapterület (m²)" aria-label="Minimum alapterület" onChange={set("aMin")} />
      <input className="input" inputMode="numeric" placeholder="Max. alapterület (m²)" aria-label="Maximum alapterület" onChange={set("aMax")} />
      <input className="input" inputMode="numeric" placeholder="Min. szobaszám" aria-label="Minimum szobaszám" onChange={set("rooms")} />
    </div>
    {out.length ? <div className="mt-8 grid gap-6 md:grid-cols-3">{out.map((p) => <PropertyCard key={p.id} p={p} />)}</div>
      : <p className="mt-8">Nincs a szűrésnek megfelelő ingatlan. Módosítsa a feltételeket.</p>}
  </>);
}
