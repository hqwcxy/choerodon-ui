webpackJsonp([62],{2078:function(n,s,a){n.exports={basic:a(2451),card:a(2452),"notice-calendar":a(2453),select:a(2454)}},2451:function(n,s,a){n.exports={content:{"zh-CN":[["p","一个通用的日历面板，支持年/月切换。"]],"en-US":[["p","A basic calendar component with Year/Month switch."]]},meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/calendar/demo/basic.md",id:"components-calendar-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onPanelChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){console.log(n,s)}var s=a(0),t=(a(7),a(50));return s.createElement(t.Calendar,{onPanelChange:n})}}},2452:function(n,s,a){n.exports={content:{"zh-CN":[["p","用于嵌套在空间有限的容器中。"]],"en-US":[["p","Nested inside a container element for rendering in limited space."]]},meta:{order:2,title:{"zh-CN":"卡片模式","en-US":"Card"},filename:"components/calendar/demo/card.md",id:"components-calendar-demo-card"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onPanelChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> border<span class="token punctuation">:</span> <span class="token string">\'1px solid #d9d9d9\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">fullscreen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){console.log(n,s)}var s=a(0),t=(a(7),a(50));return s.createElement("div",{style:{width:300,border:"1px solid #d9d9d9",borderRadius:4}},s.createElement(t.Calendar,{fullscreen:!1,onPanelChange:n}))}}},2453:function(n,s,a){n.exports={content:{"zh-CN":[["p","一个复杂的应用示例，用 ",["code","dateCellRender"]," 和 ",["code","monthCellRender"]," 函数来自定义需要渲染的数据。"]],"en-US":[["p","This component can be rendered by using ",["code","dateCellRender"]," and ",["code","monthCellRender"]," with the data you need."]]},meta:{order:1,title:{"zh-CN":"通知事项日历","en-US":"Notice Calendar"},filename:"components/calendar/demo/notice-calendar.md",id:"components-calendar-demo-notice-calendar"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getListData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> listData<span class="token punctuation">;</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token number">8</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is usual event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is usual event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token number">15</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is very long usual event。。....\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 1.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 2.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 3.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 4.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> listData <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">dateCellRender</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> listData <span class="token operator">=</span> <span class="token function">getListData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>events<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>\n        listData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getMonthData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">month</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1394</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">monthCellRender</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">getMonthData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> num <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes-month<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Backlog number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span> <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){var s=void 0;switch(n.date()){case 8:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:s=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event。。...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return s||[]}function s(s){var a=n(s);return e.createElement("ul",{className:"events"},a.map(function(n){return e.createElement("li",{key:n.content},e.createElement(o.Badge,{status:n.type,text:n.content}))}))}function t(n){if(8===n.month())return 1394}function p(n){var s=t(n);return s?e.createElement("div",{className:"notes-month"},e.createElement("section",null,s),e.createElement("span",null,"Backlog number")):null}var e=a(0),o=(a(7),a(50));return e.createElement(o.Calendar,{dateCellRender:s,monthCellRender:p})},style:".events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.events .c7n-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n.notes-month section {\n  font-size: 28px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.events</span> </span><span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.events</span> <span class="token class">.c7n-badge-status</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.notes-month</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">28</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.notes-month</span> section </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">28</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},2454:function(n,s,a){n.exports={content:{"zh-CN":[["p","一个通用的日历面板，支持年/月切换。"]],"en-US":[["p","A basic calendar component with Year/Month switch."]]},meta:{order:3,title:{"zh-CN":"选择功能","en-US":"Selectable Calendar"},filename:"components/calendar/demo/select.md",id:"components-calendar-demo-select"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2017-01-25\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    selectedValue<span class="token punctuation">:</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2017-01-25\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      selectedValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onPanelChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> selectedValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`You selected date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selectedValue <span class="token operator">&amp;&amp;</span> selectedValue<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function t(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}var p=a(0),e=(a(7),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),o=a(50),c=a(29),u=function(n){return n&&n.__esModule?n:{default:n}}(c),l=function(a){function c(){var a,t,p,e;n(this,c);for(var o=arguments.length,l=Array(o),i=0;i<o;i++)l[i]=arguments[i];return t=p=s(this,(a=c.__proto__||Object.getPrototypeOf(c)).call.apply(a,[this].concat(l))),p.state={value:(0,u.default)("2017-01-25"),selectedValue:(0,u.default)("2017-01-25")},p.onSelect=function(n){p.setState({value:n,selectedValue:n})},p.onPanelChange=function(n){p.setState({value:n})},e=t,s(p,e)}return t(c,a),e(c,[{key:"render",value:function(){var n=this.state,s=n.value,a=n.selectedValue;return p.createElement("div",null,p.createElement(o.Alert,{message:"You selected date: "+(a&&a.format("YYYY-MM-DD"))}),p.createElement(o.Calendar,{value:s,onSelect:this.onSelect,onPanelChange:this.onPanelChange}))}}]),c}(p.Component);return p.createElement(l,null)}}}});