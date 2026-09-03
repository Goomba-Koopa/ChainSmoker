---
trigger: always_on
description: "Layout invariant: Strict left-aligned grid with 120px right margin. Never margin: 0 auto."
---

# AXIOM Publication Design System

All article headers and main content bodies MUST be left-aligned with an asymmetric right breathing room:

```css
.article-header {
  margin: 0;
  padding: 64px 64px 32px 64px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 16px;
}
.article-header > * {
  grid-column: 1;
}
.article-header::after {
  content: '';
  grid-column: 2;
  grid-row: 1 / -1;
}

.article-body {
  margin: 0;
  padding: 16px 64px 96px 64px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 48px;
}
.article-body > * {
  grid-column: 1;
}
.article-body::after {
  content: '';
  grid-column: 2;
  grid-row: 1 / -1;
}

@media (max-width: 768px) {
  .article-header, .article-body {
    padding-left: 24px;
    padding-right: 24px;
    grid-template-columns: 1fr;
  }
  .article-header::after, .article-body::after {
    display: none;
  }
}
```

**Guardrail**: Never use `margin: 0 auto;` or center-align reading prose.
