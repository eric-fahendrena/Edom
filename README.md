# Edom.js

Edom.js is a JavaScript library that allows you to interact with the DOM easily.

<div style="height: 200px;">
  <img src="edom-logo.png" alt="Edom.js Logo" style="width: 100%; height: 100%; object-fit: cover;">
</div>

## Installation

To install edom.js, you can use npm:
```bash
npm install edomjs
```
Import edom.js into you project:
```js
import edom from 'edomjs';

// if you don't use npm ...
import edom from 'https://cdn.jsdelivr.net/npm/edomjs@latest';
```

## Examples

Edom.js is easy to use.

### Hello, world!

Write "Hello, world!" in an `h1` element:
```js
import edom from 'edomjs';

// Create h1 element
const h1 = edom.create('h1');
// Write a text
edom.write(h1)('Hello, world!');

// Add the element to the body
edom.append(h1)(document.body);

// Or create many elements
const elements = edom.create(['h2','h3','h4']);

// Write a text to all elements
edom.write(elements)('Hello, world!');

// Add all elements to the body
edom.append(elements)(document.body);


```

### Functions

```js
const element = edom.create('div'); // create an element

// write text to an element
edom.write(element)("Your text here");

// set html (this completely changes the html inside the element)
edom.setHTML(element)('<span>HTML code</span>');

// add html (this adds an html code in the element)
edom.addHTML(element)('<span>HTML code</span>');

// inserting element
edom.append(element)(parent); // append element to a parent element
edom.insertBefore(element)(newElement);
edom.insertAfter(element)(newElement);

// add attribute
edom.addAttr(element)({'prop': 'value', 'prop1': 'value'});

// add style to an element
edom.addCSS(element)({color: 'red', fontSize: '12px'});

// get computed css
const compCSS = edom.getComputedCSS(element)('width');

// classes utilities
edom.addClass(element)('my-class'); // add class
edom.removeClass(element)('my-class'); // remove class
edom.toggleClass(element)('my-class'); // toggle class

// event handling
edom.addEvent(element)(eventType)(handler); // add event listener
edom.removeEvent(element)(eventType)(handler); // remove event listener

// apply css animation
edom.applyAnimation(element)({
  name: animationName,
  duration: animationDuration,
  timingFunction: animationTimingFunction
});

// ajax get
edom.ajaxGet(url)(callback);
const promise = edom.fetchGet(url);

// serialize form data
const jsonObject = edom.serializeForm(formElement);

// multiply an element
const p = edom.create('p');
edom.write(p)('Hello!');
edom.append(p)(document.body);
edom.multiply(p)(5);
```


## Contributing

We welcome contributions from the community! Please follow the guidelines outlined in the [GitHub documentation on contributing to projects](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks).

Thank you for your interest in contributing!

## License

Mozilla Public License Version 2.0
