exports.ids = [126];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-firestore-security-rules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-firestore-security-rules.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages['firestore-security-rules'] = Prism.languages.extend('clike', {
	'comment': /\/\/.*/,
	'keyword': /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
	'operator': /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/,
});

delete Prism.languages['firestore-security-rules']['class-name'];

Prism.languages.insertBefore('firestore-security-rules', 'keyword', {
	'path': {
		pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
		lookbehind: true,
		greedy: true,
		inside: {
			'variable': {
				pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
				inside: {
					'operator': /=/,
					'keyword': /\*\*/,
					'punctuation': /[.$(){}]/
				}
			},
			'punctuation': /[/]/
		}
	},
	'method': {
		// to make the pattern shorter, the actual method names are omitted
		pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
		lookbehind: true,
		alias: 'builtin',
		inside: {
			'punctuation': /,/
		}
	},
});


/***/ })

};;
//# sourceMappingURL=126.render-page.js.map