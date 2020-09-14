(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230a95"],{ecde:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("md1"),t("div",{staticClass:"rl-show-area"},[t("custom1",{model:{value:s.a,callback:function(a){s.a=a},expression:"a"}}),s._v(" a的值："+s._s(s.a)+" ")],1),t("md2"),t("div",{staticClass:"rl-show-area"},[t("custom2",{model:{value:s.b,callback:function(a){s.b=a},expression:"b"}}),s._v(" b的值："+s._s(s.b)+" ")],1)],1)},r=[],n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("input",{attrs:{type:"text"},domProps:{value:s.value},on:{input:s.valueInput}})])},l=[],p={props:{value:{type:String,required:!0}},methods:{valueInput:function(s){this.$emit("input",s.target.value)}}},v=p,c=t("2877"),_=Object(c["a"])(v,n,l,!1,null,"23ce923f",null),h=_.exports,u=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[s._v(" 苹果 "),t("input",{attrs:{type:"checkbox",value:"苹果"},domProps:{checked:s.checked},on:{change:s.changeHandle}})])},o=[],j={model:{prop:"checked",event:"change"},props:{checked:Boolean},methods:{changeHandle:function(s){this.$emit("change",s.target.checked)}}},i=j,m=Object(c["a"])(i,u,o,!1,null,"29f29fb7",null),d=m.exports,g=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},f=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("组件可以通过设置v-model来实现双向绑定，v-model是一个语法糖，实际做的事情是：接收一个名为value的prop，然后emit一个名为input的事件。")]),t("p",[s._v("使用：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("...\n\n<custom1 v-model="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v("><"),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/custom1>\n<p>a的值：{{a}}</")]),s._v("p>\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("custom2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("custom2")]),s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("b的值：{{b}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")])]),s._v("\n\n...\n\ndata() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("a")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("b")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n}\n")])]),t("p",[s._v("自定义组件custom1.vue：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@input")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"valueInput"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 接收value属性")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    },\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    valueInput(e) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// emit名为input的事件")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'input'")]),s._v(", e.target.value)\n    },\n  },\n}\n")])])])}],b={},k=Object(c["a"])(b,g,f,!1,null,null,null),x=k.exports,w=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},y=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",[s._v("对于像checkbox这种选择型控件，可以设置model选项来指定接收的属性名和派发的事件名。")]),t("p",[s._v("自定义组件custom2.vue：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    苹果\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox"')]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":checked")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"changeHandle"')]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"苹果"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 指定v-model接收的属性、派发的方法")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("model")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'checked'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("event")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'change'")]),s._v(",\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("checked")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Boolean")]),s._v(",\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    changeHandle(e) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'change'")]),s._v(", e.target.checked)\n    },\n  },\n}\n")])])])}],$={},E=Object(c["a"])($,w,y,!1,null,null,null),O=E.exports,H={components:{custom1:h,custom2:d,md1:x,md2:O},data:function(){return{a:"",b:!0}}},I=H,q=Object(c["a"])(I,e,r,!1,null,"c972dd4e",null);a["default"]=q.exports}}]);
//# sourceMappingURL=chunk-2d230a95.e52cee29.js.map