### Install Spartan CLI Plugin

Source: https://spartan.ng/documentation/installation

Installs the Spartan CLI plugin as a development dependency. This plugin is used for managing Spartan UI within your project.

```bash
npm i -D @spartan-ng/cli
```

--------------------------------

### Add Spartan NG UI Theme (Nx Plugin)

Source: https://spartan.ng/documentation/installation

Generates Spartan NG UI theme files using the Nx CLI plugin.

```bash
npx nx g @spartan-ng/cli:ui-theme
```

--------------------------------

### Add Spartan NG UI Theme (Angular CLI)

Source: https://spartan.ng/documentation/installation

Generates Spartan NG UI theme files using the Angular CLI.

```bash
ng g @spartan-ng/cli:ui-theme
```

--------------------------------

### Install Angular CDK

Source: https://spartan.ng/documentation/installation

Installs the Angular CDK, a required dependency for Spartan UI. The CDK provides essential functionalities for building UI components.

```bash
npm i @angular/cdk
```

--------------------------------

### Spartan UI Documentation Navigation

Source: https://spartan.ng/documentation/figma

Provides an overview of the Spartan UI documentation structure, covering getting started, stack information, and UI-specific guides like theming and dark mode.

```APIDOC
Documentation Structure:
  Getting Started:
    - Introduction: [https://spartan.ng/documentation/introduction]
    - CLI: [https://spartan.ng/documentation/cli]
    - components.json: [https://spartan.ng/documentation/components-json]
    - Changelog: [https://spartan.ng/documentation/changelog]
    - About & Credits: [https://spartan.ng/documentation/about]
  Stack:
    - Overview: [https://spartan.ng/stack/overview]
    - Technologies: [https://spartan.ng/stack/technologies]
    - Installation: [https://spartan.ng/stack/installation]
  UI:
    - Installation: [https://spartan.ng/documentation/installation]
    - Theming: [https://spartan.ng/documentation/theming]
    - Dark Mode: [https://spartan.ng/documentation/dark-mode]
    - Typography: [https://spartan.ng/documentation/typography]
    - Figma: [https://spartan.ng/documentation/figma]
    - Health Checks: [https://spartan.ng/documentation/health-checks]
    - Update Guide: [https://spartan.ng/documentation/update-guide]
```

--------------------------------

### Install Spartan-NG UI Typography

Source: https://spartan.ng/documentation/typography

Instructions for installing the Spartan-NG UI typography components using the Angular CLI or Nx plugin.

```bash
npx nx g @spartan-ng/cli:ui typography
ng g @spartan-ng/cli:ui typography
```

--------------------------------

### Add Spartan NG Primitives (Nx Plugin)

Source: https://spartan.ng/documentation/installation

Generates and adds Spartan NG primitives to your project using the Nx CLI plugin, including dependencies and Helm code.

```bash
npx nx g @spartan-ng/cli:ui
```

--------------------------------

### Basic Theming Example

Source: https://spartan.ng/documentation/theming

Demonstrates the basic usage of Spartan UI's theming with background and foreground color classes.

```html
<div class="bg-background text-foreground">spartan</div>
```

--------------------------------

### Import Angular CDK Overlay Styles

Source: https://spartan.ng/documentation/installation

Imports Angular CDK overlay styles, necessary when manually adding CSS variables to the style entrypoint.

```css
@import '@angular/cdk/overlay-prebuilt.css';
```

--------------------------------

### Spartan CLI components.json Configuration Example

Source: https://spartan.ng/documentation/components-json

An example of the components.json file used by the Spartan CLI, demonstrating the configuration of 'componentsPath' and 'buildable' properties.

```json
{
    "componentsPath": "libs/ui"
    "buildable": true
}
```

--------------------------------

### Add Spartan NG Primitives (Angular CLI)

Source: https://spartan.ng/documentation/installation

Generates and adds Spartan NG primitives to your project using the Angular CLI, including dependencies and Helm code.

```bash
ng g @spartan-ng/cli:ui
```

--------------------------------

### Tailwind CSS Configuration (Nx Plugin)

Source: https://spartan.ng/documentation/installation

Configures Tailwind CSS with the Spartan NG preset for Nx projects. Includes glob patterns for dependencies and component files.

