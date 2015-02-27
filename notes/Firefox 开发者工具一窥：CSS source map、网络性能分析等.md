# Firefox 开发者工具一窥：CSS source map、网络性能分析等

<embed src="http://player.youku.com/player.php/sid/XNjc1ODg5MDE2/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>

YouTube链接：http://www.youtube.com/watch?feature=player\_embedded&v=0te4j4rPtGs


Firefox 29 已经放到曙光版（Aurora）发布频道了（译注：每一个 Firefox 正式版的出炉都要经历 Nightly、Aurora 和 Beta 三个阶段。），这意味着现在是时候透露这个版本的重要变更了，你可以在这篇文章一窥新版开发者工具的究竟。

开发者工具更美观了
---- 

除了添加新的功能，我们还更新了暗色主题和亮色主题的外观。我们对亮色主题做了大幅修改，而且整个工具箱在两种主题下都保持了统一的设计。你可以在工具箱中的[设置][1]里更换主题。（详见[开发备注][2]）

![亮色主题][image-1]
![暗色主题][image-2]

网络监视器
---- 

网络监视器向你展示了浏览器花了多少时间来加载网页的各个文件。这项功能能帮助你分析网站在首次加载时和存在缓存时的网络性能。（详见[开发备注][3]）

![网络面板][image-3]

点击网络（Network）面板中的秒表图标即可开启性能分析工具。详见下面的视频，你也可以[在 MDN 上查看更多详情][4]。

<embed src="http://player.youku.com/player.php/sid/XNjc1ODg5MDE2/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>

在新版 Firefox 中你能够以 Data URI 的格式复制图片请求。只需在图片请求上右击，在右键菜单中选择「Copy Image as Data URI」，数据就会保存到你的系统剪切板了。（详见[开发备注][5]）

![Data URI][image-4]

元素审查
---- 

我们之前已经[对元素选择器做了改动][6]，把元素选择器按钮与其他按钮放到了同一行。（详见[开发备注][7]）

我们在 CSS 规则视图中添加了 CSS 变形（transform）预览框。现在，如果你把鼠标悬浮到一条 CSS 变形规则上，你就会在弹出的预览框里看到效果了。马上下载 Firefox Nightly 版或者曙光版来体验一下 [CSS 变形的效果][8] 吧。（详见[开发备注][9]）

![CSS 变形预览][image-5]

CSS 规则视图现在支持粘贴多条 CSS 语句，例如

