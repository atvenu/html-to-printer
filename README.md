# html-to-printer

Print custom HTML on the client-side

Exposes a function that takes in a HTML string, and opens a print preview window with its contents,
respecting the CSS of that page.

## Installation

```sh
npm install --save html-to-printer
```


## Usage

```js
import { print } from 'html-to-printer'

print(`<div class="report-printout"> ... </div>`)
```

## How it works
It does this by:

1. creating an element containing the HTML string,
2. hiding everything else,
3. opening print preview which displays just the newly created element, and
4. removing the element and putting everything else back to normal.

This generally happens fast enough that you don't see any flicker in your browser window.
