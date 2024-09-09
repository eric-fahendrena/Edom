(function(global, factory) {

   // Load the factory into the right environment
   if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = factory(global, true);
   } else {
      factory(global);
   }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

   const edom = {

      /**
       * Create new html element(s)
       * @param   {string | Array<string>} elName - Single element name or array of element names
       * @return  {HTMLElement | Array<HTMLElement>} - Single HTMLElement or array of HTMLElements
       */
      create: elName => {
         if (Array.isArray(elName)) {
            return elName.map(name => document.createElement(name));
         } else {
            return document.createElement(elName);
         }
      },

      /**
       * Find an element by id
       * @param   {String} id element id (without #)
       * @return   {HTMLElement} the element with the given id
       */
      find: id => document.getElementById(id),

      /**
       * Select an element from html
       * @param   {String} query selector
       * @return   {HTMLElement} an element selected
       */
      select: qs => document.querySelector(qs),

      /**
       * Select all elements having the specified query selector
       * @param   {String} query selector
       * @param   {Array.<HTMLElement>} elements selected and each item is of type object
       */
      selectAll: qs => document.querySelectorAll(qs),

      /**
       * Apply the attributes specified in params, as an Object, to a HTMLElement.
       * @param   {HTMLElement} element
       * @return   {Function(attrsObj<Object>)} apply the attrs to the element
       */
      addAttr: el => attrsObj => {
         const attrsArrayed = Object.entries(attrsObj);
         attrsArrayed.forEach(arr => el.setAttribute(arr[0], arr[1]));
      },

      /**
       * add CSS to an element
       * @param   {HTMLElement}
       * @return   {Function(styleObj<Object>)}
       */
      addCSS: el => style => {
         const styleArrayed = Object.entries(style);
         styleArrayed.forEach(arr => el['style'][arr[0]] = arr[1]);
      },

      /**
       * Get style of an element. Note that it only return the style set from javascript and not the computed style.
       * @param   {HTMLElement} element
       * @return   {Function(cssProp<String>)} specify the css property to get
       */
      getCSS: element => cssProp => {
         return element['style'][cssProp];
      },

      /**
       * Get computed style of an HTMLElement
       * @param   {HTMLElement} element
       */
      getComputedCSS: element => cssProp => {
         const compStyle = window.getComputedStyle(element);
         return compStyle.getPropertyValue(cssProp);
      },

      /**
       * Add class
       * @param   {HTMLElement}
       * @return   {Function(className<Array|String>)}
       */
      addClass: element => classNames => {
         if (Array.isArray(classNames)) {
            classNames.forEach(item => element.classList.add(item));
         } else {
            element.classList.add(classNames);
         }
      },

      /**
       * Remove class
       * @param   {HTMLElement}
       * @return   {Function(className<Array|String>)}
       */
      removeClass: element => classNames => {
         if (Array.isArray(classNames)) {
            classNames.forEach(item => element.classList.remove(item));
         } else {
            element.classList.remove(classNames);
         }
      },

      /**
       * Toggle class
       * @param   {HTMLElement}
       * @return   {Function(className<String>)}
       */
      toggleClass: element => className => {
         element.classList.toggle(className);
      },

      /**
       * Verify if an element contain a class.
       * @param   {HTMLElement}
       * @return   {Function(className<String>): boolean}
       */
      containsClass: element => className => {
         return element.classList.contains(className);
      },

      /**
       * Set inner text of HTMLElement(s).
       * @param   {HTMLElement | Array<HTMLElement>} el - Single HTMLElement or array of HTMLElements
       * @return  {Function(text<String>)}
       */
      write: el => text => {
         if (Array.isArray(el)) {
            el.forEach((element) => {
               element.innerText = text;
            });
         } else {
            el.innerText = text;
         }
      },

      /**
       * Set html code
       * @param   {HTMLElement} element
       * @return   {Function(htmlCode<String>)} add the html code into the element
       */
      setHTML: el => htmlCode => el['innerHTML'] = htmlCode,

      /**
       * add html code
       * @param   {HTMLElement} element
       * @return   {Function(htmlCode<String>)} add the html code into the element
       */
      addHTML: el => htmlCode => el['innerHTML'] += htmlCode,

      /**
       * Append a HTMLElement in an HTMLElement as child.
       * @param   {HTMLElement  | Array<HTMLElement>} child
       * @return   {Function(child<HTMLElement>)} specify the parent
       */
      append: child => parent => {
         if (Array.isArray(child)) {
            parent.appendChild(child[0]);
            let ref = child[0];
            for (let i = 1; i < child.length; i++) {
               ref.after(child[i]);
               ref = child[i];
            }
         } else {
            parent.appendChild(child);
         }
      },

      /**
       * Rotate an element.
       * @param   {HTMLElement} element
       * @return   {Function(degrees<Integer>)} specify the degrees to apply.
       */
      rotate: element => degrees => {
         edom.addCSS(element)({ transform: `rotate(${degrees}deg)` });
      },

      /**
       * Dynamic script loading
       * @param   {String} src
       */
      loadScript: (src) => {
         const script = edom.create('script');
         edom.addAttr(script)({ src });
         edom.append(script)(document.body);
      },

      /**
       * Add event listener to an element
       * @param   {string | HTMLElement} element
       * @return   {Function(event<String>): handler<Function>} specify the event type and the handler
       */
      addEvent: element => event => handler => {
         if (typeof element == 'string') {
            edom.select(element).addEventListener(event, handler)
         } else {
            element.addEventListener(event, handler);
         }
      },

      /**
       * Remove event listener from an element
       * @param   {string | HTMLElement} element
       * @return   {Function(event<String>): handler<Function>} specify the event type and the handler
       */
      removeEvent: element => event => handler => {
         if (typeof element == 'string') {
            edom.select(element).removeEventListener(event, handler)
         } else {
            element.removeEventListener(event, handler);
         }
      },

      /**
       * Insert an element before another element
       * @param {HTMLElement} referenceElement The reference element before which the new element will be inserted
       * @return {Function(newElement<HTMLElement>)} - newElement - The new element to be inserted
       */
      insertBefore: referenceElement => newElement => {
         referenceElement.parentNode.insertBefore(newElement, referenceElement);
      },

      /**
       * Insert an element after another element
       * @param {HTMLElement} The reference element after which the new element will be inserted
       * @return {Function(referenceElement<HTMLElement>)} - newElement - The new element to be inserted
       */
      insertAfter: referenceElement => newElement => {
         referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
      },

      /**
       * Apply CSS animation to an element
       * @param {HTMLElement} element - The element to animate
       * @return {Function(animObject<object>)} - Apply animation
       */
      applyAnimation: element => animObject => {
         edom.addCSS(element)({
            animationName: animObject.name,
            animationDuration: animObject.duration,
            animationTimingFunction: animObject.timingFunction,
         });
      },

      /**
       * Perform an AJAX POST request
       * @param {string} url - The URL to send the request to
       * @param {string} token - The Bearer token for authorization
       * @param {object} data - The data to send
       * @param {Function(result)} onSuccess - The callback function to handle success response
       * @param {Function(error)} onError - The callback function to handle error response
       */
      ajaxPost: (url, token) => (data) => (onSuccess, onError) => {
         const xhr = new XMLHttpRequest();
         xhr.open('POST', url, true);
         xhr.setRequestHeader('content-type', 'application/json');
         xhr.setRequestHeader('authorization', 'bearer ' + token);
         xhr.onload = onSuccess;
         xhr.onerror = onError;
         xhr.send(JSON.stringify(data));
      },

      /**
       * Perform an AJAX GET request
       * @param {String} url - The URL to send the request to
       * @param {Function(callback)} callback - The callback function to handle the response
       */
      ajaxGet: url => callback => {
         const xhr = new XMLHttpRequest();
         xhr.open('GET', url, true);
         xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
               callback(xhr.responseText);
            }
         };
         xhr.send();
      },

      /**
       * Perform a Fetch GET request
       * @param {String} url - The URL to send the request to
       * @return {Promise} - A promise that resolves to the response
       */
      fetchGet: url => {
         return fetch(url)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
      },

      /**
       * Serialize form data
       * @param {HTMLFormElement} form - The form element to serialize
       * @return {Object} - The serialized form data
       */
      serializeForm: form => {
         const formData = new FormData(form);
         const data = {};
         formData.forEach((value, key) => {
            data[key] = value;
         });
         return data;
      },

      /**
       * Multiply an element by creating the specified number of copies and inserting them after the element.
       * @param   {HTMLElement} element
       * @return   {Function(number<Number>)} specify the number of copies
       */
      multiply: element => number => {
         let referenceNode = element;
         for (let i = 0; i < number; i++) {
            const clone = element.cloneNode(true);
            referenceNode.after(clone);
            referenceNode = clone;
         }
      },
   };

   if (!noGlobal) {
      window.edom = edom;
   }

   return edom;

});
