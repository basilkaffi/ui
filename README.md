# Basil-UI

Simple UI library with build-in theme provider.

## Documentation

Play around with the components in the [documentation](https://basilkaffi.github.io/ui).

## Installation

```bash
npm install @basilkaran/ui
```

or

```bash
yarn add @basilkaran/ui
```

or

```bash
pnpm add @basilkaran/ui
```

## Quick Start

Wrap your application with the ThemeProvider:

```tsx
import { ThemeProvider } from "@basilkaran/ui";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Switching Themes

Switch themes dynamically using the `useTheme` hook which provides the `applyTheme` function:

```tsx
import { useTheme, darkTheme, lightTheme, Switch } from "@basilkaran/ui";

function ThemeSwitcher() {
  const { applyTheme } = useTheme();

  const toggleTheme = (isDark: boolean) => {
    applyTheme(isDark ? darkTheme : lightTheme);
  };

  return (
    <Switch
      onChange={(checked) => toggleTheme(checked)}
      defaultChecked={true}
      label="Dark Mode"
    />
  );
}
```

### Theme Configuration

This library includes two built-in themes — `darkTheme` and `lightTheme`. However, Theme can be easily customized by following the ThemeConfig type structure.  
The ThemeConfig type defines all the customizable options available for your theme:

```typescript
type ColorToken = `${string}-${number}`; // e.g., 'purple-70', 'slate-10'

type ButtonConfig = {
  default: ColorToken;
  hover: ColorToken;
  focus: ColorToken;
  contrast: ColorToken;
};

type ThemeConfig = {
  // Base theme colors
  background: ColorToken;
  surface: ColorToken;
  muted: ColorToken;

  // Font configuration
  font: {
    primary: string; // e.g., "Geist", sans-serif
    secondary: string; // e.g., "Sora", sans-serif
    source: string; // e.g., https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Sora:wght@100..800&display=swap
  };

  // Link styling
  link: {
    default: ColorToken;
    hover: ColorToken;
  };

  // Text colors for different states
  text: {
    primary: ColorToken;
    secondary: ColorToken;
    success: ColorToken;
    warning: ColorToken;
    info: ColorToken;
    danger: ColorToken;
  };

  // Button variants configuration
  button: {
    primary: ButtonConfig;
    secondary: ButtonConfig;
    success: ButtonConfig;
    warning: ButtonConfig;
    info: ButtonConfig;
    danger: ButtonConfig;
  };

  // Switch component styling
  switch: {
    track: {
      on: ColorToken;
      off: ColorToken;
    };
    thumb: {
      on: ColorToken;
      off: ColorToken;
    };
  };
};
```

```tsx
import { ThemeProvider } from "@basilkaran/ui";

const customTheme: ThemeConfig = { ... }

function App() {
  return (
    <ThemeProvider themeConfig={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Color Palette

Available colors:

- `slate`
- `gray`
- `emerald`
- `green`
- `rose`
- `red`
- `orange`
- `yellow`
- `purple`
- `blue`
- `sky`

Each color has 11 steps (00-100) for maximum flexibility:

Colors are implemented as CSS custom properties and can be accessed using the format: `var(--{color}-{step})`.

Example: `var(--purple-70)`, `var(--slate-10)`, etc.