\`\`\`
background: #ccc;
color: red
\`\`\`

（详见[开发备注][10]）

和在网络面板里一样，你也可以在这里以 Data URI 的格式复制图片了。（详见[开发备注][11]）

样式编辑器
---- 

样式编辑器现已支持 CSS source map（详见[开发备注][12]），并且能够自动填充 CSS 属性和值。（详见[开发备注][13]）

想要看到更多相关内容？你可以查看我们先前发布的一篇文章，介绍了[如何在开发者工具中借助 source map 来编辑 Sass 和 Less 文件][14]

![样式编辑器][image-6]

调试器
---- 

我们在源文件列表的右边添加了一个经典的调用堆栈列表。（详见[开发备注][15]）

![调用堆栈][image-7]

调试器里还新增了一个「启用/禁用所有断点」按钮。它可以一次性地切换所有断点的状态，方便开发者在正常模式和调试模式间快速地切换。（详见[开发备注][16]）

![切换按钮][image-8]

你还可以从调试器里直接选中并审查 DOM 节点。如果你的鼠标悬停在变量列表中一个 DOM 节点变量上，页面中对应的元素就会高亮。如果你点击下图所示的审查器图标，该节点就会在元素审查标签中被打开。控制台输出的节点也支持这个功能。（详见[开发备注][17]）

![][image-9]

新的代码美化工具（pretty printer）现在可以保留源代码中的注释了。我们使用的美化工具是开源的 [pretty-fast][18]，它相当地快。如果你发现它运行很慢，不妨告诉我们。（详见[开发备注][19]）

控制台
---- 

我们对 console.trace 进行了改进。调用堆栈与控制台其他输出展示在一起，并且每行末尾有一个指向对应源代码的链接，点击链接可以在调试器里将其打开。（详见[开发备注][20]）

![][image-10]

同时我们还改进了控制台里对象的输出，根据对象类型的不同，控制台会展示不同的细节。（详见[开发备注][21]）

![][image-11]

代码编辑器
---- 

开发者工具里的很多小工具都提供代码编辑功能，比如便签（Scratchpad）、样式编辑器和调试器。新版的代码编辑器有如下更新：

* 代码折叠。（详见[开发备注][22]）
* 支持 Emacs 快捷键和 VIM 快捷键。打开 about:config 页面，将 devtools.editor.keymap 设置为 vim 或者 emacs，然后重启开发者工具即可。（详见[开发备注][23]）
* 支持 ES6 语法高亮。（详见[开发备注][24]）
![][image-12]

非常感谢本次更新中开发者工具的开发者们（一共有43位）！这里有一份 Firefox 29 解决的开发者工具相关 bug 列表

如果你有任何反馈建议、bug 提交、需求申请或其他问题，可以一如既往地在本文下方评论，或者与我们的团队联系 [@FirefoxDevTools][25]。

[1]:	https://developer.mozilla.org/en-US/docs/Tools_Toolbox#Settings
[2]:	https://bugzilla.mozilla.org/show_bug.cgi?id=957117
[3]:	https://bugzilla.mozilla.org/show_bug.cgi?id=946601
[4]:	https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor#Performance_analysis
[5]:	https://bugzilla.mozilla.org/show_bug.cgi?id=964014
[6]:	https://hacks.mozilla.org/2014/01/upcoming-changes-to-the-firefox-developer-tools-node-picker/
[7]:	https://bugzilla.mozilla.org/show_bug.cgi?id=916443
[8]:	https://developer.mozilla.org/en-US/docs/Web/CSS/transform#Live_examples
[9]:	https://bugzilla.mozilla.org/show_bug.cgi?id=726427
[10]:	https://bugzilla.mozilla.org/show_bug.cgi?id=913630
[11]:	https://bugzilla.mozilla.org/show_bug.cgi?id=964014
[12]:	https://bugzilla.mozilla.org/show_bug.cgi?id=926014
[13]:	https://bugzilla.mozilla.org/show_bug.cgi?id=717369
[14]:	https://hacks.mozilla.org/2014/02/live-editing-sass-and-less-in-the-firefox-developer-tools/
[15]:	https://bugzilla.mozilla.org/show_bug.cgi?id=905981
[16]:	https://bugzilla.mozilla.org/show_bug.cgi?id=815280
[17]:	https://bugzilla.mozilla.org/show_bug.cgi?id=952277
[18]:	https://github.com/mozilla/pretty-fast
[19]:	https://bugzilla.mozilla.org/show_bug.cgi?id=921163
[20]:	https://bugzilla.mozilla.org/show_bug.cgi?id=790309
[21]:	https://bugzilla.mozilla.org/show_bug.cgi?id=843004
[22]:	https://bugzilla.mozilla.org/show_bug.cgi?id=734439
[23]:	https://bugzilla.mozilla.org/show_bug.cgi?id=941725
[24]:	https://bugzilla.mozilla.org/show_bug.cgi?id=960704
[25]:	https://twitter.com/firefoxdevtools

[image-1]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/theme-light-inspector-500.png
[image-2]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/theme-dark-inspector-500.png
[image-3]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/network-piechart.png
[image-4]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/copy-as-data-uri-network-500.png
[image-5]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/css-transform-tooltip-only.png
[image-6]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/style-editor-autocompletion.png
[image-7]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/debugger-call-stack-list.png
[image-8]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/enable-disable-breakpoints-500.png
[image-9]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/debugger-click-to-select.png
[image-10]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/console-trace.png
[image-11]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/console-object-output.png
[image-12]:	https://hacks.mozilla.org/wp-content/uploads/2014/02/scratchpad-code-editing.png