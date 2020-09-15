(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4bd0"],{9201:function(s,r,e){"use strict";e.r(r);var t=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",[e("md")],1)},a=[],n=function(){var s=this,r=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("section",[e("h3",[s._v("利用 "),e("code",{pre:!0},[s._v("webhook")]),s._v(" 实现持续集成")]),e("ol",[e("li",[s._v("将本地代码上传 "),e("code",{pre:!0},[s._v("GitHub")]),s._v(" 仓库")]),e("li",[s._v("添加 "),e("code",{pre:!0},[s._v("webhook")]),s._v("，配置服务器信息，当仓库中有指定事件发生（比如："),e("code",{pre:!0},[s._v("push")]),s._v("）时，会向指定的服务器发送请求")]),e("li",[s._v("在服务器端运行 "),e("code",{pre:!0},[s._v("server")]),s._v(" 服务，处理 "),e("code",{pre:!0},[s._v("GitHub")]),s._v(" 发过来的请求，然后执行具体的操作")])]),e("h3",[s._v("配置 webhook")]),e("ul",[e("li",[e("p",[s._v("添加 "),e("code",{pre:!0},[s._v("webhook")]),e("img",{staticStyle:{width:"100%"},attrs:{src:"https://relearnvue.com/static/webhook1.png"}})])]),e("li",[e("p",[s._v("配置服务器信息 "),e("img",{staticStyle:{width:"100%"},attrs:{src:"https://relearnvue.com/static/webhook2.png"}})])])]),e("h3",[s._v("编写后台服务")]),e("ul",[e("li",[e("code",{pre:!0},[s._v("webhooks.js")])])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" http = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http'")]),s._v(")\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用github-webhook-handler处理webhook")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" createHandler = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'github-webhook-handler'")]),s._v(")\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建handler实例，这里的path和secret要和github上保持一致")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" handler = createHandler({ "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/webhooks'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("secret")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'relearnvuehahaha'")]),s._v(" })\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 创建server，监听端口")]),s._v("\nhttp\n  .createServer("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("req, res")]),s._v(") ")]),s._v("{\n    "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 用handler处理请求")]),s._v("\n    handler(req, res, "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("err")]),s._v(") ")]),s._v("{\n      res.statusCode = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("404")]),s._v("\n      res.end("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'no such location'")]),s._v(")\n    })\n  })\n  .listen("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6519")]),s._v(", () => {\n    "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Webhooks Listen at 6519'")]),s._v(")\n  })\n\nhandler.on("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("err")]),s._v(") ")]),s._v("{\n  "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".error("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Error：'")]),s._v(", err.message)\n})\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 监听push事件")]),s._v("\nhandler.on("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'push'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("event")]),s._v(") ")]),s._v("{\n  "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(\n    "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'接收到一个push事件，for %s to %s：'")]),s._v(",\n    event.payload.repository.name,\n    event.payload.ref\n  )\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 只处理master分支上且commit message以[cicd]开头的push事件")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (\n    event.payload.ref === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'refs/heads/master'")]),s._v(" &&\n    event.payload.head_commit.message.startsWith("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'[cicd]'")]),s._v(")\n  ) {\n    "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'deploy master branch'")]),s._v(")\n    "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 执行命令")]),s._v("\n    run_cmd("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sh'")]),s._v(", ["),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./deploy-dev.sh'")]),s._v("], text => "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(text))\n  }\n})\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 使用child_process执行shell文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("run_cmd")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cmd, args, cb")]),s._v(") ")]),s._v("{\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" spawn = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'child_process'")]),s._v(").spawn\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" child = spawn(cmd, args)\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" res = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 输出")]),s._v("\n  child.stdout.on("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'data'")]),s._v(", buffer => (res += buffer.toString()))\n  child.stdout.on("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'end'")]),s._v(", () => cb(res))\n}\n")])]),e("ul",[e("li",[e("p",[s._v("将 "),e("code",{pre:!0},[s._v("webhooks.js")]),s._v(" 运行在服务器端，调试时可以用 "),e("code",{pre:!0},[s._v("node")]),s._v("、"),e("code",{pre:!0},[s._v("nodemon")]),s._v("，也可以用 "),e("code",{pre:!0},[s._v("forever")]),s._v("、"),e("code",{pre:!0},[s._v("pm2")]),s._v(" 保持后台运行")])]),e("li",[e("p",[e("code",{pre:!0},[s._v("deploy-dev.sh")]),s._v(" 脚本")]),e("ol",[e("li",[s._v("拉取最新代码")]),e("li",[s._v("执行"),e("code",{pre:!0},[s._v("build")])])])])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[s._v("echo 正在部署...\necho git pull...\ngit pull origin master\nnpm install\nnpm run build\n")])]),e("ul",[e("li",[s._v("执行 push 后，webhook 服务会自动拉取最新代码，然后打包最新资源，用"),e("code",{pre:!0},[s._v("Nginx")]),s._v("部署不需要重启，网址随即更新")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("$")]),e("span",{pre:!0,attrs:{class:"bash"}},[s._v(" git add -A && git commit -m "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'[cicd]test cicd'")]),s._v(" && git push origin master")]),s._v("\n")])])])}],p=e("2877"),v={},_=Object(p["a"])(v,n,l,!1,null,null,null),c=_.exports,o={components:{md:c}},h=o,i=Object(p["a"])(h,t,a,!1,null,"479e38c8",null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0e4bd0.97ba9fd8.js.map