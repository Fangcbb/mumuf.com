export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-content items-center px-6 py-24 md:px-12">
      <section className="max-w-3xl space-y-8">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Phase 1 / Foundation</p>
        <h1 className="font-display text-5xl leading-tight tracking-tightest md:text-7xl">
          Premium showcase architecture, prepared for build.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          This is the initial baseline with design tokens, typography, and layout scaffolding.
          Phase 2 will implement complete page structures and modular content-driven sections.
        </p>
      </section>
    </main>
  );
}
