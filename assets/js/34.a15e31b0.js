(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{215:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("p",[t._v("从前端的角度来说，性能优化可以分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究.")]),t._m(2),e("p",[t._v("是的，这个问题有点熟悉，面试官比较常问的是从浏览器打开到页面渲染完成，发生了什么事情。这个问题网上很多回答，我也不就重复的细说了。主要的过程是：")]),e("p",[t._v("浏览器解析->查询缓存->dns查询->建立链接->服务器处理请求->服务器发送响应->客户端收到页面->解析HTML->构建渲染树->开始显示内容(白屏时间)->首屏内容加载完成(首屏时间)->用户可交互(DOMContentLoaded)->加载完成(load)")]),e("p",[t._v("很显然，如果我们要进行加载时间的优化，我们需要从这里的每一个步骤都去思考，去总结，而避免东凑一点，西凑一点。")]),t._m(3),e("p",[t._v("有一句话说得好，If You Can't Measure It, You Can't Manage It。在对这些环节进行优化之前，我们需要知道如何监控这些环节花费了多少时间。")]),e("p",[t._v("首先推荐一个"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming",target:"_blank",rel:"noopener noreferrer"}},[t._v("PerformanceTiming"),e("OutboundLink")],1),t._v(",可以获取到很多页面加载相关的数据。")]),e("p",[t._v("比较常用的有:")]),t._m(4),e("p",[t._v("如果不使用该API，可以以服务器渲染返回的时间，或是SPA路由跳转离开的时间为起点，domContentLoaded，load等事件为结束点进行记录。或是直接上google analytics。方法很多，就不细说了。")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 性能优化")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"性能优化是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 性能优化是什么")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"从浏览器打开到页面渲染完成，花费了多少时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从浏览器打开到页面渲染完成，花费了多少时间","aria-hidden":"true"}},[this._v("#")]),this._v(" 从浏览器打开到页面渲染完成，花费了多少时间")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"页面加载时间监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面加载时间监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面加载时间监控")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DNS")]),t._v("解析时间： domainLookupEnd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" domainLookupStart\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),t._v("建立连接时间： connectEnd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" connectStart\n白屏时间： responseStart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\ndom渲染完成时间： domContentLoadedEventEnd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\n页面onload时间： loadEventEnd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\n")])])])}],!1,null,null,null);a.default=r.exports}}]);