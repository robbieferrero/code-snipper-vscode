# Code Snipper for VSCode

This is an extension for [Code Snipper](https://github.com/abhisheksoni27/code-snipper) that creates images from code snippets from vscode.

## Features

* Create an image from a file
* Create an image from selected text

```js
const success = 'false';
while(!success){
    keepWorking();
}
```

![Output](images/output.png)

> TODO: Add animation

## Extension Settings

Default settings:

* `code-snipper.resolution: 1`
* `code-snipper.theme: 'hybrid'`
* `code-snipper.font: 'Source Code Pro'`
* `code-snipper.fontSize: 20`

**Available Themes**

All the themes available in [hightlight.js](https://highlightjs.org/) can be used. The list can be found at [Themes.md](https://codeprose.me/code-snipper/themes.html)

To check out how each theme looks, check this [Highlight.js demo](https://highlightjs.org/static/demo/)
Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

## Requirements
GraphicsMagick or ImageMagick are required for this extension to work. 
* [Install for Windows](https://www.imagemagick.org/script/download.php)
* **Install for Mac OS X**:
    ```
    brew install imagemagick
    brew install graphicsmagick
    ```

## Known Issues
* No support yet for full file to png for long files. TODO.
For now you can adjust the fontSize in the configuration settings
* No support yet for output file overrides
* No support yet for temporary file creation

## Release Notes

### 1.0.0

Initial release

-----------------------------------------------------------------------------------------------------------
