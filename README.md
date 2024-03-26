<h1 align="center">wysimark-standalone</h1>

> A standalone package to re-bundle Wysimark so that it can be loaded directly from the web, e.g. web components

<h2 align="center">Example usage</h2>

```html
<html>
  <head>
    <script src="https://www.unpkg.com/wysimark-standalone/dist/javascript/index.cjs.js"></script>
  </head>
  <body>
    <div id="editor-container"></div>
    <script>
      const container = document.getElementById("editor-container")
      // createWysimark is available on window now
      const wysimark = createWysimark(container, {
        initialMarkdown: "# Hello World",
      })
    </script>
  </body>
</html>
```