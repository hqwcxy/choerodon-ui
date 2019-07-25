webpackJsonp([249],{2248:function(n,o){n.exports={content:["section",["p","为组件内建文案提供统一的国际化支持。"],["h2","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> localeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro/lib/locale-context/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\n\nlocaleContext<span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span>zh_CN<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { localeContext } from 'choerodon-ui/pro';\nimport zh_CN from 'choerodon-ui/pro/lib/locale-context/zh_CN';\nimport 'moment/locale/zh-cn';\n\nlocaleContext.setLocale(zh_CN);"]],["p","我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 ",["a",{title:null,href:"https://github.com/choerodon/choerodon-ui/blob/master/components-pro/locale-context/"},"这里"]," 找到。"],["p","注意：如果你需要使用 UMD 版的 dist 文件，应该引入 ",["code","choerodon-ui/pro/dist/choerodon-ui/pro-with-locales.js"],"，同时引入 moment 对应的 locale，然后按以下方式使用："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span> localeContext<span class="token punctuation">,</span> locales <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">[</span><span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\nlocaleContext<span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span>zh_CN<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const { localeContext, locales } = window['choerodon-ui/pro'];\n\n...\n\nlocaleContext.setLocale(zh_CN);"]],["h3","增加语言包"],["p","如果你找不到你需要的语言包，欢迎你在 ",["a",{title:null,href:"https://github.com/choerodon/choerodon-ui/blob/master/components-pro/locale-context/zh_CN.tsx"},"简体中文语言包"]," 的基础上创建一个新的语言包，并给我们 Pull Request。"]],meta:{category:"Pro Components",subtitle:"国际化",cols:1,type:"Other",title:"LocaleContext",filename:"components-pro/locale-context/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API-Methods",title:"API Methods"},"API Methods"]]],api:["section",["h2","API Methods"],["table",["thead",["tr",["th","方法"],["th","说明"],["th","参数类型"],["th","默认值"]]],["tbody",["tr",["td","setLocale(locale)"],["td","语言包配置，语言包可到 ",["code","choerodon-ui/pro/lib/locale-context/"]," 目录下寻找"],["td","object"],["td","choerodon-ui/pro/lib/locale-context/zh_CN"]],["tr",["td","setSupports(supports)"],["td","IntlField支持的可编辑语言，默认可参考 ",["code","choerodon-ui/pro/lib/locale-context/supports"]],["td","object"],["td","{ zh_CN:'简体中文', en_GB: 'English' }"]]]]]}}});