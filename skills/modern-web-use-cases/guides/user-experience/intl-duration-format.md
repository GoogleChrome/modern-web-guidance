The `Intl.DurationFormat` API provides a standard, locale-sensitive way to format durations (e.g., "2 hours and 30 minutes" or "02:30:00"). It replaces brittle, manual string concatenation and complex third-party libraries by leveraging the browser's built-in internationalization data to handle pluralization, list separators, and unit translations automatically.

### Implementation steps

1.  **Detect Support**: Verify the API is available in the current environment before initialization.
2.  **Initialize the Formatter**: Create an instance with desired locales and configuration options (e.g., `style`, `unitDisplay`).
3.  **Define a Duration Object**: Construct an object containing one or more time units (`years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`).
4.  **Format the Duration**: Call the `format()` method with the duration object to get a localized string.

```javascript
// 1. Feature detection
if ('DurationFormat' in Intl) {
  // 2. Initialize with options
  // 'style' can be "long", "short", "narrow", or "digital"
  const formatter = new Intl.DurationFormat('en-US', {
    style: 'long',
    hoursDisplay: 'always' // Ensure hours are shown even if zero
  });

  // 3. Define the duration to format
  const duration = {
    hours: 1,
    minutes: 30,
    seconds: 0
  };

  // 4. Generate the localized string
  // Output: "1 hour, 30 minutes, 0 seconds"
  const formatted = formatter.format(duration);
}
```

### Advanced Formatting Options

The API allows granular control over individual units and the overall presentation style.

```javascript
const duration = { hours: 5, minutes: 45 };

// Digital style for timers (e.g., "5:45:00")
const timerFormatter = new Intl.DurationFormat('en-US', {
  style: 'digital',
  hoursDisplay: 'always'
});

// Narrow style for compact UI (e.g., "5h 45m")
const compactFormatter = new Intl.DurationFormat('en-US', {
  style: 'narrow',
  minutesDisplay: 'auto' // Only shows if non-zero
});
```

### Fallback strategies

Intl.DurationFormat is Newly. It's been Baseline since 2025-03-04.

If `Intl.DurationFormat` is unavailable, developers should fall back to basic manual formatting or a lightweight polyfill. A simple manual fallback for a common "HH:MM:SS" pattern might look like this:

```javascript
function formatDurationFallback(duration) {
  // Check for native support first
  if ('DurationFormat' in Intl) {
    return new Intl.DurationFormat('en-US', { style: 'digital' }).format(duration);
  }

  // Basic manual fallback for digital style
  const h = String(duration.hours || 0).padStart(2, '0');
  const m = String(duration.minutes || 0).padStart(2, '0');
  const s = String(duration.seconds || 0).padStart(2, '0');
  return `${h}:${m}:${s}`;
}
```
