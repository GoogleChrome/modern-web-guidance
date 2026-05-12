# Modern Web Guidance

This curated collection of skills, tools, and AI-ready documentation injects Chrome's web platform knowledge directly into your workflow, ensuring your coding agent builds apps that are modern, fast, and secure by default.

#### Skill Coverage in `v0.0.108`

<details>
<summary><strong>83 web features with implementation guidance from Chrome's experts</strong>: `::backdrop`, `:autofill`, `:has()`, `:not()`, `:user-valid and :user-invalid`, `@starting-style`, `&lt;details>`, `&lt;dialog closedby>`, `&lt;dialog>`, `&lt;link rel="expect">`, `&lt;link rel="preload">`, `AbortController and AbortSignal`, `accent-color`, `Active view transition`, `Anchor position container queries`, `Anchor positioning`, `blocking="render"`, `calc-size()`, `color-scheme`, `Container queries`, `Container scroll-state queries`, `content-visibility`, `Cross-document view transitions`, `Customizable &lt;select>`, `Email, telephone, and URL &lt;input> types`, `enterkeyhint`, `Event timing`, `Fetch`, `Fetch priority`, `fetchLater`, `field-sizing`, `font-size-adjust`, `Form-associated WebMCP attributes`, `hidden="until-found"`, `image-set()`, `Individual transform properties`, `inert`, `inputmode`, `Interest invokers`, `interpolate-size`, `Intersection observer`, `Intl.DurationFormat`, `Invoker commands`, `Language detector`, `light-dark()`, `linear() easing`, `Long animation frames`, `Masks`, `moveBefore()`, `Mutually exclusive &lt;details> elements`, `Navigation API`, `navigator.modelContext`, `overlay`, `Page visibility`, `Page visibility state`, `Popover`, `popover="hint"`, `prefers-color-scheme media query`, `prefers-contrast media query`, `prefers-reduced-motion media query`, `Registered custom properties`, `Scheduler API`, `Scroll snap`, `Scroll-driven animations`, `scroll-initial-target`, `scrollbar-color`, `scrollbar-width`, `scrollend`, `scrollIntoView()`, `sibling-count() and sibling-index()`, `sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)`, `Speculation rules`, `Summarizer`, `Temporal`, `text-box`, `text-wrap`, `text-wrap: balance`, `text-wrap: pretty`, `Top-level await`, `transition-behavior`, `Translator`, `View transitions`, `view-transition-class`</summary>

