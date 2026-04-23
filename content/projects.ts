export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  services: string[];
  challenge: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'atelier-noir',
    name: 'Atelier Noir',
    category: 'Fashion House',
    year: '2026',
    summary:
      'A minimal commerce showcase balancing editorial storytelling with selective product focus.',
    services: ['Brand Direction', 'UX Structure', 'Content System'],
    challenge:
      'The client needed a premium online presence that could support seasonal launches without redesigning each cycle.',
    outcome:
      'We established a modular page system and refined typographic rhythm that reduced campaign setup time by 40%.',
  },
  {
    slug: 'north-archives',
    name: 'North Archives',
    category: 'Architecture Studio',
    year: '2025',
    summary: 'A portfolio platform emphasizing whitespace, project sequencing, and clear long-form case studies.',
    services: ['Information Architecture', 'Visual Design', 'Frontend Build'],
    challenge:
      'Their existing site buried major projects under dense navigation and inconsistent storytelling patterns.',
    outcome:
      'The redesigned structure increased average case-study reading depth and improved qualified inquiries.',
  },
  {
    slug: 'lumen-hospitality',
    name: 'Lumen Hospitality',
    category: 'Hospitality Group',
    year: '2024',
    summary: 'A multi-brand web presence with unified tone, reusable components, and localized content sections.',
    services: ['Design System', 'Content Modeling', 'Technical Planning'],
    challenge:
      'Three sub-brands needed coherence while retaining distinct voices across destinations and offers.',
    outcome:
      'A shared component library enabled faster updates and a consistent premium feel across all brand pages.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
