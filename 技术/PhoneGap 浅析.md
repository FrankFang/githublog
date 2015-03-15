# PhoneGap 浅析

## 目录

+ PhoneGap 是什么
+ PhoneGap 能干什么
+ 与同类框架对比
+ 基于 PhoneGap 的产品
+ 自制 PhoneGap App
+ PhoneGap 的原理
+ 总结
+ 犀利点评
+ 参考文档


## PhoneGap 是什么？

2011年10月，电脑软件公司 Adobe 收购了新创公司 Nitobi Software。正是这家公司创建了 HTML5 移动应用框架 PhoneGap。

PhoneGap是一个标准的开源框架；一个用基于HTML，CSS和JavaScript的，创建跨平台移动应用的快速开发平台。它使开发者能够利用iPhone、Android、Symbian、WP7 和 Blackberry 智能手机的核心功能，此外 PhoneGap 拥有丰富的插件，可以以此扩展额外的功能。如下图所示：

HTML/CSS/JS + PhoneGap = App

![pic][image-1]


## PhoneGap 能干什么？

### 提供的 API（JS 直接调用）

* Accelerometer 加速度传感器。
* Camera 拍照。
* Capture 捕获音频、图像和视频的能力
* Compass 指南针。
* Connection 3G/Wifi 信息
* Contacts 联系人
* Device 设备信息。
* Events 框架提供的事件，如框架加载完成、App在后台挂起等。
* File 文件。
* Geolocation 地理位置。
* Globalization 国际化（与用户的国家和时区相关的方法）
* InAppBrowser App 中的浏览器对象（window.open 返回的对象）
* Media 记录和播放音频。
* Notification 视觉、听觉和触觉提醒。
* Splashscreen 开始画面/载入画面。
* Storage 本地储存。



### 支持插件（用 Java/Objective-C 等语言编写）

PhoneGap 提供的 API 并不多，如果我们有额外的需求，可以使用 Java 编写插件，提供给 JS 调用。（类似 QQ 客户端中提供给 JS 调用的接口）

## 与同类框架对比

目前开发移动程序框架选择很多，除了 PhoneGap，还有著名的 Titanium。比较而言，PhoneGap 更注重支持多个平台且遵循W3C 规范，而 Titanium 更注重提供原生的 UI 而只支持 iOS 和 Android。这也体现在 API 上，PhoneGap 没有提供 UI 部分的 JS 接口库，而 Titanium 则提供。

在开源协议上，PhoneGap是基于“New” BSD or MIT license 的，这比Titanium 的 Apache 2.0 license 更加开放。



## 基于 PhoneGap 的产品

测试设备：三星 I8150，Android 2.3.6，单核 CPU 1.4GHz，512 RAM，800x480 屏幕，淘宝价 ￥1400。

### 应用1：[Math IQ][1]

复杂度：★★☆☆☆

流畅度：★★★★☆

市场评分：4.0（共4人评分）

安装包大仙：

截图：

[![][image-2]][2]
[![][image-3]][3]
[![][image-4]][4]
[![][image-5]][5]

这是一款极简单的IQ测试游戏。60秒内，看自己能答对多少道 10 以内的四则运算题。然后系统会给你的 IQ 评分，你可以看自己的网络排名。

不过体验中发现在某些过场动画会出现瞬间黑屏的现象，不知道是不是开发者没有优化好。

### 应用2：[网易博客][6]

复杂度：★★★★☆

流畅度：★★★★☆

市场评分：2.7（共45人评分）

安装包大小：533KB

截图：
[![][image-6]][7]
[![][image-7]][8]
[![][image-8]][9]
[![][image-9]][10]
[![][image-10]][11]
[![][image-11]][12]
[![][image-12]][13]
[![][image-13]][14]
[![][image-14]][15]


网易的开发团队还在其[发布日志][16]中道出了一些经验：

