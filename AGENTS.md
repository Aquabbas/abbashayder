# AGENTS.md

Guidelines for LLM software bots working in this repository.

## Project Overview

This is a personal blog/portfolio site built with **Astro 4.x** (Dante theme).

**Tech Stack:**

- Framework: Astro with MDX support
- Styling: Tailwind CSS 3.x with custom theme
- Language: TypeScript (strict mode)
- Fonts: Inter (sans), Newsreader (serif)
- Dark mode: Class-based toggle

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:4321)
npm run start        # Alias for dev

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting (run manually via npx)
npx eslint .                    # Lint JS/TS files
npx prettier --check .          # Check formatting
npx prettier --write .          # Fix formatting
npx stylelint "**/*.css"        # Lint CSS files

# Type checking
npx astro check                 # Astro + TypeScript validation
```

**Note:** No test framework is configured. Always run `npm run build` to verify changes.

## Before Committing

1. `npx prettier --write .` — Fix formatting
2. `npx eslint .` — Check for linting errors
3. `npm run build` — Verify the build succeeds

## Project Structure

```text
src/
├── components/      # Reusable Astro components
├── content/         # Content collections (MDX/Markdown)
│   ├── blog/        # Blog posts
│   ├── pages/       # Static pages (about, contact, terms)
│   └── projects/    # Project entries
├── data/            # Site configuration
│   └── site-config.ts
├── icons/           # Icon components
├── layouts/         # Page layouts
├── pages/           # File-based routing
├── styles/          # Global CSS
└── utils/           # Utility functions
```

## Code Style

### Prettier Configuration

- **Print width:** 160 characters
- **Quotes:** Single quotes
- **Trailing commas:** None
- **Indentation:** 4 spaces (2 for .md, .mdx, .yaml)
- **Plugins:** prettier-plugin-astro, prettier-plugin-tailwindcss

### TypeScript

- Strict mode enabled with `strictNullChecks`
- Extends `astro/tsconfigs/strict`
- Use explicit type annotations for function parameters and return types
- Use `type` keyword for type aliases (not `interface` unless extending)

```typescript
// Preferred
export type Props = {
  title: string;
  description?: string;
};

// Function with explicit types
export function slugify(input?: string): string {
  if (!input) return '';
  // ...
}
```

### ESLint

- Uses flat config format (eslint.config.js)
- Extends: @eslint/js recommended + typescript-eslint recommended
- Globals: browser + node

## Astro Component Patterns

### Standard Component Structure

```astro
---
// 1. External imports (astro:content, astro:transitions, etc.)
import { getCollection } from 'astro:content';

// 2. Internal imports (layouts, components, utils, data)
import BaseLayout from '../layouts/BaseLayout.astro';
import Button from '../components/Button.astro';
import siteConfig from '../data/site-config';
import { sortItemsByDateDesc } from '../utils/data-utils';

// 3. Type definitions
type Props = {
  title: string;
  showHeader?: boolean;
};

// 4. Props destructuring with defaults
const { title, showHeader = true } = Astro.props;

// 5. Data fetching and logic
const posts = (await getCollection('blog')).sort(sortItemsByDateDesc);
---

<!-- Template -->
<BaseLayout title={title}>
  <slot />
</BaseLayout>
```

### Props Pattern

- Export `Props` type in frontmatter for component props
- Use destructuring with defaults: `const { prop = defaultValue } = Astro.props;`
- For polymorphic components, use union types (see Button.astro)

## Content Collections

### Blog Post Frontmatter

```yaml
---
title: Post Title
slug: post-title # optional, overrides filename for clean URLs
excerpt: Short description (optional)
publishDate: 'Feb 2 2025'
updatedDate: 'Aug 10 2025' # optional
isFeatured: true # shows on homepage
tags:
  - tag1
  - tag2
seo: # optional
  image:
    src: /image.jpg
    alt: Image description
image: # optional, used for thumbnail in post list
  src: /2025-02-02-post-1.jpeg
  alt: Image description
---
```

### Blog Post File Naming

- **Filename:** Date-prefixed for filesystem organization (e.g., `2025-02-02-post-title.md`)
- **Slug:** Add `slug` in frontmatter for clean URLs (e.g., `slug: post-title`)
- **Result:** File sorts chronologically in editor, URL stays clean (`/blog/post-title/`)

### Schema Definitions

Content schemas are defined in `src/content/config.ts` using Zod.

## Tailwind CSS Conventions

### Custom Theme Colors

Use semantic color classes that support dark mode:

```html
<!-- Background -->
<div class="bg-main">
  <!-- Primary background -->
  <div class="bg-muted">
    <!-- Muted/secondary background -->

    <!-- Text -->
    <p class="text-main">
      <!-- Primary text color -->

      <!-- Border -->
    </p>

    <div class="border-main"><!-- Primary border color --></div>
  </div>
</div>
```

### Typography

- Headings: `font-serif` (Newsreader)
- Body: `font-sans` (Inter) - default
- Use `prose prose-dante` for Markdown content

### Responsive Patterns

Mobile-first with `sm:` breakpoint:

```html
<h1 class="text-2xl sm:text-4xl">
  <div class="mb-12 sm:mb-16"></div>
</h1>
```

## File Naming

- **Components:** PascalCase (e.g., `PostPreview.astro`)
- **Pages:** kebab-case or [...slug] patterns
- **Utils:** kebab-case (e.g., `data-utils.ts`)

### Blog Post - File Naming

- **Filename:** Date-prefixed for filesystem organization (e.g., `2025-02-02-post-title.md`)
- **Slug:** Add `slug` in frontmatter for clean URLs (e.g., `slug: post-title`)
- **Result:** File sorts chronologically in editor, URL stays clean (`/blog/post-title/`)
- **Images:** `{date}-{post-slug}.jpeg` (e.g., `2025-02-02-you-are-not-paid-to-write-code.jpeg`)
- **Multiple images:** `{date}-{post-slug}-1.jpeg`, `{date}-{post-slug}-2.jpeg`, etc.

### Project File Naming

- **Content:** `{project-name}.md` (e.g., `aquavim.md`)
- **Images:** `{project-name}-image-{n}.png` (e.g., `aquavim-image-1.png`)
- **Thumbnail:** First image (`-image-1`) is used as cover, referenced in frontmatter

## Common Utilities

```typescript
// Sort content by date (newest first)
import { sortItemsByDateDesc } from '../utils/data-utils';

// Generate URL-safe slugs
import { slugify } from '../utils/common-utils';

// Get all unique tags from posts
import { getAllTags, getPostsByTag } from '../utils/data-utils';
```

## Important Notes

1. **Dark mode:** Controlled via `html.dark` class, toggle stored in localStorage
2. **i18n:** Configured for en, ar, sv locales (English is default)
3. **Site URL:** <https://abbashayder.com> (used for canonical URLs, sitemap, RSS)
4. **No emojis:** Avoid adding emojis unless explicitly requested
