exports.ids = [111];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ejs.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ejs.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")}),e.languages.eta=e.languages.ejs}(Prism);

/***/ })

};;
//# sourceMappingURL=111.render-page.js.map