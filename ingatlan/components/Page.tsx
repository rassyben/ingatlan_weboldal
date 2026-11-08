export default function Page({ title, lead, children }: { title: string; lead?: string; children: React.ReactNode }) {
  return (<main><section className="bg-navy py-16 text-ivory"><div className="mx-auto max-w-6xl px-5">
    <h1 className="text-4xl text-ivory md:text-5xl">{title}</h1>{lead && <p className="mt-4 max-w-2xl text-ivory/80">{lead}</p>}</div></section>
    <div className="mx-auto max-w-6xl px-5 py-16">{children}</div></main>);
}
