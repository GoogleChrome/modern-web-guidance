# Build an interactive hovercard

Hovercards provide an interactive preview of content when a user expresses interest in a link (via hover or focus). This is shown to users before they navigate, and either provides the user with the content they need or helps verify that the link will contain the content they are looking for.

If you need plain-text, non-interactive tooltips rather than structured link previews, see `interest-triggered-tooltips` (via `npx -y modern-web-guidance@latest retrieve "interest-triggered-tooltips"`).

## 1. Triggering the hovercard

Use the **Interest Invokers** API to trigger the hovercard. This ensures the card appears on both hover and focus, and handles accessibility wiring automatically.

- Add the `popover="hint"` attribute to your card container. Use `hint` to avoid closing unrelated popover menus that may be open.
- Add the `interestfor` attribute to the trigger link, pointing to the card's `id`.

```html
<a href="/article" interestfor="article-preview">Article title</a>

<!-- The `id` must match the `interestfor` value on the trigger. -->
<div id="article-preview" popover="hint" class="hovercard">
  <h2>The buzz on hummingbirds</h2>
  <p class="byline">By Delphi Aguilar</p>
  <div>
    <img src="bird.jpg" alt="A vibrant hummingbird">
    <p>Brief summary of the article...</p>
  </div>
</div>
```

You do not need to include an additional link to the content inside of the hovercard, as it is redundant to the triggering link. 

### Accessibility built in to `interestfor`

When you use `interestfor`, the browser handles the assistive-technology wiring for you:

- **Implicit semantics:** A target with `popover="hint"` gains an implicit minimum role of `tooltip`. **DO NOT** set `role="tooltip"` yourself.
- **Implicit association:** The browser implicitly associates the source element with the target via `aria-describedby` when the target is plaintext, or via `aria-details` when the target contains interactive content. **DO NOT** add `aria-describedby` or `aria-details` to the trigger.
- **Interactive content:** Because the association switches to `aria-details` when needed, the target IS allowed to contain interactive content (e.g. a link inside an "interest card").

## 2. Positioning with Anchor Positioning

Position the hovercard relative to its trigger using **CSS Anchor Positioning**. When using `interestfor`, the trigger becomes an implicit anchor for the popover.

```css
[popover].hovercard {
  /* Position the card below the trigger, aligned with its inline-start edge
     and spanning toward the inline-end, flipping if it overflows the viewport. */
  position-area: block-end span-inline-end;
  position-try-fallbacks: flip-block, flip-inline;
}
```

## 3. Animating entry and exit

By default, interest is shown and lost for keyboard and mouse users with a delay of half a second. This prevents the targeted popover from opening while tabbing through a page or moving your mouse around, and from closing while moving your mouse from the trigger to the popover. To adjust the timing, use the `interest-delay` CSS property.

```css
[interestfor]{
  /* Shorthand for interest-delay-start and interest-delay-end */
  interest-delay: 0.2s 0.1s;
}
```

If users are likely to move through multiple triggers in quick succession, set the initial delay to `0s` if an interest-triggered popover is already open.

```css
:root:has(:interest-source) [interestfor] {
  interest-delay-start: 0s;
}
```

Use `@starting-style` to define the entry animation and `transition-behavior: allow-discrete` (along with `display` and `overlay`) to animate the exit from the top layer, gating the transitions behind `@media (prefers-reduced-motion: no-preference)`.

```css
[popover].hovercard {
  opacity: 0;
  transform-origin: top;
}

[popover].hovercard:popover-open {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@starting-style {
  [popover].hovercard:popover-open {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
}

/* MANDATORY: Respect user preference for reduced motion by selectively applying transitions. */
@media (prefers-reduced-motion: no-preference) {
  [popover].hovercard {
    transition:
      opacity,
      transform,
      display,
      overlay;
    transition-duration: 0.4s;
    transition-behavior: allow-discrete;
  }
}
```

## 4. OPTIONAL: Seamlessly morphing to the next page

You can optionally use **Cross-Document View Transitions** to create a seamless "morph" animation between the hovercard and the destination page. See `consistent-cross-document-transitions` (via `npx -y modern-web-guidance@latest retrieve "consistent-cross-document-transitions"`) for guidance on implementation.

By assigning matching `view-transition-name` values to elements in the hovercard and their counterparts on the next page, the browser will animate them across the navigation. You can name multiple elements (e.g. titles, images, bylines) to create a complex, multi-element morphing effect. Assign the `view-transition-name` to elements on the open popover using `:popover-open`, to avoid creating duplicate `view-transition-name`s or requiring link-specific `view-transition-name`s.

```css
/* Opt-in to cross-document transitions on both pages */
@view-transition {
  navigation: auto;
}

/* Don't show transitions when loading this page */
::view-transition-group(*) {
  animation-duration: 0s;
}

/* Assign names ONLY when the popover is open to ensure only the correct elements are selected. */
[popover]:popover-open {
  view-transition-name: --hovercard;
  view-transition-class: morph;

  h2 {
    view-transition-name: --title;
    view-transition-class: morph;
  }

  img {
    view-transition-name: --image;
    view-transition-class: morph;
  }
}
```

**MANDATORY:** To ensure the transition is stable and doesn't flicker, the destination page should use `blocking="render"` and `<link rel="expect">` to wait for critical content to be parsed before rendering the first frame.

