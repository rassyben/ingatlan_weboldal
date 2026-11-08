import type { Metadata } from "next";
import Page from "@/components/Page";
import Catalog from "@/components/Catalog";
import { getProperties } from "@/lib/properties";
export const metadata: Metadata = { title: "Eladó ingatlanok", description: "Eladó lakások, családi házak és telkek szűrhető katalógusa." };
export default async function Elado() { return <Page title="Eladó ingatlanok"><Catalog items={await getProperties()} /></Page>; }
