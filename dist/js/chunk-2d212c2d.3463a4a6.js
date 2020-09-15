(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212c2d"],{aa90:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("md"),t("div",{staticClass:"rl-show-area"},[t("p",[t("span",[s._v("在父组件中，通过this.$refs.child获取子组件实例，调用子组件add方法：")]),t("button",{on:{click:function(a){return s.$refs.child.add()}}},[s._v(" this.$refs.child.add() ")])]),t("child",{ref:"child"})],1),t("point",[s._v("$children和$refs的区别是：前者只能获取子组件，而$refs，可以获取到所有设置了ref属性的子组件、子孙组件、子节点以及子孙节点。")])],1)},n=[],e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("子组件的count："+s._s(s.count))])},l=[],p={data:function(){return{count:0}},methods:{add:function(){this.count++}}},v=p,c=t("2877"),_=Object(c["a"])(v,e,l,!1,null,"93b59092",null),h=_.exports,d=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("常用于父与子、父与子孙组件之间通信。")]),t("p",[s._v("父组件：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 子组件 --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("child")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'child'")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("child")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 子节点 --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'div1'")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 子孙节点 --\x3e")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'div2'")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("p",[s._v("子组件：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    子组件的count：{{count}}\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    add() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".count++\n    }\n  }\n}\n")])])])}],j={},o=Object(c["a"])(j,d,i,!1,null,null,null),u=o.exports,m={components:{child:h,md:u}},f=m,g=Object(c["a"])(f,r,n,!1,null,"5ac26be2",null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d212c2d.3463a4a6.js.map