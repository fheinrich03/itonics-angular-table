# Itonics Angular Table

Single-page Angular application that displays [Star Wars API (SWAPI)](https://swapi.dev/) data in a feature-rich data grid. Front-end only, built for the ITONICS front-end case study.

**Design reference:** [Figma – ITONICS Front-end dev case study](https://www.figma.com/design/HKUavjyQmk7rXkZqh93q3G/ITONICS-%E2%80%93-Front-end-dev-case-study?node-id=4-3876&t=vgKme9iZS8r9wSIy-1)

---

## Screenshot

<img width="1425" height="874" alt="image" src="https://github.com/user-attachments/assets/3bb557f9-a5c7-43e5-bca7-5bd276bccecb" />

---

## Install & Run

**With Bun (recommended):**

```bash
bun i
bun run start
```

**With npm:**

```bash
npm i
npm run start
```

Open [http://localhost:4200/](http://localhost:4200/).

---

## Test

**With Bun (recommended):**

```bash
bun run test
```

**With npm:**

```bash
npm run test
```

---

## SWAPI Resource

The app uses the **starships** resource from SWAPI. Data is loaded via pagination (`?page=`) and displayed in the grid with infinite scroll.

---

## Implementation Overview

### Data Grid

- **[AG Grid](https://www.ag-grid.com/angular-data-grid/getting-started/)** (Angular Data Grid) is used for the table.
- Supported out of the box:
  - **Column resizing** – drag column borders; widths apply immediately (`allowResizing`).
  - **Column filtering** – per-column filters via the column header menu.
  - **Column sorting** – click column headers.
  - **Cell editing** – multiple columns are editable (see below).
  - **Quick filter** – one search term filters across all columns; the search input is bound to the grid’s quick filter API.

### Infinite Scroll

- **[TanStack Query](https://tanstack.com/query/latest)** (`injectInfiniteQuery`) handles:
  - Pagination state and “next page” index.
  - Caching of already fetched pages (no duplicate requests).
- The **table-data service is stateless** and only wraps the SWAPI + per-page pagination metadata (`nextPage`).
  - **Combining pages** into one row list is done in the feature layer (`StarshipsPage`) via `pages.flatMap(...)`.
  - This keeps caching/persistence in one place (TanStack Query’s `QueryClient`) and keeps the service easy to unit test.
- Flow:
  1. Infinite query is set up in `starships-page.ts`.
  2. Initial pages are loaded in a constructor effect (two pages preloaded).
  3. Further pages are requested on the grid’s `bodyScroll` event when the user nears the bottom.
- **No loader while scrolling:**  
  Only the very first load shows a loading state. For scroll-triggered loads, the next page is requested **before** the user reaches the last row:
  - Condition: `lastDisplayedRowIndex >= displayedRowCount - 1`.
  - AG Grid’s row buffer (= 10) ensures there are 10 more rendered rows than are visible
  - If the rendered rows reaches reaches number of rows in buffer the next page is fetched.

### Search

- **Per-column filtering:** Use the filter icon in the column header (AG Grid built-in).
- **Global search:** The search input above the grid drives AG Grid’s **quick filter** (one term across all columns). The value is passed to the grid API; AG Grid shows an empty state when no rows match.

### Editable Cells

- **Editable columns:** Name, Model, Manufacturer, Crew, Passengers, Hyperdrive rating.
- **Behavior:** Start editing by double-clicking the cell; confirm with **Enter** or blur, cancel with **Escape** (AG Grid default).
- **Storage:** Edits are kept in **client state only**. AG Grid updates the row data in memory. The edited data is not saved to localstorage. There is no update request to SWAPI. The same row data could later be synced to an API by wiring a `onCellValueChanged` handler.

### UI & Theme

- **[Spartan UI](https://spartan.ng/)** (spartan-ng) for inputs, labels and theming (CSS variables in `src/styles.css`).
- Custom Star Wars–style colors and imagery applied on top.

---

## Third-Party Packages

| Purpose            | Package |
|--------------------|--------|
| Data grid          | [ag-grid-angular](https://www.ag-grid.com/angular-data-grid/) |
| Infinite scroll / API state | [@tanstack/angular-query-experimental](https://tanstack.com/query/latest) |
| UI components & theming | [@spartan-ng/brain](https://spartan.ng/) |
| Styling            | [Tailwind CSS](https://tailwindcss.com/) |

---

## Trade-offs & Limitations

- **Front-end only** – no persistence; edits and cache live only in the browser session.
- **SWAPI read-only** – no PATCH/POST; pagination and response shape are fixed by the API.
- **Loader rule** – If the network is very slow, a short gap before new rows appear is possible.

---

## Development

| Command     | Description |
|------------|-------------|
| `npm run start` / `bun run start` | Dev server at `http://localhost:4200/` |
| `npm run build` / `bun run build` | Production build → `dist/` |
| `npm run test` / `bun run test` | Unit tests (Vitest) |

Generated with [Angular CLI](https://angular.dev/tools/cli). For scaffolding (e.g. `ng generate component <name>`), see [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
