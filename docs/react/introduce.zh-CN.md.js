webpackJsonp([91],{2318:function(n,s){n.exports={content:["article",["p","这里是基于 Ant Design@3.4.0 的 Choerodon UI 的 React 实现，开发和服务于企业级后台产品。"],["h2","特性"],["ul",["li",["p","提炼自企业级中后台产品的交互语言和视觉风格。"]],["li",["p","开箱即用的高质量 React 组件。"]],["li",["p","使用 TypeScript 构建，提供完整的类型定义文件。"]],["li",["p","全链路开发和设计工具体系。"]]],["h2","支持环境"],["ul",["li",["p","现代浏览器和 IE9 及以上（需要 ",["a",{title:null,href:"https://ant.design/docs/react/getting-started-cn#兼容性"},"polyfills"],"）。"]],["li",["p","支持服务端渲染。"]],["li",["p",["a",{title:null,href:"http://electron.atom.io/"},"Electron"]]]],["h2","版本"],["ul",["li",["p","稳定版：",["a",{title:null,href:"https://www.npmjs.org/package/choerodon-ui"},["img",{title:null,src:"https://img.shields.io/npm/v/choerodon-ui.svg?style=flat-square",alt:"npm package"}]]]]],["h2","安装"],["h3","使用 npm 或 yarn 安装"],["p",["strong","我们推荐使用 npm 或 yarn 的方式进行开发"],"，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> choerodon-ui --save'},["code","$ npm install choerodon-ui --save"]],["pre",{lang:"bash",highlighted:"$ yarn add choerodon-ui"},["code","$ yarn add choerodon-ui"]],["p","如果你的网络环境不佳，推荐使用 ",["a",{title:null,href:"https://github.com/cnpm/cnpm"},"cnpm"],"。"],["h3","浏览器引入"],["p","在浏览器中使用 ",["code","script"]," 和 ",["code","link"]," 标签直接引入文件，并使用全局变量 ",["code","choerodon-ui"],"。"],["p","我们在 npm 发布包内的 ",["code","choerodon-ui/dist"]," 目录下提供了 ",["code","choerodon-ui.js"]," ",["code","choerodon-ui.css"]," 以及 ",["code","choerodon-ui.min.js"]," ",["code","choerodon-ui.min.css"],"。你也可以通过 ",["a",{title:null,href:"https://unpkg.com/choerodon-ui/dist/"},"UNPKG"]," 进行下载。"],["blockquote",["p",["strong","强烈不推荐使用已构建文件"],"，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。"]],["h2","示例"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { DatePicker } from 'choerodon-ui';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","引入样式："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'choerodon-ui/dist/choerodon-ui.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'choerodon-ui/dist/choerodon-ui.less\'</span>'},["code","import 'choerodon-ui/dist/choerodon-ui.css';  // or 'choerodon-ui/dist/choerodon-ui.less'"]],["h3","按需加载"],["p","下面两种方式都可以只加载用到的组件。"],["ul",["li",["p","使用 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"（推荐）。"],["pre",{lang:"json",highlighted:'// .babelrc or babel-loader option\n<span class="token punctuation">{</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"choerodon-ui"</span><span class="token punctuation">,</span> <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> // `style<span class="token operator">:</span> <span class="token boolean">true</span>` 会加载 less 文件\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { "libraryName": "choerodon-ui", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件\n  ]\n}']],["blockquote",["p","注意：webpack 1 无需设置 ",["code","libraryDirectory"],"。"]],["p"," 然后只需从 choerodon-ui 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// babel-plugin-import 会帮助你加载 JS 和 CSS</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>'},["code","// babel-plugin-import 会帮助你加载 JS 和 CSS\nimport { DatePicker } from 'choerodon-ui';"]]],["li",["p","手动引入"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 加载 JS</span>\n<span class="token keyword">import</span> <span class="token string">\'choerodon-ui/lib/date-picker/style/css\'</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// 加载 CSS</span>\n<span class="token comment" spellcheck="true">// import \'choerodon-ui/lib/date-picker/style\';         // 加载 LESS</span>'},["code","import DatePicker from 'choerodon-ui/lib/date-picker';  // 加载 JS\nimport 'choerodon-ui/lib/date-picker/style/css';        // 加载 CSS\n// import 'choerodon-ui/lib/date-picker/style';         // 加载 LESS"]]]],["h2","链接"],["ul",["li",["p",["a",{title:null,href:"/index"},"首页"]]],["li",["p",["a",{title:null,href:"/docs/react/introduce"},"组件库"]]],["li",["p",["a",{title:null,href:"/changelog"},"更新日志"]]],["li",["p",["a",{title:null,href:"http://scaffold.ant.design"},"脚手架市场"]]],["li",["p",["a",{title:null,href:"http://ant.design/"},"Ant Design"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"React 底层基础组件"]]],["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"定制主题"]]]],["blockquote",["p","强烈推荐阅读 ",["a",{title:null,href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"《提问的智慧》"],"、",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"《如何向开源社区提问题》"]," 和 ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"《如何有效地报告 Bug》"],"、",["a",{title:null,href:"https://zhuanlan.zhihu.com/p/25795393"},"《如何向开源项目提交无法解答的问题》"],"，更好的问题更容易获得帮助。"]]],meta:{order:0,title:"Choerodon UI of React",filename:"docs/react/introduce.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#特性",title:"特性"},"特性"]],["li",["a",{className:"bisheng-toc-h2",href:"#支持环境",title:"支持环境"},"支持环境"]],["li",["a",{className:"bisheng-toc-h2",href:"#版本",title:"版本"},"版本"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装",title:"安装"},"安装"]],["li",["a",{className:"bisheng-toc-h2",href:"#示例",title:"示例"},"示例"]],["li",["a",{className:"bisheng-toc-h2",href:"#链接",title:"链接"},"链接"]]]}}});