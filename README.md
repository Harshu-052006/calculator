# Full-Screen Responsive JavaScript Calculator

A modern, edge-to-edge web calculator engineered to eliminate dead screen space by dynamically scaling its container, grid keys, and typography to fit any screen size or device orientation.

---

## Tech Stack & Architectural Overview

The calculator is built purely with native web standards to ensure seamless browser compatibility, lightweight execution, and instant loading speeds:
* **Structure:** Semantic HTML5 forms the foundation, keeping content elements isolated cleanly from layouts.
* **Layout Engine:** A hybrid layout model utilizing Flexbox to expand the application container edge-to-edge ($100\text{vw} \times 100\text{vh}$) alongside CSS Grid to manage the internal button matrix seamlessly.
* **Execution Logic:** Vanilla JavaScript (ES6+) processes component states, math evaluation strings, and layout condition tracking.

---

## Structural Blueprint & Flow Control

The application uses an edge-to-edge data mutation layout. User interactions with the visual grid trigger specific input pipelines that parse, sanitize, and update the UI container dynamically.

### Components Breakdown

1. **Input State Modules (`appendNumber` & `appendOperator`)**: Separates data entry into dedicated channels. Numbers handle decimal sanitization and drop default zeros. Operators clear display states and implement an override system that swaps old operations for new ones if clicked back-to-back.
2. **Computational Engine (`calculate`)**: Captures the visual mathematical string and evaluates it instantly using JavaScript's native evaluation runtime. It automatically clamps floating-point precision down to 8 decimal places to eliminate binary rounding errors.
3. **Safety Interceptors (`try...catch`)**: Wraps evaluation calculations inside a defensive safety block. If an illegal operations sequence occurs—such as division by zero—the interceptor catches the runtime crash and renders a clean `"Error"` message instead of freezing the interface state.

---

## Key Responsive Features

* **Zero Border Void:** Eliminates surrounding background margins by stretching the container to fill the absolute boundaries of the user's viewport screen.
* **Vertical Flex Stretching:** Uses flexbox column growth rules to force the layout buttons to stretch vertically and fill all remaining desktop or mobile height automatically.
* **Viewport-Scale Typography:** Replaces traditional static text sizing with viewport height (`vh`) parameters, allowing font scales to grow and shrink proportionally with browser window adjustments.

---

## Installation & Local Execution

Because this application relies entirely on standard vanilla front-end tech stacks, no package managers (`npm`/`yarn`), runtimes (`Node.js`), or build bundlers (`Vite`/`Webpack`) are required to initialize the software.

### Step-by-Step Launch

1. **Clone or Download the Code**: Copy the HTML code block into a local system file.
2. **Save the File**: Name the file explicitly as `calculator.html`.
3. **Run Locally**: Double-click the file on your local machine, or open your preferred web browser and drag the file directly into an active window tab.

---

## Source File Structure Matrix

The single-file architecture ensures high component cohesion and fast rendering speeds:

```text
calculator.html
 ├── HTML Structure (<div class="calculator">)
 ├── CSS Rulesets (<style> declaration block)
 └── JS Engine Script (<script> behavior logic block)