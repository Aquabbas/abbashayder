---
id: my-personal-website
aliases: []
tags: []
---

# My Personal Website

This is my personal website hosted on `Vercel`, where I write about tech, health,
and things I learn along the way.

---

## Project Struture

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put
any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX
documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and
type-check your frontmatter using an optional schema. See
[Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
to learn more.

Any static assets, like images, can be placed in the `public/` directory.

---

## Template Integrations

- @astrojs/tailwind - <https://docs.astro.build/en/guides/integrations-guide/tailwind/>
- @astrojs/sitemap - <https://docs.astro.build/en/guides/integrations-guide/sitemap/>
- @astrojs/mdx - <https://docs.astro.build/en/guides/markdown-content/>
- @astrojs/rss - <https://docs.astro.build/en/guides/rss/>

---

## Astro.js Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

---

## License

Licensed under the
[GPL-3.0](https://github.com/Aquabbas/abbashayder/blob/develop/LICENSE)
license.

---
