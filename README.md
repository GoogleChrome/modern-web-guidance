# Modern Web Guidance

This curated collection of skills, tools, and AI-ready documentation injects Chrome's web platform knowledge directly into your workflow, ensuring your coding agent builds apps that are modern, fast, and secure by default.

#### Skill Coverage in `v0.0.12`

<details>
<summary><strong>47 web features with implementation guidance from Chrome's experts</strong>: `:autofill`, `:has()`, `:not()`, `:user-valid and :user-invalid`, `&lt;details>`, `&lt;dialog>`, `&lt;link rel="expect">`, `&lt;link rel="preload">`, `AbortController and AbortSignal`, `Anchor positioning`, `blocking="render"`, `color-scheme`, `content-visibility`, `Cross-document view transitions`, `Customizable &lt;select>`, `Email, telephone, and URL &lt;input> types`, `enterkeyhint`, `Fetch`, `Fetch priority`, `fetchLater`, `field-sizing`, `hidden="until-found"`, `inert`, `inputmode`, `Interest invokers`, `Intl.DurationFormat`, `Invoker commands`, `Long animation frames`, `Mutually exclusive &lt;details> elements`, `Popover`, `popover="hint"`, `prefers-color-scheme media query`, `prefers-contrast media query`, `prefers-reduced-motion media query`, `Registered custom properties`, `Scroll snap`, `Scroll-driven animations`, `scroll-initial-target`, `scrollbar-color`, `scrollbar-width`, `scrollIntoView()`, `sibling-count() and sibling-index()`, `sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)`, `Speculation rules`, `Temporal`, `text-wrap`, `transition-behavior`</summary>

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
- **[&lt;details>](https://webstatus.dev/features/details), [Mutually exclusive &lt;details> elements](https://webstatus.dev/features/details-name), [hidden="until-found"](https://webstatus.dev/features/hidden-until-found)**
  - **search-hidden-content**: Hide content from view using patterns such as accordions, tabs, and "Read more" sections, while ensuring the hidden text reveals itself during native "Find in page" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.
- **[&lt;dialog>](https://webstatus.dev/features/dialog), [Invoker commands](https://webstatus.dev/features/invoker-commands), [Popover](https://webstatus.dev/features/popover)**
  - **declarative-dialog-popover-control**: Toggle the visibility of a dialog or popover from a button without writing JavaScript.
- **[AbortController and AbortSignal](https://webstatus.dev/features/aborting), [fetchLater](https://webstatus.dev/features/fetchlater)**
  - **batch-analytics-events**: Debounce and batch multiple analytics events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.
  - **full-session-analytics**: Reliably track analytics, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [prefers-reduced-motion media query](https://webstatus.dev/features/prefers-reduced-motion)**
  - **anchor-positioning-tab-underline**: Transition an element seamlessly between two target element positions. For example, moving a selected tab underline between the previously selected tab and the currently selected tab.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Interest invokers](https://webstatus.dev/features/interest-invokers), [Popover](https://webstatus.dev/features/popover), [popover="hint"](https://webstatus.dev/features/popover-hint)**
  - **interest-triggered-tooltips**: Show a tooltip or supplemental information when a user hovers over, focuses on, or long-presses an interactive element, without requiring a click.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Popover](https://webstatus.dev/features/popover)**
  - **persistent-app-tours**: Create persistent onboarding walkthroughs using tethered native overlays that stay open during user interaction.
- **[Anchor positioning](https://webstatus.dev/features/anchor-positioning), [Popover](https://webstatus.dev/features/popover), [sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count), [transition-behavior](https://webstatus.dev/features/transition-behavior)**
  - **persistent-toast-notifications**: Create non-intrusive toast and overlay notifications for persistent, stackable messaging and state communication.
- **[blocking="render"](https://webstatus.dev/features/blocking-render), [Cross-document view transitions](https://webstatus.dev/features/cross-document-view-transitions), [&lt;link rel="expect">](https://webstatus.dev/features/link-rel-expect)**
  - **consistent-cross-document-transitions**: Ensure critical page state is loaded and stable before initiating a cross-document view transition. This means critical CSS styles are loaded and applied, critical JavaScript is loaded and run, and the HTML visible for the user's initial view of the page has been parsed before the transition runs.
- **[blocking="render"](https://webstatus.dev/features/blocking-render)**
  - **flicker-free-client-side-ab-testing**: Deliver and render A/B tests, multi-variate tests, or other experiments using client-side JavaScript to alter or inject HTML, CSS, and JavaScript without the original content showing first before flickering or flashing to show the experiment content.
- **[color-scheme](https://webstatus.dev/features/color-scheme), [prefers-color-scheme media query](https://webstatus.dev/features/prefers-color-scheme), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-light-dark-preferences**: Ensure the scrollbar visually matches the user's operating system light/dark mode preference
- **[content-visibility](https://webstatus.dev/features/content-visibility), [hidden="until-found"](https://webstatus.dev/features/hidden-until-found)**
  - **defer-rendering-heavy-content**: Reduce rendering times in content-heavy web pages (e.g. pages with long feeds, lots of articles, or complex dashboards), by deferring rendering for any content that is not immediately visible to the user.
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
- **[Fetch](https://webstatus.dev/features/fetch), [Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **deprioritize-background-fetches**: Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **optimize-image-priority**: Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.
  - **optimize-script-priority**: Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority), [&lt;link rel="preload">](https://webstatus.dev/features/link-rel-preload)**
  - **optimize-preload-priority**: Optimize the relative priority of preloaded content to reduce critical resource load delays.
- **[field-sizing](https://webstatus.dev/features/field-sizing)**
  - **form-fields-automatically-fit-contents**: Allow form fields to grow and shrink to fit the user input, e.g. as the user types or selects a different option. Apply maximum and minimum size limits to create dynamic and responsive form fields that conform with the page design.
- **[inert](https://webstatus.dev/features/inert), [Popover](https://webstatus.dev/features/popover), [Scroll snap](https://webstatus.dev/features/scroll-snap)**
  - **light-dismiss-content-overlay**: Create swipeable layered navigation menus using native overlays and scroll gestures.
- **[Intl.DurationFormat](https://webstatus.dev/features/intl-duration-format)**
  - **intl-duration-format**: Create locale-aware duration strings from objects representing time units like days, hours, and minutes.
- **[Long animation frames](https://webstatus.dev/features/long-animation-frames)**
  - **identify-heavy-scripts**: Identify the scripts most responsible for long animation frames
  - **identify-inp-causes**: Identify slow running JavaScript that is impacting INP metric
- **[prefers-contrast media query](https://webstatus.dev/features/prefers-contrast), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-contrast-preferences**: Enhance scrollbar visibility for users who prefer high-contrast interfaces
- **[Registered custom properties](https://webstatus.dev/features/registered-custom-properties), [Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **animate-scrollbar-color-on-scroll**: Animate the scrollbar color dynamically as the user scrolls down the page
- **[Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations), [Scroll snap](https://webstatus.dev/features/scroll-snap)**
  - **carousel-item-effects**: Create a carousel of slides with images or other visual elements, where each slide animates as they enter/center/exit their scroller. For example, the slides may fade-in/fade-out, rotate, get bigger or smaller, etc.
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
- **[sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count)**
  - **dynamic-sibling-animations**: Stagger animation or transition timing across sibling elements so each one starts after a computed delay based on its position in the sibling list.
- **[sibling-count() and sibling-index()](https://webstatus.dev/features/sibling-count), [sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)](https://webstatus.dev/features/trig-functions)**
  - **dynamic-sibling-styling**: Create dynamic visual spectrums or layout arrangements that automatically adapt to the number of elements in a group.
- **[Speculation rules](https://webstatus.dev/features/speculation-rules)**
  - **improve-next-page-load-performance**: Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.
- **[Temporal](https://webstatus.dev/features/temporal)**
  - **sequence-distributed-events**: Log and sequence operations in distributed microservices or high-throughput tracing environments by recording timestamps with nanosecond resolution.
  - **calculate-event-differentials**: Calculate the duration and time remaining between dates and times.
- **[text-wrap](https://webstatus.dev/features/text-wrap)**
  - **prevent-text-wrapping**: Ensure the browser does not insert line breaks into text and will allow text to overflow its container.
</details>



## Installation

### 🍦 Universal Skills Pack
Consult your coding agent's documentation for installation instructions. You can also use Vercel's `skills` CLI:
```bash
DISABLE_TELEMETRY=1 npx skills add GoogleChrome/skills-alpha
```

### ✴️ Claude Code
```bash
/plugin marketplace add GoogleChrome/skills-alpha
/plugin install googlechrome-skills@skills-alpha
/reload-plugins
```

### ♊ Gemini CLI
```bash
gemini extensions install https://github.com/GoogleChrome/skills-alpha --auto-update
```
*(Note: If the CLI hits a 404 error and asks to install via "git clone" instead, simply say yes! This is perfectly normal while the project is in private alpha.)*

### 🌐 VSCode Extension


*Note: We'll publish to a markplace soon; In the meantime, install the slow way (which won't auto-update):*

* Clone this repo
* In VSCode, open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
* Select "Extensions: Install from Location..."
* Navigate to the `skills-alpha` directory and select it.

Compatibility with VSCode forks: unknown.
