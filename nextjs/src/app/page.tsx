import Image from "next/image";
import { siteMetrics } from "@/data/siteMetrics";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="max-w-[var(--container-max)] w-full text-center py-24">
        <Image
          src="/logos/lockup-ink.png"
          alt="Inspirelabs"
          width={280}
          height={60}
          priority
          className="mx-auto mb-8"
        />
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-orange)] mb-4">
          AI-driven Performance Marketing System
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-6 leading-tight">
          Your campaigns end. Your system shouldn't.
        </h1>
        <p className="text-lg text-[var(--color-soft-grey)] max-w-2xl mx-auto mb-12">
          Phase 1 scaffold complete. Layout, components, and pages will be built
          in Phases 2-4.
        </p>

        {/* Proof band - verifies data files are wired correctly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {siteMetrics.slice(0, 4).map((metric) => (
            <div key={metric.label} className="text-center">
              <span className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-ink)]">
                {metric.value}
                {metric.suffix}
              </span>
              <p className="font-[var(--font-mono)] text-xs text-[var(--color-soft-grey)] mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
