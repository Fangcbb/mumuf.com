import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <PageShell>
      <section className="py-section">
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
            <h1 className="font-display text-5xl tracking-tightest md:text-7xl">Page not found.</h1>
            <p className="text-muted">The page you are looking for does not exist or may have moved.</p>
            <Link href="/" className="text-sm uppercase tracking-[0.2em] underline underline-offset-8">
              Return home
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
