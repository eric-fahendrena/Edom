# Edom.js

Edom.js is a javascript library that allows interact with DOM easly.

## Installation

Go to your peoject directory
```bsh
mkdir my-project
cd my-project
```
Clone this repository
```bsh
git clone https://github.com/eric-fahendrena/Edom
```
Load edom.js to your html file followed by your javascript code.
```html
<script src="Edom/edom.js"></script>
<script>
  // Your code here ...
</script>
```

## Examples

Edom.js is easy to use.

### Hello, world!

Write "Hello, world!" in h1 element.
```js
// Create h1 element
const h1 = create('h1');
// Write a text
write(h1)('Hello, world!');

// Add the element to the body
append(h1)(document.body);
```

### Functions

```js
const element = create('div'); // create an element

// write text to an element
write(element)("Your text here");

// set html (this completely changes the html inside the element)
setHTML(element)('<span>HTML code</span>');

// add html (this adds an html code in the element)
addHTML(element)('<span>HTML code</span>');

// append element to a parent element
append(element)(parent);

// add attribute
addAttr(element)({'prop': 'value', 'prop1': 'value'});

// add style to an element
addCSS(element)({color: 'red', fontSize: '12px'});

// get computed css
const compCSS = getComputedCSS(element)('width');

// classes utilities
addClass(element)('my-class'); // add class
removeClass(element)('my-class'); // remove class
toggleClass(element)('my-class'); // toggle class
```

## Contributing

We welcome contributions from the community! Please follow the guidelines outlined in the [GitHub documentation on contributing to projects](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks).

Thank you for your interest in contributing!

## License

Mozilla Public License Version 2.0