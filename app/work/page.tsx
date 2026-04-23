import { PageShell } from '@/components/layout/page-shell';
import { PageHero } from '@/components/sections/page-hero';
import { ProjectList } from '@/components/sections/project-list';
import { projects } from '@/content/projects';

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Work"
        title="Selected projects across fashion, architecture, and hospitality."
        description="Each case balances narrative clarity, premium tone, and maintainable structure."
      />
      <ProjectList projects={projects} />
    </PageShell>
  );
}
