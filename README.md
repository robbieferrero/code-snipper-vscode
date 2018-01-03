# Code Snipper for VSCode

This is a Visual Studio Code extension for [Code Snipper](https://github.com/abhisheksoni27/code-snipper) for creating images from code snippets.

## Features

* Create a `png` image from an open file
* ***Coming soon:*** Create an image from selected text

```js
const success = 'false';
while(!success){
    keepWorking();
}
```

![Output](images/output.png)

## Extension Settings

Default settings:

* `code-snipper.resolution: 1`
* `code-snipper.theme: 'hybrid'`
* `code-snipper.font: 'Source Code Pro'`
* `code-snipper.fontSize: 20`
* `code-snipper.background: #fff`

**Available Themes**

All the themes available in [hightlight.js](https://highlightjs.org/) can be used. The list can be found at [Themes](https://codeprose.me/code-snipper/themes.html)

To check out how each theme looks, check this [Highlight.js demo](https://highlightjs.org/static/demo/)

## Requirements
GraphicsMagick or ImageMagick are required for this extension to work. 
* [Install for Windows](https://www.imagemagick.org/script/download.php)
* **Install for Mac OS X**:
    ```
    brew install imagemagick
    brew install graphicsmagick
    ```

## Known Issues & TODOs
* No support yet for full file to png for long files. For now you can adjust the fontSize in the configuration settings. 
* No support yet for output filename overrides, currently defaults to the source file location
* No support yet for temporary file creation, files must be saved to output png.
* Selection-to-image is not yet implemented, just file for now


## Release Notes

### 0.1.0

Initial release

-----------------------------------------------------------------------------------------------------------
