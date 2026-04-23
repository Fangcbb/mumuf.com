import { PageShell } from '@/components/layout/page-shell';
import { Container } from '@/components/layout/container';
import { PageHero } from '@/components/sections/page-hero';
import { contactContent } from '@/content/site';

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow={contactContent.eyebrow} title={contactContent.title} description={contactContent.description} />
      <section className="pb-section">
        <Container>
          <div className="grid gap-5 border-y border-black/10 py-8 md:max-w-2xl">
            {contactContent.methods.map((method) => (
              <div key={method.label} className="grid gap-2 border-b border-black/10 pb-5 last:border-b-0 last:pb-0 md:grid-cols-[10rem_1fr]">
                <p className="text-sm uppercase tracking-[0.2em] text-muted">{method.label}</p>
                <p className="text-lg text-foreground">{method.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
