import type { Metadata } from "next";
import Link from "next/link";
import Page from "@/components/Page";
export const metadata: Metadata = { title: "Ingatlanközvetítés", description: "Ingatlan eladás támogatása a konzultációtól az adásvételig." };
const steps = ["Első konzultáció", "Ingatlan felmérése", "Piaci ár meghatározása", "Hirdetési stratégia kialakítása", "Érdeklődők kezelése és ingatlanbemutatás", "Ajánlatok kezelése", "Adásvételi folyamat támogatása"];
export default function Kozvetites() {
  return (<Page title="Ingatlanközvetítés" lead="Az eladás minden lépését koordináljuk, Ön a döntésekre koncentrálhat.">
    <ol className="max-w-2xl space-y-6">{steps.map((s, i) => <li key={s} className="flex gap-5"><span className="font-serif text-3xl text-gold">{i + 1}</span><span className="pt-2 text-lg">{s}</span></li>)}</ol>
    <Link href="/kapcsolat" className="btn btn-navy mt-12">Szeretném értékesíteni az ingatlanomat</Link>
  </Page>);
}
