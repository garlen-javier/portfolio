(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{haKv:function(a,e,n){var s,t,i;n("Oyvg"),n("pIFo"),s=Prism,t=/(^(?:\s*(?:\*\s*)*)).*[^*\s].*$/m,i="(?:[a-zA-Z]\\w+\\s*\\.\\s*)*[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g,(function(){return"#\\s*\\w+(?:\\s*\\([^()]*\\))?"})),s.languages.javadoc=s.languages.extend("javadoclike",{}),s.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp("(@(?:exception|throws|see|link|linkplain|value)\\s+(?:\\*\\s*)?)(?:"+i+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:s.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+)(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+?(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:t,lookbehind:!0,inside:s.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)[\s\S]+?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:t,lookbehind:!0,inside:{tag:s.languages.markup.tag,entity:s.languages.markup.entity,code:{pattern:/.+/,inside:s.languages.java,alias:"language-java"}}}}}],tag:s.languages.markup.tag,entity:s.languages.markup.entity}),s.languages.javadoclike.addSupport("java",s.languages.javadoc)}}]);
//# sourceMappingURL=201-59cc1cf346a7e13c8275.js.map