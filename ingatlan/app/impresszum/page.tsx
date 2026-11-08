import Page from "@/components/Page";
export const metadata = { title: "Impresszum" };
export default function P() {
  return (<Page title="Impresszum"><p className="mb-6 rounded-md border border-gold bg-white p-4 text-sm">Szerkeszthető minta. Publikálás előtt kötelező jogi ellenőrzés.</p>
    <div className="max-w-2xl space-y-4"><p>[Helyőrző – Impresszum szövege. Adatkezelő neve, székhelye, adószáma, nyilvántartási adatai a valós adatokkal töltendők ki.]</p></div></Page>);
}
