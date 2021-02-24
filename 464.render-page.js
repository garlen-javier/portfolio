exports.ids = [464];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-yang.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-yang.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.yang = {
	// https://tools.ietf.org/html/rfc6020#page-34
	// http://www.yang-central.org/twiki/bin/view/Main/YangExamples
	'comment': /\/\*[\s\S]*?\*\/|\/\/.*/,
	'string': {
		pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
		greedy: true
	},
	'keyword': {
		pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
		lookbehind: true
	},
	'namespace': {
		pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
		lookbehind: true
	},
	'boolean': /\b(?:false|true)\b/,
	'operator': /\+/,
	'punctuation': /[{};:]/
};


/***/ })

};;
//# sourceMappingURL=464.render-page.js.map