# Responsive design

## Overall best practices

- Use `@container` queries to create component-driven responsive layouts that adapt to their parent container's size rather than the viewport. See `size-aware-styling` (via `npx -y modern-web-guidance@latest retrieve "size-aware-styling"`) for more details.
- Use dynamic viewport units (`dvh`, `dvw`) instead of `vh`/`vw` to prevent layout breakage when mobile browser UI elements (like address bars) appear or disappear.
- Use `aspect-ratio` for media elements (like `<img>` and `<video>`) to reserve space during loading and prevent Cumulative Layout Shift (CLS).

For the layout mechanics behind responsive UI (flexbox, grid, container query units, viewport units), see `css-layout` (via `npx -y modern-web-guidance@latest retrieve "css-layout"`).

## Responsive typography

- **DO** combine viewport-relative and font-relative units in `clamp()` for font sizes that scale with the viewport size while ensuring they stay within a desired range. For example, `clamp(2rem, 1rem + 5vw, 4rem)`. Adjust the proportion of viewport-relative and font-relative units to control how quickly the font-size changes.
- **DON'T** use `vw` alone for font-size without `clamp()`, as it can scale text too small or too large on extreme screens.

To scale type and spacing with the container instead of the viewport, see `fluid-scaling` (via `npx -y modern-web-guidance@latest retrieve "fluid-scaling"`).
