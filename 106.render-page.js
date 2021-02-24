exports.ids = [106];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-editorconfig.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-editorconfig.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.editorconfig = {
	// https://editorconfig-specification.readthedocs.io/en/latest/
	'comment': /[;#].*/,
	'section': {
		pattern: /(^[ \t]*)\[.+]/m,
		lookbehind: true,
		alias: 'keyword',
		inside: {
			'regex': /\\\\[\[\]{},!?.*]/, // Escape special characters with '\\'
			'operator': /[!?]|\.\.|\*{1,2}/,
			'punctuation': /[\[\]{},]/
		}
	},
	'property': {
		pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
		lookbehind: true
	},
	'value': {
		pattern: /=.*/,
		alias: 'string',
		inside: {
			'punctuation': /^=/
		}
	}
};


/***/ })

};;
//# sourceMappingURL=106.render-page.js.map