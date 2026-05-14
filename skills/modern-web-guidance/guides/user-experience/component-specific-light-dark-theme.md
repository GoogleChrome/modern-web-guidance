# Component-Specific Light/Dark Themes

The `light-dark()` function allows you to define two colors for a single property, which the browser automatically switches based on the current `color-scheme`. By scoping both the `light-dark()` variables and the `color-scheme` property to a specific component, you can create UI elements that can be independently forced into light or dark mode, regardless of the user's global system preference.

## Why use component-specific themes?

While most element's should follow the page-wide color scheme, there are several scenarios where you need more granular control over an element's theme:

- **Content-Driven Aesthetics**: Certain components work best in a specific mode. For example, **code editors**, **video players**, and **photo galleries** often use a particular theme to minimize distraction and make colors "pop," regardless of the user's OS setting.
- **User Preference Overrides**: You can empower users to manually toggle the theme of a specific component, like a chat box or a music player for example. This allows them to view a component in the mode that fits their environment or eye comfort.

## When to Change Colors vs. When to Force `color-scheme`

### 1. Change Colors when:
*   You only need to update certain properties of author styled elements (like the background of a `<div>` or the color of an `<h1>`).
*   The component doesn't contain any "native" interactive parts.
*   **Result:** Only the parts you explicitly styled will change.

### 2. Force `color-scheme` when:
*  You've decided that the built-in browser UI like **scrollbars** (e.g., a scrollable code block or sidebar) or **form controls** (like `<select>` menus, checkboxes, or date pickers) should use the colors of a particular color scheme.
*  The component is best viewed in a particular color mode based on its content, for example, the dominant colors of a video, image, or graphic.
*   **Result:** The browser automatically themes the "hidden" parts you can't easily reach with CSS, or the component is always viewed as intended in the design. 

## Implementation Steps

### 1. Declare supported schemes in HTML
OPTIONAL: To help prevent a "flash of un-themed content" (FOUC), place a `<meta>` tag in your `<head>` to ensure the browser knows which themes you support before it even starts rendering. While this `<meta>` tag helps to avoid FOUC by setting the initial canvas color early, it may not completely eliminate flashes in all browsers or loading conditions.

```html
<!-- Optional: Declare support for both light and dark themes -->
<meta name="color-scheme" content="light dark">
```

### 2. Enable `color-scheme` support
OPTIONAL: Enable global support for both color schemes by setting `color-scheme: light dark;` on the `:root`.

```css
:root {
  /* **Optional:** Enable global support for both color schemes */
  color-scheme: light dark;
}
```

### 3. Define theme-aware variables
Using custom properties creates a **semantic abstraction layer** for your component's theme. This allows your styling to remain constant while the *values* of your variables adapt to the theme context. It also simplifies fallback management and provides the essential mechanism for re-resolving values in nested "theme islands" to avoid inheritance issues without repeating complex logic on every property.

```css
.themed-card {
  /* 1. Define raw brand colors for each mode */
  --card-bg-light: #ffffff;
  --card-bg-dark: #2d2e31;
  --card-text-light: #202124;
  --card-text-dark: #f8f9fa;

  /* 2. Modern enhancement using light-dark() */
    --card-bg: light-dark(var(--card-bg-light), var(--card-bg-dark));
    --card-text: light-dark(var(--card-text-light), var(--card-text-dark));

  /* 3. Apply custom properties on relevant properties values */
  
  background-color: var(--card-bg);
  /* **Mandatory**: Dynamic built-in properties that inherit (like color and accent-color) and are set with light-dark() must be applied on the element where the scheme changes. 
  */
  color: var(--card-text);
  padding: 1.5rem;
  border-radius: 8px;
}
```

### 4. Create theme overrides
Force a component instance into a specific theme by setting its `color-scheme` property. This allows the component to ignore the global system preference.

```css
/* Force this specific card into dark mode */
.themed-card.force-dark {
  /* Dynamic custom properties don't need to be reapplied here since they were already defined on `.themed-card` */
  /* **Mandatory**: force component to use a particular color mode */
  color-scheme: dark;
}

/* Force this specific card into light mode */
.themed-card.force-light {
  /* Dynamic custom properties don't need to be reapplied here since they were already defined on `.themed-card` */
   /* **Mandatory**: Force component to use a particular color mode */
  color-scheme: light;
}
```

## Critical Considerations

- **The `@property` Risk**:
  - **Mandatory**: Do not register properties meant to be design tokens that dynamically switch based on `light-dark()` as `<color>`. If you need to animate a color variable, use a separate property.
