import Link from 'next/link';
import { siteNavigation } from '@/content/site';
import { Container } from './container';

export function SiteHeader() {
  return (
    <header className="border-b border-black/5 py-6">
      <Container className="flex items-center justify-between gap-6">
        <Link href="/" className="font-display text-2xl tracking-tightest">
          MUMUF
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-muted">
            {siteNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
