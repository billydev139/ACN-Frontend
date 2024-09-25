"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-keymap";
exports.ids = ["vendor-chunks/prosemirror-keymap"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-keymap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-keymap/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keydownHandler: () => (/* binding */ keydownHandler),\n/* harmony export */   keymap: () => (/* binding */ keymap)\n/* harmony export */ });\n/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! w3c-keyname */ \"(ssr)/./node_modules/w3c-keyname/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n\n\nconst mac = typeof navigator != \"undefined\" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;\nfunction normalizeKeyName(name) {\n    let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];\n    if (result == \"Space\") result = \" \";\n    let alt, ctrl, shift, meta;\n    for(let i = 0; i < parts.length - 1; i++){\n        let mod = parts[i];\n        if (/^(cmd|meta|m)$/i.test(mod)) meta = true;\n        else if (/^a(lt)?$/i.test(mod)) alt = true;\n        else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;\n        else if (/^s(hift)?$/i.test(mod)) shift = true;\n        else if (/^mod$/i.test(mod)) {\n            if (mac) meta = true;\n            else ctrl = true;\n        } else throw new Error(\"Unrecognized modifier name: \" + mod);\n    }\n    if (alt) result = \"Alt-\" + result;\n    if (ctrl) result = \"Ctrl-\" + result;\n    if (meta) result = \"Meta-\" + result;\n    if (shift) result = \"Shift-\" + result;\n    return result;\n}\nfunction normalize(map) {\n    let copy = Object.create(null);\n    for(let prop in map)copy[normalizeKeyName(prop)] = map[prop];\n    return copy;\n}\nfunction modifiers(name, event, shift = true) {\n    if (event.altKey) name = \"Alt-\" + name;\n    if (event.ctrlKey) name = \"Ctrl-\" + name;\n    if (event.metaKey) name = \"Meta-\" + name;\n    if (shift && event.shiftKey) name = \"Shift-\" + name;\n    return name;\n}\n/**\nCreate a keymap plugin for the given set of bindings.\n\nBindings should map key names to [command](https://prosemirror.net/docs/ref/#commands)-style\nfunctions, which will be called with `(EditorState, dispatch,\nEditorView)` arguments, and should return true when they've handled\nthe key. Note that the view argument isn't part of the command\nprotocol, but can be used as an escape hatch if a binding needs to\ndirectly interact with the UI.\n\nKey names may be strings like `\"Shift-Ctrl-Enter\"`—a key\nidentifier prefixed with zero or more modifiers. Key identifiers\nare based on the strings that can appear in\n[`KeyEvent.key`](https:developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).\nUse lowercase letters to refer to letter keys (or uppercase letters\nif you want shift to be held). You may use `\"Space\"` as an alias\nfor the `\" \"` name.\n\nModifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or\n`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or\n`Meta-`) are recognized. For characters that are created by holding\nshift, the `Shift-` prefix is implied, and should not be added\nexplicitly.\n\nYou can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on\nother platforms.\n\nYou can add multiple keymap plugins to an editor. The order in\nwhich they appear determines their precedence (the ones early in\nthe array get to dispatch first).\n*/ function keymap(bindings) {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({\n        props: {\n            handleKeyDown: keydownHandler(bindings)\n        }\n    });\n}\n/**\nGiven a set of bindings (using the same format as\n[`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown\nhandler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.\n*/ function keydownHandler(bindings) {\n    let map = normalize(bindings);\n    return function(view, event) {\n        let name = (0,w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.keyName)(event), baseName, direct = map[modifiers(name, event)];\n        if (direct && direct(view.state, view.dispatch, view)) return true;\n        // A character key\n        if (name.length == 1 && name != \" \") {\n            if (event.shiftKey) {\n                // In case the name was already modified by shift, try looking\n                // it up without its shift modifier\n                let noShift = map[modifiers(name, event, false)];\n                if (noShift && noShift(view.state, view.dispatch, view)) return true;\n            }\n            if ((event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.base[event.keyCode]) && baseName != name) {\n                // Try falling back to the keyCode when there's a modifier\n                // active or the character produced isn't ASCII, and our table\n                // produces a different name from the the keyCode. See #668,\n                // #1060\n                let fromCode = map[modifiers(baseName, event)];\n                if (fromCode && fromCode(view.state, view.dispatch, view)) return true;\n            }\n        }\n        return false;\n    };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNEO0FBRTNDLE1BQU1HLE1BQU0sT0FBT0MsYUFBYSxjQUFjLHFCQUFxQkMsSUFBSSxDQUFDRCxVQUFVRSxRQUFRLElBQUk7QUFDOUYsU0FBU0MsaUJBQWlCQyxJQUFJO0lBQzFCLElBQUlDLFFBQVFELEtBQUtFLEtBQUssQ0FBQyxXQUFXQyxTQUFTRixLQUFLLENBQUNBLE1BQU1HLE1BQU0sR0FBRyxFQUFFO0lBQ2xFLElBQUlELFVBQVUsU0FDVkEsU0FBUztJQUNiLElBQUlFLEtBQUtDLE1BQU1DLE9BQU9DO0lBQ3RCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixNQUFNRyxNQUFNLEdBQUcsR0FBR0ssSUFBSztRQUN2QyxJQUFJQyxNQUFNVCxLQUFLLENBQUNRLEVBQUU7UUFDbEIsSUFBSSxrQkFBa0JaLElBQUksQ0FBQ2EsTUFDdkJGLE9BQU87YUFDTixJQUFJLFlBQVlYLElBQUksQ0FBQ2EsTUFDdEJMLE1BQU07YUFDTCxJQUFJLHNCQUFzQlIsSUFBSSxDQUFDYSxNQUNoQ0osT0FBTzthQUNOLElBQUksY0FBY1QsSUFBSSxDQUFDYSxNQUN4QkgsUUFBUTthQUNQLElBQUksU0FBU1YsSUFBSSxDQUFDYSxNQUFNO1lBQ3pCLElBQUlmLEtBQ0FhLE9BQU87aUJBRVBGLE9BQU87UUFDZixPQUVJLE1BQU0sSUFBSUssTUFBTSxpQ0FBaUNEO0lBQ3pEO0lBQ0EsSUFBSUwsS0FDQUYsU0FBUyxTQUFTQTtJQUN0QixJQUFJRyxNQUNBSCxTQUFTLFVBQVVBO0lBQ3ZCLElBQUlLLE1BQ0FMLFNBQVMsVUFBVUE7SUFDdkIsSUFBSUksT0FDQUosU0FBUyxXQUFXQTtJQUN4QixPQUFPQTtBQUNYO0FBQ0EsU0FBU1MsVUFBVUMsR0FBRztJQUNsQixJQUFJQyxPQUFPQyxPQUFPQyxNQUFNLENBQUM7SUFDekIsSUFBSyxJQUFJQyxRQUFRSixJQUNiQyxJQUFJLENBQUNmLGlCQUFpQmtCLE1BQU0sR0FBR0osR0FBRyxDQUFDSSxLQUFLO0lBQzVDLE9BQU9IO0FBQ1g7QUFDQSxTQUFTSSxVQUFVbEIsSUFBSSxFQUFFbUIsS0FBSyxFQUFFWixRQUFRLElBQUk7SUFDeEMsSUFBSVksTUFBTUMsTUFBTSxFQUNacEIsT0FBTyxTQUFTQTtJQUNwQixJQUFJbUIsTUFBTUUsT0FBTyxFQUNickIsT0FBTyxVQUFVQTtJQUNyQixJQUFJbUIsTUFBTUcsT0FBTyxFQUNidEIsT0FBTyxVQUFVQTtJQUNyQixJQUFJTyxTQUFTWSxNQUFNSSxRQUFRLEVBQ3ZCdkIsT0FBTyxXQUFXQTtJQUN0QixPQUFPQTtBQUNYO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxHQUNBLFNBQVN3QixPQUFPQyxRQUFRO0lBQ3BCLE9BQU8sSUFBSS9CLHFEQUFNQSxDQUFDO1FBQUVnQyxPQUFPO1lBQUVDLGVBQWVDLGVBQWVIO1FBQVU7SUFBRTtBQUMzRTtBQUNBOzs7O0FBSUEsR0FDQSxTQUFTRyxlQUFlSCxRQUFRO0lBQzVCLElBQUlaLE1BQU1ELFVBQVVhO0lBQ3BCLE9BQU8sU0FBVUksSUFBSSxFQUFFVixLQUFLO1FBQ3hCLElBQUluQixPQUFPUixvREFBT0EsQ0FBQzJCLFFBQVFXLFVBQVVDLFNBQVNsQixHQUFHLENBQUNLLFVBQVVsQixNQUFNbUIsT0FBTztRQUN6RSxJQUFJWSxVQUFVQSxPQUFPRixLQUFLRyxLQUFLLEVBQUVILEtBQUtJLFFBQVEsRUFBRUosT0FDNUMsT0FBTztRQUNYLGtCQUFrQjtRQUNsQixJQUFJN0IsS0FBS0ksTUFBTSxJQUFJLEtBQUtKLFFBQVEsS0FBSztZQUNqQyxJQUFJbUIsTUFBTUksUUFBUSxFQUFFO2dCQUNoQiw4REFBOEQ7Z0JBQzlELG1DQUFtQztnQkFDbkMsSUFBSVcsVUFBVXJCLEdBQUcsQ0FBQ0ssVUFBVWxCLE1BQU1tQixPQUFPLE9BQU87Z0JBQ2hELElBQUllLFdBQVdBLFFBQVFMLEtBQUtHLEtBQUssRUFBRUgsS0FBS0ksUUFBUSxFQUFFSixPQUM5QyxPQUFPO1lBQ2Y7WUFDQSxJQUFJLENBQUNWLE1BQU1JLFFBQVEsSUFBSUosTUFBTUMsTUFBTSxJQUFJRCxNQUFNRyxPQUFPLElBQUl0QixLQUFLbUMsVUFBVSxDQUFDLEtBQUssR0FBRSxLQUMxRUwsQ0FBQUEsV0FBV3JDLDZDQUFJLENBQUMwQixNQUFNaUIsT0FBTyxDQUFDLEtBQUtOLFlBQVk5QixNQUFNO2dCQUN0RCwwREFBMEQ7Z0JBQzFELDhEQUE4RDtnQkFDOUQsNERBQTREO2dCQUM1RCxRQUFRO2dCQUNSLElBQUlxQyxXQUFXeEIsR0FBRyxDQUFDSyxVQUFVWSxVQUFVWCxPQUFPO2dCQUM5QyxJQUFJa0IsWUFBWUEsU0FBU1IsS0FBS0csS0FBSyxFQUFFSCxLQUFLSSxRQUFRLEVBQUVKLE9BQ2hELE9BQU87WUFDZjtRQUNKO1FBQ0EsT0FBTztJQUNYO0FBQ0o7QUFFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3MvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanM/MThjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlOYW1lLCBiYXNlIH0gZnJvbSAndzNjLWtleW5hbWUnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAncHJvc2VtaXJyb3Itc3RhdGUnO1xuXG5jb25zdCBtYWMgPSB0eXBlb2YgbmF2aWdhdG9yICE9IFwidW5kZWZpbmVkXCIgPyAvTWFjfGlQKGhvbmV8W29hXWQpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgOiBmYWxzZTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleU5hbWUobmFtZSkge1xuICAgIGxldCBwYXJ0cyA9IG5hbWUuc3BsaXQoLy0oPyEkKS8pLCByZXN1bHQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBpZiAocmVzdWx0ID09IFwiU3BhY2VcIilcbiAgICAgICAgcmVzdWx0ID0gXCIgXCI7XG4gICAgbGV0IGFsdCwgY3RybCwgc2hpZnQsIG1ldGE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgbGV0IG1vZCA9IHBhcnRzW2ldO1xuICAgICAgICBpZiAoL14oY21kfG1ldGF8bSkkL2kudGVzdChtb2QpKVxuICAgICAgICAgICAgbWV0YSA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKC9eYShsdCk/JC9pLnRlc3QobW9kKSlcbiAgICAgICAgICAgIGFsdCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKC9eKGN8Y3RybHxjb250cm9sKSQvaS50ZXN0KG1vZCkpXG4gICAgICAgICAgICBjdHJsID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoL15zKGhpZnQpPyQvaS50ZXN0KG1vZCkpXG4gICAgICAgICAgICBzaGlmdCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKC9ebW9kJC9pLnRlc3QobW9kKSkge1xuICAgICAgICAgICAgaWYgKG1hYylcbiAgICAgICAgICAgICAgICBtZXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjdHJsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlY29nbml6ZWQgbW9kaWZpZXIgbmFtZTogXCIgKyBtb2QpO1xuICAgIH1cbiAgICBpZiAoYWx0KVxuICAgICAgICByZXN1bHQgPSBcIkFsdC1cIiArIHJlc3VsdDtcbiAgICBpZiAoY3RybClcbiAgICAgICAgcmVzdWx0ID0gXCJDdHJsLVwiICsgcmVzdWx0O1xuICAgIGlmIChtZXRhKVxuICAgICAgICByZXN1bHQgPSBcIk1ldGEtXCIgKyByZXN1bHQ7XG4gICAgaWYgKHNoaWZ0KVxuICAgICAgICByZXN1bHQgPSBcIlNoaWZ0LVwiICsgcmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemUobWFwKSB7XG4gICAgbGV0IGNvcHkgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGZvciAobGV0IHByb3AgaW4gbWFwKVxuICAgICAgICBjb3B5W25vcm1hbGl6ZUtleU5hbWUocHJvcCldID0gbWFwW3Byb3BdO1xuICAgIHJldHVybiBjb3B5O1xufVxuZnVuY3Rpb24gbW9kaWZpZXJzKG5hbWUsIGV2ZW50LCBzaGlmdCA9IHRydWUpIHtcbiAgICBpZiAoZXZlbnQuYWx0S2V5KVxuICAgICAgICBuYW1lID0gXCJBbHQtXCIgKyBuYW1lO1xuICAgIGlmIChldmVudC5jdHJsS2V5KVxuICAgICAgICBuYW1lID0gXCJDdHJsLVwiICsgbmFtZTtcbiAgICBpZiAoZXZlbnQubWV0YUtleSlcbiAgICAgICAgbmFtZSA9IFwiTWV0YS1cIiArIG5hbWU7XG4gICAgaWYgKHNoaWZ0ICYmIGV2ZW50LnNoaWZ0S2V5KVxuICAgICAgICBuYW1lID0gXCJTaGlmdC1cIiArIG5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG59XG4vKipcbkNyZWF0ZSBhIGtleW1hcCBwbHVnaW4gZm9yIHRoZSBnaXZlbiBzZXQgb2YgYmluZGluZ3MuXG5cbkJpbmRpbmdzIHNob3VsZCBtYXAga2V5IG5hbWVzIHRvIFtjb21tYW5kXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8jY29tbWFuZHMpLXN0eWxlXG5mdW5jdGlvbnMsIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHdpdGggYChFZGl0b3JTdGF0ZSwgZGlzcGF0Y2gsXG5FZGl0b3JWaWV3KWAgYXJndW1lbnRzLCBhbmQgc2hvdWxkIHJldHVybiB0cnVlIHdoZW4gdGhleSd2ZSBoYW5kbGVkXG50aGUga2V5LiBOb3RlIHRoYXQgdGhlIHZpZXcgYXJndW1lbnQgaXNuJ3QgcGFydCBvZiB0aGUgY29tbWFuZFxucHJvdG9jb2wsIGJ1dCBjYW4gYmUgdXNlZCBhcyBhbiBlc2NhcGUgaGF0Y2ggaWYgYSBiaW5kaW5nIG5lZWRzIHRvXG5kaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBVSS5cblxuS2V5IG5hbWVzIG1heSBiZSBzdHJpbmdzIGxpa2UgYFwiU2hpZnQtQ3RybC1FbnRlclwiYOKAlGEga2V5XG5pZGVudGlmaWVyIHByZWZpeGVkIHdpdGggemVybyBvciBtb3JlIG1vZGlmaWVycy4gS2V5IGlkZW50aWZpZXJzXG5hcmUgYmFzZWQgb24gdGhlIHN0cmluZ3MgdGhhdCBjYW4gYXBwZWFyIGluXG5bYEtleUV2ZW50LmtleWBdKGh0dHBzOmRldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXkpLlxuVXNlIGxvd2VyY2FzZSBsZXR0ZXJzIHRvIHJlZmVyIHRvIGxldHRlciBrZXlzIChvciB1cHBlcmNhc2UgbGV0dGVyc1xuaWYgeW91IHdhbnQgc2hpZnQgdG8gYmUgaGVsZCkuIFlvdSBtYXkgdXNlIGBcIlNwYWNlXCJgIGFzIGFuIGFsaWFzXG5mb3IgdGhlIGBcIiBcImAgbmFtZS5cblxuTW9kaWZpZXJzIGNhbiBiZSBnaXZlbiBpbiBhbnkgb3JkZXIuIGBTaGlmdC1gIChvciBgcy1gKSwgYEFsdC1gIChvclxuYGEtYCksIGBDdHJsLWAgKG9yIGBjLWAgb3IgYENvbnRyb2wtYCkgYW5kIGBDbWQtYCAob3IgYG0tYCBvclxuYE1ldGEtYCkgYXJlIHJlY29nbml6ZWQuIEZvciBjaGFyYWN0ZXJzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgaG9sZGluZ1xuc2hpZnQsIHRoZSBgU2hpZnQtYCBwcmVmaXggaXMgaW1wbGllZCwgYW5kIHNob3VsZCBub3QgYmUgYWRkZWRcbmV4cGxpY2l0bHkuXG5cbllvdSBjYW4gdXNlIGBNb2QtYCBhcyBhIHNob3J0aGFuZCBmb3IgYENtZC1gIG9uIE1hYyBhbmQgYEN0cmwtYCBvblxub3RoZXIgcGxhdGZvcm1zLlxuXG5Zb3UgY2FuIGFkZCBtdWx0aXBsZSBrZXltYXAgcGx1Z2lucyB0byBhbiBlZGl0b3IuIFRoZSBvcmRlciBpblxud2hpY2ggdGhleSBhcHBlYXIgZGV0ZXJtaW5lcyB0aGVpciBwcmVjZWRlbmNlICh0aGUgb25lcyBlYXJseSBpblxudGhlIGFycmF5IGdldCB0byBkaXNwYXRjaCBmaXJzdCkuXG4qL1xuZnVuY3Rpb24ga2V5bWFwKGJpbmRpbmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQbHVnaW4oeyBwcm9wczogeyBoYW5kbGVLZXlEb3duOiBrZXlkb3duSGFuZGxlcihiaW5kaW5ncykgfSB9KTtcbn1cbi8qKlxuR2l2ZW4gYSBzZXQgb2YgYmluZGluZ3MgKHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhc1xuW2BrZXltYXBgXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8ja2V5bWFwLmtleW1hcCkpLCByZXR1cm4gYSBba2V5ZG93blxuaGFuZGxlcl0oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI3ZpZXcuRWRpdG9yUHJvcHMuaGFuZGxlS2V5RG93bikgdGhhdCBoYW5kbGVzIHRoZW0uXG4qL1xuZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoYmluZGluZ3MpIHtcbiAgICBsZXQgbWFwID0gbm9ybWFsaXplKGJpbmRpbmdzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZpZXcsIGV2ZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0ga2V5TmFtZShldmVudCksIGJhc2VOYW1lLCBkaXJlY3QgPSBtYXBbbW9kaWZpZXJzKG5hbWUsIGV2ZW50KV07XG4gICAgICAgIGlmIChkaXJlY3QgJiYgZGlyZWN0KHZpZXcuc3RhdGUsIHZpZXcuZGlzcGF0Y2gsIHZpZXcpKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIEEgY2hhcmFjdGVyIGtleVxuICAgICAgICBpZiAobmFtZS5sZW5ndGggPT0gMSAmJiBuYW1lICE9IFwiIFwiKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBuYW1lIHdhcyBhbHJlYWR5IG1vZGlmaWVkIGJ5IHNoaWZ0LCB0cnkgbG9va2luZ1xuICAgICAgICAgICAgICAgIC8vIGl0IHVwIHdpdGhvdXQgaXRzIHNoaWZ0IG1vZGlmaWVyXG4gICAgICAgICAgICAgICAgbGV0IG5vU2hpZnQgPSBtYXBbbW9kaWZpZXJzKG5hbWUsIGV2ZW50LCBmYWxzZSldO1xuICAgICAgICAgICAgICAgIGlmIChub1NoaWZ0ICYmIG5vU2hpZnQodmlldy5zdGF0ZSwgdmlldy5kaXNwYXRjaCwgdmlldykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBuYW1lLmNoYXJDb2RlQXQoMCkgPiAxMjcpICYmXG4gICAgICAgICAgICAgICAgKGJhc2VOYW1lID0gYmFzZVtldmVudC5rZXlDb2RlXSkgJiYgYmFzZU5hbWUgIT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIFRyeSBmYWxsaW5nIGJhY2sgdG8gdGhlIGtleUNvZGUgd2hlbiB0aGVyZSdzIGEgbW9kaWZpZXJcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgb3IgdGhlIGNoYXJhY3RlciBwcm9kdWNlZCBpc24ndCBBU0NJSSwgYW5kIG91ciB0YWJsZVxuICAgICAgICAgICAgICAgIC8vIHByb2R1Y2VzIGEgZGlmZmVyZW50IG5hbWUgZnJvbSB0aGUgdGhlIGtleUNvZGUuIFNlZSAjNjY4LFxuICAgICAgICAgICAgICAgIC8vICMxMDYwXG4gICAgICAgICAgICAgICAgbGV0IGZyb21Db2RlID0gbWFwW21vZGlmaWVycyhiYXNlTmFtZSwgZXZlbnQpXTtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbUNvZGUgJiYgZnJvbUNvZGUodmlldy5zdGF0ZSwgdmlldy5kaXNwYXRjaCwgdmlldykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBrZXlkb3duSGFuZGxlciwga2V5bWFwIH07XG4iXSwibmFtZXMiOlsia2V5TmFtZSIsImJhc2UiLCJQbHVnaW4iLCJtYWMiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwicGxhdGZvcm0iLCJub3JtYWxpemVLZXlOYW1lIiwibmFtZSIsInBhcnRzIiwic3BsaXQiLCJyZXN1bHQiLCJsZW5ndGgiLCJhbHQiLCJjdHJsIiwic2hpZnQiLCJtZXRhIiwiaSIsIm1vZCIsIkVycm9yIiwibm9ybWFsaXplIiwibWFwIiwiY29weSIsIk9iamVjdCIsImNyZWF0ZSIsInByb3AiLCJtb2RpZmllcnMiLCJldmVudCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJrZXltYXAiLCJiaW5kaW5ncyIsInByb3BzIiwiaGFuZGxlS2V5RG93biIsImtleWRvd25IYW5kbGVyIiwidmlldyIsImJhc2VOYW1lIiwiZGlyZWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm5vU2hpZnQiLCJjaGFyQ29kZUF0Iiwia2V5Q29kZSIsImZyb21Db2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-keymap/dist/index.js\n");

/***/ })

};
;