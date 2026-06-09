# Agent Instructions

This repo has local project memory files. Read them before making changes.

## Start Here

1. agent-memory/OBSIDIAN.md
2. agent-memory/MEMORY.md
3. agent-memory/ARCHITECTURE.md
4. agent-memory/DECISIONS.md
5. agent-memory/TODO.md

## Rules

- Preserve existing work unless Brian explicitly asks to replace it.
- Before making major changes, summarize what you found and what you plan to change.
- After coding, update agent-memory/TODO.md with remaining tasks.
- Add durable project facts to agent-memory/MEMORY.md.
- Add architectural or business decisions to agent-memory/DECISIONS.md.
- Add structural explanations to agent-memory/ARCHITECTURE.md.
- Do not dump raw logs into memory files.
- Do not scan Brian's whole Obsidian vault unless explicitly asked.

## AIRegReady Site Rules

- Treat `/catalog` as the canonical customer-facing catalog; `/kits` is compatibility only.
- Keep catalog claims honest. Two paid products are wired through Gumroad: the AI Governance Starter Kit ($19) and the Solo Builder AI Launch Kit ($14). Other `/catalog/[slug]` pages are preview/sales pages only until pricing, checkout, and delivery are implemented for those products. Use hosted preview-request forms or contact CTAs rather than fake downloads or prices.
- The free sample at `/free-sample` (Starter Kit AI Use Inventory, files in `public/downloads/`) is the only direct download exposed on the site; keep it a real document from the paid kit, not a teaser. Regenerate the sample files whenever that document changes in the kit.
- Kit exports are rebuilt with `python3 scripts/export-kit-documents.py JOBFILE` plus `soffice --headless --convert-to pdf`. Internal source-mapping notes live in `deliverables/internal-source-notes/` and must never ship inside customer ZIPs. Label new kit materials as bonus items rather than changing the public "14 documents" / "6 documents" counts.
- Keep assessment product recommendations aligned with what is actually purchasable: the paid kits, the Vendor AI Review Packet preview, the free checklist, and free regulation guides.
- CLAUDE.md is the canonical agent-instruction file; when project rules change, update both CLAUDE.md and AGENTS.md.
- Use `support@airegready.com` for public contact links. Do not publish personal email addresses, personal names, attorney references, compliance guarantees, or legal-advice language.
- The preview request flow posts to `/api/preview-request`, not a public personal mailbox. Keep privacy disclosures aligned with any changes to collected fields, logging, or notification webhooks.
- Keep the live design aligned with the dark navy/slate product-catalog direction. The older cream/serif editorial look should remain only in archived preview routes unless Brian asks to revive it.
- Use compressed public assets in `public/assets/` for live UI. Keep raw/generated source images under `images/`, which is local-only and gitignored.
- Preserve preview routes unless Brian asks to delete them. Prototype homepage routes should live under `/preview`; old root prototype URLs should redirect there or be removed.

## Validation

Run the narrowest useful checks for small edits. For user-facing route, metadata, schema, or shared-component changes, prefer:

```bash
npm run lint
npm run test
npm run build
git diff --check
```
