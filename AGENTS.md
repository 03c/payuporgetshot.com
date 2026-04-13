# AGENTS.md

## Cursor Cloud specific instructions

This is a React Router 7 SSR marketing site deployed to Cloudflare Workers. It is a single-package project (not a monorepo) with no database, no external APIs, and no Docker dependencies.

### Key commands

All commands are defined in `package.json`. The important ones:

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server on `http://localhost:5173` (includes Miniflare for local Cloudflare Workers emulation) |
| `npm run check` | Full CI check: `tsc && react-router build && wrangler deploy --dry-run` |
| `npm run typecheck` | Generate Cloudflare types + TypeScript project check |
| `npm run build` | Production build via `react-router build` |

There is no separate lint command (ESLint is not configured). The `check` script is the primary quality gate.

### Notes

- No test framework is configured; there are no automated tests.
- `npm run dev` starts both the Vite dev server and the local Cloudflare Workers runtime (Miniflare) automatically — no separate worker process needed.
- The `npm run typecheck` command first runs `wrangler types` to generate `worker-configuration.d.ts`, then runs `tsc -b`. If you see type errors related to Cloudflare bindings, run `npm run cf-typegen` first.
- Deploying (`npm run deploy`) requires `wrangler login` and is not needed for local development.
