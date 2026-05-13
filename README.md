# Modern Web Guidance

Inject web platform expertise, best practices, and modern API patterns directly into your AI coding agents.

modern-web-guidance is an agent skill (aka [SKILL.md](http://SKILL.md)) to help ensure that when your coding agent works on a web application, it uses modern, high-performance, accessible, and secure APIs rather than legacy, outdated workarounds.

<!-- <LIKE A DEMO VIDEO LOOP OR SOMETHING?> -->

## Why?

AI coding agents often default to older patterns/libraries because their training data contains vast amounts of legacy code. This often leads them to generate unnecessary, bloated JavaScript for common tasks that are now native.

### Bridging the "High-Recall, Low-Coverage" Knowledge Gap

Every developer knows about the **knowledge cutoff**—but for coding agents, the real issue is **knowledge representation**. Even for web platform features released over the last 10 years, our current frontier models lack the density and coverage of high-quality, modern implementation patterns. The models have *high recall* (they know an API exists) but *low coverage* of actual production best practices.

**This repository bridges that gap.** We don't waste your agent's context on general knowledge it already has. Instead, we inject targeted, high-density, expert-curated guidance specifically focused on:

1. Advanced browser APIs models consistently misuse or fail to structure.  
2. High-performance, accessible, and secure patterns that eliminate legacy bloat.  
3. Responsible cross-browser fallback strategies that models are incapable of inventing on-the-fly.

## What

Our content is evergrowing, but we cover from the bleeding edge of the web platform, through the past several years of new features handling fallback strategies. But **we don't waste your tokens** on stuff models already know.

### Core disciplines

Just a tiny sampling of the **134+ use-case-centric guides**: 

* **User Experience**: Smooth and modern visual states: View Transitions, CSS `scrollbar-color` styling, high-contrast adaptation, entry/exit transition animations, parallax scrolling.  
* **CSS layout:** container queries (both size and style queries), modern color spaces (`oklch`, `color-mix`) and `subgrid`, text-wrap tuning (`balance`, `pretty`), subgrid, and typography line height trimming (`text-box`)  
* **Performance**: instant page preloading, Interaction to Next Paint (INP) diagnostics, and background task scheduling using `scheduler.yield`.  
* **Forms**: auto-sizing input fields (`field-sizing: content`), precise validation with `:user-invalid`, and accent color synchronization.  
* **Native UI Components**: Direct control over dialogs, CSS Anchor Positioning for tooltips, same-document and cross-document View Transitions, and the Popover API.  
* **Accessibility & Security**: accessible error announcements, keyboard focus management.  
* **Built-in AI**: Leveraging local, on-device client models (native Language Detection, Summarization, and Translation APIs).

#### Full Skill Coverage (v0.0.114)

<details>
<summary>Includes expert guidance across <strong>85 modern web features</strong></summary>

- [::backdrop](https://web-platform-dx.github.io/web-features-explorer/features/backdrop/)
- [:autofill](https://web-platform-dx.github.io/web-features-explorer/features/autofill/)
- [:has()](https://web-platform-dx.github.io/web-features-explorer/features/has/)
- [:not()](https://web-platform-dx.github.io/web-features-explorer/features/not/)
- [:user-valid and :user-invalid](https://web-platform-dx.github.io/web-features-explorer/features/user-pseudos/)
- [@function](https://web-platform-dx.github.io/web-features-explorer/features/function/)
- [@starting-style](https://web-platform-dx.github.io/web-features-explorer/features/starting-style/)
- [&lt;details>](https://web-platform-dx.github.io/web-features-explorer/features/details/)
- [&lt;dialog closedby>](https://web-platform-dx.github.io/web-features-explorer/features/dialog-closedby/)
- [&lt;dialog>](https://web-platform-dx.github.io/web-features-explorer/features/dialog/)
- [&lt;link rel="expect">](https://web-platform-dx.github.io/web-features-explorer/features/link-rel-expect/)
- [&lt;link rel="preload">](https://web-platform-dx.github.io/web-features-explorer/features/link-rel-preload/)
- [AbortController and AbortSignal](https://web-platform-dx.github.io/web-features-explorer/features/aborting/)
- [accent-color](https://web-platform-dx.github.io/web-features-explorer/features/accent-color/)
- [Active view transition](https://web-platform-dx.github.io/web-features-explorer/features/active-view-transition/)
- [Anchor position container queries](https://web-platform-dx.github.io/web-features-explorer/features/container-anchor-position-queries/)
- [Anchor positioning](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning/)
- [blocking="render"](https://web-platform-dx.github.io/web-features-explorer/features/blocking-render/)
- [calc-size()](https://web-platform-dx.github.io/web-features-explorer/features/calc-size/)
- [color-scheme](https://web-platform-dx.github.io/web-features-explorer/features/color-scheme/)
- [Container queries](https://web-platform-dx.github.io/web-features-explorer/features/container-queries/)
- [Container scroll-state queries](https://web-platform-dx.github.io/web-features-explorer/features/container-scroll-state-queries/)
- [content-visibility](https://web-platform-dx.github.io/web-features-explorer/features/content-visibility/)
- [Cross-document view transitions](https://web-platform-dx.github.io/web-features-explorer/features/cross-document-view-transitions/)
- [Customizable &lt;select>](https://web-platform-dx.github.io/web-features-explorer/features/customizable-select/)
- [Email, telephone, and URL &lt;input> types](https://web-platform-dx.github.io/web-features-explorer/features/input-email-tel-url/)
- [enterkeyhint](https://web-platform-dx.github.io/web-features-explorer/features/enterkeyhint/)
- [Event timing](https://web-platform-dx.github.io/web-features-explorer/features/event-timing/)
- [Fetch](https://web-platform-dx.github.io/web-features-explorer/features/fetch/)
- [Fetch priority](https://web-platform-dx.github.io/web-features-explorer/features/fetch-priority/)
- [fetchLater](https://web-platform-dx.github.io/web-features-explorer/features/fetchlater/)
- [field-sizing](https://web-platform-dx.github.io/web-features-explorer/features/field-sizing/)
- [font-size-adjust](https://web-platform-dx.github.io/web-features-explorer/features/font-size-adjust/)
- [Form-associated WebMCP attributes](https://web-platform-dx.github.io/web-features-explorer/features/declarative-webmcp/)
- [hidden="until-found"](https://web-platform-dx.github.io/web-features-explorer/features/hidden-until-found/)
- [image-set()](https://web-platform-dx.github.io/web-features-explorer/features/image-set/)
- [Individual transform properties](https://web-platform-dx.github.io/web-features-explorer/features/individual-transforms/)
- [inert](https://web-platform-dx.github.io/web-features-explorer/features/inert/)
- [inputmode](https://web-platform-dx.github.io/web-features-explorer/features/inputmode/)
- [Interest invokers](https://web-platform-dx.github.io/web-features-explorer/features/interest-invokers/)
- [interpolate-size](https://web-platform-dx.github.io/web-features-explorer/features/interpolate-size/)
- [Intersection observer](https://web-platform-dx.github.io/web-features-explorer/features/intersection-observer/)
- [Intl.DurationFormat](https://web-platform-dx.github.io/web-features-explorer/features/intl-duration-format/)
- [Invoker commands](https://web-platform-dx.github.io/web-features-explorer/features/invoker-commands/)
- [Language detector](https://web-platform-dx.github.io/web-features-explorer/features/languagedetector/)
- [light-dark()](https://web-platform-dx.github.io/web-features-explorer/features/light-dark/)
- [linear() easing](https://web-platform-dx.github.io/web-features-explorer/features/linear-easing/)
- [Long animation frames](https://web-platform-dx.github.io/web-features-explorer/features/long-animation-frames/)
- [Masks](https://web-platform-dx.github.io/web-features-explorer/features/masks/)
- [moveBefore()](https://web-platform-dx.github.io/web-features-explorer/features/move-before/)
- [Mutually exclusive &lt;details> elements](https://web-platform-dx.github.io/web-features-explorer/features/details-name/)
- [Navigation API](https://web-platform-dx.github.io/web-features-explorer/features/navigation/)
- [navigator.modelContext](https://web-platform-dx.github.io/web-features-explorer/features/navigator-modelcontext/)
- [overlay](https://web-platform-dx.github.io/web-features-explorer/features/overlay/)
- [Page visibility](https://web-platform-dx.github.io/web-features-explorer/features/page-visibility/)
- [Page visibility state](https://web-platform-dx.github.io/web-features-explorer/features/page-visibility-state/)
- [Popover](https://web-platform-dx.github.io/web-features-explorer/features/popover/)
- [popover="hint"](https://web-platform-dx.github.io/web-features-explorer/features/popover-hint/)
- [prefers-color-scheme media query](https://web-platform-dx.github.io/web-features-explorer/features/prefers-color-scheme/)
- [prefers-contrast media query](https://web-platform-dx.github.io/web-features-explorer/features/prefers-contrast/)
- [prefers-reduced-motion media query](https://web-platform-dx.github.io/web-features-explorer/features/prefers-reduced-motion/)
- [Registered custom properties](https://web-platform-dx.github.io/web-features-explorer/features/registered-custom-properties/)
- [Scheduler API](https://web-platform-dx.github.io/web-features-explorer/features/scheduler/)
- [Scroll snap](https://web-platform-dx.github.io/web-features-explorer/features/scroll-snap/)
- [Scroll snap events](https://web-platform-dx.github.io/web-features-explorer/features/scroll-snap-events/)
- [Scroll-driven animations](https://web-platform-dx.github.io/web-features-explorer/features/scroll-driven-animations/)
- [scroll-initial-target](https://web-platform-dx.github.io/web-features-explorer/features/scroll-initial-target/)
- [scrollbar-color](https://web-platform-dx.github.io/web-features-explorer/features/scrollbar-color/)
- [scrollbar-width](https://web-platform-dx.github.io/web-features-explorer/features/scrollbar-width/)
- [scrollend](https://web-platform-dx.github.io/web-features-explorer/features/scrollend/)
- [scrollIntoView()](https://web-platform-dx.github.io/web-features-explorer/features/scroll-into-view/)
- [sibling-count() and sibling-index()](https://web-platform-dx.github.io/web-features-explorer/features/sibling-count/)
- [sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)](https://web-platform-dx.github.io/web-features-explorer/features/trig-functions/)
- [Speculation rules](https://web-platform-dx.github.io/web-features-explorer/features/speculation-rules/)
- [Summarizer](https://web-platform-dx.github.io/web-features-explorer/features/summarizer/)
- [Temporal](https://web-platform-dx.github.io/web-features-explorer/features/temporal/)
- [text-box](https://web-platform-dx.github.io/web-features-explorer/features/text-box/)
- [text-wrap](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap/)
- [text-wrap: balance](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap-balance/)
- [text-wrap: pretty](https://web-platform-dx.github.io/web-features-explorer/features/text-wrap-pretty/)
- [Top-level await](https://web-platform-dx.github.io/web-features-explorer/features/top-level-await/)
- [transition-behavior](https://web-platform-dx.github.io/web-features-explorer/features/transition-behavior/)
- [Translator](https://web-platform-dx.github.io/web-features-explorer/features/translator/)
- [View transitions](https://web-platform-dx.github.io/web-features-explorer/features/view-transitions/)
- [view-transition-class](https://web-platform-dx.github.io/web-features-explorer/features/view-transition-class/)
</details>

<details>
<summary>Covers <strong>109 real-world developer use cases</strong> with production-ready code patterns</summary>

<h3>accessibility</h3>

- **[accessible-error-announcement](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/accessibility/accessible-error-announcement.md)**: Synchronize programmatic accessibility states (like aria-invalid) with the visual :user-invalid state to ensure screen reader users receive error feedback only after interaction, mirroring the visual experience.

<h3>built-in-ai</h3>

- **[language-detection](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/language-detection.md)**: Detect the language of user-generated content or already present site content.
- **[summarizer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/summarizer.md)**: Summarize text content using the on-device Summarizer API.
- **[translator](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/translator.md)**: Translate text between languages using the on-device Translator API.

<h3>forms</h3>

- **[animated-select-picker](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/animated-select-picker.md)**: Create a custom select component whose dropdown is animated. For example, the menu fades or slides into view, or the options animate upon selection.
- **[autofill-address-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-address-form.md)**: Build an address form with correct autocomplete attributes and autofill support.
- **[autofill-highlight-inputs](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-highlight-inputs.md)**: Use CSS to highlight form fields that have been autofilled by the browser and not edited by the user.
- **[autofill-payment-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-payment-form.md)**: Build a payment form that collects card details with correct autocomplete values and autofill support.
- **[autofill-sign-in-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-sign-in-form.md)**: Build a sign-in form with correct autocomplete values and autofill support.
- **[autofill-sign-up-form](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/autofill-sign-up-form.md)**: Build a sign-up form with correct autocomplete values and autofill support.
- **[brand-consistent-forms](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/brand-consistent-forms.md)**: Match checkboxes, radio buttons, range sliders, and progress bars to your site's color palette without replacing them with custom components.
- **[branded-select-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/branded-select-styling.md)**: Create custom select elements whose button, picker, arrow icon, and checkmark all seamlessly match your brand or design system's typography, colors, spacing, and border treatments.
- **[custom-select-picker-layouts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/custom-select-picker-layouts.md)**: Create custom select pickers whose options are positioned in unique or interesting ways, rather than the traditional stacked list of options.
- **[form-fields-automatically-fit-contents](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/form-fields-automatically-fit-contents.md)**: Allow form fields to grow and shrink to fit the user input, e.g. as the user types or selects a different option. Apply maximum and minimum size limits to create dynamic and responsive form fields that conform with the page design.
- **[required-field-feedback](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/required-field-feedback.md)**: Provide error message for required form fields that were skipped or left empty *only* after user interaction, to avoid preemptive errors and ensure feedback is timely and contextually relevant to the user's flow.
- **[rich-media-picker](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/rich-media-picker.md)**: Create a custom select component whose options can contain complex HTML formatting (e.g. images, icons, and other rich formatting) rather than just plain text.
- **[select-menu-interaction](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/select-menu-interaction.md)**: Validate that a non-default option has been chosen in a select menu only after the user has interacted with the control.
- **[validate-input-after-interaction](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/forms/validate-input-after-interaction.md)**: Show form field validation feedback (e.g. password complexity or email format requirements) only after the user has finished their initial interaction, avoiding premature errors on page load or while the user is typing.

<h3>performance</h3>

- **[batch-analytics-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/batch-analytics-events.md)**: Debounce and batch multiple analytics events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.
- **[break-up-long-tasks](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/break-up-long-tasks.md)**: Break up heavy synchronous processing (complex computations and/or long loops) or DOM updates, to let the browser handle user input and repaint the screen.
- **[calculate-total-foreground-time](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/calculate-total-foreground-time.md)**: Calculate the total time a user actually spent viewing a page, excluding periods when the tab was in the background.
- **[conditional-async-dependencies](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/conditional-async-dependencies.md)**: Conditionally load or initialize async dependencies (such as importing polyfills for missing web features) without requiring complex orchestration across all of a page's script dependencies.
- **[defer-rendering-heavy-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/defer-rendering-heavy-content.md)**: Reduce rendering times in content-heavy web pages (e.g. pages with long feeds, lots of articles, or complex dashboards), by deferring rendering for any content that is not immediately visible to the user.
- **[defer-work-until-scroll-ends](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/defer-work-until-scroll-ends.md)**: Defer expensive operations like DOM updates, data fetching, analytics tracking, or layout recalculation until after scrolling completes to maintain smooth scroll performance.
- **[deprioritize-background-fetches](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/deprioritize-background-fetches.md)**: Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.
- **[detect-initial-visibility-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/detect-initial-visibility-state.md)**: Reliably determine whether a page was initially loaded in the background, even in cases where the script is loaded asynchronously after the user foregrounded the page.
- **[efficient-background-processing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/efficient-background-processing.md)**: Conserve system resources and battery life by pausing background JavaScript execution (such as `<canvas>` animations, WebGL rendering, or high-frequency WebSocket data polling) when the component is off-screen and then resume them just-in-time when they scroll back into view.
- **[faster-spa-view-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/faster-spa-view-transitions.md)**: Enable faster transitions back to previously visited views in a Single-Page Application (SPA) by preserving their structural DOM state instead of destroying and rebuilding them on every navigation.
- **[full-session-analytics](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/full-session-analytics.md)**: Reliably track analytics, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.
- **[identify-heavy-scripts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/identify-heavy-scripts.md)**: Identify the scripts most responsible for long animation frames
- **[identify-inp-causes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/identify-inp-causes.md)**: Identify slow running JavaScript that is impacting INP metric
- **[improve-next-page-load-performance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/improve-next-page-load-performance.md)**: Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.
- **[interactions-in-complex-layouts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/interactions-in-complex-layouts.md)**: Make interactions snappier and more responsive (reducing Interaction to Next Paint (INP) scores) by avoiding layout re-calculations in complex layouts, such as data-heavy dashboards or spreadsheet-style grids.
- **[optimize-image-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-image-priority.md)**: Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.
- **[optimize-preload-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-preload-priority.md)**: Optimize the relative priority of preloaded content to reduce critical resource load delays.
- **[optimize-script-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-script-priority.md)**: Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.
- **[resolution-optimized-pseudo-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/resolution-optimized-pseudo-elements.md)**: Use resolution-optimized images in CSS pseudo-elements (such as `::before` and `::after`) to reduce the number of DOM nodes.
- **[schedule-tasks-by-priority](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/schedule-tasks-by-priority.md)**: Schedule tasks with different priorities to ensure critical work runs first while background work is deferred.
- **[sequence-distributed-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/sequence-distributed-events.md)**: Log and sequence operations in distributed microservices or high-throughput tracing environments by recording timestamps with nanosecond resolution.

<h3>user-experience</h3>

- **[adapt-scrollbar-to-contrast-preferences](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/adapt-scrollbar-to-contrast-preferences.md)**: Enhance scrollbar visibility for users who prefer high-contrast interfaces
- **[adapt-scrollbar-to-light-dark-preferences](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/adapt-scrollbar-to-light-dark-preferences.md)**: Ensure the scrollbar visually matches the user's operating system light/dark mode preference
- **[anchor-positioning-tab-underline](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/anchor-positioning-tab-underline.md)**: Transition an element seamlessly between two target element positions. For example, moving a selected tab underline between the previously selected tab and the currently selected tab.
- **[animate-element-entry-exit](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/animate-element-entry-exit.md)**: Smoothly hide/show elements as they are added/removed from the DOM or as their display values are toggled.
- **[animate-to-from-top-layer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/animate-to-from-top-layer.md)**: Animate elements such as dialogs, popovers, and tooltips as they're entering/exiting the top layer.
- **[animate-to-intrinsic-sizes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/animate-to-intrinsic-sizes.md)**: Smoothly animate interactive components (like accordions, menus, and expanding cards) to and from their natural dimensions.
- **[browser-ui-color-theme](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/browser-ui-color-theme.md)**: Configure built-in browser UI (e.g. scrollbars, form controls, etc) to respect the user's light/dark theme preference.
- **[calculate-event-differentials](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/calculate-event-differentials.md)**: Calculate the duration and time remaining between dates and times.
- **[calculate-with-intrinsic-sizes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/calculate-with-intrinsic-sizes.md)**: Calculate the size of an element based on its intrinsic size, while ensuring it fits within given design constraints.
- **[capture-location-agnostic-data](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/capture-location-agnostic-data.md)**: Record chronological data that should not change based on a user's location, such as birthdates, recurring alarms, or national holidays.
- **[carousel-slide-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/carousel-slide-effects.md)**: Create a carousel of slides with images or other visual elements, where each slide animates as they enter/center/exit their scroller. For example, the slides may fade-in/fade-out, rotate, get bigger or smaller, etc.
- **[carousel-snap-highlights](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/carousel-snap-highlights.md)**: Visually highlight the currently snapped non-interactive item in scroll-snapping carousels, galleries, or full-page swipe experiences. For example, expanding a card when snapped, or revealing hidden content.
- **[child-state-based-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/child-state-based-styling.md)**: Build a component that changes its styling based on the state of one of its child elements. For example, a component that renders in light or dark mode based on whether a theme toggle is checked (or not).
- **[component-specific-light-dark-theme](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/component-specific-light-dark-theme.md)**: Create component-specific themes by forcing explicit color schemes on individual UI elements, giving users theme choices that are decoupled from their global operating system preferences
- **[consistent-cross-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/consistent-cross-document-transitions.md)**: Ensure critical page state is loaded and stable before initiating a cross-document view transition. This means critical CSS styles are loaded and applied, critical JavaScript is loaded and run, and the HTML visible for the user's initial view of the page has been parsed before the transition runs.
- **[content-based-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/content-based-styling.md)**: Build a component that changes its layout based on whether it contains specific child elements (or not). For example, if the component contains an image, use a multi-column layout, otherwise default to a single-column layout.
- **[coordinate-global-events](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/coordinate-global-events.md)**: Schedule future meetings or events by explicitly binding them to a geographical IANA time zone so that event times remain accurate regardless of Daylight Saving Time (DST) transitions, "skipped" or "repeated" hours during clock changes.
- **[cross-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/cross-document-transitions.md)**: Create smooth, seamless transitions between full page navigations, such as cross-fades, custom reveal effects, or morphing of content from one page to the next.
- **[customize-scrollbar-color-and-thickness](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/customize-scrollbar-color-and-thickness.md)**: Customize the color or thickness of a scrollbar
- **[declarative-button-actions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/declarative-button-actions.md)**: Declaratively connect a button to any element to trigger custom, application-specific actions using declarative button commands, invoker commands, button commands, custom commands, or declarative toggle actions.
- **[declarative-dialog-popover-control](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/declarative-dialog-popover-control.md)**: Toggle the visibility of a dialog or popover from a button without writing JavaScript.
- **[deliver-optimized-decorative-images](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/deliver-optimized-decorative-images.md)**: Deliver optimized decorative images (such as backgrounds, UI icons, or complex masks) by simultaneously providing next-generation image formats (like AVIF or WebP) alongside multiple pixel densities (like 1x and 2x) so the browser can dynamically negotiate the best combination of file size and visual quality for the user's device capabilities.
- **[directional-navigation-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/directional-navigation-transitions.md)**: Animate visual state changes to reflect the direction of a user's navigational flow, such as sliding new content in from the right when advancing forward or from the left when returning to a previous screen.
- **[dynamic-sibling-animations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/dynamic-sibling-animations.md)**: Stagger animation or transition timing across sibling elements so each one starts after a computed delay based on its position in the sibling list.
- **[dynamic-sibling-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/dynamic-sibling-styling.md)**: Create dynamic visual spectrums or layout arrangements that automatically adapt to the number of elements in a group.
- **[flicker-free-client-side-ab-testing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/flicker-free-client-side-ab-testing.md)**: Deliver and render A/B tests, multi-variate tests, or other experiments using client-side JavaScript to alter or inject HTML, CSS, and JavaScript without the original content showing first before flickering or flashing to show the experiment content.
- **[fluid-scaling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/fluid-scaling.md)**: Scale items like font size, spacing, and media sizes smoothly based on the parent container's size rather than using fixed breakpoints
- **[format-human-readable-durations](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/format-human-readable-durations.md)**: Present elapsed time or durations to users in a readable, localized format, with the flexibility to display either detailed unit breakdowns (e.g., "1 hour and 30 minutes") or total unit counts (e.g., "90 minutes") depending on context.
- **[group-element-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/group-element-transitions.md)**: Transition a group of similar elements simultaneously using the same transition logic, such as removing a product from a shopping cart and having all the other products animate into their new positions.
- **[improve-text-layout-and-legibility](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/improve-text-layout-and-legibility.md)**: Improve the layout and legibility of short standalone text content, such as headings no longer than a few lines, by enabling the browser to apply evenly balanced line breaks when wrapping text.
- **[individual-transform-properties](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/individual-transform-properties.md)**: Animate or override individual CSS transform properties (e.g. translate, rotate, scale) independently of other transform properties on a single element.
- **[interactive-content-reveal](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/interactive-content-reveal.md)**: Create interactive reveal effects, such as a spotlight that follows the user's pointer to uncover details within an image or UI section.
- **[interest-triggered-action-previews](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/interest-triggered-action-previews.md)**: Show a live preview of a button's effect when a user signals interest (e.g. hovering, focusing, or long-pressing) but before they commit to clicking.
- **[interest-triggered-tooltips](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/interest-triggered-tooltips.md)**: Show a tooltip or supplemental information when a user hovers over, focuses on, or long-presses an interactive element, without requiring a click.
- **[light-dismiss-a-dialog](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/light-dismiss-a-dialog.md)**: Create a modal dialog that can be closed via light dismiss (i.e. clicking or tapping outside of the dialog)
- **[manage-recurring-intervals](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/manage-recurring-intervals.md)**: Calculate recurring intervals for subscription billings or payroll cycles, automatically adjusting for edge cases such as month-end transitions (e.g., adding one month to January 31st) to ensure accurate period calculations.
- **[model-partial-time-concepts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/model-partial-time-concepts.md)**: Model date and time concepts that inherently lack a standard component (such as a specific year, day, or date) without using arbitrary placeholder values that introduce calculation errors.
- **[move-dom-element-without-losing-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/move-dom-element-without-losing-state.md)**: Move or reparent a DOM element without losing important element state, such as interactivity states (:focus/:active), <iframe> loading state, animation/transition state, etc
- **[navigation-drawer](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/navigation-drawer.md)**: Create a navigation drawer component that, when triggered from a menu button, slides in from the side overlayed on top of existing page content, and slides out when dismissed (by swiping away, tapping outside, or pressing escape).
- **[parallax-scroll-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/parallax-scroll-effects.md)**: Create scroll-based effects (such as parallax) where foreground and background layers move at different rates, creating a sense of depth as the user scrolls.
- **[persistent-app-tours](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/persistent-app-tours.md)**: Create persistent onboarding walkthroughs using tethered native overlays that stay open during user interaction.
- **[persistent-toast-notifications](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/persistent-toast-notifications.md)**: Create non-intrusive toast and overlay notifications for persistent, stackable messaging and state communication.
- **[persistent-top-layer-ui](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/persistent-top-layer-ui.md)**: Keep a modal dialog, fullscreen element, or native popover visibly open and functionally active when its underlying DOM node is moved or reparented in the DOM.
- **[physics-based-easing](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/physics-based-easing.md)**: Create custom, physics-based animation and transition effects, like bounce and spring, that feel more natural and engaging than traditional easing curves.
- **[platform-controls-dismiss-dialog](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/platform-controls-dismiss-dialog.md)**: Create a modal dialog that can be closed via standard platform-specific user actions, such as pressing the `Esc` key on desktop platforms, or a "back" or "dismiss" gesture on mobile platforms
- **[position-aware-tooltips](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/position-aware-tooltips.md)**: Build tooltips and popovers with directional arrows (or other visual styling) that automatically point the correct way when the element flips to a fallback position.
- **[precise-text-alignment](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/precise-text-alignment.md)**: Achieve precise vertical alignment with text of any font. For example, exactly equal visual padding above and below text, or aligning text perfectly flush with adjacent icons or images.
- **[prevent-text-wrapping](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/prevent-text-wrapping.md)**: Ensure the browser does not insert line breaks into text and will allow text to overflow its container.
- **[pull-to-reveal](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/pull-to-reveal.md)**: Build a pull-to-reveal feature that would enable the user to pull down on the screen to reveal more content, like a search bar.
- **[reduce-style-repetition](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/reduce-style-repetition.md)**: Reduce excessive style repetition by encapsulating complex or dynamic styling logic into reusable functions (such as a function that computes a gradient based on a set of input parameters).
- **[resilient-context-menus-and-nested-dropdowns](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/resilient-context-menus-and-nested-dropdowns.md)**: Build accessible, responsive menus, tooltips, dropdowns, or contextual overlays that must be tethered to specific UI elements, guaranteeing that the overlay automatically repositions itself (e.g., flipping axes) when it encounters viewport edges, ensuring it never gets cut off.
- **[same-document-transitions](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/same-document-transitions.md)**: Visually connect persisting elements across different page states or navigations in a Single Page Application (SPA) (e.g. expanding a product thumbnail into a full-bleed hero image) by smoothly morphing their size, position, or other styling properties.
- **[scroll-entry-exit-effects](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-entry-exit-effects.md)**: Create fade-in, scale-up, or other complex reveal-type effects on elements as they enter and exit the scrollport (or viewport) while the user is scrolling.
- **[scroll-position-aware-elements](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-position-aware-elements.md)**: Build floating buttons or widgets (back-to-top, scroll-to-bottom, chat launchers, etc.) that appear and disappear based on whether the user has scrolled at all.
- **[scroll-progress-indicator](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-progress-indicator.md)**: Create a scroll progress bar, stepped progress tracker, or any visual affordance that communicates how far through a page or section the user has scrolled.
- **[scroll-snap-realtime-feedback](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-snap-realtime-feedback.md)**: Provide real-time visual feedback in linked UI elements while a user scrolls through snap-aligned content, before the scroll gesture completes.
- **[scroll-snap-state-sync](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-snap-state-sync.md)**: Synchronize navigation indicators, linked content panels, and analytics tracking with the actively snapped item in a scrollable container.
- **[scroll-target-on-load](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scroll-target-on-load.md)**: Build a scrollable list of elements (e.g. a carousel of images or a chat conversation thread) that can be displayed with a particular element scrolled into view on the initial render.
- **[scrollability-affordance-hints](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scrollability-affordance-hints.md)**: Build scroll-shadow overlays, gradient fades, or directional arrow indicators that appear only when there's actually more content to scroll to in that direction.
- **[scrollytelling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/scrollytelling.md)**: Animate visual properties on a target element — such as fading a backdrop, shifting a background color, or to create scrollytelling experiences — driven entirely by the scrollport position of a completely different element.
- **[search-hidden-content](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/search-hidden-content.md)**: Hide content from view using patterns such as accordions, tabs, and "Read more" sections, while ensuring the hidden text reveals itself during native "Find in page" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.
- **[shrinking-header-on-scroll](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/shrinking-header-on-scroll.md)**: Smoothly animate a fixed header or full-page cover on scroll to dynamically shrink, gain shadows, and transform its layout over a predefined scroll distance.
- **[size-aware-styling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/size-aware-styling.md)**: Build a component whose styles can be conditionally dependent on its own width or height, rather than the width or height of the viewport. For example a card component that can change its layouts depending on how large it is, or a call-to-action button that can conditionally display helper text based on its width.
- **[stabilize-reactive-state](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/stabilize-reactive-state.md)**: Manage task deadlines or schedules in data-driven views without unexpected side effects from shared mutable state.
- **[style-parent-with-has](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/style-parent-with-has.md)**: Style parent elements of a form field (e.g. labels or fieldsets) when the field is invalid.
- **[support-global-calendar-systems](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/support-global-calendar-systems.md)**: Display and calculate dates in non-Gregorian calendar systems (e.g., Islamic, Hebrew, or Chinese) accurately for international users.
- **[visually-stable-font-fallbacks](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/visually-stable-font-fallbacks.md)**: Define font styles such that text remains readable and visually consistent in the event that there's a swap between the perferred font and one of the fallbacks (or vise versa).
- **[visually-stable-mixed-fonts](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/user-experience/visually-stable-mixed-fonts.md)**: Define font styles such that text remains readable and visually consistent in situations where multiple fonts are used to render a single block of text.

<h3>webmcp</h3>

- **[agentic-forms](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/webmcp/agentic-forms.md)**: Expose client-side functionality as tools to AI agents by annotating standard HTML forms with WebMCP attributes.
- **[agentic-javascript-tools](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/webmcp/agentic-javascript-tools.md)**: Programmatically register client-side JavaScript functions as tools for AI agents using the WebMCP Imperative API.
</details>

### The modern web platform that you can *use,* safely

* **Responsible Fallbacks**: We don't recommend heavy polyfills that bloat your bundle or block the main thread. Instead, we suggest what an **in-tune senior front-end developer would appreciate**:  
  1. Prioritizing lightweight, case-specific custom implementations (\<50 lines of code).  
  2. Conditional loading of performant polyfills *only* when native support is absent. And avoiding both risky CDNs (like polyfill.io) and CSS-parsing polyfills.  
  3. Using bulletproof prototype-level feature detection rather than naive environment checks.  
* **Gotchas & Quirk Mitigation**: Tricky API boundaries and platform quirks (e.g., the 64KB payload quota for `fetchLater()`, macOS specific scrollbar gutters, and WebKit flickering bugs) are fully documented.  
* **Baseline-Aware Decisions**: Dynamic compatibility data from the Baseline project ensures agents make micro-architectural decisions on-the-fly—applying progressive enhancement conditionally, not blindly.

## How 

### How Coding Agents use our skill 

* **Bootstrapped Awareness**: When loaded, the agent receives a system prompt instruction: *"To use modern web platform APIs, query the `modern-web` tool."*  
* **Semantic Vector Discovery**: The agent executes `modern-web search "<query>"` in your terminal. The tool uses an optimized `MiniLM-L6-v2` TensorFlow.js model running **entirely offline** on your CPU (thx `MiniLM`! No network calls, latency, or API keys required) to calculate the **cosine distance** between the query and our pre-computed guide embeddings.  
* **Precision Retrieval**: The agent executes `modern-web retrieve <guide-id>` to fetch the exact, clean Markdown guidelines it discovered.  
* **State-of-the-Art Generation**: The guide's precise code snippets, DO/DO NOT rules, and responsible cross-browser fallbacks are injected directly into the agent's context window, enabling it to generate clean, modern code instantly.

Token-efficient, targeted, and private guidance injected right into the context window. Yeah, buddy.

## Get started

```shell
npx modern-web-guidance install
```

This will run a quick interactive wizard to install the modern-web-guidance-skill to your preferences, and for your configured agents.

### Not ready to install? All good. Search our guides manually

```shell
# Search for relevant guides
npx modern-web-guidance@latest search "animate a dialog modal backdrop"
# Retrieve a guide by ID
npx modern-web-guidance@latest retrieve "animate-to-from-top-layer"
```

### Alternative installation methods

#### Vercel `skills` CLI: `npx skills add GoogleChrome/modern-web-guidance`

#### Github CLI: `gh skill install GoogleChrome/modern-web-guidance`

#### Google Antigravity: `agy plugin install https://github.com/GoogleChrome/modern-web-guidance`

#### Claude Code plugin

We don't recommend this method, but it will work.

```shell
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
/plugin  # Select GoogleChrome marketplace, hit enter, enable AutoUpdate
/reload-plugins
```

## This isn't slop. We've got the evals to prove it. ;)

Every piece of guidance in this pack isn't just a tutorial—it is **empirically proven and continuously calibrated** to guarantee AI agents write better code. We test every guide using an automated quality-assurance harness to ensure correct agent behavior.

### Validation Pipeline

```
  [ SME-Authored Guidance ]
            │
            ▼
  [ Gemini CLI Generator ] ──> Playwright Grader (.spec.ts) & Calibrated Negative Demo (.html)
            │
            ▼
  [ Calibration Loop ] ───────> Runs Grader on Gold-Standard Demo (Must Pass 100%)
            │                   Runs Grader on Negative Demo (Must Fail 100%)
            ▼
  [ E2E Agent Evals ] ────────> Runs coding agents in Guided vs. Unguided modes
                                Compares accuracy pre/post guide injection to prove impact
```

### 1. Real-World, Outcome-Based Assertions

For each guide, we develop a Playwright script (`.spec.ts`) that asserts the guide's implementation details were followed, such as:

* Verifying accessibility tags and computed styles (e.g., `@media (prefers-contrast: more)` overrides).  
* Asserting exact functional layouts and performance behaviors as interpreted by the browser.

### 2. Self-Healing Playwright Calibration

To ensure our test suites aren't nonsense, the pipeline runs a continuous, closed-loop calibration:

* **Golden Master vs. Anti-Pattern**: We run our per-usecase Playwright scripts against both a perfect reference implementation (`demo.html`, expects 100% pass) and a deliberately flawed implementation (`negative-demo.html`, expects 0% pass).  
* **Autonomous Refinement**: If calibration fails, the generator automatically retries with detailed failure context until the grader achieves 100% calibration.

Last, we validate that the calibrated graders aren't taking shortcuts and honor the sanctity of the intent.

### 3. E2E Agent Evals for Every Guide

Finally, we run end-to-end evaluations on real base applications:

* **Unguided (Control)**: The agent addresses a coding task using only its default training data.  
* **Guided (Experiment)**: The agent addresses the exact same task, but with access to this skill pack.

We grade both outputs and only release guides that demonstrate a massive, quantifiable improvement in code quality (e.g., improving success rates from **20% up to 90%**).

# Available Skills

* **`modern-web-guidance`**: (234 tokens) Everything mentioned above  
* **`chrome-extensions`**: (181 tokens) Manifest V3 development, background service workers, content scripts, and extension APIs. Manage Chrome Web Store metadata, permissions justifications, privacy policies, and publishing readiness.

\# Choose which skills you want  
`npx modern-web-guidance install --choose`