```typescript
const {
  createGlobPatternsForDependencies,
} = require('@nx/angular/tailwind');
const {
  join,
} = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

--------------------------------

### Spartan UI Installation and Theming

Source: https://spartan.ng/documentation/introduction

Instructions for installing and theming the Spartan UI library. This involves integrating the library into an Angular project and applying custom styles or themes.

```html
<link rel="stylesheet" href="/path/to/spartan-ui.css">
<body class="spartan-theme-dark"></body>
```

--------------------------------

### Import Tailwind CSS Preset (Tailwind 4)

Source: https://spartan.ng/documentation/installation

Imports the Spartan NG Tailwind CSS preset into your global stylesheet for Tailwind version 4.

```css
@import '@spartan-ng/brain/hlm-tailwind-preset.css';
```

--------------------------------

### Spartan UI Installation and Theming

Source: https://spartan.ng/documentation/index

Instructions for installing and theming the Spartan UI library. This involves integrating the library into an Angular project and applying custom styles or themes.

```html
<link rel="stylesheet" href="/path/to/spartan-ui.css">
<body class="spartan-theme-dark"></body>
```

--------------------------------

### Tailwind CSS Configuration (Angular CLI)

Source: https://spartan.ng/documentation/installation

Configures Tailwind CSS with the Spartan NG preset for Angular CLI projects. Specifies content paths for HTML and TS files.

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

--------------------------------

### Install Spartan CLI

Source: https://spartan.ng/documentation/cli

Installs the Spartan CLI as a development dependency. This command is used to add the CLI tool to your project for managing Spartan UI components.

```bash
npm i -D @spartan-ng/cli
```

```bash
yarn add -D @spartan-ng/cli
```

```bash
bun add -D @spartan-ng/cli
```

--------------------------------

### Spartan UI Components Overview

Source: https://spartan.ng/documentation/about

This section lists all available UI components in the Spartan library. Each component has a dedicated page with detailed documentation, usage examples, and customization options.

```en
Accordion
Alert
Alert Dialog
Aspect Ratio
Avatar
Badge
Breadcrumb
Button
Calendar
Card
Carousel
Checkbox
Collapsible
Combobox
Command
Context Menu
Data Table
Date Picker
Dialog
Dropdown Menu
Form Field
Hover Card
Icon
Input
Input OTP
Label
Menubar
Pagination
Popover
Progress
Radio Group
Scroll Area
Select
Separator
Sheet
Skeleton
Slider
Sonner (Toast)
Spinner
Switch
Table
Tabs
Textarea
Toggle
Toggle Group
Tooltip
```

--------------------------------

### Spartan NG Default Theme CSS Variables

Source: https://spartan.ng/documentation/installation

Defines CSS variables for the default Spartan NG theme, including typography, colors, and spacing. Includes light and dark color schemes.

```css
:root {
    --font-sans: 'Geist Sans', sans-serif;
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
  color-scheme: light;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
  color-scheme: dark;
}

@layer base {
  * {
    @apply border-border;
  }
}
```

--------------------------------

### Using New Colors in Components

Source: https://spartan.ng/documentation/theming

Example of applying the newly added 'warning' color utility classes in an HTML component.

```html
<div class="bg-warning text-warning-foreground">Warning</div>
```

--------------------------------

### Spartan UI CLI Usage

Source: https://spartan.ng/documentation/dark-mode

Information on using the Spartan UI Command Line Interface (CLI) for project setup and management. This section typically covers commands for initialization, component generation, and other development tasks.

```bash
# Example CLI commands (conceptual)
# spartan new my-app
# spartan generate component button
# spartan add theme dark

```

--------------------------------

### Example: Button Component

Source: https://spartan.ng/documentation/changelog

The Button primitive provides a customizable button element for various user interactions. It supports different styles and states.

```typescript
// Example usage of Button component (conceptual)
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

// ... component template
<button hlmBtn>Click me</button>
<button hlmBtn variant="outline">Outline Button</button>
```

--------------------------------

### Adding New Colors (Tailwind Config)

Source: https://spartan.ng/documentation/theming

Example of configuring a new 'warning' color in Tailwind CSS by extending the theme.

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
      },
    },
  },
}
```

--------------------------------

### Example: Input Directive (for Textarea)

Source: https://spartan.ng/documentation/changelog

The hlmInput directive is used to style input elements, including textareas, providing a consistent look and feel across the application.

```typescript
// Example usage of hlmInput directive for textarea (conceptual)
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

// ... component template
<textarea hlmInput placeholder="Enter your message..."></textarea>
```

--------------------------------

### Adding New Colors (CSS)

Source: https://spartan.ng/documentation/theming

Example of adding a new 'warning' color scheme to CSS, including dark mode variations.

```css
:root {
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}

.dark {
  --warning: 48 96% 89%;
  --warning-foreground: 38 92% 50%;
}
```

--------------------------------

### Example: Accordion Component

Source: https://spartan.ng/documentation/changelog

The Accordion primitive allows for vertically stacked content that can be collapsed or expanded. It's a common UI pattern for organizing information.

```typescript
// Example usage of Accordion component (conceptual)
import { HlmAccordionDirective } from '@spartan-ng/ui-accordion-helm';

// ... component template
<hlm-accordion>
  <hlm-accordion-item value="item-1">
    <hlm-accordion-trigger>Is it accessible?</hlm-accordion-trigger>
    <hlm-accordion-content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </hlm-accordion-content>
  </hlm-accordion-item>
</hlm-accordion>
```

--------------------------------

### Dark Mode Implementation with Analog & Tailwind

Source: https://spartan.ng/documentation/dark-mode

This guide explains how to implement dark mode in an Angular project using Analog.js and TailwindCSS. It leverages custom CSS variables that change based on the presence of a 'dark' class on the root element.

```typescript
/*
  This is a conceptual example based on the description.
  Actual implementation details would be in the linked article.
*/

// Example of toggling a dark class on the root element
function toggleDarkMode(isDark: boolean) {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

// Example usage:
// toggleDarkMode(true); // Enable dark mode
// toggleDarkMode(false); // Disable dark mode

```

--------------------------------

### Spartan UI Components Overview

Source: https://spartan.ng/documentation/typography

