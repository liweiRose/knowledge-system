# 性能优化
### 性能优化是什么
从前端的角度来说，性能优化可以分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究.
### 从浏览器打开到页面渲染完成，花费了多少时间
是的，这个问题有点熟悉，面试官比较常问的是从浏览器打开到页面渲染完成，发生了什么事情。这个问题网上很多回答，我也不就重复的细说了。主要的过程是：

浏览器解析->查询缓存->dns查询->建立链接->服务器处理请求->服务器发送响应->客户端收到页面->解析HTML->构建渲染树->开始显示内容(白屏时间)->首屏内容加载完成(首屏时间)->用户可交互(DOMContentLoaded)->加载完成(load)

很显然，如果我们要进行加载时间的优化，我们需要从这里的每一个步骤都去思考，去总结，而避免东凑一点，西凑一点。
### 页面加载时间监控
有一句话说得好，If You Can't Measure It, You Can't Manage It。在对这些环节进行优化之前，我们需要知道如何监控这些环节花费了多少时间。

首先推荐一个[PerformanceTiming](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming),可以获取到很多页面加载相关的数据。

比较常用的有:
```js
DNS解析时间： domainLookupEnd - domainLookupStart
TCP建立连接时间： connectEnd - connectStart
白屏时间： responseStart - navigationStart
dom渲染完成时间： domContentLoadedEventEnd - navigationStart
页面onload时间： loadEventEnd - navigationStart
```
如果不使用该API，可以以服务器渲染返回的时间，或是SPA路由跳转离开的时间为起点，domContentLoaded，load等事件为结束点进行记录。或是直接上google analytics。方法很多，就不细说了。
### 项目做过哪些性能优化？
- 减少 HTTP 请求数
- 减少 DNS 查询
- 使用 CDN
- 避免重定向
- 图片懒加载
- 减少 DOM 元素数量
- 减少 DOM 操作
- 使用外部 JavaScript 和 CSS
- 压缩 JavaScript 、 CSS 、字体、图片等
- 优化 CSS Sprite
- 使用 iconfont
- 字体裁剪
- 多域名分发划分内容到不同域名
- 尽量减少 iframe 使用
- 避免图片 src 为空
- 把样式表放在  中
- 把脚本放在页面底部
### 你对优化这块了解多少?
- 比如从客户端着手的:
- 压缩代码(JS/CSS),压缩图片
- 合并一些小图片(css sprite)
- 若是打包的代码尽可能切割成多个 chunk,减少单一 chunk过大
- 静态文件采用 cdn 引入
- HTTP的缓存头使用的合理
- 减小第三方库的依赖
- 对于代码应该考虑性能来编写,比如使用requestAnimationFrame绘制动画,尽可能减少页面重绘(DOM 改变)
- 渐进升级,引入preload这些预加载资源
- 看情况用service worker来缓存资源(比如移动端打算搞 PWA)
### 前端需要注意哪些SEO
- 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
- description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
- 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
- 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
- 重要内容不要用js输出：爬虫不会执行js获取内容
- 少用iframe：搜索引擎不会抓取iframe中的内容
- 非装饰性图片必须加alt

- 提高网站速度：网站速度是搜索引擎排序的一个重要指标