+ 自主开发移动框架。框架包含：基础库(节点操作、触摸事件等)、控件库(事件调度、缓存、ajax引擎、模板引擎等)、移动库(通知、文件处理、地理位置等)。
+ 使用 Patched Phonegap Framework。这是 PhoneGap 基础上的 Patch，修正了如 Fling 事件被 skip、Focus、软键盘处理、Fixed position、Click 延迟等问题。
+ 新增 Native Util。项目需求增加的工具类，如消息通知、menu 等)。

市场给这款应用的评分不高，主要槽点在于：

+ 功能少
+ 界面丑
+ 安装后便无法打开 

这样一个还不算太复杂的应用，开发总历时三个月（交互、前端设计、开发、测试），看来如果我们采用类似的 Native + HTML5 开发模式的话，也会遇到很多无法预料的问题。

## 自制 DEMO



### DEMO 1：响应式博客页面

我在 PhoneGap 的页面里只加了一句话

	<script type="text/javascript">
	    window.location.href = 'http://frankfang.com';
	</script>
做成 App 用手机打开后，体验如下：

[![][image-15]][17]

1. 浏览效果和 PC 浏览器基本无差别。
2. 页面跳转过程中明显感觉到整个页面都不动了，毫无反应。（这个博客的服务器在海外，连接速度很慢）


### DEMO 2：微博话题墙（[Android 下载链接][18]）

我将腾讯微博的「话题墙」iframe 写到 PhoneGap 的页面中（没有其他任何代码），截图如下：

[![][image-16]][19]

体验结果如下：

1. 可以正常发表微博，流畅度可以接受。
1. 登录后无法跳转页面。页面提示「本页面无法关闭，请点此关闭」。但我点击无反应。
2. 页面无法缩小放大。我设置 iframe 的大小为 800\*480，发现字体看起来很小。
3. 无法使用图片上传功能。
4. PhoneGap 会自己记住登录态，下次启动无需再次登录。
5. 将 PhoneGap 挂到后台运行，下次开启时，会黑屏一段时间（足以使用户焦躁）。

### 结论
1. 显然 PhoneGap 的开发思路和传统浏览器有不少区别，除了静态展示功能，其他诸如页面跳转、系统控件、缩放等都需要开发者自行控制（调用 PhoneGap 的 API）。
2. 如果不使用复杂的动画效果，PhoneGap 的流畅度可以接受。

## PhoneGap 的原理

许多原生移动开发 SDK 提供了 Web浏览器窗口组件（Web视图），作为用户界面框架的一部分。在纯原生应用程序中，Web视图控件用来显示（远程或本地的）HTML 内容。

由 PhoneGap 创建的原生「包装器」（wrapper）应用程序把 HTML 页面装入到一个 Web 视图控件，并且在应用程序启动后，将 HTML 作为用户界面来显示。

如果 JavaScript 文件包含在 Web 视图装入的页面中，该代码就在页面上以正常方式运行。

不过，创建 Web 视图的原生应用程序能够与 Web 视图里面运行的JavaScript代码进行异步通信。这项技术在 PhoneGap 架构中通常被称为「桥接」（bridge）技术。

PhoneGap 充分利用该技术在 Web 视图里面创建 JavaScript API，能够以异步方式将消息发送到包装器应用程序中的原生代码，以及接收来自包装器应用程序中原生代码的消息。每个平台实现桥接层的方式各有不同，在iOS平台上，当你需要联系人列表时，你的 JS 方法调用就会进入到通过桥接发送的请求队列。随后，PhoneGap 会创建 iframe，iframe 会加载一个 URI（以 gap:// 开头），原生应用程序会处理该 URI 并将你发出的命令执行。通过在 Web视图的环境下运行 JavaScript，就能回过头来从原生代码联系到 Web 视图。

PhoneGap 的工作方式绝不止这些，但是通过实现桥接技术完成从 Web 视图到原生代码的消息传递是这项技术的核心部分，这让 Web 应用程序得以调用原生代码。


## 总结

我们常常希望得到一个「万精油」解决方案，但实际上不太可能有这样的解决方案。我们在选择一个方案时应充分了解其优势和缺点，才能因地制宜。