Lists available UI components in the Spartan library, with links to their individual documentation pages.

```html
<a href="https://spartan.ng/components/accordion">Accordion</a>
<a href="https://spartan.ng/components/alert">Alert</a>
<a href="https://spartan.ng/components/alert-dialog">Alert Dialog</a>
<a href="https://spartan.ng/components/aspect-ratio">Aspect Ratio</a>
<a href="https://spartan.ng/components/avatar">Avatar</a>
<a href="https://spartan.ng/components/badge">Badge</a>
<a href="https://spartan.ng/components/breadcrumb">Breadcrumb</a>
<a href="https://spartan.ng/components/button">Button</a>
<a href="https://spartan.ng/components/calendar">Calendar</a>
<a href="https://spartan.ng/components/card">Card</a>
<a href="https://spartan.ng/components/carousel">Carousel</a>
<a href="https://spartan.ng/components/checkbox">Checkbox</a>
<a href="https://spartan.ng/components/collapsible">Collapsible</a>
<a href="https://spartan.ng/components/combobox">Combobox</a>
<a href="https://spartan.ng/components/command">Command</a>
<a href="https://spartan.ng/components/context-menu">Context Menu</a>
<a href="https://spartan.ng/components/data-table">Data Table</a>
<a href="https://spartan.ng/components/date-picker">Date Picker</a>
<a href="https://spartan.ng/components/dialog">Dialog</a>
<a href="https://spartan.ng/components/dropdown-menu">Dropdown Menu</a>
<a href="https://spartan.ng/components/form-field">Form Field</a>
<a href="https://spartan.ng/components/hover-card">Hover Card</a>
<a href="https://spartan.ng/components/icon">Icon</a>
<a href="https://spartan.ng/components/input">Input</a>
<a href="https://spartan.ng/components/input-otp">Input OTP</a>
<a href="https://spartan.ng/components/label">Label</a>
<a href="https://spartan.ng/components/menubar">Menubar</a>
<a href="https://spartan.ng/components/pagination">Pagination</a>
<a href="https://spartan.ng/components/popover">Popover</a>
<a href="https://spartan.ng/components/progress">Progress</a>
<a href="https://spartan.ng/components/radio-group">Radio Group</a>
<a href="https://spartan.ng/components/scroll-area">Scroll Area</a>
<a href="https://spartan.ng/components/select">Select</a>
<a href="https://spartan.ng/components/separator">Separator</a>
<a href="https://spartan.ng/components/sheet">Sheet</a>
<a href="https://spartan.ng/components/skeleton">Skeleton</a>
<a href="https://spartan.ng/components/slider">Slider</a>
<a href="https://spartan.ng/components/sonner">Sonner (Toast)</a>
<a href="https://spartan.ng/components/spinner">Spinner</a>
<a href="https://spartan.ng/components/switch">Switch</a>
<a href="https://spartan.ng/components/table">Table</a>
<a href="https://spartan.ng/components/tabs">Tabs</a>
<a href="https://spartan.ng/components/textarea">Textarea</a>
<a href="https://spartan.ng/components/toggle">Toggle</a>
<a href="https://spartan.ng/components/toggle-group">Toggle Group</a>
<a href="https://spartan.ng/components/tooltip">Tooltip</a>
```

--------------------------------

### Spartan CLI Commands

Source: https://spartan.ng/documentation/introduction

This section details the command-line interface (CLI) commands available for the Spartan framework. These commands are used for project initialization, management, and other development tasks.

```bash
spartan new my-app
spartan generate component my-component
spartan build
spartan serve
```

--------------------------------

### Spartan CLI Commands

Source: https://spartan.ng/documentation/index

This section details the command-line interface (CLI) commands available for the Spartan framework. These commands are used for project initialization, management, and other development tasks.

```bash
spartan new my-app
spartan generate component my-component
spartan build
spartan serve
```

--------------------------------

### Spartan UI Primitives (Brain & Helm)

Source: https://spartan.ng/documentation/introduction

Details the architecture of Spartan UI, highlighting the 'brain' library for accessible primitives and the 'helm' library for styling. This explains how the UI components are built and presented.

```APIDOC
Spartan UI Architecture:

Spartan UI is composed of two core libraries:

1.  **spartan/ui/brain**: Provides accessible, unstyled UI primitives. These are the foundational building blocks for creating inclusive user interfaces.
    *   **Purpose**: Ensure accessibility standards are met without imposing a specific visual style.
    *   **Dependencies**: None (core primitives).
    *   **Usage**: Import and use primitive components like Button, Input, Checkbox, etc., and apply your own styling.

2.  **spartan/ui/helm**: Applies a pre-defined, aesthetically pleasing design (inspired by shadcn) to the primitives provided by 'brain'.
    *   **Purpose**: Offer a ready-to-use, visually appealing UI with a consistent look and feel.
    *   **Dependencies**: Requires `spartan/ui/brain`.
    *   **Usage**: Import styled components that internally use the 'brain' primitives.

Example Usage:

// Using a primitive directly (requires custom styling)
import { ButtonPrimitive } from '@spartan-ui/brain';

// Using a styled component
import { Button } from '@spartan-ui/helm';

Related Concepts:
*   Accessibility
*   Component Styling
*   Design Systems
```

