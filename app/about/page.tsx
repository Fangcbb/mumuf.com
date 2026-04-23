import { PageShell } from '@/components/layout/page-shell';
import { Container } from '@/components/layout/container';
import { PageHero } from '@/components/sections/page-hero';
import { aboutContent } from '@/content/site';

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow={aboutContent.eyebrow} title={aboutContent.title} description={aboutContent.description} />
      <section className="pb-section">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutContent.principles.map((principle) => (
              <article key={principle.title} className="space-y-3 border-t border-black/10 pt-5">
                <h2 className="font-display text-3xl tracking-tightest">{principle.title}</h2>
                <p className="text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
