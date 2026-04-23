import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/page-shell';
import { Container } from '@/components/layout/container';
import { getProjectBySlug, projects } from '@/content/projects';

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <section className="py-section">
        <Container>
          <div className="max-w-4xl space-y-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              {project.category} / {project.year}
            </p>
            <h1 className="font-display text-5xl leading-tight tracking-tightest md:text-7xl">{project.name}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{project.summary}</p>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="grid gap-10 border-y border-black/10 py-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <article className="space-y-3">
                <h2 className="font-display text-3xl tracking-tightest">Challenge</h2>
                <p className="text-muted">{project.challenge}</p>
              </article>
              <article className="space-y-3">
                <h2 className="font-display text-3xl tracking-tightest">Outcome</h2>
                <p className="text-muted">{project.outcome}</p>
              </article>
            </div>
            <aside className="space-y-3">
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted">Services</h2>
              <ul className="space-y-2 text-foreground">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