--------------------------------

### Add Spartan UI Components with Nx Plugin

Source: https://spartan.ng/documentation/changelog

This command allows you to effortlessly integrate any of the 30 spartan/ui primitives into your Nx workspace. It simplifies the process of adding pre-built UI components.

```nx
nx g @spartan-ng/nx:ui-primitive <primitive-name>
```

--------------------------------

### Spartan UI Primitives (Brain & Helm)

Source: https://spartan.ng/documentation/index

Details the architecture of Spartan UI, highlighting the 'brain' library for accessible primitives and the 'helm' library for styling. This explains how the UI components are built and presented.

```APIDOC
Spartan UI Architecture:

Spartan UI is composed of two core libraries:

1.  **spartan/ui/brain**: Provides accessible, unstyled UI primitives. These are the foundational building blocks for creating inclusive user interfaces.
    *   **Purpose**: Ensure accessibility standards are met without imposing a specific visual style.
    *   **Dependencies**: None (core primitives).
    *   **Usage**: Import and use primitive components like Button, Input, Checkbox, etc., and apply your own styling.

2.  **spartan/ui/helm**: Applies a pre-defined, aesthetically pleasing design (inspired by shadcn) to the primitives provided by 'brain'.
    *   **Purpose**: Offer a ready-to-use, visually appealing UI with a consistent look and feel.
    *   **Dependencies**: Requires `spartan/ui/brain`.
    *   **Usage**: Import styled components that internally use the 'brain' primitives.

Example Usage:

// Using a primitive directly (requires custom styling)
import { ButtonPrimitive } from '@spartan-ui/brain';

// Using a styled component
import { Button } from '@spartan-ui/helm';

Related Concepts:
*   Accessibility
*   Component Styling
*   Design Systems
```

--------------------------------

### Spartan UI Components Overview

Source: https://spartan.ng/documentation/dark-mode

A list of UI components available in the Spartan UI library. Each component can be linked to its specific documentation page for detailed usage instructions.

```html
<ul>
  <li><a href="https://spartan.ng/components/accordion">Accordion</a></li>
  <li><a href="https://spartan.ng/components/alert">Alert</a></li>
  <li><a href="https://spartan.ng/components/alert-dialog">Alert Dialog</a></li>
  <li><a href="https://spartan.ng/components/aspect-ratio">Aspect Ratio</a></li>
  <li><a href="https://spartan.ng/components/avatar">Avatar</a></li>
  <li><a href="https://spartan.ng/components/badge">Badge</a></li>
  <li><a href="https://spartan.ng/components/breadcrumb">Breadcrumb</a></li>
  <li><a href="https://spartan.ng/components/button">Button</a></li>
  <li><a href="https://spartan.ng/components/calendar">Calendar</a></li>
  <li><a href="https://spartan.ng/components/card">Card</a></li>
  <li><a href="https://spartan.ng/components/carousel">Carousel</a></li>
  <li><a href="https://spartan.ng/components/checkbox">Checkbox</a></li>
  <li><a href="https://spartan.ng/components/collapsible">Collapsible</a></li>
  <li><a href="https://spartan.ng/components/combobox">Combobox</a></li>
  <li><a href="https://spartan.ng/components/command">Command</a></li>
  <li><a href="https://spartan.ng/components/context-menu">Context Menu</a></li>
  <li><a href="https://spartan.ng/components/data-table">Data Table</a></li>
  <li><a href="https://spartan.ng/components/date-picker">Date Picker</a></li>
  <li><a href="https://spartan.ng/components/dialog">Dialog</a></li>
  <li><a href="https://spartan.ng/components/dropdown-menu">Dropdown Menu</a></li>
  <li><a href="https://spartan.ng/components/form-field">Form Field</a></li>
  <li><a href="https://spartan.ng/components/hover-card">Hover Card</a></li>
  <li><a href="https://spartan.ng/components/icon">Icon</a></li>
  <li><a href="https://spartan.ng/components/input">Input</a></li>
  <li><a href="https://spartan.ng/components/input-otp">Input OTP</a></li>
  <li><a href="https://spartan.ng/components/label">Label</a></li>
  <li><a href="https://spartan.ng/components/menubar">Menubar</a></li>
  <li><a href="https://spartan.ng/components/pagination">Pagination</a></li>
  <li><a href="https://spartan.ng/components/popover">Popover</a></li>
  <li><a href="https://spartan.ng/components/progress">Progress</a></li>
  <li><a href="https://spartan.ng/components/radio-group">Radio Group</a></li>
  <li><a href="https://spartan.ng/components/scroll-area">Scroll Area</a></li>
  <li><a href="https://spartan.ng/components/select">Select</a></li>
  <li><a href="https://spartan.ng/components/separator">Separator</a></li>
  <li><a href="https://spartan.ng/components/sheet">Sheet</a></li>
  <li><a href="https://spartan.ng/components/skeleton">Skeleton</a></li>
  <li><a href="https://spartan.ng/components/slider">Slider</a></li>
  <li><a href="https://spartan.ng/components/sonner">Sonner (Toast)</a></li>
  <li><a href="https://spartan.ng/components/spinner">Spinner</a></li>
  <li><a href="https://spartan.ng/components/switch">Switch</a></li>
  <li><a href="https://spartan.ng/components/table">Table</a></li>
  <li><a href="https://spartan.ng/components/tabs">Tabs</a></li>
  <li><a href="https://spartan.ng/components/textarea">Textarea</a></li>
  <li><a href="https://spartan.ng/components/toggle">Toggle</a></li>
  <li><a href="https://spartan.ng/components/toggle-group">Toggle Group</a></li>
  <li><a href="https://spartan.ng/components/tooltip">Tooltip</a></li>
</ul>

```

