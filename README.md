# @basilkaran/ui

React UI component library with built-in dark and light themes, powered by OKLCH color space for more vibrant and perceptually uniform colors.

## Documentation

Check storybook documentation [here](https://basilkaffi.github.io/ui).

## Installation

```bash
npm install @basilkaran/ui
# or
yarn add @basilkaran/ui
# or
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

You can switch themes dynamically using the `useTheme` hook which provides the `applyTheme` function:

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

This library includes two built-in themes — `darkTheme` and `lightTheme`. However, you can easily create your own theme by following the ThemeConfig type structure.  
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

### Color Palette

The library includes a sophisticated color system using OKLCH color space, providing better perceptual uniformity and more vibrant colors. Available color scales:

- `slate`: Neutral gray with a slight blue tint
- `gray`: Pure neutral gray
- `red`: Vibrant red
- `green`: Natural green
- `yellow`: Warm yellow
- `purple`: Rich purple
- `orange`: Warm orange
- `cyan`: Cool cyan
- `blue`: Deep blue
- `emerald`: Soft emerald
- `rose`: Warm rose

Each color has 11 steps (00-90) for maximum flexibility:

- `00`: Lightest variant (98% lightness)
- `90`: Darkest variant (15-40% lightness depending on the color)

Colors are implemented as CSS custom properties and can be accessed using the format: `var(--{color}-{step})`.

Example: `var(--purple-70)`, `var(--slate-10)`, etc.

## License

MIT © [Basil Kaffi Ar Rahman](https://github.com/basilkaffi)
