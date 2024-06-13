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

// Or create many elements
const elements = create(['h2','h3','h4']);

// Write a text to all elements
write(elements)('Hello, world!');

// Add all elements to the body
append(elements)(document.body);


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

// inserting element
append(element)(parent); // append element to a parent element
insertBefore(element)(newElement);
insertAfter(element)(newElement);

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

// event handling
addEvent(element)(eventType)(handler); // add event listener
removeEvent(element)(eventType)(handler); // remove event listener

// apply css animation
applyAnimation(element)({
  name: animationName,
  duration: animationDuration,
  timingFunction: animationTimingFunction
});

// ajax get
ajaxGet(url)(callback);
const promise = fetchGet(url);

// serialize form data
const jsonObject = serializeForm(formElement);


// multiply an element
const p =  create('p');
write(p)('Hello !');
append(p)(document.body);
multiply(p)(5);
```

### Form

```js
// Define your parameter form 
const formConfig = {
  id: 'myForm',
  className: 'form-class',
  action: '/submit',
  method: 'post',
  fields: [
    { type: 'text', name: 'username', label: 'Username:', placeholder: 'Enter your username' },
    { type: 'password', name: 'password', label: 'Password:', placeholder: 'Enter your password' },
    { type: 'email', name: 'email', label: 'Email:', placeholder: 'Enter your email' },
    { type: 'textarea', name: 'message', label: 'Message:', rows: 5, cols: 30 },
    {
      type: 'select', name: 'options', label: 'Options:', options: [
          { value: '1', text: 'Option 1' },
          { value: '2', text: 'Option 2' },
          { value: '3', text: 'Option 3' }
      ]
    },
    { type: 'submit', name: 'submit', text: 'Submit' }
  ]
};

// create the form
const form = createForm(formConfig);

// append the form
append(form)(document.body);
```

## Contributing

We welcome contributions from the community! Please follow the guidelines outlined in the [GitHub documentation on contributing to projects](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks).

Thank you for your interest in contributing!

## License

Mozilla Public License Version 2.0