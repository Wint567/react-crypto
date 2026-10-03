# Crypto Portfolio Dashboard

A React dashboard for exploring a sample cryptocurrency portfolio, with asset entry, summary metrics, a table and a chart.

**Stack:** React · JavaScript · Ant Design · Chart.js · Vite · Express

## Features

- Portfolio value and per-asset gain/loss calculations.
- Asset table, coin details and an add-asset form.
- Portfolio visualization.
- Shared state through React Context.
- Simulated asynchronous loading from local sample data.

## Frontend development

```bash
cd frontend
npm ci
npm run dev
```

Open the address printed by Vite.

## Build and serve

From the repository root:

```bash
npm ci
npm --prefix frontend ci
npm --prefix frontend run build
npm start
```

The Express server serves `frontend/dist` on port 80. If that port is unavailable or requires elevated privileges, use the frontend preview command instead:

```bash
npm --prefix frontend run preview
```

## Architecture

- `frontend/src/context/crypto-context.jsx` — asset state and calculations.
- `frontend/src/api.js`, `data.js` — simulated requests and sample data.
- `frontend/src/components/` — forms, table, chart and layout.
- `server.js` — static Express hosting.

## Scope

Prices and holdings come from fixtures. New assets live in memory and reset on reload. Express currently hosts the frontend only; the project has no trading integration, database or portfolio API.
