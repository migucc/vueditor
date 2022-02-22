
let defaultConf = {
  spellcheck: true,
  toolbar: [
    'removeFormat', 'undo', 'redo', '|', 'element', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider', 'bold', 'italic', 'underline', 'strikeThrough',
    'link', 'unLink', 'divider', 'subscript', 'superscript', 'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
    '|', 'indent', 'outdent', 'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'table', '|', 'code', 'fullscreen', 'sourceCode'
  ],
  fontName: [
    { val: 'arial black' },
    { val: 'times new roman' },
    { val: 'Courier New' }
  ],
  fontSize: ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'],
  code: {
    type: ['bash', 'clike', 'css', 'html', 'java', 'javascript', 'php', 'python', 'sql'],
    pattern: {
      attr: 'class',
      value: 'language-#type#'
    }
  },
  defaultStyle: `
    pre {
      margin: 0;
      padding: 0.5rem;
      background: #f5f2f0;
    }
    img {
      max-width: 100%;
    }
  `
}

let config = JSON.parse(JSON.stringify(defaultConf))

export default {
  setConfig (data) {
    config = data
  },
  getConfig (name) {
    return name ? config[name] : config
  },
  getDefaultConf () {
    return defaultConf
  }
}
