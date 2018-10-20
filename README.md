# ascii-image

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/uncompiled/ascii-image)


`<ascii-image>` is a [Web Component](https://www.webcomponents.org/)
that displays an image as [ASCII art](https://en.wikipedia.org/wiki/ASCII_art).

<img width="600" alt="ASCII image example" src="https://user-images.githubusercontent.com/408989/30008294-119952d8-90ec-11e7-91ab-69f4b133c128.png">

By default, the ASCII image is scaled to 80 columns because old school
terminals could only show 80 characters on a single line.

You can use the `columns` attribute to specify the number of columns
to use when the ASCII art is generated.

## Example

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="ascii-image.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<ascii-image src="demo/all-the-things.png" columns="90"></ascii-image>
```

## Installation

Install `ascii-image` as a dependency:

```
npm install ascii-image --save
```

Import it as an ES module:

```javascript
import AsciiImage from 'ascii-image'
window.customElements.define('ascii-image', AsciiImage);
```

In your HTML, you can use like any other HTML tag:

```html
<ascii-image src="demo/all-the-things.png" columns="90"></ascii-image>
```

Here's a vanilla JS [codesandbox](https://codesandbox.io/s/wz7kxvx555).

## Tests

```
npm install -g web-component-tester
wct
```

## Credits

- [A Basic ASCII Art Algorithm](http://mattmik.com/articles/ascii/ascii.html)
- [Character representation of grey scale images](http://paulbourke.net/dataformats/asciiart/)

## License

The MIT License