--------------------------------

### Spartan UI Component List

Source: https://spartan.ng/documentation/figma

A comprehensive list of UI components available in the Spartan UI library. Each component is linked to its dedicated documentation page for detailed usage instructions.

```APIDOC
Component List:
  Accordion: [https://spartan.ng/components/accordion]
  Alert: [https://spartan.ng/components/alert]
  Alert Dialog: [https://spartan.ng/components/alert-dialog]
  Aspect Ratio: [https://spartan.ng/components/aspect-ratio]
  Avatar: [https://spartan.ng/components/avatar]
  Badge: [https://spartan.ng/components/badge]
  Breadcrumb: [https://spartan.ng/components/breadcrumb]
  Button: [https://spartan.ng/components/button]
  Calendar: [https://spartan.ng/components/calendar]
  Card: [https://spartan.ng/components/card]
  Carousel: [https://spartan.ng/components/carousel]
  Checkbox: [https://spartan.ng/components/checkbox]
  Collapsible: [https://spartan.ng/components/collapsible]
  Combobox: [https://spartan.ng/components/combobox]
  Command: [https://spartan.ng/components/command]
  Context Menu: [https://spartan.ng/components/context-menu]
  Data Table: [https://spartan.ng/components/data-table]
  Date Picker: [https://spartan.ng/components/date-picker]
  Dialog: [https://spartan.ng/components/dialog]
  Dropdown Menu: [https://spartan.ng/components/dropdown-menu]
  Form Field: [https://spartan.ng/components/form-field]
  Hover Card: [https://spartan.ng/components/hover-card]
  Icon: [https://spartan.ng/components/icon]
  Input: [https://spartan.ng/components/input]
  Input OTP: [https://spartan.ng/components/input-otp]
  Label: [https://spartan.ng/components/label]
  Menubar: [https://spartan.ng/components/menubar]
  Pagination: [https://spartan.ng/components/pagination]
  Popover: [https://spartan.ng/components/popover]
  Progress: [https://spartan.ng/components/progress]
  Radio Group: [https://spartan.ng/components/radio-group]
  Scroll Area: [https://spartan.ng/components/scroll-area]
  Select: [https://spartan.ng/components/select]
  Separator: [https://spartan.ng/components/separator]
  Sheet: [https://spartan.ng/components/sheet]
  Skeleton: [https://spartan.ng/components/skeleton]
  Slider: [https://spartan.ng/components/slider]
  Sonner (Toast): [https://spartan.ng/components/sonner]
  Spinner: [https://spartan.ng/components/spinner]
  Switch: [https://spartan.ng/components/switch]
  Table: [https://spartan.ng/components/table]
  Tabs: [https://spartan.ng/components/tabs]
  Textarea: [https://spartan.ng/components/textarea]
  Toggle: [https://spartan.ng/components/toggle]
  Toggle Group: [https://spartan.ng/components/toggle-group]
  Tooltip: [https://spartan.ng/components/tooltip]

  Upcoming:
  Form: [https://spartan.ng/components/form]
  Navigation Menu: [https://spartan.ng/components/navigation-menu]
```

--------------------------------

### Theming with CSS Variables

Source: https://spartan.ng/documentation/theming

Shows how to apply CSS variables for primary colors to set background and foreground text colors.

```html
<div class="bg-primary text-primary-foreground">Hello</div>
```

--------------------------------

### Lead Text Component

Source: https://spartan.ng/documentation/typography

Shows the implementation of lead text styling using the hlmLead class. This style is suitable for introductory sentences or summaries.

```typescript
import { Component } from '@angular/core';
import { hlmLead } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-lead',
  template: `
    <p class="${hlmLead}">A modal dialog that interrupts the user with important content and expects a response.</p>
  `,
})
export default class LeadComponent {}
```

--------------------------------

### Spartan UI Configuration (components.json)

Source: https://spartan.ng/documentation/dark-mode

Details about the `components.json` file used for configuring Spartan UI projects. This file typically stores project-specific settings, dependencies, and customization options.

```json
{
  "$schema": "https://spartan.ng/schema.json",
  "tailwind": {
    "config": "tailwind.config.ts",
    "cssVariablesPrefix": "spartan"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}

```

--------------------------------

### Spartan UI Typography Styles

Source: https://spartan.ng/documentation/typography

Demonstrates the typography styles available in Spartan UI, including headings, paragraphs, and lists.

```html
<h1>Typography</h1>
<p>Styles for headings, paragraphs, lists... etc.</p>
<h2>The King's Plan</h2>
<p>The king thought long and hard, and finally came up with a brilliant plan : he would tax the jokes in the kingdom.</p>
<blockquote>
  <p>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</p>
</blockquote>
<h3>The Joke Tax</h3>
<p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
<ul>
  <li>1st level of puns: 5 gold coins</li>
  <li>2nd level of jokes: 10 gold coins</li>
  <li>3rd level of one-liners : 20 gold coins</li>
</ul>
<p>As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.</p>
```

