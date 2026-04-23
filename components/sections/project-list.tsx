import Link from 'next/link';
import type { Project } from '@/content/projects';
import { Container } from '@/components/layout/container';

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="pb-section">
      <Container>
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {projects.map((project) => (
            <li key={project.slug} className="py-8 md:py-10">
              <Link href={`/work/${project.slug}`} className="grid gap-4 md:grid-cols-[2fr_1fr_2fr] md:items-start">
                <div>
                  <h2 className="font-display text-3xl tracking-tightest md:text-4xl">{project.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{project.category}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">{project.year}</p>
                <p className="text-muted">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
