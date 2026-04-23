import { Container } from './container';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 MUMUF Studio</p>
        <p>Minimal digital showcase framework</p>
      </Container>
    </footer>
  );
}