--------------------------------

### CSS Variables for Theming

Source: https://spartan.ng/documentation/theming

Illustrates how CSS variables are used for theming in Spartan UI, following Tailwind CSS conventions.

```css
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```

--------------------------------

### Migrate Helm Libraries

Source: https://spartan.ng/documentation/update-guide

Automates the update process for Spartan Helm libraries using an Nx schematic. This command ensures your local components are updated to the latest version. Note that manual customizations to components will be overwritten.

```bash
nx g @spartan-ng/cli:migrate-helm-libraries
```

```bash
ng g @spartan-ng/cli:migrate-helm-libraries
```

--------------------------------

### Add Custom Themes with Nx Plugin

Source: https://spartan.ng/documentation/changelog

Leverage the Nx plugin to incorporate one of the 12 custom themes into your Nx applications, enabling full control over the visual appearance.

```nx
nx g @spartan-ng/nx:ui-theme <theme-name>
```

--------------------------------

### Add Spartan UI Theme

Source: https://spartan.ng/documentation/cli

Applies a Spartan UI theme to your Angular project. This command helps in selecting the target application, theme, and border-radius for styling.

```bash
npx nx g @spartan-ng/cli:ui-theme
```

```bash
ng g @spartan-ng/cli:ui-theme
```

--------------------------------

### Spartan UI Figma Integration

Source: https://spartan.ng/documentation/figma

Details the integration of Spartan UI with Figma, highlighting the availability of a Figma UI Kit for customizable design elements. This leverages the ecosystem of shadcn/ui for design consistency.

```APIDOC
Figma Integration:
  Description: Provides access to a Figma UI Kit for Spartan UI components, enabling customizable design elements, typography, and icons.
  Dependencies: Leverages the ecosystem of shadcn/ui.
  Availability: Customizable props, typography, and icons.
  Access: [https://www.figma.com/community/file/1203061493325953101](https://www.figma.com/community/file/1203061493325953101)
  Related: Typography, Components
```

--------------------------------

### Spartan Components JSON Configuration

Source: https://spartan.ng/documentation/introduction

Configuration file for Spartan UI components, likely used for theming, customization, or defining component behavior. This JSON structure allows for granular control over UI elements.

```json
{
  "prefix": "spartan",
  "themes": {
    "light": {
      "primary": "#007bff",
      "secondary": "#6c757d"
    },
    "dark": {
      "primary": "#0056b3",
      "secondary": "#5a6268"
    }
  },
  "components": {
    "button": {
      "defaultVariant": "primary"
    }
  }
}
```

--------------------------------

### Generating components.json with Spartan CLI

Source: https://spartan.ng/documentation/components-json

The components.json file is automatically generated by the Spartan CLI the first time the 'ui' command is executed.

```bash
spartan ui
```

--------------------------------

### Spartan Components JSON Configuration

Source: https://spartan.ng/documentation/index

Configuration file for Spartan UI components, likely used for theming, customization, or defining component behavior. This JSON structure allows for granular control over UI elements.

```json
{
  "prefix": "spartan",
  "themes": {
    "light": {
      "primary": "#007bff",
      "secondary": "#6c757d"
    },
    "dark": {
      "primary": "#0056b3",
      "secondary": "#5a6268"
    }
  },
  "components": {
    "button": {
      "defaultVariant": "primary"
    }
  }
}
```

--------------------------------

### Popover Background and Foreground Colors

Source: https://spartan.ng/documentation/theming

Defines the background and foreground colors for popover components.

```css
--popover: 0 0% 100%;
--popover-foreground: 222.2 47.4% 11.2%;
```

--------------------------------

### Paragraph Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the 'p' tag with the hlmP class for paragraph styling. This component is part of the Spartan NG typography library.

```typescript
import { Component } from '@angular/core';
import { hlmP } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-p',
  template: `
    <p class="${hlmP}">
      The king, seeing how much happier his subjects were,
      realized the error of his ways and repealed the joke tax.
    </p>
  `,
})
export default class PComponent {}
```

--------------------------------

### Spartan-NG H1 Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the H1 typography component from Spartan-NG, applying the hlmH1 class for styling.

```typescript
import { Component } from '@angular/core';
import { hlmH1 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-h1',
  template: `
    <h1 class="${hlmH1}">The Joke Tax Chronicles</h1>
  `,
})
export default class H1Component {}
```

--------------------------------

### Add Spartan UI Primitives

Source: https://spartan.ng/documentation/cli

Generates Spartan UI primitives into your Angular project. This command allows you to select specific primitives to add as buildable libraries.

```bash
npx nx g @spartan-ng/cli:ui
```

```bash
ng g @spartan-ng/cli:ui
```

--------------------------------

### Spartan UI Brain Components

Source: https://spartan.ng/documentation/changelog

Illustrates the concept of 'spartan/ui/brain' which provides headless and accessible implementations of UI primitives. These can be standalone Angular Components, Directives, or a combination, enabling flexible and accessible custom interface development.

