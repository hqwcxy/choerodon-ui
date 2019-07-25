webpackJsonp([52],{2270:function(n,a,s){n.exports={basic:s(3019),button:s(3020),controlled:s(3021),dataset:s(3022),readonly:s(3023)}},3019:function(n,a,s){n.exports={content:{"zh-CN":[["p","请确保Radio具有相同的name属性以实现单选功能。"]],"en-US":[["p","Make sure that Radio has the same name property to implement the radio function."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic Usage"},filename:"components-pro/radio/demo/basic.md",id:"components-pro-radio-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[basic]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){console.log("[basic]",n)}var a=s(0),t=(s(7),s(487));return a.createElement("div",null,a.createElement(t.Radio,{name:"base",value:"A",onChange:n,defaultChecked:!0},"A"),a.createElement(t.Radio,{name:"base",value:"B",onChange:n},"B"),a.createElement(t.Radio,{name:"base",value:"C",onChange:n},"C"))}}},3020:function(n,a,s){n.exports={content:{"zh-CN":[["p","显示成按钮。"]],"en-US":[["p","Button display."]]},meta:{order:5,title:{"zh-CN":"按钮显示效果","en-US":"Button display"},filename:"components-pro/radio/demo/button.md",id:"components-pro-radio-demo-button"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[button]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">defaultChecked</span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>base<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){console.log("[button]",n,"[oldValue]",a)}var a=s(0),t=(s(7),s(487));return a.createElement("div",null,a.createElement(t.Radio,{mode:"button",name:"base",value:"A",onChange:n,defaultChecked:!0},"A"),a.createElement(t.Radio,{mode:"button",name:"base",value:"B",onChange:n},"B"),a.createElement(t.Radio,{mode:"button",name:"base",value:"C",onChange:n},"C"))}}},3021:function(n,a,s){n.exports={content:{"zh-CN":[["p","受控单选框"]],"en-US":[["p","Controlled Radio"]]},meta:{order:1,title:{"zh-CN":"受控单选框","en-US":"Controlled Radio"},filename:"components-pro/radio/demo/controlled.md",id:"components-pro-radio-demo-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'A\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[controlled]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>controlled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">===</span> <span class="token string">\'A\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>controlled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">===</span> <span class="token string">\'B\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>controlled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">===</span> <span class="token string">\'C\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),o=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),e=s(487),c=function(s){function c(s){n(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,s));return t.handleChange=function(n){console.log("[controlled]",n,"[oldValue]",t.state.value),t.setState({value:n})},t.state={value:"A"},t}return t(c,s),o(c,[{key:"render",value:function(){var n=this.state.value;return p.createElement("div",null,p.createElement(e.Radio,{name:"controlled",value:"A",checked:"A"===n,onChange:this.handleChange},"A"),p.createElement(e.Radio,{name:"controlled",value:"B",checked:"B"===n,onChange:this.handleChange},"B"),p.createElement(e.Radio,{name:"controlled",value:"C",checked:"C"===n,onChange:this.handleChange},"C"))}}]),c}(p.Component);return p.createElement(c,null)}}},3022:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源"]],"en-US":[["p","DataSet Binding"]]},meta:{order:2,title:{"zh-CN":"绑定数据源","en-US":"DataSet Binding"},filename:"components-pro/radio/demo/dataset.md",id:"components-pro-radio-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> bind<span class="token punctuation">:</span> <span class="token string">\'A\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bind\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bind<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bind<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bind<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){var a=n.value,s=n.oldValue;console.log("[dataset newValue]",a,"[oldValue]",s)}var o=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(487),u=[{bind:"A"}],l=function(s){function l(){var s,t,o,e;n(this,l);for(var i=arguments.length,k=Array(i),r=0;r<i;r++)k[r]=arguments[r];return t=o=a(this,(s=l.__proto__||Object.getPrototypeOf(l)).call.apply(s,[this].concat(k))),o.ds=new c.DataSet({data:u,fields:[{name:"bind"}],events:{update:p}}),e=t,a(o,e)}return t(l,s),e(l,[{key:"render",value:function(){return o.createElement("div",null,o.createElement(c.Radio,{dataSet:this.ds,name:"bind",value:"A"},"A"),o.createElement(c.Radio,{dataSet:this.ds,name:"bind",value:"B"},"B"),o.createElement(c.Radio,{dataSet:this.ds,name:"bind",value:"C"},"C"))}}]),l}(o.Component);return o.createElement(l,null)}}},3023:function(n,a,s){n.exports={content:{"zh-CN":[["p","只读。"]],"en-US":[["p","Read Only."]]},meta:{order:3,title:{"zh-CN":"只读","en-US":"Read Only"},filename:"components-pro/radio/demo/readonly.md",id:"components-pro-radio-demo-readonly"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> DataSet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> rd<span class="token punctuation">:</span> <span class="token string">\'C\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'rd\'</span><span class="token punctuation">,</span> readOnly<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rd<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rd<span class="token punctuation">"</span></span> <span class="token attr-name">readOnly</span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rd<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),o=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),e=s(487),c=[{rd:"C"}],u=function(s){function u(){var s,t,p,o;n(this,u);for(var l=arguments.length,i=Array(l),k=0;k<l;k++)i[k]=arguments[k];return t=p=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(i))),p.ds=new e.DataSet({data:c,fields:[{name:"rd",readOnly:!0}]}),o=t,a(p,o)}return t(u,s),o(u,[{key:"render",value:function(){return p.createElement("div",null,p.createElement(e.Radio,{name:"rd",disabled:!0},"A"),p.createElement(e.Radio,{name:"rd",readOnly:!0},"B"),p.createElement(e.Radio,{dataSet:this.ds,name:"rd",value:"C"},"C"))}}]),u}(p.Component);return p.createElement(u,null)}}}});