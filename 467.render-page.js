exports.ids = [467];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-zig.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-zig.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(n){function e(e){return function(){return e}}var r=/\b(?:align|allowzero|and|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,a="\\b(?!"+r.source+")(?!\\d)\\w+\\b",o="align\\s*\\((?:[^()]|\\([^()]*\\))*\\)",s="(?!\\s)(?:!?\\s*(?:"+"(?:\\?|\\bpromise->|(?:\\[[^[\\]]*\\]|\\*(?!\\*)|\\*\\*)(?:\\s*<ALIGN>|\\s*const\\b|\\s*volatile\\b|\\s*allowzero\\b)*)".replace(/<ALIGN>/g,e(o))+"\\s*)*"+"(?:\\bpromise\\b|(?:\\berror\\.)?<ID>(?:\\.<ID>)*(?!\\s+<ID>))".replace(/<ID>/g,e(a))+")+";n.languages.zig={comment:[{pattern:/\/{3}.*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])'(?:[^'\\\r\n]|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0}],builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp("(:\\s*)<TYPE>(?=\\s*(?:<ALIGN>\\s*)?[=;,)])|<TYPE>(?=\\s*(?:<ALIGN>\\s*)?\\{)".replace(/<TYPE>/g,e(s)).replace(/<ALIGN>/g,e(o))),lookbehind:!0,inside:null},{pattern:RegExp("(\\)\\s*)<TYPE>(?=\\s*(?:<ALIGN>\\s*)?;)".replace(/<TYPE>/g,e(s)).replace(/<ALIGN>/g,e(o))),lookbehind:!0,inside:null}],"builtin-types":{pattern:/\b(?:anyerror|bool|c_u?(?:short|int|long|longlong)|c_longdouble|c_void|comptime_(?:float|int)|[iu](?:8|16|32|64|128|size)|f(?:16|32|64|128)|noreturn|type|void)\b/,alias:"keyword"},keyword:r,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+\.?[a-fA-F\d]*(?:[pP][+-]?[a-fA-F\d]+)?|\d+\.?\d*(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},n.languages.zig["class-name"].forEach(function(e){null===e.inside&&(e.inside=n.languages.zig)})}(Prism);

/***/ })

};;
//# sourceMappingURL=467.render-page.js.map