```Angular
/*
 * spartan/ui/brain represents headless and accessible implementations of UI primitives.
 * This can be a standalone Angular Component, a Directive applied to existing HTML elements,
 * or a hybrid combining both for more intricate UI elements.
 */

// Example of a hypothetical brain component (e.g., Button)
// import { Component, Input, HostBinding } from '@angular/core';
// 
// @Component({
//   selector: 'spartan-button-brain',
//   standalone: true,
//   imports: [],
//   template: '<ng-content></ng-content>',
// })
// export class ButtonBrainComponent {
//   @Input()
//   variant: 'primary' | 'secondary' = 'primary';
// 
//   @HostBinding('class')
//   get hostClasses(): string {
//     return `spartan-button spartan-button-${this.variant}`;
//   }
// }

```

--------------------------------

### Card Background and Foreground Colors

Source: https://spartan.ng/documentation/theming

Defines the background and foreground colors specifically for card components.

```css
--card: 0 0% 100%;
--card-foreground: 222.2 47.4% 11.2%;
```

--------------------------------

### Spartan-NG Typography Preview Component

Source: https://spartan.ng/documentation/typography

This component demonstrates the integration of various Spartan-NG typography elements (H1, H2, H3, Lead, Paragraph, Blockquote, UL) within an Angular application. It showcases how to apply Helm typography classes for styling.

```typescript
import { Component } from '@angular/core';
import { hlmBlockquote, hlmH1, hlmH2, hlmH3, hlmLead, hlmP, hlmUl } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-typography-preview',
  template: `
    <h1 class="${hlmH1}">The Joke Tax Chronicles</h1>
    <p class="${hlmLead} mt-4">
      Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day,
      his advisors came to him with a problem: the kingdom was running out of money.
    </p>
    <h2 class="${hlmH2} mt-10">The King's Plan</h2>
    <p class="${hlmP}">
      The king thought long and hard, and finally came up with a brilliant plan : he would tax the jokes in the kingdom.
    </p>
    <blockquote class="${hlmBlockquote}">
      "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
    </blockquote>
    <h3 class="${hlmH3} mt-8">The Joke Tax</h3>
    <p class="${hlmP}">The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
    <ul class="${hlmUl}">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
    <p class="${hlmP}">
      As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused
      to let the king's foolishness get him down: a court jester named Jokester.
    </p>
    <h3 class="${hlmH3} mt-8">Jokester's Revolt</h3>
    <p class="${hlmP}">
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the
      king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.
    </p>
    <p class="${hlmP}">
      And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
      couldn't help but laugh. And once they started laughing, they couldn't stop.
    </p>
    <h3 class="${hlmH3} mt-8">The People's Rebellion</h3>
    <p class="${hlmP}">
      The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the
      entire kingdom was in on the joke.
    </p>
    <p class="${hlmP}">
      The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
      Jokester was declared a hero, and the kingdom lived happily ever after.
    </p>
    <p class="${hlmP}">
      The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.
    </p>
  `,
})
export default class TypographyPreviewComponent {}
```

--------------------------------

### Spartan UI Helm Styles

Source: https://spartan.ng/documentation/changelog

Describes the 'spartan/ui/helm' layer, which offers pre-designed styles for UI primitives. These styles are customizable, allowing developers to retain full control over the appearance and experience of their components.

```CSS
/*
 * spartan/ui/helm provides pre-designed styles that can be easily tailored.
 * Developers retain full control over code, appearance, and overall experience.
 */

/* Example of hypothetical Helm styles for a button */
/*
.spartan-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.spartan-button-primary {
  background-color: #007bff;
  color: white;
}

.spartan-button-primary:hover {
  background-color: #0056b3;
}

.spartan-button-secondary {
  background-color: #6c757d;
  color: white;
}

.spartan-button-secondary:hover {
  background-color: #5a6268;
}
*/

```

--------------------------------

### Spartan-NG H3 Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the H3 typography component from Spartan-NG, applying the hlmH3 class for styling.

```typescript
import { Component } from '@angular/core';
import { hlmH3 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-h3',
  template: `
    <h3 class="${hlmH3}">The Joke Tax</h3>
  `,
})
export default class H3Component {}
```

--------------------------------

### Spartan-NG H2 Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the H2 typography component from Spartan-NG, applying the hlmH2 class for styling.

```typescript
import { Component } from '@angular/core';
import { hlmH2 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-h2',
  template: `
    <h2 class="${hlmH2}">The People of the Kingdom</h2>
  `,
})
export default class H1Component {}
```

--------------------------------

### Spartan-NG H4 Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the H4 typography component from Spartan-NG, applying the hlmH4 class for styling.

```typescript
import { Component } from '@angular/core';
import { hlmH4 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-h4',
  template: `
    <h4 class="${hlmH4}">People stopped telling jokes</h4>
  `,
})
export default class H4Component {}
```

--------------------------------

### List Component

Source: https://spartan.ng/documentation/typography

Illustrates the use of an unordered list with the hlmUl class for styled list items. This component is designed for presenting lists of information.

```typescript
import { Component } from '@angular/core';
import { hlmUl } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-list',
  template: `
    <ul class="${hlmUl}">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  `,
})
export default class ListComponent {}
```

--------------------------------

