exports.ids = [207];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-js-templates.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-js-templates.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(u){var e=u.languages.javascript["template-string"],n=e.pattern.source,a=e.inside.interpolation,i=a.inside["interpolation-punctuation"],r=a.pattern.source;function t(e,t){if(u.languages[e])return{pattern:RegExp("((?:"+t+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function o(e,t,n){var r={code:e,grammar:t,language:n};return u.hooks.run("before-tokenize",r),r.tokens=u.tokenize(r.code,r.grammar),u.hooks.run("after-tokenize",r),r.tokens}function d(e){var t={};t["interpolation-punctuation"]=i;var n=u.tokenize(e,t);if(3===n.length){var r=[1,1];r.push.apply(r,o(n[1],u.languages.javascript,"javascript")),n.splice.apply(n,r)}return new u.Token("interpolation",n,a.alias,e)}function c(a,e,i){var t=u.tokenize(a,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),f=0,y={},n=o(t.map(function(e){if("string"==typeof e)return e;for(var t,n=e.content;-1!==a.indexOf((r=f++,t="___"+i.toUpperCase()+"_"+r+"___")););return y[t]=n,t;var r}).join(""),e,i),v=Object.keys(y);return f=0,function e(t){for(var n=0;n<t.length;n++){if(f>=v.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=v[f],i="string"==typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++f;var s=i.substring(0,o),p=d(y[a]),l=i.substring(o+a.length),g=[];if(s&&g.push(s),g.push(p),l){var u=[l];e(u),g.push.apply(g,u)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(g)),n+=g.length-1):r.content=g}}else{var c=r.content;Array.isArray(c)?e(c):e([c])}}}(n),new u.Token(i,n,"language-"+i,a)}u.languages.javascript["template-string"]=[t("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),t("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),t("svg","\\bsvg"),t("markdown","\\b(?:md|markdown)"),t("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),e].filter(Boolean);var s={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function f(e){return"string"==typeof e?e:Array.isArray(e)?e.map(f).join(""):f(e.content)}u.hooks.add("after-tokenize",function(e){e.language in s&&!function e(t){for(var n=0,r=t.length;n<r;n++){var a=t[n];if("string"!=typeof a){var i=a.content;if(Array.isArray(i))if("template-string"===a.type){var o=i[1];if(3===i.length&&"string"!=typeof o&&"embedded-code"===o.type){var s=f(o),p=o.alias,l=Array.isArray(p)?p[0]:p,g=u.languages[l];if(!g)continue;i[1]=c(s,g,l)}}else e(i);else"string"!=typeof i&&e([i])}}}(e.tokens)})}(Prism);

/***/ })

};;
//# sourceMappingURL=207.render-page.js.map