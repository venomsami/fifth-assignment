### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

Answers..
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById('id') returns a single element with the specified ID. It’s fast and IDs should be unique.

getElementsByClassName('class') returns a live collection of all elements with that class. It updates automatically if the DOM changes.

querySelector('selector') returns the first element that matches any CSS selector (ID, class, tag, etc.).

querySelectorAll('selector') returns all elements matching a CSS selector as a static NodeList. Unlike getElementsByClassName, it does not update if the DOM changes.

2. How to create and insert a new element into the DOM

First, create the element using document.createElement('tagName').

Then, set its content or attributes, for example element.textContent = "Hello" or element.setAttribute('id', 'newId').

Finally, insert it into the DOM with parent.appendChild(element) or parent.insertBefore(element, referenceNode).
3. Event Bubbling

Event bubbling is when an event starts from the target element (the one clicked) and then bubbles up to its parent, then grandparent, and so on up to the document.
4. Event Delegation

Event delegation is when you attach a single event listener to a parent element to handle events on its child elements. It’s useful for dynamically added elements and reduces the number of listeners needed.

5. Difference between preventDefault() and stopPropagation()

preventDefault() stops the default browser action (like following a link or submitting a form).

stopPropagation() stops the event from bubbling up to parent elements.
