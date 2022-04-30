exports.ids = [97];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-diff.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-diff.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(i){i.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var n=r[e],a=[];/^\w+$/.test(e)||a.push(/\w+/.exec(e)[0]),"diff"===e&&a.push("bold"),i.languages.diff[e]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(i.languages.diff,"PREFIXES",{value:r})}(Prism);

/***/ })

};;
//# sourceMappingURL=97.render-page.js.map