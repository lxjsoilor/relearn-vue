(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3c1b"],{"0412":function(s,t,r){"use strict";r.r(t);var a=function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",[r("md")],1)},e=[],n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},p=[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h3",[s._v("先看两个问题：")]),r("ol",[r("li",[r("code",{pre:!0},[s._v("router-link")]),s._v("、"),r("code",{pre:!0},[s._v("router-view")]),s._v("是什么，有什么作用？")]),r("li",[s._v("url 变化时，页面是如何更新的？")])]),r("h3",[s._v("工作流程图：")]),r("img",{staticStyle:{width:"800px"},attrs:{src:"https://relearnvue.com/static/vue-router.png"}}),r("h3",[r("code",{pre:!0},[s._v("vue-router")]),s._v(" 使用方式：")]),r("ul",[r("li",[r("code",{pre:!0},[s._v("router/index.js")])])]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// step1：引入 `vue` 和 `vue-router`")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueRouter "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./vue-router'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// step2：使用 VueRouter")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 可知VueRouter是插件，会暴露install方法，供Vue调用")]),s._v("\nVue.use(VueRouter)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// step3：定义路由配置项")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" routes = [\n  {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/'")]),s._v(",\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Home'")]),s._v(",\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": Home\n  },\n  {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/about'")]),s._v(",\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'About'")]),s._v(",\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": About\n  }\n]\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// step4：创建 `router` 对象并导出")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" router = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" VueRouter({\n  routes "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将配置项传入")]),s._v("\n})\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" router\n")])]),r("ul",[r("li",[r("code",{pre:!0},[s._v("main.js")])])]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" router "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./router'")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 在根组件初始化中传入 router 对象")]),s._v("\n  router,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(" h(App)\n}).$mount("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(")\n")])]),r("ul",[r("li",[s._v("在"),r("code",{pre:!0},[s._v("vue")]),s._v("组件中，可以通过"),r("code",{pre:!0},[s._v("this.$router")]),s._v("拿到路由器对象")])]),r("h3",[s._v("实现自己的 "),r("code",{pre:!0},[s._v("vue-router")]),s._v("，取名 "),r("code",{pre:!0},[s._v("mvue-router")]),s._v("😁")]),r("ul",[r("li",[s._v("创建 "),r("code",{pre:!0},[s._v("MVueRouter")]),s._v(" 类：")])]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// MVue保存Vue类")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" MVue\n"),r("span",{pre:!0,attrs:{class:"hljs-class"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("MVueRouter")]),s._v(" ")]),s._v("{\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用：new MVueRouter({routes})")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v("(options) {\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将传入的配置项保存，options里有路由配置项：routes")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$options = options\n\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将url中的path解析出来，根据路由配置项，可以通过path找到对应的component")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// 比如：当前window.location.hash是 "#/about"，initPath为 "/about"，对应的组件是 About')]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" initPath = "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".location.hash.slice("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") || "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/'")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 利用Vue的工具方法，将initPath设置成响应式数据，取名currentPath")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 当currentPath改变时，触发对应组件渲染更新")]),s._v("\n    MVue.util.defineReactive("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'currentPath'")]),s._v(", initPath)\n\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 缓存路由映射关系，处理成下面的格式，方便后面使用")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// {")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     '/about/': {path: '/about', component: About}")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// }")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".routeMap = {}\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$options.routes.forEach("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("route")]),s._v(" =>")]),s._v(" {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".routeMap[route.path] = route\n    })\n\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 监听事件，更新最新的currentPath")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 页面path改变")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".addEventListener("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'hashchange'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".onHashChange.bind("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("))\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 首次加载页面")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".addEventListener("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'load'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".onHashChange.bind("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("))\n  }\n\n  onHashChange() {\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 拿到最新的path，注：因为currentPath是响应式的，当它改变时，会触发router-view更新")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".currentPath = "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".location.hash.slice("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  }\n}\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 实现install方法")]),s._v("\nMVueRouter.install = "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(" =>")]),s._v(" {\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 保存Vue，为什么要这样设计，而不是直接引入vue呢？")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 不能要求router的使用者去安装vue")]),s._v("\n  MVue = Vue\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 通过全局混入的方式，将根组件中的router对象挂载到原型上")]),s._v("\n  Vue.mixin({\n    beforeCreate() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 判断当前组件的选项中是否存在router，存在router的，就是根组件")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$options.router) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 所以Vue组件都可以通过this.$router拿到路由器实例")]),s._v("\n        Vue.prototype.$router = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$options.router\n      }\n    }\n  })\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 实现router-link组件")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// 使用router-link：<router-link to="/about">关于</router-link>')]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// 最终得到的dom：<a data-v-49a3a064="" href="#/about" class="">关于</a>')]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 所以router-link，实际上就是对a标签的封装")]),s._v("\n  Vue.component("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'router-link'")]),s._v(", {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("to")]),s._v(": {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    },\n    render(h) {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" h(\n        "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'a'")]),s._v(",\n        {\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#'")]),s._v(" + "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".to\n          }\n        },\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$slots.default\n      )\n    }\n  })\n\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 实现router-view")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// router-view就是一个容器，路由对应的组件渲染在这里进行")]),s._v("\n  Vue.component("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'router-view'")]),s._v(", {\n    render(h) {\n      "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 因为通过混入了router，所以组件上能拿到router对象")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 将router对象中的路由信息和当前path解构出来")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { routeMap, currentPath } = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$router\n      "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 取出当前path对应的组件")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" comp = routeMap[currentPath]\n        ? routeMap[currentPath].component\n        : "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" h(comp)\n    }\n  })\n}\n")])]),r("h3",[s._v("思考：嵌套路由如何实现？")])])}],l=r("2877"),v={},_=Object(l["a"])(v,n,p,!1,null,null,null),o=_.exports,c={components:{md:o}},h=c,u=Object(l["a"])(h,a,e,!1,null,"7fdc297b",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a3c1b.b0a6077b.js.map