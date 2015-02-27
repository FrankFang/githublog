# 一个JS日历控件

Date: 2011-08-16 16:49:52

Status: draft

URL: /

本人在实习的过程中，遇到了需要用到网页上的日历控件的情况，于是自己写了一个日历控件。

既然是要做JS控件，就最好要满足这么几个要求：

1.  封装性。将数据和操作进行封装。2.  可定制性。特定的事件相应函数可自定义；样式可自定义。3.  独立性。一个页面可以同时存在多个控件，而且它们之间互不影响；控件与其外部元素之间也互不影响。

#### Design

在设计之初，我在考虑这个控件完成了之后，它会如何被调用。


最终的想法是：用户（页面编写者）给出一个有唯一id的HTML元素当作控件的“容身之处”，然后用与之对应的一个对象来进行交互。

HTML代码如下

  &lt;div id='myCalendar'&gt;&lt;/div&gt;


.csharpcode, .csharpcode pr

{
	font-size: small
	
	color: black
	
	font-family: consolas, "Courier New", courier, monospace
	
	background-color: #ffffff
	
	/*white-space: pre;*

}
.csharpcode pre { margin: 0em; 

.csharpcode .rem { color: #008000; 

.csharpcode .kwrd { color: #0000ff; 

.csharpcode .str { color: #006080; 

.csharpcode .op { color: #0000c0; 

.csharpcode .preproc { color: #cc6633; 

.csharpcode .asp { background-color: #ffff00; 

.csharpcode .html { color: #800000; 

.csharpcode .attr { color: #ff0000; 

.csharpcode .alt

{
	background-color: #f4f4f4
	
	width: 100%
	
	margin: 0em

}
.csharpcode .lnum { color: #606060; }

JavaScript代码如下：

var oMyCalendar = new FrankCalendar('myCalendar');

这样的好处是比较容易实现上面提到的三个要求。

#### Develop

s 