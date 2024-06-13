/**
 * Create new html element
 * @param   {string} element's name
 * @return   {HTMLElement}
 */
const create = elName => document.createElement(elName);
/**
 * Select an element from html
 * @param   {String} query selector
 * @return   {HTMLElement} an element selected
 */
const select = qs => document.querySelector(qs);
/**
 * Select all elements having the specified query selector
 * @param   {String} query selector
 * @param   {Array.<HTMLElement>} elements selected and each item is of type object
 */
const selectAll = qs => document.querySelectorAll(qs);
/**
 * Apply the attributes specified in params, as an Object, to a HTMLElement.
 * @param   {HTMLElement} element
 * @return   {Function(attrsObj<Object>)} apply the attrs to the element
 */
const addAttr = el => attrsObj => {
   const attrsArrayed = Object.entries(attrsObj);
   attrsArrayed.map(arr => el.setAttribute(arr[0], arr[1]));
}
/**
 * add CSS to an element
 * @param   {HTMLElement}
 * @return   {Function(styleObj<Object>)}
 */
const addCSS = el => style => {
   const styleArrayed = Object.entries(style);
   styleArrayed.map(arr => el['style'][arr[0]] = arr[1]);
}
/**
 * Get style of an element. Note that it only return the style set from javascript and not the computed style.
 * @param   {HTMLElement} element
 * @return   {Function(cssProp<String>)} specify the css property to get
 */
const getCSS = element => cssProp => {
   return element['style'][cssProp];
}
/**
 * Get computed style of an HTMLElement
 * @param   {HTMLElement} element
 */
const getComputedCSS = element => cssProp => {
   const compStyle = window.getComputedStyle(element);
   return compStyle.getPropertyValue(cssProp);
}
/**
 * Add class
 * @param   {HTMLElement}
 * @return   {Function(className<Array|String>)}
 */
const addClass = element => classNames => {
   if (Array.isArray(classNames)) {
      classNames.map(item => element.classList.add(item));
   } else {
       element.classList.add(classNames);
   }
}
/**
 * Remove class
 * @param   {HTMLElement}
 * @return   {Function(className<Array|String>)}
 */
const removeClass = element => classNames => {
   if (Array.isArray(classNames)) {
      classNames.map(item => element.classList.remove(item));
   } else {
       element.classList.remove(classNames);
   }
}
/**
 * Toggle class
 * @param   {HTMLElement}
 * @return   {Function(className<String>)}
 */
const toggleClass = element => className => {
   element.classList.toggle(className);
}
/**
 * Verify if an element contain a class.
 * @param   {HTMLElement}
 * @return   {Function(className<String>): boolean}
 */
const containsClass = element => className => {
   return element.classList.contains(className);
}
/**
 * Make text into a HTMLElement.
 * @param   {HTMLElement} el
 * @return   {Function(text<String>)}
 */
const write = el => text => el['innerText'] = text;
/**
 * Set html code
 * @param   {HTMLElement} element
 * @return   {Function(htmlCode<String>)} add thr html code into the element
 */
const setHTML = el => htmlCode => el['innerHTML'] = htmlCode;
/**
 * add html code
 * @param   {HTMLElement} element
 * @return   {Function(htmlCode<String>)} add thr html code into the element
 */
const addHTML = el => htmlCode => el['innerHTML'] += htmlCode;
/**
 * Append a HTMLElement in an HTMLElement as child.
 * @param   {HTMLElement} child
 * @return   {Function(child<HTMLElement>)} specify the parent
 */
const append = child => parent => parent.appendChild(child);
/**
 * Rotate an element.
 * @param   {HTMLElement} element
 * @return   {Function(degrees<Integer>)} specify the degrees to apply.
 */
const rotate = element => degrees => {
   setCSSPropValue(element)("transform")("rotate(" + degrees + "deg)");
}
/**
 * Dynamic script loading
 * @param   {String} src
 */
const loadScript = (src) => {
   const script = createNew('script');
   setAttrTo(script)("src")(src);
   appendIn(document.body)(script);
}

/**
 * Add event listener to an element
 * @param   {HTMLElement} element
 * @return   {Function(event<String>): handler<Function>)} specify the event type and the handler
 */
const addEvent = element => event => handler => {
   element.addEventListener(event, handler);
}

/**
* Remove event listener from an element
* @param   {HTMLElement} element
* @return   {Function(event<String>): handler<Function>} specify the event type and the handler
*/
const removeEvent = element => event => handler => {
   element.removeEventListener(event, handler);
}

/**
 * Insert an element before another element
 * @param {HTMLElement} referenceElement The reference element before which the new element will be inserted
 * @return {Function(newElement<HTMLElement>)} - newElement - The new element to be inserted
 */
const insertBefore = referenceElement => newElement => {
   referenceElement.parentNode.insertBefore(newElement, referenceElement);
}

/**
* Insert an element after another element
* @param {HTMLElement} The reference element after which the new element will be inserted
* @return {Function(referenceElement<HTMLElement>)} - newElement - The new element to be inserted
*/
const insertAfter = referenceElement => newElement => {
   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

/**
 * Apply CSS animation to an element
 * @param {HTMLElement} element - The element to animate
 * @return {Function(animObject<object>)} - Apply animation
 */
const applyAnimation = element => animObject => {
   element.style.animationName = animObject.name;
   element.style.animationDuration = animObject.duration;
   element.style.animationTimingFunction = animObject.timingFunction;
}

/**
 * Perform an AJAX GET request
 * @param {String} url - The URL to send the request to
 * @param {Function(calback)} callback - The callback function to handle the response
 */
const ajaxGet = url => callback => {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.onreadystatechange = () => {
       if (xhr.readyState === 4 && xhr.status === 200) {
           callback(xhr.responseText);
       }
   };
   xhr.send();
}

/**
* Perform a Fetch GET request
* @param {String} url - The URL to send the request to
* @return {Promise} - A promise that resolves to the response
*/
const fetchGet = url => {
   return fetch(url)
       .then(response => response.json())
       .catch(error => console.error('Error:', error));
}

/**
 * Serialize form data
 * @param {HTMLFormElement} form - The form element to serialize
 * @return {Object} - The serialized form data
 */
const serializeForm = form => {
   const formData = new FormData(form);
   const data = {};
   formData.forEach((value, key) => {
       data[key] = value;
   });
   return data;
}
