import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { PageHero } from '@/components/sections/page-hero';
import { homeContent } from '@/content/site';

export default function HomePage() {
  return (
    <PageShell>
      <PageHero eyebrow={homeContent.eyebrow} title={homeContent.title} description={homeContent.intro}>
        <ul className="space-y-2 text-sm uppercase tracking-[0.2em] text-muted md:text-base">
          {homeContent.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pt-6">
          <Link href="/work" className="text-sm uppercase tracking-[0.2em] text-foreground underline underline-offset-8">
            View selected work
          </Link>
        </div>
      </PageHero>
    </PageShell>
  );
}
