import type { Metadata } from "next";
import Page from "@/components/Page";
export const metadata: Metadata = { title: "Bemutatkozás", description: "Szakmai háttér, munkamódszer és értékek." };
export default function Rolam() {
  return (<Page title="Bemutatkozás"><div className="grid gap-10 md:grid-cols-3">
    <div className="aspect-[3/4] rounded-lg bg-mist p-4 text-sm">Bemutatkozó fotó helye</div>
    <div className="space-y-8 md:col-span-2">
      {["Szakmai háttér", "Végzettségek", "Szakmai tapasztalat", "Értékek és munkamódszer"].map((t) => (
        <section key={t}><h2 className="text-2xl">{t}</h2><p className="mt-2">[Helyőrző – ide a valós adatok kerülnek. Kitalált végzettséget vagy referenciát nem közlünk.]</p></section>))}</div></div></Page>);
}
