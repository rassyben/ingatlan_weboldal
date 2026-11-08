import type { Metadata } from "next";
import Page from "@/components/Page";
import LeadForm from "@/components/LeadForm";
export const metadata: Metadata = { title: "Ingatlanértékbecslés", description: "Lakás, családi ház és telek értékbecslés piaci összehasonlítás alapján, részletes dokumentációval." };
const items = [["Lakóingatlanok", "Lakóingatlanok piaci értékének meghatározása."], ["Családi házak", "Telek, épület és környezet együttes értékelése."], ["Társasházi lakások", "Lakás értékbecslés a környék valós adásvételi adatai alapján."], ["Telkek", "Beépíthetőség és fekvés szerinti értékelés."], ["Egyéb ingatlanok", "Különleges és vegyes használatú ingatlanok."], ["Piaci összehasonlítás", "Hasonló, közelmúltban értékesített ingatlanokkal való összevetés."], ["Dokumentáció", "Írásos értékbecslési dokumentáció, amely a célnak megfelelően felhasználható."]];
export default function Ertekbecsles() {
  return (<Page title="Ingatlanértékbecslés" lead="Megalapozott piaci érték, érthető indoklással.">
    <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">{items.map(([t, d]) => <li key={t} className="border-l-2 border-gold pl-4"><h2 className="text-xl">{t}</h2><p className="mt-1 text-sm">{d}</p></li>)}</ul>
    <div id="ajanlatkeres" className="mt-20 scroll-mt-24"><h2 className="mb-6 text-3xl">Ajánlatkérés</h2><LeadForm kind="ertekbecsles" /></div>
  </Page>);
}
