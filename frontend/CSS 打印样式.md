# CSS 打印样式

你也许看到过这样的场景：一个链接上写着「点击这里打印」活类似字样。你点击它之后，就会得到一份另一种样式或排版的文档，当然内容还是没变的。

这意味着一定有人使用脚本把原来的文档变得更适合打印机。也许那个人就是你。

## 打印样式的作用

CSS 的本事之一就是让开发者为文档写出能和媒介匹配的样式（media-specific styles）。我们经常为屏幕编写样式，但从来没有为其他媒介编写样式的习惯。同时，可以从现有的打印样式看出，我们对打印样式的理解还仅限于「用另一种样式来重新排版」。

不过别担心，将文档的内容以更适合打印的样式呈现给浏览者，其诀窍不过是结构良好的文档加上相应的样式表。

你可以把任何一份 HTML 文档稍微加些样式就打印出来，根本不用理会它的结构。不用担心打印样式与屏幕样式之间的差异。最重要的是实施起来非常容易。（更多知识参见 [Print Diffrent][1]）。

接下来我们来看看 [A List Apart][2] （一下简称 ALA）是怎样使用打印样式来使得自己打印出来后也看起来不错的吧。

## 解决浮动问题

就如你在 [Bugzilla entry #104040][3] 里看到， 基于 Gecko 的浏览器在打印很长的浮动元素时有 bug。 如果一个浮动元素跨页了，那么浮动元素第二页的那部分就不会被打印。

如果你的站点的样式与 ALA 类似，整篇文章内容放在一个浮动的大容器中，那么打印机就无法打印这篇文章。

解决方法就是在打印时不使用浮动（不是「清除浮动」，而是「不使用浮动」）。简单来说就是给每一个大的浮动元素加上 `float: none` 样式。这样就能使浮动元素回到正常的文档流，打印的时候就会像你期望的那样跨页。

## 起点

下面是 ALA 曾经使用的打印样式表（浮动 bug 修复之前）：

\`\`\`
 \#menu {
 display: none;
 }
 
 \#wrapper, #content {
 width: auto;
 border: 0;
 margin: 0 5%;
 padding: 0;
 float: none !important;
 }
\`\`\`

这是一个好的起点。这份样式表完全移除了导航栏，重置了文章内容的 padding 和 margin 好让跨页文字衔接。

在我看来存在的问题是，用于屏幕的样式有太多又用在打印机上了。

查看 ALA 近期文章的 head 就能看到如下几行：

\`\`<style type="text/css" media="all">
   @import "nucss2.css";</style>\`\`
\`\`\<link rel="stylesheet"
   type="text/css"
   media="print" href="print.css" /\>\`\`
print.css 样式文件使用了 `media` 属性，适合打印机。nucss2.css 使用 @import 来导入是为了在 Navigator 浏览器中隐藏，而且会在**所有**媒介中应用，比如屏幕、打印机、投影和 aural （？）等。如果我们掉以轻心的话，也许就可以在这里终止对打印样式的研究，而我们的打印样式中却包含 background-color 和基于像素（px）的字体大小。

这样做虽然没问题，但是多数浏览器默认不打印 background，而且基于像素的字体在打印样式里也不起作用。

我们来想办法解决这些问题吧。

## 纯白背景

由于打印机并不会打印出白色，所以我们可以把页面的 background 设置为白色。而且我们还想移除所有的 background-image。

我们使用 background 属性，就能同时达到这两个目的。为了是样式更灵活，我们可以把 body 的 background 设置为 white，而把 content 元素和 wrapper 元素的 background 设置为 transparent。

\`\`\`
 body {
   background: white;
 }
 
 \#menu {
   display: none;
 }
 
 \#wrapper, #content {
   width: auto; 
   margin: 0 5%;
   padding: 0; 
   border: 0;
   float: none !important;
   color: black; 
   background: transparent;
 }
 \`\`\`
 
现在我们有两个背景透明的非浮动元素（#wrapper 和 #content）和一个白色背景的 body。
 
## 打印字体的大小
 
media=all 的样式表把打印字体的大小设置为 `11px`，这不是个好主意。font-famuly 在打印时工作良好，但 font-size 需要调整。因此

\`\`\`
 body {
   background: white;
   font-size: 12pt;
 }
\`\`\`

「等等！」你可能会喊到，「荒唐！每个人都知道 pt 是邪恶的！Todd Fahrner（CSS 大神）都说过！」

好吧，他确实说过，而且他是对的——对于屏幕样式来说， pt 是个糟糕的选择。但对于打印机，pt 一直工作良好。既然我们是在编写打印样式，那就把 body 的 font-size 设为 12 pt 吧，这是个不错的选择。

当然你想设置为多少 pt 你可以自己决定， 12 pt 是一个常见的选择。

## 页边距

屏幕样式把 wrapper 和 content 元素的左右边距设置为 5%。这就是说，每篇内容的两边都有留白，加起来的面积是可打印面积的 10%。

原始的样式表给了 content 15% 的 padding-right。margin 已经占了 10%，所以我们再加 5% 就好。
\`\`\`
 \#content {
   margin-left: 10%;
 }
\`\`\`

 也可以不修改 margin 只是把 padding 设为 5%。由于 content 的背景是透明的，所以两种方法的效果是一样的。
 
 不过要注意，一些浏览器在处理 padding 是存在问题，所以如果可能的话还是用 margin 比较好。
 
 \#\# 超链接
 

[1]:	http://www.meyerweb.com/eric/articles/webrev/200001.html
[2]:	http://alistapart.com/article/goingtoprint/
[3]:	https://bugzilla.mozilla.org/show_bug.cgi?id=104040