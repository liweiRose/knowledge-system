# 浏览器

## 总体结构

| 用户界面                              | 浏览器引擎（浏览器内核）         | 呈现引擎                                            | 网络                                                                       | 用户界面后端                               | JavaScript 解释器（V8 引擎）   | 数据存储                     |
| ------------------------------------- | -------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------ | ---------------------------- |
| 包括地址栏、前进/后退按钮、书签菜单等 | 在用户界面和呈现引擎之间传送指令 | 负责显示请求的内容（如负责解析 HTML 和 CSS 内容等） | 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。 | 用于绘制基本的窗口小部件，比如组合框和窗口 | 用于解析和执行 JavaScript 代码 | 持久层，在硬盘上保存各种数据 |

## 浏览器引擎（浏览器内核）

- 浏览器内核的是一个多线程处理，它主要包含如下几个线程:

  - GUI 渲染线程： 渲染页面的 html 元素

  - JavaScript 引擎线程： 页面的交互和 dom 渲染

  - 定时触发器线程：一定时间后，来触发对应的线程

  - 事件触发线程：当一个事件触发该线程的时候，就会把它放到 js 的事件队列中等待执行。常用于异步操作。

  - 异步 http 线程： 在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求， 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到 JavaScript 引擎的处理队列中等待处理。

- tips:

  - JavaScript 引擎和 GUI 引擎互斥，不能一边操作 dom 一边渲染页面

  - JavaScript 引擎是单线程，所有需要按照事件处理队列来处理相应的代码。

  - JavaScript 引擎有一个监听事件（monitoring process）的功能，会持续不断的检查 js 引擎的主线程执行栈是否为空，如果为空就会去取事件触发线程存放在事件队列中的回调函数执行。
