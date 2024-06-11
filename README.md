# Edom
Edom is a javascript library that allows interact with DOM easly.

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

## Hello, world!
Write "Hello, world!" in h1 element.
```js
// Create h1 element
const h1 = createNew('h1');
// Write a text
write(h1)('Hello, world!');

// Add the element to the body
appendIn(document.body)(h1);
```
