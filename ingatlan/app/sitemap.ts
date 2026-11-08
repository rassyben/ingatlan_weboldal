import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ertekbecsles", "/ingatlankozvetites", "/elado-ingatlanok", "/rolam", "/kapcsolat", "/adatkezeles", "/cookie", "/impresszum"].map((p) => ({ url: site.url + p }));
}
