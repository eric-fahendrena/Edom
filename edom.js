/**
 * Create new html element
 * @param   {string} element's name
 * @return   {HTMLElement}
 */
const createNew = elName => document.createElement(elName);
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
 * Set attribute to a html element.
 * @param   {HTMLElement} element
 * @return   {Function(attrName<String>)<Function(value<String>)>}
 */
const setAttrTo = el => attrName => value => el.setAttribute(attrName, value);
/**
 * Apply the attributes registered in an Object to a HTMLElement.
 * @param   {HTMLElement} element
 * @return   {Function(attrsObj<Object>)} apply the attrs to the element
 */
const applyAttrsTo = el => attrsObj => {
   const attrsArrayed = Object.entries(attrsObj);
   attrsArrayed.map(arr => setAttrTo(el)(arr[0])(arr[1]));
}
/**
 * Set CSS property for an HTMLElement
 * @param   {HTMLElement} element
 * @return   {Function(cssProp<String>)<Function(value<String>)>}
 */
const setCSSPropValue = el => cssProp => value => el['style'][cssProp] = value;
/**
 * Apply the style registered in the object.
 * @param   {HTMLElement}
 * @return   {Function(styleObj<Object>)}
 */
const applyStyleTo = el => style => {
   const styleArrayed = Object.entries(style);
   styleArrayed.map(arr => setCSSPropValue(el)(arr[0])(arr[1]));
}
/**
 * Get style of an element. Note that it only return the style set from javascript and not the computed style.
 * @param   {HTMLElement} element
 * @return   {Function(cssProp<String>)} specify the css property to get
 */
const getStyleOf = element => cssProp => {
   return element['style'][cssProp];
}
/**
 * Get computed style for an HTMLElement
 * @param   {HTMLElement} element
 */
const getCSSFor = element => cssProp => {
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
 * Make html code into a HTMLElement
 * @param   {HTMLElement} element
 * @return   {Function(htmlCode<String>)} add thr html code into the element
 */
const makeHTMLInto = el => htmlCode => el['innerHTML'] = htmlCode;
/**
 * Append a HTMLElement in an HTMLElement as child.
 * @param   {HTMLElement} parent
 * @return   {Function(child<HTMLElement>)} specify the child to append
 */
const appendIn = parent => child => parent.appendChild(child);
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
