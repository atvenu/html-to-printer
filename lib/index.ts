const PRINT_ELEMENT_ID = 'print-area'

const STYLE_ELEMENT_ID = 'print-area-css'
const PRINT_CSS = `
  @media screen {
    #print-area {
      display: none;
    }
  }
  @media print {
    body * {
      visibility: hidden;
    }
    #print-area, #print-area * {
      visibility: visible;
    }
    #print-area {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`

export function print(html: string): void {
  const styleEl = document.createElement('style')
  styleEl.id = STYLE_ELEMENT_ID
  styleEl.type = 'text/css'
  styleEl.innerHTML = PRINT_CSS
  document.head.appendChild(styleEl)

  const printEl = document.createElement('div')
  printEl.id = PRINT_ELEMENT_ID
  printEl.innerHTML = html
  document.body.appendChild(printEl)
  window.print()
  setTimeout(() => {
    // need to remove print elements on the next tick otherwise print preview doesn't always display styles
    styleEl.remove()
    printEl.remove()
  }, 0)
}