通过亲身对 PhoneGap 的体验，你才知道什么是「小马过河」：松鼠说河水没过头顶，老牛却说不到膝盖。

一方面外界对 PhoneGap 的评价都是「性能低、内存泄露」，但另一方面 Adobe 在大力发展 PhoneGap。我们是否看到这背后所隐藏的机会呢？HTML 5 在 PC 上流行看来至少还有几年，但在移动端的条件已日渐成熟，IMWeb 团队是否能抓住这个机会快速转型呢？移动互联网已是大势所趋，IMWeb 团队是否能创造更多更多更好的移动端应用呢？

借用乔帮主的一句话：你是想调一辈子 IE ，还是跟着我们改变移动互联网呢？


由于时间仓促，我只对 PhoneGap 做了些肤浅的了解，很有很多重要的问题没有涉及到，如 API 的调用效果和性能如何、使用哪种前端框架与 PhoneGap 搭配比较好、如何精简安装包大小等。下个月将陆续补上。

## 犀利点评

> + 如果希望用PhoneGap、Titanium等框架来实现一个流畅的高端游戏或者需要CPU计算能力的应用，在当前的硬件条件、开发成本上的可能性几近为零。
> + 如果想快速开发一个iOS or/and Android原生UI的程序，选择Titanium或许更适合。
> + 如果想实现一个跨平台的基于HTML的移动应用，PhoneGap或许更适合。 —— Roy

> 兼容性越强的技术，成本越低，性能越差；兼容性越差的技术，成本越高，性能越好。——月光博客




## 参考文档

1. [PhoneGap, Cordova, and what’s in a name?][20]
2. [跨平台移动开发工具:PhoneGap与Titanium全方位比拼][21]
3. [PhoneGap vs. Titanium][22]

[1]:	https://play.google.com/store/apps/details?id=com.games.mathiqtests&feature=search_result
[2]:	http://d.pr/i/NRvo+
[3]:	http://d.pr/i/22FA+
[4]:	http://d.pr/i/HCZR+
[5]:	http://d.pr/i/Mifz+
[6]:	https://play.google.com/store/apps/details?id=com.netease.blog&feature=search_result
[7]:	http://d.pr/i/O0Q3+
[8]:	http://d.pr/i/dcOn+
[9]:	http://d.pr/i/md40+
[10]:	http://d.pr/i/aE9W+
[11]:	http://d.pr/i/H9eB+
[12]:	http://d.pr/i/KSnh+
[13]:	http://d.pr/i/TTVh+
[14]:	http://d.pr/i/DA9v+
[15]:	http://d.pr/i/SSpt+
[16]:	http://blog.163.com/blog_app/blog/static/191134185201162493418492/
[17]:	http://d.pr/i/l2fC+
[18]:	http://d.pr/f/f8xG
[19]:	http://d.pr/i/wg7O+
[20]:	http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/
[21]:	http://mobile.51cto.com/web-338270_3.htm
[22]:	http://roynotes.com/blog/phonegap-vs-titanium/

[image-1]:	http://d.pr/i/pqMf+
[image-2]:	http://d.pr/i/NRvo-
[image-3]:	http://d.pr/i/22FA-
[image-4]:	http://d.pr/i/HCZR-
[image-5]:	http://d.pr/i/Mifz-
[image-6]:	http://d.pr/i/O0Q3-
[image-7]:	http://d.pr/i/dcOn-
[image-8]:	http://d.pr/i/md40-
[image-9]:	http://d.pr/i/aE9W-
[image-10]:	http://d.pr/i/H9eB-
[image-11]:	http://d.pr/i/KSnh-
[image-12]:	http://d.pr/i/TTVh-
[image-13]:	http://d.pr/i/DA9v-
[image-14]:	http://d.pr/i/SSpt-
[image-15]:	http://d.pr/i/l2fC-
[image-16]:	http://d.pr/i/wg7O-