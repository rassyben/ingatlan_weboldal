import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schema";
export async function POST(req: Request) {
  const parsed = inquirySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  // TODO: küldés e-mailben (pl. Resend/Formspree ingyenes csomag) vagy mentés adatbázisba.
  console.log("Új megkeresés:", parsed.data);
  return NextResponse.json({ ok: true });
}
