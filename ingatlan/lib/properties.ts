// Mintaadatok. Később cserélhető adatbázis-lekérdezésre (pl. Supabase/Prisma) – csak a getProperties/getProperty függvényeket kell átírni.
export type Property = { id: string; title: string; city: string; type: "Lakás" | "Családi ház" | "Telek"; price: number; area: number; rooms: number; description: string };
const data: Property[] = [
  { id: "minta-1", title: "Mintalakás, világos, felújított", city: "Budapest, XI. ker.", type: "Lakás", price: 69900000, area: 58, rooms: 2, description: "Mintaleírás. Cserélje le a valós ingatlan adataira." },
  { id: "minta-2", title: "Minta családi ház kerttel", city: "Szentendre", type: "Családi ház", price: 149000000, area: 140, rooms: 5, description: "Mintaleírás. Cserélje le a valós ingatlan adataira." },
  { id: "minta-3", title: "Minta építési telek", city: "Gödöllő", type: "Telek", price: 34500000, area: 820, rooms: 0, description: "Mintaleírás. Cserélje le a valós ingatlan adataira." },
  { id: "minta-4", title: "Minta társasházi lakás", city: "Budapest, VII. ker.", type: "Lakás", price: 54900000, area: 41, rooms: 1, description: "Mintaleírás. Cserélje le a valós ingatlan adataira." },
];
export async function getProperties() { return data; }
export async function getProperty(id: string) { return data.find((p) => p.id === id) ?? null; }
export const huf = (n: number) => new Intl.NumberFormat("hu-HU").format(n) + " Ft";
