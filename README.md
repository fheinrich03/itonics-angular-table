# ItonicsAngularTable

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


----

## My Documentation and Context

## Install and Run

using bun (faster)
```bash
bun i
bun start
```

or using npm (slower, but works as well)
```bash
npm i
npm start
```

open the dev server on `http://localhost:4200/`

### SWAPI resource
I chose the SWAPI resource **starships** to present in the grid

### Grid

- For the Grid I chose the AG Grid: [Angular Data Grid](https://www.ag-grid.com/angular-data-grid/getting-started/)
- it supports out-of-the-box the following requirements
  - column resizing
  - column filtering
  - column sorting
  - cell editing
  - quick filter (search in all columns with one search term)
  
### Infinite Scroll

- To simplify fetching the data for infinite scroll I use `injectInfiniteQuery` from tanstack query
- it tracks 
  - the already fetched pages
  - what the next page index is and if the next page exists
  - caching the already fetched pages

For it to work I...
1. set up the query in the starships-page.ts
2. load the inital pages in the constructor of starships-page.ts
3. load more pages on the scroll event from the grid

To avoid a loader while Scrolling:
- I don't display a loader (except on initial fetch)
- I fetch the next page before the user sees the last fetched row
  - condition: `shouldLoadMore = renderedRows >= totalRows - 1``
  - ag grid rowbuffer is 10 (ag grid renders 10 rows more than are visible)
  - if the rowbuffer reaches the number of fetched rows -> i fetch the next page

### Search

- The AG Grid already supports filtering in each clolumn, which can be done by clicking the filter icon on the column
- AG Grid also supports a `quick filter` (search in all columns with one search term)
  - to make it work I just pass the search value from an input element to the grid api

### UI Components & Theme

- I used [spartan-ui](https://spartan.ng/) as a component registry
  - spartan-ui comes with a set of css variables for consistent theming (see styles.css)
  - I then added some star wars vibe colors and images from the web for a nice star wars look

### Trade Offs or Limitations
...