!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),s?y(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function h(){var e=p();if(T(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?g(n,u-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(v="maxWait"in n)?m(j(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:O(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S="feedback-form-state",T=document.querySelector(".feedback-form"),h=document.querySelector("input"),O=document.querySelector("textarea");T.addEventListener("input",e(t)((function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""===n.value||""===r.value)return void console.log("Please fill in all the fields!");var i={email:n.value,message:r.value};localStorage.setItem(S,JSON.stringify(i))})),500),T.addEventListener("submit",e(t)((function(e){e.preventDefault();var t={email:h.value,message:O.value};localStorage.removeItem(S),console.log(t),e.currentTarget.reset()})),500);var w=JSON.parse(localStorage.getItem(S));if(w){var x=w.email,N=w.message;h.value=x,O.value=N}else h.value="",O.value=""}();
//# sourceMappingURL=03-feedback.f69802e2.js.map