- **Mandatory**: Do not set `color-scheme` on elements without a background.
 - The `@property` Risk **:
    - **Mandatory**: Do not register properties meant to be design tokens that dynamically switch based on `light-dark()` as `<color>`. If you need to animate a color variable, use a separate property. `light-dark()` resolves at computed value time, and registered properties inherit resolved, computed values, so the color would no longer be reactive to local theme changes. Descendant elements that change their `color-scheme` (e.g., a dark-themed card on a light page) will inherit the *already-resolved color* instead of the dynamic function.
    - Built-in inherited properties such as `color` and `accent-color` can also be affected by this issue. To prevent this, always reassign the dynamic theme variable on these built-in properties when they are inside of a nested theme. 
    - **Example: Handling Built-In Inherited Properties**

      ```css
      :root {
        /* Define browser UI accent color for each mode */
        --brand-accent-light: #0056b3;
        --brand-accent-dark: #00e5ff;
        /* OPTIONAL: Apply dynamic color switching based on light-dark */
        --accent-color: light-dark(var(--brand-accent-light), var(--brand-accent-dark));

        /* MANDATORY: Automatically adapt native UI to user system preferences */
        color-scheme: light dark;
        /* Set built-in inherited property */
        accent-color: var(--accent-color);
      }

      textarea {
        color-scheme: dark;
        /* **Mandatory**: when nesting schemes, dynamic values set with light-dark() on built-in inherited properties must also be re-assigned on the element where the scheme changes */
        accent-color: var(--accent-color); 
      }
     ```
- **System Colors**: Use system color keywords like `Canvas` (background) and `CanvasText` (text) for your custom components when you want them to match the browser's native themed surfaces exactly. This is ideal for ensuring consistency between your content and the browser's UI (like scrollbars) while automatically respecting OS-level accessibility features like High Contrast mode.
- **Respect User Preference**: **MANDATORY**: Avoid forcing a single theme on the overall page. While specific components (like a code editor) may benefit from a fixed theme, the main application should respect the user's system preference and ideally provide a manual toggle to allow users to choose between light, dark, or system-default modes.
- **Forcing a Theme**: Use a single value like `color-scheme: dark` or `color-scheme: light` ONLY for specific sections of your site (like a code editor or a video player) that must remain in one theme. Avoid applying this to the root element unless it's the result of an explicit user selection via a theme toggle.
- **Opting out of Auto-Dark Mode**: Use `color-scheme: only light` to prevent browsers (particularly on mobile) from automatically inverting your colors if you haven't yet implemented a dedicated dark theme or prefer not to show the component with a dark theme.

## Fallback strategies

Baseline status for light-dark(): Newly available. It's been Baseline since 2024-05-13.
Baseline status for color-scheme: Widely available. It's been Baseline since 2022-02-03.

- **Non-Color Properties**: Currently, `light-dark()` only supports color values. For other properties (like `padding` or `border-width`), you must continue using standard media queries or CSS Style Queries.
- **Progressive Enhancement**: Browsers that do not support `color-scheme` will ignore this property and use their default light-mode UI.
- **Handling `light-dark()` Support**: For browsers that support `color-scheme` but not yet `light-dark()`, light and dark versions of colors should first be defined as custom properties, and the `prefers-color-scheme` media query should be used to set colors for the respective mode like in the example below:

```css
.themed-card {
  /* 1. Define raw brand colors */
  --card-bg-light: #ffffff;
  --card-bg-dark: #2d2e31;
  --card-text-light: #202124;
  --card-text-dark: #f8f9fa;

  /* 2. Assign default (light) values */
  --card-bg: var(--card-bg-light);
  --card-text: var(--card-text-light);

  /* 3. Apply custom properties on relevant properties (light) values */
  
  background-color: var(--card-bg);
    /* **Mandatory**: Dynamic built-in properties that inherit (like color and accent-color) and are set with light-dark() must be applied on the element where the scheme changes. 
  */
  color: var(--card-text);
  padding: 1.5rem;
  border-radius: 8px;
}

/* 3. Fallback for browsers without light-dark() support but with prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  .themed-card {
    --card-bg: var(--card-bg-dark);
    --card-text: var(--card-text-dark);
  }
}

/* 4. Modern enhancement using light-dark() */
@supports (color: light-dark(white, black)) {
  .themed-card {
    --card-bg: light-dark(var(--card-bg-light), var(--card-bg-dark));
    --card-text: light-dark(var(--card-text-light), var(--card-text-dark));
  }
}

/* 5. Force a component into a specific color-scheme */
.themed-card.force-dark { 
  color-scheme: dark;
}
```
