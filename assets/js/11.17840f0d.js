(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{203:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Webview 是我们前端开发从 PC 端演进到移动端的一个重要载体，现在大家每天使用的 App，webview 都发挥着它的重要性。其应用场景也很多，这里主要阐述 APP 内嵌页面场景。")]),t._m(1),t._m(2),t._m(3),s("p",[t._v("JSBridge 体现的形式其实就是，当我们在 native 内打开 m 页，native 会在全局的 window 下，为我们注入一个 Bridge。这个 Bridge 里面，会包含我们与 native 交互的各种方法、比如判断第三方 App 是否安装、获取网络信息等等功能。")]),t._m(4),t._m(5),s("p",[t._v("在 IOS 中，主要使用 WebViewJavascriptBridge 来注册，可以参考 Github WebViewJavascriptBridge")]),t._m(6),t._m(7),s("p",[t._v("在 Android 中，需要通过 addJavascriptInterface 来注册")]),t._m(8),t._m(9),t._m(10),s("p",[t._v("schame url 的不紧可以在 native 内交互，也是可以跨 app 来交互的。schema 也是目前我们转转使用的主要方式，它类似一个伪协议的链接（也可以叫做统跳协议）")]),t._m(11),s("p",[t._v("在 webview 里，当 m 页发起 schema 请求时，native 端会去进行捕获。这里可以顺带给大家普及一下 IOS 和 Android 的知识，具体如下：")]),t._m(12),s("p",[t._v("以 UIWebView 为例，在 IOS 中，UIWebView 内发起网络请求时，可以通过 delegate 在 native 层来拦截，然后将捕获的 schema 进行触发对应的功能或业务逻辑（利用 shouldStartLoadWithRequest）。代码如下：")]),t._m(13),t._m(14),s("p",[t._v("在 Android 中，可以使用 shouldoverrideurlloading 来捕获 schema url。代码如下：")]),t._m(15),s("p",[t._v("待续。。。。")]),t._m(16),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/CGCLcrgAM3k5mK9qi_15FQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解 webview 么？"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"webview-与-app-native-之间的交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webview-与-app-native-之间的交互","aria-hidden":"true"}},[this._v("#")]),this._v(" webview 与 App native 之间的交互")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"交互方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 交互方式")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("目前 javascript 和客户端交互的常见方式有两种： JSBridge | Schema")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"jsbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge","aria-hidden":"true"}},[this._v("#")]),this._v(" JSBridge")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 作用域下的JSBridge，\n   * 和实例化后的getNetInfomation，\n   * 均根据实际约定情况而定，\n   * 这里只是用来举例说明\n   */")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNetInfomation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"ios-端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-端","aria-hidden":"true"}},[this._v("#")]),this._v(" IOS 端")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n  jsBridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" WebViewJavascriptBridge bridgeForWebView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webView "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" jsBridge registerHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scanClick"')]),t._v("\n      handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WVJBResponseCallback responseCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to do")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"android-端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-端","aria-hidden":"true"}},[this._v("#")]),this._v(" Android 端")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JSBridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    @JavascriptInterface "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNetInfomation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to do")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  webView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addJavascriptInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JSBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JSBridge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("注： Bridge 的方式是在 native 内部交互")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("如： schema://path?param=abc")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"ios-端-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-端-2","aria-hidden":"true"}},[this._v("#")]),this._v(" IOS 端")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOOL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("webView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIWebView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("webView shouldStartLoadWithRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSURLRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("request navigationType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIWebViewNavigationType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("navigationType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取scheme url后自行进行处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("requestString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" absoluteString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"android-端-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-端-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Android 端")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldOverrideUrlLoading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("WebView view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读取到url后自行进行分析处理")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里注意：如果返回false，则WebView处理链接url，如果返回true，代表WebView根据程序来执行url")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文章")])}],!1,null,null,null);a.default=e.exports}}]);