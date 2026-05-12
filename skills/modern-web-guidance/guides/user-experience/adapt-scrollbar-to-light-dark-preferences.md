# Adapt scrollbar colors to light/dark preferences

Users expect UI components, including scrollbars, to match the color scheme (light or dark mode) chosen in their operating system settings. The most essential step to achieving this is utilizing the `color-scheme` property. If you choose to apply explicit custom colors, you can use the `@media (prefers-color-scheme: dark)` CSS media feature to modify those colors dynamically.

## 1. System Default Adaptation

The simplest and most robust way to ensure the scrollbar adapts to the user's light/dark mode preference is to let the browser handle it via the `color-scheme` property. When a dark color scheme is enabled, the browser will automatically render its dark-variant scrollbar.

MANDATORY: Define `color-scheme` on the `:root` pseudo-class.

```css
:root {
  /* DO: Declare support for both light and dark systems */
  color-scheme: light dark;
}
```

## 2. Custom Color Adaptation

If you are using `scrollbar-color` or the non-standard `::-webkit-scrollbar` pseudo-elements to explicitly define custom scrollbar colors, you MUST ensure these colors are legible and appropriate in both light and dark modes.

When using `scrollbar-color`, use CSS variables to keep thumb and track colors separate, for readability and maintainability (especially when using fallbacks).

```css
.scroller {
  --scrollbar-thumb: var(--color-neutral-70);
  --scrollbar-track: var(--color-neutral-90);

  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}
```

You can use either the `prefers-color-scheme` media query or the `light-dark()` function to define how these colors behave in light and dark mode. The latter will adapt to color-scheme overrides as well (local or global), but has narrower browser support.

Using `light-dark()`:

```css
/* DO: Define light mode colors as variables */
.scroller {
  --scrollbar-thumb: light-dark(#bbb, #555555);
  --scrollbar-track: light-dark(#f1f1f1, #222222);

  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  scrollbar-width: thin;
  scrollbar-gutter: stable;
}
```

Using `prefers-color-scheme`:

```css
/* DO: Define light mode colors as variables */
.scroller {
  --scrollbar-thumb: #bbb;
  --scrollbar-track: #f1f1f1;

  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  scrollbar-width: thin;
  scrollbar-gutter: stable;
}

/* DO: Override variables for dark mode */
@media (prefers-color-scheme: dark) {
  .scroller {
    --scrollbar-thumb: #555555;
    --scrollbar-track: #222222;
  }
}
```

### Issues to be aware of when using scrollbar-color

- Do NOT animate or transition `scrollbar-color`. A [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=311752) causes the scrollbar to flicker every time `scrollbar-color` changes.
- On macOS, `scrollbar-color` (standard) and `::-webkit-scrollbar` (legacy) properties are ignored by default because macOS uses native "overlay" scrollbars. You MUST pair custom colors with `scrollbar-width` (e.g., `thin` or `auto`) to force macOS to render them.
- Even with `scrollbar-width` applied, macOS overlay scrollbars render the track (gutter) as transparent by default. If the design requires a visible track background color on MacOS, you MUST apply `scrollbar-gutter: stable;` to the scrollable container, but note that it only appears after the user hovers over the scrollbar.
- Even with `scrollbar-gutter: stable` the track may be transparent on MacOS. The thumb should not depend on the track color to be visible.

## Fallbacks & Browser Support

### Fallbacks & browser support for scrollbar-color

Baseline status for scrollbar-color: Newly available. It's been Baseline since 2025-12-12.

This feature is progressive enhancement and does not always require fallbacks.

If the styling is important and the user's Baseline target is "Baseline Widely Available" or earlier, you SHOULD include the non-standard `::-webkit-scrollbar` pseudo-elements as fallbacks.

Wrap legacy fallbacks in an `@supports not (scrollbar-color: auto)` block to prevent conflicts between standard properties and legacy WebKit selectors in browsers that support both natively.

If you are using custom properties to define colors, these will cascade to the legacy WebKit selectors automatically. You do NOT need to duplicate them.

```css
/* Legacy fallback for WebKit/Blink browsers */
@supports not (scrollbar-color: auto) {
  .scroller::-webkit-scrollbar {
    /* Must define base size in WebKit for custom colors to be visual */
    width: 12px;
    height: 12px;
  }

  .scroller::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
  }

  .scroller::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
  }
}
```


