# Modern Web Guidance

This curated collection of skills, tools, and AI-ready documentation injects Chrome's web platform knowledge directly into your workflow, ensuring your coding agent builds apps that are modern, fast, and secure by default.

#### Skill Coverage in `v0.0.5`

<details>
<summary><strong>17 web features with implementation guidance from Chrome's experts</strong>: :user-valid and :user-invalid, &lt;details>, &lt;link rel="preload">, AbortController and AbortSignal, color-scheme, Fetch, Fetch priority, fetchLater, hidden="until-found", Mutually exclusive &lt;details> elements, prefers-color-scheme media query, prefers-contrast media query, Registered custom properties, Scroll-driven animations, scrollbar-color, scrollbar-width, Speculation rules</summary>

- **[:user-valid and :user-invalid](https://webstatus.dev/features/user-pseudos)**
  - **accessible-error-announcement**: Synchronize programmatic accessibility states (like aria-invalid) with the visual :user-invalid state to ensure screen reader users receive error feedback only after interaction, mirroring the visual experience.
  - **required-field-feedback**: Provide error message for required form fields that were skipped or left empty *only* after user interaction, to avoid preemptive errors and ensure feedback is timely and contextually relevant to the user's flow.
  - **select-menu-interaction**: Validate that a non-default option has been chosen in a select menu only after the user has interacted with the control.
  - **style-parent-with-has**: Style parent elements of a form field (e.g. labels or fieldsets) when the field is invalid.
  - **validate-input-after-interaction**: Show form field validation feedback (e.g. password complexity or email format requirements) only after the user has finished their initial interaction, avoiding premature errors on page load or while the user is typing.
- **[&lt;details>](https://webstatus.dev/features/details), [Mutually exclusive &lt;details> elements](https://webstatus.dev/features/details-name), [hidden="until-found"](https://webstatus.dev/features/hidden-until-found)**
  - **search-hidden-content**: Hide content from view using patterns such as accordions, tabs, and "Read more" sections, while ensuring the hidden text reveals itself during native "Find in page" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.
- **[AbortController and AbortSignal](https://webstatus.dev/features/aborting), [fetchLater](https://webstatus.dev/features/fetchlater)**
  - **batch-analytics-events**: Debounce and batch multiple analytics events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.
  - **full-session-analytics**: Reliably track analytics, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.
- **[color-scheme](https://webstatus.dev/features/color-scheme), [prefers-color-scheme media query](https://webstatus.dev/features/prefers-color-scheme), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-light-dark-preferences**: Ensure the scrollbar visually matches the user's operating system light/dark mode preference
- **[Fetch](https://webstatus.dev/features/fetch), [Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **deprioritize-background-fetches**: Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority)**
  - **optimize-image-priority**: Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.
  - **optimize-script-priority**: Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.
- **[Fetch priority](https://webstatus.dev/features/fetch-priority), [&lt;link rel="preload">](https://webstatus.dev/features/link-rel-preload)**
  - **optimize-preload-priority**: Optimize the relative priority of preloaded content to reduce critical resource load delays.
- **[prefers-contrast media query](https://webstatus.dev/features/prefers-contrast), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **adapt-scrollbar-to-contrast-preferences**: Enhance scrollbar visibility for users who prefer high-contrast interfaces
- **[Registered custom properties](https://webstatus.dev/features/registered-custom-properties), [Scroll-driven animations](https://webstatus.dev/features/scroll-driven-animations), [scrollbar-color](https://webstatus.dev/features/scrollbar-color)**
  - **animate-scrollbar-color-on-scroll**: Animate the scrollbar color dynamically as the user scrolls down the page
- **[scrollbar-color](https://webstatus.dev/features/scrollbar-color), [scrollbar-width](https://webstatus.dev/features/scrollbar-width)**
  - **customize-scrollbar-color-and-thickness**: Customize the color or thickness of a scrollbar
- **[Speculation rules](https://webstatus.dev/features/speculation-rules)**
  - **improve-next-page-load-performance**: Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.
</details>



## Installation

### 🍦 Universal Skills Pack
Consult your coding agent's documentation for installation instructions. You can also use Vercel's `skills` CLI:
```bash
DISABLE_TELEMETRY=1 npx skills add GoogleChrome/skills-alpha
```

### ✴️ Claude Code

Since the repository is currently private, we recommend the `git clone` flow for installation:

```bash
git clone git@github.com:GoogleChrome/skills-alpha.git
/plugin install ./skills-alpha
/reload-plugins
```

### ♊ Gemini CLI

Similarly, for the Gemini CLI, install the extension locally:

```bash
# Assuming you already cloned the repo above
gemini extensions install ./skills-alpha --auto-update
```

### VSCode Extension

Compatible with Antigravity, Cursor, etc.

*Note: We'll publish to a markplace soon; In the meantime, install the slow way.*

* Clone this repo
* In VSCode, open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
* Select "Extensions: Install from Location..."
* Navigate to the `skills-alpha` directory and select it.

*Note: This is a local extension and will not be automatically updated.*