- **[::backdrop](https://webstatus.dev/features/backdrop), [&lt;dialog>](https://webstatus.dev/features/dialog), [overlay](https://webstatus.dev/features/overlay), [Popover](https://webstatus.dev/features/popover), [@starting-style](https://webstatus.dev/features/starting-style), [transition-behavior](https://webstatus.dev/features/transition-behavior)**
  - **animate-to-from-top-layer**: Animate elements such as dialogs, popovers, and tooltips as they're entering/exiting the top layer.
- **[:autofill](https://webstatus.dev/features/autofill)**
  - **autofill-address-form**: Build an address form with correct autocomplete attributes and autofill support.
  - **autofill-highlight-inputs**: Use CSS to highlight form fields that have been autofilled by the browser and not edited by the user.
- **[:has()](https://webstatus.dev/features/has), [:not()](https://webstatus.dev/features/not)**
  - **child-state-based-styling**: Build a component that changes its styling based on the state of one of its child elements. For example, a component that renders in light or dark mode based on whether a theme toggle is checked (or not).
  - **content-based-styling**: Build a component that changes its layout based on whether it contains specific child elements (or not). For example, if the component contains an image, use a multi-column layout, otherwise default to a single-column layout.
- **[:user-valid and :user-invalid](https://webstatus.dev/features/user-pseudos)**
  - **accessible-error-announcement**: Synchronize programmatic accessibility states (like aria-invalid) with the visual :user-invalid state to ensure screen reader users receive error feedback only after interaction, mirroring the visual experience.
  - **required-field-feedback**: Provide error message for required form fields that were skipped or left empty *only* after user interaction, to avoid preemptive errors and ensure feedback is timely and contextually relevant to the user's flow.
  - **select-menu-interaction**: Validate that a non-default option has been chosen in a select menu only after the user has interacted with the control.
  - **validate-input-after-interaction**: Show form field validation feedback (e.g. password complexity or email format requirements) only after the user has finished their initial interaction, avoiding premature errors on page load or while the user is typing.
  - **style-parent-with-has**: Style parent elements of a form field (e.g. labels or fieldsets) when the field is invalid.
- **[@starting-style](https://webstatus.dev/features/starting-style), [transition-behavior](https://webstatus.dev/features/transition-behavior)**
  - **animate-element-entry-exit**: Smoothly hide/show elements as they are added/removed from the DOM or as their display values are toggled.
- **[&lt;details>](https://webstatus.dev/features/details), [Mutually exclusive &lt;details> elements](https://webstatus.dev/features/details-name), [hidden="until-found"](https://webstatus.dev/features/hidden-until-found)**
  - **search-hidden-content**: Hide content from view using patterns such as accordions, tabs, and "Read more" sections, while ensuring the hidden text reveals itself during native "Find in page" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.
- **[&lt;dialog closedby>](https://webstatus.dev/features/dialog-closedby)**
  - **light-dismiss-a-dialog**: Create a modal dialog that can be closed via light dismiss (i.e. clicking or tapping outside of the dialog)
  - **platform-controls-dismiss-dialog**: Create a modal dialog that can be closed via standard platform-specific user actions, such as pressing the `Esc` key on desktop platforms, or a "back" or "dismiss" gesture on mobile platforms
- **[&lt;dialog>](https://webstatus.dev/features/dialog), [Invoker commands](https://webstatus.dev/features/invoker-commands), [Popover](https://webstatus.dev/features/popover)**
  - **declarative-dialog-popover-control**: Toggle the visibility of a dialog or popover from a button without writing JavaScript.
- **[AbortController and AbortSignal](https://webstatus.dev/features/aborting), [fetchLater](https://webstatus.dev/features/fetchlater)**
  - **batch-analytics-events**: Debounce and batch multiple analytics events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.
  - **full-session-analytics**: Reliably track analytics, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.
- **[accent-color](https://webstatus.dev/features/accent-color)**
  - **brand-consistent-forms**: Match checkboxes, radio buttons, range sliders, and progress bars to your site's color palette without replacing them with custom components.
- **[accent-color](https://webstatus.dev/features/accent-color), [color-scheme](https://webstatus.dev/features/color-scheme), [light-dark()](https://webstatus.dev/features/light-dark), [prefers-color-scheme media query](https://webstatus.dev/features/prefers-color-scheme)**
  - **browser-ui-color-theme**: Configure built-in browser UI (e.g. scrollbars, form controls, etc) to respect the user's light/dark theme preference.
- **[Active view transition](https://webstatus.dev/features/active-view-transition), [View transitions](https://webstatus.dev/features/view-transitions)**
  - **directional-navigation-transitions**: Animate visual state changes to reflect the direction of a user's navigational flow, such as sliding new content in from the right when advancing forward or from the left when returning to a previous screen.
- **[Anchor position container queries](https://webstatus.dev/features/container-anchor-position-queries), [Popover](https://webstatus.dev/features/popover)**
  - **position-aware-tooltips**: Build tooltips and popovers with directional arrows (or other visual styling) that automatically point the correct way when the element flips to a fallback position.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [prefers-reduced-motion media query](https://webstatus.dev/features/prefers-reduced-motion)**
  - **anchor-positioning-tab-underline**: Transition an element seamlessly between two target element positions. For example, moving a selected tab underline between the previously selected tab and the currently selected tab.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Interest invokers](https://webstatus.dev/features/interest-invokers), [Popover](https://webstatus.dev/features/popover), [popover="hint"](https://webstatus.dev/features/popover-hint)**
  - **interest-triggered-tooltips**: Show a tooltip or supplemental information when a user hovers over, focuses on, or long-presses an interactive element, without requiring a click.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Popover](https://webstatus.dev/features/popover)**
  - **persistent-app-tours**: Create persistent onboarding walkthroughs using tethered native overlays that stay open during user interaction.
  - **resilient-context-menus-and-nested-dropdowns**: Build accessible, responsive menus, tooltips, dropdowns, or contextual overlays that must be tethered to specific UI elements, guaranteeing that the overlay automatically repositions itself (e.g., flipping axes) when it encounters viewport edges, ensuring it never gets cut off.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Popover](https://webstatus.dev/features/popover), [sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count), [transition-behavior](https://webstatus.dev/features/transition-behavior)**
  - **persistent-toast-notifications**: Create non-intrusive toast and overlay notifications for persistent, stackable messaging and state communication.
- **[blocking="render"](https://webstatus.dev/features/blocking-render), [Cross-document view transitions](https://webstatus.dev/features/cross-document-view-transitions), [&lt;link rel="expect">](https://webstatus.dev/features/link-rel-expect)**
  - **consistent-cross-document-transitions**: Ensure critical page state is loaded and stable before initiating a cross-document view transition. This means critical CSS styles are loaded and applied, critical JavaScript is loaded and run, and the HTML visible for the user's initial view of the page has been parsed before the transition runs.
- **[blocking="render"](https://webstatus.dev/features/blocking-render)**
  - **flicker-free-client-side-ab-testing**: Deliver and render A/B tests, multi-variate tests, or other experiments using client-side JavaScript to alter or inject HTML, CSS, and JavaScript without the original content showing first before flickering or flashing to show the experiment content.
- **[calc-size()](https://webstatus.dev/features/calc-size), [interpolate-size](https://webstatus.dev/features/interpolate-size)**
  - **animate-to-intrinsic-sizes**: Smoothly animate interactive components (like accordions, menus, and expanding cards) to and from their natural dimensions.
  - **calculate-with-intrinsic-sizes**: Calculate the size of an element based on its intrinsic size, while ensuring it fits within given design constraints.
- **[color-scheme](https://webstatus.dev/features/color-scheme), [prefers-color-scheme media query](https://webstatus.dev/features/prefers-color-scheme), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-light-dark-preferences**: Ensure the scrollbar visually matches the user's operating system light/dark mode preference
- **[color-scheme](https://webstatus.dev/features/color-scheme), [light-dark()](https://webstatus.dev/features/light-dark)**
  - **component-specific-light-dark-theme**: Create component-specific themes by forcing explicit color schemes on individual UI elements, giving users theme choices that are decoupled from their global operating system preferences
- **[Container queries](https://webstatus.dev/features/container-queries)**
  - **fluid-scaling**: Scale items like font size, spacing, and media sizes smoothly based on the parent container's size rather than using fixed breakpoints
  - **size-aware-styling**: Build a component whose styles can be conditionally dependent on its own width or height, rather than the width or height of the viewport. For example a card component that can change its layouts depending on how large it is, or a call-to-action button that can conditionally display helper text based on its width.
- **[Container scroll-state queries](https://webstatus.dev/features/container-scroll-state-queries)**
  - **carousel-snap-highlights**: Visually highlight the currently snapped non-interactive item in scroll-snapping carousels, galleries, or full-page swipe experiences. For example, expanding a card when snapped, or revealing hidden content.
  - **scroll-position-aware-elements**: Build floating buttons or widgets (back-to-top, scroll-to-bottom, chat launchers, etc.) that appear and disappear based on whether the user has scrolled at all.
  - **scrollability-affordance-hints**: Build scroll-shadow overlays, gradient fades, or directional arrow indicators that appear only when there's actually more content to scroll to in that direction.
- **[content-visibility](https://webstatus.dev/features/content-visibility), [hidden="until-found"](https://webstatus.dev/features/hidden-until-found)**
  - **defer-rendering-heavy-content**: Reduce rendering times in content-heavy web pages (e.g. pages with long feeds, lots of articles, or complex dashboards), by deferring rendering for any content that is not immediately visible to the user.
- **[content-visibility](https://webstatus.dev/features/content-visibility)**
  - **efficient-background-processing**: Conserve system resources and battery life by pausing background JavaScript execution (such as `<canvas>` animations, WebGL rendering, or high-frequency WebSocket data polling) when the component is off-screen and then resume them just-in-time when they scroll back into view.
  - **faster-spa-view-transitions**: Enable faster transitions back to previously visited views in a Single-Page Application (SPA) by preserving their structural DOM state instead of destroying and rebuilding them on every navigation.
  - **interactions-in-complex-layouts**: Make interactions snappier and more responsive (reducing Interaction to Next Paint (INP) scores) by avoiding layout re-calculations in complex layouts, such as data-heavy dashboards or spreadsheet-style grids.
- **[Cross-document view transitions](https://webstatus.dev/features/cross-document-view-transitions), [Navigation API](https://webstatus.dev/features/navigation), [View transitions](https://webstatus.dev/features/view-transitions)**
  - **cross-document-transitions**: Create smooth, seamless transitions between full page navigations, such as cross-fades, custom reveal effects, or morphing of content from one page to the next.
- **[Customizable &lt;select>](https://webstatus.dev/features/customizable-select)**
  - **animated-select-picker**: Create a custom select component whose dropdown is animated. For example, the menu fades or slides into view, or the options animate upon selection.
  - **branded-select-styling**: Create custom select elements whose button, picker, arrow icon, and checkmark all seamlessly match your brand or design system's typography, colors, spacing, and border treatments.
  - **custom-select-picker-layouts**: Create custom select pickers whose options are positioned in unique or interesting ways, rather than the traditional stacked list of options.
  - **rich-media-picker**: Create a custom select component whose options can contain complex HTML formatting (e.g. images, icons, and other rich formatting) rather than just plain text.
- **[Email, telephone, and URL &lt;input> types](https://webstatus.dev/features/input-email-tel-url), [inputmode](https://webstatus.dev/features/inputmode)**
  - **autofill-sign-in-form**: Build a sign-in form with correct autocomplete values and autofill support.
  - **autofill-sign-up-form**: Build a sign-up form with correct autocomplete values and autofill support.
- **[enterkeyhint](https://webstatus.dev/features/enterkeyhint), [Email, telephone, and URL &lt;input> types](https://webstatus.dev/features/input-email-tel-url), [inputmode](https://webstatus.dev/features/inputmode)**
  - **autofill-payment-form**: Build a payment form that collects card details with correct autocomplete values and autofill support.
- **[Event timing](https://webstatus.dev/features/event-timing), [Long animation frames](https://webstatus.dev/features/long-animation-frames)**
  - **identify-inp-causes**: Identify slow running JavaScript that is impacting INP metric
- **[Fetch](https://webstatus.dev/features/fetch), [Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **deprioritize-background-fetches**: Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **optimize-image-priority**: Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.
  - **optimize-script-priority**: Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority), [&lt;link rel="preload">](https://webstatus.dev/features/link-rel-preload)**
  - **optimize-preload-priority**: Optimize the relative priority of preloaded content to reduce critical resource load delays.
- **[field-sizing](https://webstatus.dev/features/field-sizing)**
  - **form-fields-automatically-fit-contents**: Allow form fields to grow and shrink to fit the user input, e.g. as the user types or selects a different option. Apply maximum and minimum size limits to create dynamic and responsive form fields that conform with the page design.
- **[font-size-adjust](https://webstatus.dev/features/font-size-adjust)**
  - **visually-stable-font-fallbacks**: Define font styles such that text remains readable and visually consistent in the event that there's a swap between the perferred font and one of the fallbacks (or vise versa).
  - **visually-stable-mixed-fonts**: Define font styles such that text remains readable and visually consistent in situations where multiple fonts are used to render a single block of text.
- **[Form-associated WebMCP attributes](https://webstatus.dev/features/declarative-webmcp)**
  - **agentic-forms**: Expose client-side functionality as tools to AI agents by annotating standard HTML forms with WebMCP attributes.
- **[image-set()](https://webstatus.dev/features/image-set)**
  - **resolution-optimized-pseudo-elements**: Use resolution-optimized images in CSS pseudo-elements (such as `::before` and `::after`) to reduce the number of DOM nodes.
  - **deliver-optimized-decorative-images**: Deliver optimized decorative images (such as backgrounds, UI icons, or complex masks) by simultaneously providing next-generation image formats (like AVIF or WebP) alongside multiple pixel densities (like 1x and 2x) so the browser can dynamically negotiate the best combination of file size and visual quality for the user's device capabilities.
- **[Individual transform properties](https://webstatus.dev/features/individual-transforms)**
  - **individual-transform-properties**: Animate or override individual CSS transform properties (e.g. translate, rotate, scale) independently of other transform properties on a single element.
- **[inert](https://webstatus.dev/features/inert), [Intersection observer](https://webstatus.dev/features/intersection-observer), [Popover](https://webstatus.dev/features/popover), [Registered custom properties](https://webstatus.dev/features/registered-custom-properties), [Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations), [scroll-initial-target](https://webstatus.dev/features/scroll-initial-target), [Scroll snap](https://webstatus.dev/features/scroll-snap)**
  - **navigation-drawer**: Create a navigation drawer component that, when triggered from a menu button, slides in from the side overlayed on top of existing page content, and slides out when dismissed (by swiping away, tapping outside, or pressing escape).
- **[Interest invokers](https://webstatus.dev/features/interest-invokers)**
  - **interest-triggered-action-previews**: Show a live preview of a button's effect when a user signals interest (e.g. hovering, focusing, or long-pressing) but before they commit to clicking.
- **[Intl.DurationFormat](https://webstatus.dev/features/intl-duration-format), [Temporal](https://webstatus.dev/features/temporal)**
  - **format-human-readable-durations**: Present elapsed time or durations to users in a readable, localized format, with the flexibility to display either detailed unit breakdowns (e.g., "1 hour and 30 minutes") or total unit counts (e.g., "90 minutes") depending on context.
- **[Invoker commands](https://webstatus.dev/features/invoker-commands)**
  - **declarative-button-actions**: Declaratively connect a button to any element to trigger custom, application-specific actions using declarative button commands, invoker commands, button commands, custom commands, or declarative toggle actions.
- **[Language detector](https://webstatus.dev/features/languagedetector)**
  - **language-detection**: Detect the language of user-generated content or already present site content.
- **[linear() easing](https://webstatus.dev/features/linear-easing)**
  - **physics-based-easing**: Create custom, physics-based animation and transition effects, like bounce and spring, that feel more natural and engaging than traditional easing curves.
- **[Long animation frames](https://webstatus.dev/features/long-animation-frames)**
  - **identify-heavy-scripts**: Identify the scripts most responsible for long animation frames
- **[Masks](https://webstatus.dev/features/masks), [Registered custom properties](https://webstatus.dev/features/registered-custom-properties)**
  - **interactive-content-reveal**: Create interactive reveal effects, such as a spotlight that follows the user's pointer to uncover details within an image or UI section.
- **[moveBefore()](https://webstatus.dev/features/move-before)**
  - **move-dom-element-without-losing-state**: Move or reparent a DOM element without losing important element state, such as interactivity states (:focus/:active), <iframe> loading state, animation/transition state, etc
  - **persistent-top-layer-ui**: Keep a modal dialog, fullscreen element, or native popover visibly open and functionally active when its underlying DOM node is moved or reparented in the DOM.
- **[navigator.modelContext](https://webstatus.dev/features/navigator-modelcontext)**
  - **agentic-javascript-tools**: Programmatically register client-side JavaScript functions as tools for AI agents using the WebMCP Imperative API.
- **[Page visibility](https://webstatus.dev/features/page-visibility), [Page visibility state](https://webstatus.dev/features/page-visibility-state)**
  - **detect-initial-visibility-state**: Reliably determine whether a page was initially loaded in the background, even in cases where the script is loaded asynchronously after the user foregrounded the page.
- **[Page visibility state](https://webstatus.dev/features/page-visibility-state)**
  - **calculate-total-foreground-time**: Calculate the total time a user actually spent viewing a page, excluding periods when the tab was in the background.
- **[prefers-contrast media query](https://webstatus.dev/features/prefers-contrast), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-contrast-preferences**: Enhance scrollbar visibility for users who prefer high-contrast interfaces
- **[Scheduler API](https://webstatus.dev/features/scheduler)**
  - **break-up-long-tasks**: Break up heavy synchronous processing (complex computations and/or long loops) or DOM updates, to let the browser handle user input and repaint the screen.
  - **schedule-tasks-by-priority**: Schedule tasks with different priorities to ensure critical work runs first while background work is deferred.
- **[Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations), [Scroll snap](https://webstatus.dev/features/scroll-snap)**
  - **carousel-slide-effects**: Create a carousel of slides with images or other visual elements, where each slide animates as they enter/center/exit their scroller. For example, the slides may fade-in/fade-out, rotate, get bigger or smaller, etc.
- **[Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations)**
  - **parallax-scroll-effects**: Create scroll-based effects (such as parallax) where foreground and background layers move at different rates, creating a sense of depth as the user scrolls.
  - **scroll-entry-exit-effects**: Create fade-in, scale-up, or other complex reveal-type effects on elements as they enter and exit the scrollport (or viewport) while the user is scrolling.
  - **scroll-progress-indicator**: Create a scroll progress bar, stepped progress tracker, or any visual affordance that communicates how far through a page or section the user has scrolled.
  - **scrollytelling**: Animate visual properties on a target element — such as fading a backdrop, shifting a background color, or to create scrollytelling experiences — driven entirely by the scrollport position of a completely different element.
  - **shrinking-header-on-scroll**: Smoothly animate a fixed header or full-page cover on scroll to dynamically shrink, gain shadows, and transform its layout over a predefined scroll distance.
- **[scroll-initial-target](https://webstatus.dev/features/scroll-initial-target), [Scroll snap](https://webstatus.dev/features/scroll-snap)**
  - **pull-to-reveal**: Build a pull-to-reveal feature that would enable the user to pull down on the screen to reveal more content, like a search bar.
- **[scroll-initial-target](https://webstatus.dev/features/scroll-initial-target), [scrollIntoView()](https://webstatus.dev/features/scroll-into-view)**
  - **scroll-target-on-load**: Build a scrollable list of elements (e.g. a carousel of images or a chat conversation thread) that can be displayed with a particular element scrolled into view on the initial render.
- **[scrollbar-color](https://webstatus.dev/features/scrollbar-color), [scrollbar-width](https://webstatus.dev/features/scrollbar-width)**
  - **customize-scrollbar-color-and-thickness**: Customize the color or thickness of a scrollbar
- **[scrollend](https://webstatus.dev/features/scrollend)**
  - **defer-work-until-scroll-ends**: Defer expensive operations like DOM updates, data fetching, analytics tracking, or layout recalculation until after scrolling completes to maintain smooth scroll performance.
- **[sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count)**
  - **dynamic-sibling-animations**: Stagger animation or transition timing across sibling elements so each one starts after a computed delay based on its position in the sibling list.
- **[sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count), [sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)](https://webstatus.dev/features/trig-functions)**
  - **dynamic-sibling-styling**: Create dynamic visual spectrums or layout arrangements that automatically adapt to the number of elements in a group.
- **[Speculation rules](https://webstatus.dev/features/speculation-rules)**
  - **improve-next-page-load-performance**: Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.
- **[Summarizer](https://webstatus.dev/features/summarizer)**
  - **summarizer**: Summarize text content using the on-device Summarizer API.
- **[Temporal](https://webstatus.dev/features/temporal)**
  - **sequence-distributed-events**: Log and sequence operations in distributed microservices or high-throughput tracing environments by recording timestamps with nanosecond resolution.
  - **calculate-event-differentials**: Calculate the duration and time remaining between dates and times.
  - **capture-location-agnostic-data**: Record chronological data that should not change based on a user's location, such as birthdates, recurring alarms, or national holidays.
  - **coordinate-global-events**: Schedule future meetings or events by explicitly binding them to a geographical IANA time zone so that event times remain accurate regardless of Daylight Saving Time (DST) transitions, "skipped" or "repeated" hours during clock changes.
  - **manage-recurring-intervals**: Calculate recurring intervals for subscription billings or payroll cycles, automatically adjusting for edge cases such as month-end transitions (e.g., adding one month to January 31st) to ensure accurate period calculations.
  - **model-partial-time-concepts**: Model date and time concepts that inherently lack a standard component (such as a specific year, day, or date) without using arbitrary placeholder values that introduce calculation errors.
  - **stabilize-reactive-state**: Manage task deadlines or schedules in data-driven views without unexpected side effects from shared mutable state.
  - **support-global-calendar-systems**: Display and calculate dates in non-Gregorian calendar systems (e.g., Islamic, Hebrew, or Chinese) accurately for international users.
- **[text-box](https://webstatus.dev/features/text-box)**
  - **precise-text-alignment**: Achieve precise vertical alignment with text of any font. For example, exactly equal visual padding above and below text, or aligning text perfectly flush with adjacent icons or images.
- **[text-wrap](https://webstatus.dev/features/text-wrap)**
  - **prevent-text-wrapping**: Ensure the browser does not insert line breaks into text and will allow text to overflow its container.
- **[text-wrap: balance](https://webstatus.dev/features/text-wrap-balance), [text-wrap: pretty](https://webstatus.dev/features/text-wrap-pretty)**
  - **improve-text-layout-and-legibility**: Improve the layout and legibility of short standalone text content, such as headings no longer than a few lines, by enabling the browser to apply evenly balanced line breaks when wrapping text.
- **[Top-level await](https://webstatus.dev/features/top-level-await)**
  - **conditional-async-dependencies**: Conditionally load or initialize async dependencies (such as importing polyfills for missing web features) without requiring complex orchestration across all of a page's script dependencies.
- **[Translator](https://webstatus.dev/features/translator)**
  - **translator**: Translate text between languages using the on-device Translator API.
- **[View transitions](https://webstatus.dev/features/view-transitions)**
  - **same-document-transitions**: Visually connect persisting elements across different page states or navigations in a Single Page Application (SPA) (e.g. expanding a product thumbnail into a full-bleed hero image) by smoothly morphing their size, position, or other styling properties.
- **[view-transition-class](https://webstatus.dev/features/view-transition-class), [View transitions](https://webstatus.dev/features/view-transitions)**
  - **group-element-transitions**: Transition a group of similar elements simultaneously using the same transition logic, such as removing a product from a shopping cart and having all the other products animate into their new positions.
</details>



## Installation

```bash
npx modern-web-guidance install
```

### 🍦 Universal Skills Pack
Consult your coding agent's documentation for installation instructions. You can also use Vercel's `skills` CLI:
```bash
DISABLE_TELEMETRY=1 npx skills add GoogleChrome/modern-web-guidance
```

### ✴️ Claude Code
```bash
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
/reload-plugins
```

### ♊ Gemini CLI
```bash
gemini extensions install https://github.com/GoogleChrome/modern-web-guidance --auto-update
```
*(Note: If the CLI hits a 404 error and asks to install via "git clone" instead, simply say yes! This is perfectly normal while the project is in private alpha.)*

### 🌐 VSCode Extension


*Note: We'll publish to a markplace soon; In the meantime, install the slow way (which won't auto-update):*

* Clone this repo
* In VSCode, open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
* Select "Extensions: Install from Location..."
* Navigate to the `modern-web-guidance` directory and select it.

Compatibility with VSCode forks: unknown.
