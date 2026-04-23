# AGENTS.md

## Project intent

This repository is for a premium, minimal, high-end showcase website inspired by the visual restraint and immersive feeling of sites like unveil.fr, but it must remain original and production-friendly.

## Technical rules

* Use Next.js App Router + TypeScript.
* Use Tailwind CSS for styling.
* Use Lenis for smooth scrolling.
* Use GSAP + ScrollTrigger for lightweight motion only.
* Do NOT introduce Three.js, WebGL, shaders, or heavy animation libraries unless explicitly requested later.
* Prefer simple, stable, maintainable implementations.

## Design rules

* Minimal, elegant, restrained.
* Strong typography hierarchy.
* Generous whitespace.
* Smooth but subtle motion.
* No template-looking UI.
* No over-designed gradients, glowing cards, or noisy effects.
* Content should remain readable and primary.

## Performance rules

* Mobile performance is critical.
* Avoid long-running expensive animations.
* Avoid unnecessary dependencies.
* Optimize image loading.
* Keep bundle growth under control.

## Engineering rules

* Build in phases.
* Do not skip validation.
* After each major task, run relevant checks if available.
* Explain what changed and why.
* Keep components modular and reusable.
* Avoid hardcoding content directly into page components when a content/config layer is more appropriate.

## Output behavior

For each completed task:

1. Explain what changed.
2. List files touched.
3. Describe how to verify locally.
4. Note any remaining risks or follow-ups.

## Safety rails

* Do not refactor unrelated parts without need.
* Do not replace stable code with experimental architecture.
* If there are multiple valid options, choose the simplest robust option.
