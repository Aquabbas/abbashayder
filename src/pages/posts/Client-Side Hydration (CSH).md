---
title: 'Client-Side Hydration (CSH)'
pubDate: 2024-08-09
description: 'What is Client-Side Hydration (CSH)?'
author: 'Abbas Hayder'
image:
  url: 'https://unsplash.com/photos/gray-concrete-bridge-and-waterfalls-during-daytime-cssvEZacHvQ'
  alt: 'Free photo from unsplash showcasing a waterfall.'
tags: ['system architecture', 'client-side hydration']
---

## What is "Hydration" in Web Development?

- The process of attaching JavaScript behaviour to HTML elements, to make a web
  page more interactive. This bridges the gap between
  [[Server-Side Rendering (SSR)]] and [[Client-Side Rendering (CSR)]].

- Client-Side JavaScript attaches Event Listeners to HTML elements, to make web
  pages more interactive.

**Two Types of Hydration:**

1. Partial Hydration: Aka. [[Astro Islands]] or [[Component Islands]] where
   specific parts of a web pages are hydrated with JavaScript, on the Client-Side.
   This makes it **more performant** but **less interactive**.

2. Full Hydration: Client-Side JavaScript hydrates the entire page.
   **Less performant**, but **more interactive**

---

Published on: 2024-08-09

Last update: 2024-08-09