### Blockquote Component

Source: https://spartan.ng/documentation/typography

Shows how to implement a blockquote with the hlmBlockquote class for distinct text styling. This is useful for quoting external text.

```typescript
import { Component } from '@angular/core';
import { hlmBlockquote } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-blockquote',
  template: `
    <blockquote class="${hlmBlockquote}">
      "After all," he said, "everyone enjoys a good joke,
      so it's only fair that they should pay for the privilege."
    </blockquote>
  `,
})
export default class BlockquoteComponent {}
```

--------------------------------

### Small Text Component

Source: https://spartan.ng/documentation/typography

Illustrates the use of the hlmSmall class for smaller text elements, often used for captions or secondary information.

```typescript
import { Component } from '@angular/core';
import { hlmSmall } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-small',
  template: `
    <p class="${hlmSmall}">Email address</p>
  `,
})
export default class SmallComponent {}
```

--------------------------------

### Inline Code Component

Source: https://spartan.ng/documentation/typography

Demonstrates how to style inline code snippets using the hlmCode class. This is typically used for short pieces of code or commands within text.

```typescript
import { Component } from '@angular/core';
import { hlmCode } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-code',
  template: `
    <code class="${hlmCode}">@radix-ui/react-alert-dialog</code>
  `,
})
export default class CodeComponent {}
```

--------------------------------

### Run Spartan Health Check

Source: https://spartan.ng/documentation/health-checks

This command initiates the health check tool for the Spartan project. It scans the project for issues and provides guidance for resolution. The tool can often automatically fix identified problems. This is particularly useful during alpha stages to adapt to best practices and potential breaking changes.

```bash
nx g @spartan-ng/cli:healthcheck
```

```typescript
ng g @spartan-ng/cli:healthcheck
```

--------------------------------

### Default Background and Foreground Colors

Source: https://spartan.ng/documentation/theming

Defines the default background and foreground colors for the body element.

```css
--background: 0 0% 100%;
--foreground: 222.2 47.4% 11.2%;
```

--------------------------------

### Spartan UI Theming with CSS Variables

Source: https://spartan.ng/documentation/dark-mode

Explains how Spartan UI utilizes CSS variables for theming, allowing for easy customization of the UI's appearance. The 'dark' class on the root element is key to switching between light and dark modes.

```css
/* Example CSS variables for theming */
:root {
  --spartan-background: 255 255 255;
  --spartan-foreground: 255 255 255;
  /* ... other light mode variables */
}

.dark {
  --spartan-background: 20 20 20;
  --spartan-foreground: 20 20 20;
  /* ... other dark mode variables */
}

```

--------------------------------

### Muted Text Component

Source: https://spartan.ng/documentation/typography

Shows how to apply muted text styling using the hlmMuted class, suitable for less prominent text like placeholders or descriptions.

```typescript
import { Component } from '@angular/core';
import { hlmMuted } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-muted',
  template: `
    <p class="${hlmMuted}">Enter your email address.</p>
  `,
})
export default class MutedComponent {}
```

--------------------------------

### Muted Background and Foreground Colors

Source: https://spartan.ng/documentation/theming

Defines muted background and foreground colors, often used for less prominent elements.

```css
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
```

--------------------------------

### Large Text Component

Source: https://spartan.ng/documentation/typography

Demonstrates the usage of the hlmLarge class for larger text elements. This can be used for headings or emphasis.

```typescript
import { Component } from '@angular/core';
import { hlmLarge } from '@spartan-ng/helm/typography';

@Component({
  selector: 'spartan-large',
  template: `
    <p class="${hlmLarge}">Are you sure absolutely sure?</p>
  `,
})
export default class LargeComponent {}
```

--------------------------------

### Primary Colors

Source: https://spartan.ng/documentation/theming

Defines the primary colors used for main interactive elements like buttons.

```css
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```

--------------------------------

### Input Border Color

Source: https://spartan.ng/documentation/theming

Defines the border color for input elements.

```css
--input: 214.3 31.8% 91.4%;
```

--------------------------------

### Accent Colors

Source: https://spartan.ng/documentation/theming

Defines accent colors, often used for hover effects or highlights.

```css
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
```

--------------------------------

### Border Radius

Source: https://spartan.ng/documentation/theming

Sets the border radius for elements like cards, inputs, and buttons.

```css
--radius: 0.5rem;
```

--------------------------------

### Secondary Colors

Source: https://spartan.ng/documentation/theming

Defines the secondary colors used for less prominent interactive elements.

```css
--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
```

--------------------------------

### Focus Ring Color

Source: https://spartan.ng/documentation/theming

Defines the color of the focus ring for accessibility and visual feedback.

```css
--ring: 215 20.2% 65.1%;
```

--------------------------------

### Destructive Action Colors

Source: https://spartan.ng/documentation/theming

Defines colors for actions that are destructive or irreversible.

```css
--destructive: 0 100% 50%;
--destructive-foreground: 210 40% 98%;
```

--------------------------------

### Default Border Color

Source: https://spartan.ng/documentation/theming

Sets the default border color for elements.

```css
--border: 214.3 31.8% 91.4%
```

=== COMPLETE CONTENT === This response contains all available snippets from this library. No additional content exists. Do not make further requests.