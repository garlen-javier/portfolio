exports.ids = [180];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ignore.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ignore.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	Prism.languages.ignore = {
		// https://git-scm.com/docs/gitignore
		'comment': /^#.*/m,
		'entry': {
			pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
			alias: 'string',
			inside: {
				'operator': /^!|\*\*?|\?/,
				'regex': {
					pattern: /(^|[^\\])\[[^\[\]]*\]/,
					lookbehind: true
				},
				'punctuation': /\//
			}
		}
	};

	Prism.languages.gitignore = Prism.languages.ignore
	Prism.languages.hgignore = Prism.languages.ignore
	Prism.languages.npmignore = Prism.languages.ignore

}(Prism));


/***/ })

};;
//# sourceMappingURL=180.render-page.js.map