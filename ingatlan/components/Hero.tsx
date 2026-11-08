"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      {/* Cserélje le háttérképre: <Image src="/hero.jpg" fill priority alt="" className="object-cover -z-20" /> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy to-anthracite" />
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-5 py-28 md:py-40">
        <h1 className="max-w-3xl text-5xl leading-tight text-ivory md:text-7xl">Ingatlanérték. Szakértelem. Bizalom.</h1>
        <p className="mt-6 max-w-xl text-lg text-ivory/80">Professzionális ingatlanértékbecslés és személyre szabott ingatlanközvetítés, az első konzultációtól a sikeres ügyletig.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/ertekbecsles#ajanlatkeres" className="btn btn-gold">Értékbecslést kérek</Link>
          <Link href="/ingatlankozvetites" className="btn btn-line">Ingatlant értékesítenék</Link>
        </div>
      </motion.div>
    </section>);
}