```html
<!-- On the destination page: -->
<head>
  <!-- Block rendering until the hero image and title are parsed,
       ensuring the view transition snapshot is taken at the right time. -->
  <link rel="expect" href="#main-content" blocking="render">
</head>
<body>
  <main id="main-content">
    <h1>The buzz on hummingbirds</h1>
    <img src="bird.jpg">
  </main>
</body>
```

```css
/* On the destination page: */
main {
  view-transition-name: --hovercard;
  view-transition-class: morph;
}
h1 {
  view-transition-name: --title;
  view-transition-class: morph;
}
img {
  view-transition-name: --image;
  view-transition-class: morph;
}

/* By default no transition */
::view-transition-group(*) {
  animation-duration: 0s;
}
/* Short transition for morphing elements */
::view-transition-group(.morph) {
  animation-duration: 0.4s;
}
/* Disable transition if no `old` view */
::view-transition-new(.morph):only-child {
  animation-duration: 0s;
}
```

## Fallback strategies

Because the trigger is a standard `<a href="...">` link, browsers without support can still navigate on click if you choose to treat the hovercard as a progressive enhancement. When cross-browser hovercard support is required, conditionally load polyfills as needed.

### Fallbacks & browser support for Popover

Baseline status for Popover: Newly available. It's been Baseline since 2025-01-27.
Supported by: Chrome 116 (Aug 2023), Edge 116 (Aug 2023), Firefox 125 (Apr 2024), Safari 17 (Sep 2023), and Safari iOS 18.3 (Jan 2025).

The Popover API is mostly **progressive enhancement**, but its defining behaviors — top-layer promotion, light-dismiss, and `popovertarget` invocation — have no CSS-only equivalent. Older browsers need a polyfill, or a manual fallback if you would rather not ship one.

**Polyfill:** To support the `popover` attribute in older browsers, conditionally load [`@oddbird/popover-polyfill`](https://github.com/oddbird/popover-polyfill). **MANDATORY:** Feature detect by checking for the `popover` property on `HTMLElement.prototype`, and load the polyfill **only** when native support is missing — do NOT load it unconditionally.

With a bundler or import map:

```js
// MANDATORY: Feature detect 'popover' on HTMLElement.prototype.
if (!("popover" in HTMLElement.prototype)) {
  import("@oddbird/popover-polyfill");
}
```

Without a bundler, import from a CDN inside a `<script type="module">`:

```html
<script type="module">
  if (!("popover" in HTMLElement.prototype)) {
    import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js");
  }
</script>
```

**Styling caveat:** The polyfill cannot define the real `:popover-open` pseudo-class, so it applies a `.\:popover-open` class instead. **MANDATORY:** Combine the two with `:is()` or `:where()`, otherwise browsers that lack `:popover-open` discard the entire rule:

```css
[popover]:is(:popover-open, .\:popover-open) {
  display: block;
}
```

Alternatively, for a legacy fallback without a polyfill, use `position: fixed` and manually calculate coordinates via `getBoundingClientRect()` or rely on default positioning with `inset: auto` if that's acceptable for the use case.

Browser support for popover="hint": Limited availability.
Supported by: Chrome 151 (Jul 2026), Edge 151 (Jul 2026), and Firefox 153 (Jul 2026).
Unsupported in: Safari.

### Fallbacks & browser support for Interest invokers

Browser support for Interest invokers: Limited availability.
Supported by: Chrome 142 (Oct 2025) and Edge 142 (Oct 2025).
Unsupported in: Firefox and Safari.

Interest invokers must be conditionally polyfilled using the `interestfor` polyfill package from NPM. Prefer bundling the polyfill over using the CDN.

**MANDATORY:** Feature detect by checking for the `interestForElement` property on `HTMLButtonElement.prototype`, and load the polyfill **only** when native support is missing.

```html
<script type="module">
  if (!HTMLButtonElement.prototype.hasOwnProperty("interestForElement")) {
    // CDN link only used for example, prefer bundling.
    await import("https://unpkg.com/interestfor@latest");
  }
</script>
```

### CSS Polyfill Caveats

When using the polyfill, the CSS API changes slightly to account for the lack of native pseudo-class and property support:

- **Pseudo-classes:** The polyfill cannot define real `:interest-source` and `:interest-target` pseudo-classes, so it applies `.interest-source` and `.interest-target` classes instead. **MANDATORY:** Combine them with `:is()` to support both native and polyfilled states.

```css
/* Styles to apply when the effect is being previewed */
:is(:interest-source, .interest-source) { /* ... */ }
:is(:interest-target, .interest-target) { /* ... */ }
```

- **CSS Properties:** For `interest-delay`, `interest-delay-start`, and `interest-delay-end`, the polyfill requires using CSS variables as it cannot read the custom properties directly in all browsers.

```css
/* Adjust the start and end delay for interest invokers */
[interestfor] {
  --interest-delay-start: 0.2s;
  interest-delay-start: var(--interest-delay-start);
  --interest-delay-end: 0.1s;
  interest-delay-end: var(--interest-delay-end);
}
```

Browser support for Anchor positioning: Limited availability.
Supported by: Safari 27 (Sep 2026).
Unsupported in: Chrome, Edge, and Firefox.

Browser support for Cross-document view transitions: Limited availability.
Supported by: Chrome 126 (Jun 2024), Edge 126 (Jun 2024), and Safari 18.2 (Dec 2024).
Unsupported in: Firefox.
