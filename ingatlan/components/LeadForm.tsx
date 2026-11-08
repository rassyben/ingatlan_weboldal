"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import { inquirySchema, type Inquiry } from "@/lib/schema";

export default function LeadForm({ kind }: { kind: "ertekbecsles" | "kapcsolat" }) {
  const [done, setDone] = useState(false); const [err, setErr] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inquiry>({ resolver: zodResolver(inquirySchema), defaultValues: { kind } });
  const val = kind === "ertekbecsles";
  const onSubmit = async (d: Inquiry) => {
    setErr(false);
    const r = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
    r.ok ? setDone(true) : setErr(true);
  };
  if (done) return <p role="status" className="rounded-lg bg-white p-8 text-navy">Köszönjük, megkeresését megkaptuk. Hamarosan jelentkezünk.</p>;
  const F = ({ n, label, children }: { n: keyof Inquiry; label: string; children: React.ReactNode }) => (
    <label className="block text-sm"><span className="mb-1 block text-navy">{label}</span>{children}
      {errors[n] && <span className="mt-1 block text-red-700">{errors[n]?.message as string}</span>}</label>);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8" noValidate>
      <F n="name" label="Név"><input className="input" {...register("name")} /></F>
      <F n="email" label="E-mail-cím"><input type="email" className="input" {...register("email")} /></F>
      <F n="phone" label="Telefonszám"><input type="tel" className="input" {...register("phone")} /></F>
      {val && <>
        <F n="propertyType" label="Ingatlan típusa"><select className="input" {...register("propertyType")}><option>Társasházi lakás</option><option>Családi ház</option><option>Telek</option><option>Egyéb</option></select></F>
        <F n="city" label="Település"><input className="input" {...register("city")} /></F>
        <F n="area" label="Alapterület (m²)"><input inputMode="numeric" className="input" {...register("area")} /></F>
        <F n="rooms" label="Szobák száma"><input inputMode="numeric" className="input" {...register("rooms")} /></F>
        <F n="purpose" label="Az értékbecslés célja"><select className="input" {...register("purpose")}><option>Értékesítés</option><option>Hitelfelvétel</option><option>Öröklés / ajándékozás</option><option>Vagyonmegosztás</option><option>Egyéb</option></select></F>
      </>}
      <div className="sm:col-span-2"><F n="message" label="Megjegyzés"><textarea rows={4} className="input" {...register("message")} /></F></div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-2 text-sm"><input type="checkbox" className="mt-1" {...register("consent")} />
          <span>Elfogadom az <Link href="/adatkezeles" className="underline">adatkezelési tájékoztatót</Link>.</span></label>
        {errors.consent && <span className="mt-1 block text-sm text-red-700">{errors.consent.message}</span>}
      </div>
      {err && <p className="text-sm text-red-700 sm:col-span-2">A küldés nem sikerült. Próbálja újra, vagy hívjon telefonon.</p>}
      <button disabled={isSubmitting} className="btn btn-navy sm:col-span-2 sm:justify-self-start">{val ? "Ajánlatot kérek" : "Üzenet küldése"}</button>
    </form>
  );
}
