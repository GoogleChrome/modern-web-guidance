#!/usr/bin/env node --experimental-strip-types
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// bin/modern-web.ts
var import_util = require("util");

// mcp-server/lib/store.ts
var import_lancedb = __toESM(require("@lancedb/lancedb"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_url = require("url");
var __filename = (0, import_url.fileURLToPath)(require('url').pathToFileURL(__filename).toString());
var __dirname = import_path.default.dirname(__filename);
var DATA_DIR = import_path.default.resolve(__dirname, "../../.modern-web-data");
var Store = class {
  dbUrl;
  constructor() {
    this.dbUrl = DATA_DIR;
    if (!import_fs.default.existsSync(this.dbUrl)) {
      import_fs.default.mkdirSync(this.dbUrl, { recursive: true });
    }
  }
  async getTable() {
    const db = await import_lancedb.default.connect(this.dbUrl);
    try {
      return await db.openTable("use_cases");
    } catch {
      return null;
    }
  }
  async upsert(data) {
    const db = await import_lancedb.default.connect(this.dbUrl);
    const tableNames = await db.tableNames();
    if (tableNames.includes("use_cases")) {
      await db.dropTable("use_cases");
    }
    await db.createTable("use_cases", data);
  }
  async search(queryVector, limit = 5, maxDistance = 1.5) {
    const table = await this.getTable();
    if (!table) {
      return [];
    }
    const fetchLimit = limit * 3;
    const results = await table.vectorSearch(queryVector).limit(fetchLimit).toArray();
    const seenIds = /* @__PURE__ */ new Set();
    const uniqueResults = [];
    for (const r of results) {
      const dist = r._distance;
      if (dist === void 0 || dist > maxDistance) continue;
      if (seenIds.has(r.id)) continue;
      seenIds.add(r.id);
      uniqueResults.push({
        id: r.id,
        description: r.description,
        category: r.category,
        featuresUsed: Array.from(r.featuresUsed),
        distance: dist.toFixed(2)
      });
      if (uniqueResults.length >= limit) break;
    }
    return uniqueResults;
  }
};

// mcp-server/lib/embedder.ts
var import_transformers = require("@huggingface/transformers");
var Embedder = class _Embedder {
  static instance;
  pipe = null;
  modelName = "Xenova/all-MiniLM-L6-v2";
  constructor() {
  }
  static getInstance() {
    if (!_Embedder.instance) {
      _Embedder.instance = new _Embedder();
    }
    return _Embedder.instance;
  }
  async init() {
    if (this.pipe) return;
    this.pipe = await (0, import_transformers.pipeline)("feature-extraction", this.modelName, { dtype: "q8" });
  }
  async embed(text) {
    if (!this.pipe) {
      await this.init();
    }
    if (!this.pipe) {
      throw new Error("Failed to initialize embedding pipeline");
    }
    const output = await this.pipe(text, { pooling: "mean", normalize: true });
    return Array.from(output.data);
  }
};

// lib/logger.ts
var import_fs2 = require("fs");
var import_path2 = __toESM(require("path"), 1);

// ../constants.ts
var MODERN_WEB_LOG_FILE = "modern-web.log";

// lib/logger.ts
function logToolResult(toolName, result) {
  try {
    const logDir = process.env.MODERN_WEB_LOG_DIR || process.cwd();
    const logPath = import_path2.default.join(logDir, MODERN_WEB_LOG_FILE);
    const logEntry = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      tool: toolName,
      result
    };
    (0, import_fs2.appendFileSync)(logPath, JSON.stringify(logEntry) + "\n", "utf8");
  } catch (err) {
    console.error("Failed to log tool result:", err);
  }
}

// lib/search.ts
async function searchUseCases(query) {
  const store = new Store();
  const embedder = Embedder.getInstance();
  const vector = await embedder.embed(query);
  const results = await store.search(vector);
  logToolResult("search_use_cases", results.map((r) => ({ id: r.id, distance: r.distance })));
  return results;
}

// mcp-server/data/modern-practices.ts
var import_fs3 = require("fs");
var import_path3 = __toESM(require("path"), 1);
var import_url2 = require("url");

// mcp-server/data/use-cases.gen.ts
var USE_CASES = [
  {
    "id": "accessible-error-announcement",
    "description": "Synchronize programmatic accessibility states (like aria-invalid) with the visual :user-invalid state to ensure screen reader users receive error feedback only after interaction, mirroring the visual experience.",
    "category": "accessibility",
    "featuresUsed": [
      ":user-valid and :user-invalid"
    ]
  },
  {
    "id": "batch-analytics-events",
    "description": "Debounce and batch multiple analytics events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.",
    "category": "performance",
    "featuresUsed": [
      "fetchLater",
      "AbortController and AbortSignal"
    ]
  },
  {
    "id": "deprioritize-background-fetches",
    "description": "Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.",
    "category": "performance",
    "featuresUsed": [
      "Fetch priority",
      "Fetch"
    ]
  },
  {
    "id": "full-session-analytics",
    "description": "Reliably track analytics, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.",
    "category": "performance",
    "featuresUsed": [
      "fetchLater",
      "AbortController and AbortSignal"
    ]
  },
  {
    "id": "improve-next-page-load-performance",
    "description": "Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.",
    "category": "performance",
    "featuresUsed": [
      "Speculation rules"
    ]
  },
  {
    "id": "optimize-image-priority",
    "description": "Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.",
    "category": "performance",
    "featuresUsed": [
      "Fetch priority"
    ]
  },
  {
    "id": "optimize-preload-priority",
    "description": "Optimize the relative priority of preloaded content to reduce critical resource load delays.",
    "category": "performance",
    "featuresUsed": [
      "Fetch priority",
      '<link rel="preload">'
    ]
  },
  {
    "id": "optimize-script-priority",
    "description": "Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.",
    "category": "performance",
    "featuresUsed": [
      "Fetch priority"
    ]
  },
  {
    "id": "adapt-scrollbar-to-contrast-preferences",
    "description": "Enhance scrollbar visibility for users who prefer high-contrast interfaces",
    "category": "user-experience",
    "featuresUsed": [
      "scrollbar-color",
      "prefers-contrast media query"
    ]
  },
  {
    "id": "adapt-scrollbar-to-light-dark-preferences",
    "description": "Ensure the scrollbar visually matches the user's operating system light/dark mode preference",
    "category": "user-experience",
    "featuresUsed": [
      "scrollbar-color",
      "color-scheme",
      "prefers-color-scheme media query"
    ]
  },
  {
    "id": "animate-scrollbar-color-on-scroll",
    "description": "Animate the scrollbar color dynamically as the user scrolls down the page",
    "category": "user-experience",
    "featuresUsed": [
      "scrollbar-color",
      "Scroll-driven animations",
      "Registered custom properties"
    ]
  },
  {
    "id": "customize-scrollbar-color-and-thickness",
    "description": "Customize the color or thickness of a scrollbar",
    "category": "user-experience",
    "featuresUsed": [
      "scrollbar-color",
      "scrollbar-width"
    ]
  },
  {
    "id": "required-field-feedback",
    "description": "Provide error message for required form fields that were skipped or left empty *only* after user interaction, to avoid preemptive errors and ensure feedback is timely and contextually relevant to the user's flow.",
    "category": "user-experience",
    "featuresUsed": [
      ":user-valid and :user-invalid"
    ]
  },
  {
    "id": "search-hidden-content",
    "description": 'Hide content from view using patterns such as accordions, tabs, and "Read more" sections, while ensuring the hidden text reveals itself during native "Find in page" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.',
    "category": "user-experience",
    "featuresUsed": [
      "<details>",
      "Mutually exclusive <details> elements",
      'hidden="until-found"'
    ]
  },
  {
    "id": "select-menu-interaction",
    "description": "Validate that a non-default option has been chosen in a select menu only after the user has interacted with the control.",
    "category": "user-experience",
    "featuresUsed": [
      ":user-valid and :user-invalid"
    ]
  },
  {
    "id": "style-parent-with-has",
    "description": "Style parent elements of a form field (e.g. labels or fieldsets) when the field is invalid.",
    "category": "user-experience",
    "featuresUsed": [
      ":user-valid and :user-invalid"
    ]
  },
  {
    "id": "validate-input-after-interaction",
    "description": "Show form field validation feedback (e.g. password complexity or email format requirements) only after the user has finished their initial interaction, avoiding premature errors on page load or while the user is typing.",
    "category": "user-experience",
    "featuresUsed": [
      ":user-valid and :user-invalid"
    ]
  }
];

// mcp-server/data/modern-practices.ts
var __filename2 = (0, import_url2.fileURLToPath)(require('url').pathToFileURL(__filename).toString());
var __dirname2 = import_path3.default.dirname(__filename2);
async function getGuide(useCaseId) {
  const useCase = USE_CASES.find((u) => u.id === useCaseId);
  if (!useCase) return null;
  const guidesDir = import_path3.default.resolve(__dirname2, "../../build/guides");
  const filePath = import_path3.default.join(guidesDir, useCase.category, `${useCaseId}.md`);
  try {
    const content = await import_fs3.promises.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

// lib/retrieve.ts
async function retrieveUseCase(useCaseId) {
  const guide = await getGuide(useCaseId);
  if (!guide) {
    throw new Error(`No guide found for use case: ${useCaseId}`);
  }
  logToolResult("get_best_practices", [{ id: useCaseId }]);
  return guide;
}

// bin/modern-web.ts
var { values } = (0, import_util.parseArgs)({
  args: process.argv.slice(2),
  options: {
    search: { type: "string", short: "s" },
    retrieve: { type: "string", short: "r" },
    help: { type: "boolean", short: "h" }
  },
  allowPositionals: false
});
function printUsage() {
  console.log(`
Usage: modern-web [options]

Options:
  -s, --search <query>          Search use cases by query
  -r, --retrieve <ids>          Retrieve use case(s) by ID(s), comma-separated
  -h, --help                    Show this help
`);
}
async function main() {
  if (values.help) {
    printUsage();
    process.exit(0);
  }
  if (values.search) {
    try {
      const results = await searchUseCases(values.search);
      console.log(JSON.stringify(results, null, 2));
    } catch (error) {
      console.error("Search failed:", error);
      process.exit(1);
    }
  } else if (values.retrieve) {
    const ids = values.retrieve.split(",").map((id) => id.trim()).filter(Boolean);
    if (ids.length === 0) {
      console.error("No IDs provided for retrieve.");
      process.exit(1);
    }
    for (const id of ids) {
      try {
        const guide = await retrieveUseCase(id);
        console.log(`
--- Guide for ${id} ---`);
        console.log(guide);
      } catch (error) {
        console.error(`Retrieve failed for ${id}:`, error);
        process.exit(1);
      }
    }
  } else {
    printUsage();
    process.exit(1);
  }
}
main().catch((err) => {
  console.error("Execution failed:", err);
  process.exit(1);
});
