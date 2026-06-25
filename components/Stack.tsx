// Importamos las librerias
import { stack } from "@/data/stack";

// Definimos el component stack
export default function Stack() {
  return (
    <section id="stack" className="px-6 py-20">
      <p className="bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent font-medium text-xs uppercase tracking-widest">tools</p>
      <h2 className="mt-2 text-3xl font-semibold text-paper">What I build with</h2>
      <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">Tools I've used in real projects, not just tutorials. Each one battle-tested.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {Object.entries(stack).map(([category, { items, color }]) => (
          <div key={category}>
            <h3 className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-line pb-2">
              <span
                className="inline-block size-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              {category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-zinc-500 dark:text-zinc-500 hover:bg-zinc-500/10 hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
