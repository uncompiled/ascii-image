# ascii-image

`<ascii-image>` is a [Web Component](https://www.webcomponents.org/) 
that displays an image as [ASCII art](https://en.wikipedia.org/wiki/ASCII_art).

By default, the ASCII image is scaled to 80 columns because old school
terminals could only show 80 characters on a single line.

You can use the `width` attribute to specify the number of columns
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
<ascii-image src="demo/all-the-things.png" width="120"></ascii-image>
```

## Installation

Import the web component using HTML imports:

```
<link rel="import" href="ascii-image.html">
```

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
