---
trigger: always_on
description: "Release protocol: Clone index.html to index_clone_beta.html when introducing new disciplines or redesigns."
---

# AXIOM Release Protocol & Beta Staging

Whenever expanding catalog disciplines or introducing architectural catalog changes:
1. **Clone First**: Clone `index.html` to `index_clone_beta.html`.
2. **Integrate into Beta**: Add new filters, cards, and topic mappings into `index_clone_beta.html`.
3. **Verify**: Test topic navigation, counts, and empty states.
4. **Promote**: Only promote changes to the root `index.html` after verifying the beta clone.
