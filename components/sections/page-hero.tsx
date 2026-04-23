import type { ReactNode } from 'react';
import { Container } from '@/components/layout/container';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="py-section">
      <Container>
        <div className="max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.25em] text-muted">{eyebrow}</p>
          <h1 className="font-display text-5xl leading-tight tracking-tightest md:text-7xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}
