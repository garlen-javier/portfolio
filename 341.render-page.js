exports.ids = [341];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-qml.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-qml.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){for(var r="(?:[^\\\\()[\\]{}\"'/]|<string>|/(?![*/])|<comment>|\\(<expr>*\\)|\\[<expr>*\\]|\\{<expr>*\\}|\\\\[^])".replace(/<string>/g,function(){return"\"(?:\\\\.|[^\\\\\"\r\n])*\"|'(?:\\\\.|[^\\\\'\r\n])*'"}).replace(/<comment>/g,function(){return"//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/"}),n=0;n<2;n++)r=r.replace(/<expr>/g,function(){return r});r=r.replace(/<expr>/g,"[^\\s\\S]"),e.languages.qml={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},"javascript-function":{pattern:RegExp("((?:^|;)[ \t]*)function\\s+[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*\\(<js>*\\)\\s*\\{<js>*\\}".replace(/<js>/g,function(){return r}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:e.languages.javascript},"class-name":{pattern:/((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,lookbehind:!0},property:[{pattern:/((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0},{pattern:/((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0,inside:{keyword:/^property/,property:/\w+(?:\.\w+)*/}}],"javascript-expression":{pattern:RegExp("(:[ \t]*)(?![\\s;}[])(?:(?!$|[;}])<js>)+".replace(/<js>/g,function(){return r}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:e.languages.javascript},string:/"(?:\\.|[^\\"\r\n])*"/,keyword:/\b(?:as|import|on)\b/,punctuation:/[{}[\]:;,]/}}(Prism);

/***/ })

};;
//# sourceMappingURL=341.render-page.js.map