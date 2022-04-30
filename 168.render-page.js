exports.ids = [168];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-hpkp.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hpkp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 */

Prism.languages.hpkp = {
	'directive': {
		pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
		alias: 'keyword'
	},
	'safe': {
		pattern: /\b\d{7,}\b/,
		alias: 'selector'
	},
	'unsafe': {
		pattern: /\b\d{1,6}\b/,
		alias: 'function'
	}
};


/***/ })

};;
//# sourceMappingURL=168.render-page.js.map