# Case: Star Wars Data Grid (Angular Front-End Only)

Build a single-page Angular application (front-end only) that displays data from the Star Wars API (SWAPI) in a feature-rich data grid.

**Design reference:** [Figma – ITONICS Front-end dev case study](https://www.figma.com/design/HKUavjyQmk7rXkZqh93q3G/ITONICS-%E2%80%93-Front-end-dev-case-study?node-id=4-3876&t=vgKme9iZS8r9wSIy-1)

---

## Constraints

- **Framework:** Angular (recent version).
- **Only external API allowed:** https://swapi.dev/ (read-only use).
- You may use third-party packages if those offer any of the required features or improve UI or UX.
- **At least one column must be editable**, with edits stored in client state only (no API writes). Implement in such a way that we could replace it with API writes easily later on.
- Use **Tailwind** and/or an **Angular UI component library**.

---

## Functional Requirements

### 1. Single Page & Layout

- One main page containing:
  - A **header/toolbar** with a title (e.g. “Star Wars Fleet” or “Star Wars Directory”).
  - A **filter/search area**.
  - A **scrollable data grid** that fills the remaining viewport height.
- Use **one SWAPI resource consistently**, for example:
  - **starships** (recommended), or
  - **people**.

### 2. Data Grid

Use Angular and optionally a third-party package.

**Example columns for starships:**

- Name
- Model
- Manufacturer
- Crew
- Passengers
- Hyperdrive rating
- … the more the better

The grid must support:

- **Column resizing:** User can drag to resize at least some of the columns; resized widths should be applied immediately in the UI.
- Table must remain **usable on smaller screens** (horizontal scroll is fine).

### 3. Infinite Scroll

Implement **server-side pagination with infinite scroll**:

- Use SWAPI pagination (`?page=`) as the source of data.
- As the user scrolls down inside the grid, automatically fetch the next page and append rows.
- When there are no more pages, make sure the user understands we’re at the end of the view and avoid additional requests.

**Important constraint:**

- **While loading additional pages due to scrolling**, the user must **not** see any loader/spinner/skeleton or “loading more…” indicator tied to the table. Apart from that it scrolls very fast.
- Newly loaded rows should appear seamlessly.
- You should **cache fetched pages** so they are not requested again.
- You may briefly show a loader for the **very first data load** when the app starts.
- Do not overfetch data as this is never good practice.

### 4. Search

Above the grid: **Global search input**:

- Show a clear **empty state** if no rows match the current search/filter.
- Filters rows by a relevant field (e.g. name).

### 5. Editable Cells

Implement **cell-level editing** in the grid:

- **At least one column** must be editable for each row.
- **Editing behavior:**
  - Start editing via click / double-click / icon (your choice).
  - Confirm edits on **Enter** or **blur** (Escape to cancel is a plus).

Do **not** attempt to save changes to SWAPI. SWAPI is read-only; all edited values must be stored only in the **client state**.

### 6. UX, Error Handling & Responsiveness

- Initial loading state for the first page is allowed (spinner or skeleton).
- **On API error:**
  - Show an error message.
  - Provide a retry action.
- Layout should remain usable on narrow viewports (scrollable grid container).

---

## Technical Requirements

- Angular application, **front-end only**.
- **TypeScript** expected.
- **API usage:**
  - Only https://swapi.dev/.
  - Wrap SWAPI calls and pagination logic.
- You may use third-party packages to implement.

---

## Testing & Deliverables

### Minimal Testing

- One test for the **SWAPI service** (pagination logic, combining pages).
- One test for the **grid component** (e.g. sorting or editing behavior).

### Deliverables

Git repository with:

- Source code
- Tests (as above)
- **README** explaining:
  - How to install and run the app.
  - Which SWAPI resource was chosen.
  - How infinite scroll and the “no loader while scrolling” behavior are implemented.
  - Which column(s) are editable and how/where edited values are stored.
  - How column resizing is implemented.
  - Any trade-offs or limitations.
  - Which third-party package (if any) is used.
