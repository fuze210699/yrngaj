/**
 * This file contains patches for browser extensions or third-party scripts
 * that might be causing conflicts with our application.
 */

/**
 * Patch for "wpt-tb.js" error: "e.target.className.indexOf is not a function"
 * This error occurs when a click handler tries to use indexOf on className which might be a DOMTokenList
 */
export function applyBrowserPatches() {
  // Patch for click handlers that expect className to be a string
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    if (type === 'click' && typeof listener === 'function') {
      const wrappedListener = function(event) {
        // Ensure className is treated as a string
        const originalClassName = event.target.className;
        if (originalClassName && typeof originalClassName !== 'string' && originalClassName.baseVal !== undefined) {
          // For SVG elements, className is an SVGAnimatedString with a baseVal
          Object.defineProperty(event.target, 'className', {
            get: function() {
              return originalClassName.baseVal || '';
            },
            configurable: true
          });
        } else if (originalClassName && typeof originalClassName !== 'string') {
          // For other elements where className might be a DOMTokenList
          Object.defineProperty(event.target, 'className', {
            get: function() {
              return originalClassName.toString();
            },
            configurable: true
          });
        }
        
        try {
          return listener.apply(this, arguments);
        } catch (error) {
          console.warn('Error in click handler:', error);
          // Prevent the error from bubbling up
          return true;
        }
      };
      
      return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    
    return originalAddEventListener.call(this, type, listener, options);
  };
  
  console.log('Browser patches applied');
} 