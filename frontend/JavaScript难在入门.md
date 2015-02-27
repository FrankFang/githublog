# JavaScript难在入门

Date: 2011-09-02 23:20:14

URL: /2011/09/javascript-is-terrible-to-a-beginner/

Tags: JavaScript

JavaScript权威指南（第五版）（中文版）读书笔记之忘掉你的编码知识

如果你有学过C、C++或者Java，那么恭喜你，这会给你学习JavaScript带来一点点麻烦 XD

[![5baf82b5b2a5900c7e92a8e5a15796b2][image-1]][1]

这次我要主要关注一下JavaScript的基础语法中和其他语言不同的部分。所以，你最好忘掉你在学习其他语言时了解到的“真理”。

## 就那么几个数据类型

- 有int类型吧？- 有毛线！

1.  数值类型2.  布尔类型3.  null（就这一个值）4.  undefined（就这一个值）

这四个是基本类型；

1.  对象类型2.  数组类型3.  函数类型

这三个属于引用类型。

1.  字符串

唯独这个是特例，它在被拷贝时与基本类型相似，在内存中时和引用类型相似。

在Mozilla Firefox 6下测试typeo

	          表达式        值        说明                  typeof(1)        &quot;number&quot;                          typeof(true)        &quot;boolean&quot;                          typeof(null)        &quot;object&quot;                          typeof(undefined)        &quot;undefined&quot;        typeof(bar)也是&quot;undefined&quot;                  typeof(object)        &quot;object&quot;        typeof({})也是&quot;object&quot;                  typeof([])        &quot;object&quot;                          typeof(function foo(){})        &quot;function&quot;        typeof(new Function())也是&quot;function&quot;          

&#160;

## 还有个undefined

声明了一个变量，不初始化（或者说赋值），那么它会有一个默认值或不确定的值（C/C++/C#中）。

声明了却还没有被赋值的变量（unassigned variable），其值为undefined。

还有些变量甚至未被声明过（undeclared variable），尝试读这种变量会产生错误，Mozilla Firefox会报“ReferenceError:foo is not defined”。但是，尝试写操作则不会有错误，因为程序会自动地在全局作用域中声明它（即隐式声明，最好避免，用var声明的少年才是好少年）。

## 声明变量必须用var关键字

不加“var”的声明，等价于，声明全局变量（无论声明语句位于哪里？！）

不解释，必须的。

## 作用域：全局作用域、局部作用域、块级作用域。

JavaScript中有全局作用域、局部作用域（函数级别的作用域）和嵌套的局部作用域

	 var scope = &quot;global scope&quot;

function checkscope()

	var scope = &quot;local scope&quot;
	
	function nested()
	
	    var scope = &quot;nested scope&quot;
	
	    document.write(scrope)
	
	
	
	nested();    //输出&quot;nested scope&quot

}
checkscope();


但，JavaScript没有块级作用域！

但，没有块级作用域：


  function test(obj)

	var i = 0
	
	if(typeof obj == &quot;object&quot;)
	
	    var j = 0
	
	    for(var k=0; k&lt;10;++k)
	
	        document.write(k)
	
	
	
	    document.write(k);    //k仍然存在，输出1
	
	
	
	document.write(j);    //j也被定义过，不过可能没有被初始

}


那么考考你，你觉得下面的代码结果如何（结果可能让C程序员表示蛋疼）：


  var scope = &quot;global&quot;

function foo()

	alert(scope)
	
	var scope =&quot;local&quot;
	
	alert(scope)

}
foo();


&#160;

如果你不确定答案的话，可以在Firebug或“审查元素”的控制台里运行一下。（[为什么是“foo”][2]）

这个例子说明，在使用变量前先声明变量好习惯。（- 啊？还能不声明变量就使用变量么？- 记住，忘掉C/C++！不声明就使用的弊端上面有讲到。）

## JavaScript的BT之处

先来看看JavaScript的**解释过程**（这个就高级啦）。当解释器开始运行时，首先创建一个**全局对象（global object）**，所有全局**变量**就是这个对象的**属性**了。然后解释器会用预定义的值和函数来初始化这个全局变量的许多属性，如Infinity属性、parseInt()函数和Math对象。

在程序最外层，this关键字可以引用这个全局对象（在主流浏览器中打开空白页面，在控制台输入this===window，得到的是true，说明解释完后的this，最初是引用了window对象，注意不是Window），在函数内部，this就另有用途了。

全局变量是全局对象的属性，同样，局部变量也是一个对象的属性，这个对象叫做**调用对象**（call object），它的生命周期比全局对象短，通俗的说，可以叫做“局部的全局变量”。

在程序的非最外层（其实是把刚刚在最外层的过程重复一遍，不过略有不同），也就是在执行一个函数时，函数的参数和函数的局部变量就被作为**调用对象**的属性（这样的话局部变量就不会覆盖同名的全局变量）。

\-----------本文未完，明天待续，我擦，这博客写了4个小时，其间查资料和司考思考用了好久-----------

我回来了！

其次来看看JavaScript的**执行过程**（高级哦）。

每次执行一个函数时，解释器还会为这个函数创建一个**执行环境**（execution context，直译为执行上下文）。这个环境的一个重要部分就是给变量“挂靠”一个对象：全局变量是全局对象的属性，局部变量是一个特殊的调用对象的属性。

现在我们来整点儿高级的：**作用域链**（scope chain）。这个链的直观体现就是**嵌套**的函数，我们可以把它认为是一个对象列表，比如funA函数里面定义了funAA，funAA中定义了funAAA，那么funAAA执行时的作用域链就是funAAA-&gt;funAA-&gt;funA-&gt;window。当在执行过程中浏览器需要查询变量foo的值（一个被成为**变量名解析**（variable name resolution）的过程）的时候，它就先查看这个作用域链里面的第一个对象，如果这个对象里有名为foo的属性，就采用这个值；如果没有则查询链里的第二个对象，以此类推，直到查到最后一个对象——全局对象。

今天在StackOverflow上看到[这样一个问题][3]，可以用上面的知识解答一下。

> 

>    

> 

> function test1()

> 	alert(a);//a is not here even when test1() is called under test2 which has a defined in scope[翻译]test2()的局部作用域里定义过a，但即使在test2()里调用test1()，a还是不会被识别。&#160;&#160;&#160;&#160;

> 

> 	alert(b);//b is identified here[翻译]b被识别到

> 

> 

> function test2()

> 	var a = 'a';//Defining a[翻译]定义

> 	test1();//Calling test1()[翻译]调用test1(

> 

> var b = 'b'

> test2()

> 

>  

> 

> 如上，test1()函数能识别变量b却不能识别变量a

> 

> 我的问题是，为什么即使我在定义过a的函数test2()中调用test1()，但a却还是不在test1()的局部作用域中呢

> 

> 提前谢谢了。

我们先来看**解释过程**：将test1()、test2()和b变成全局变量window的属性。

再来看执行过程：

执行test2()，建立调用对象，遇到var a = 'a'，a被作为调用对象的属性，赋值为'a'。

遇到到test1()，浏览器这时还不知道test1()是什么，所以在目前的作用域链（test2-&gt;window）中查询第二个对象，在window中找到test1()的定义。

开始执行test1()，建立调用对象（我不知道这个时候的调用对象和上一个调用对象是什么关系），遇到alert，在window对象中找到alert的定义。

开始执行alert()，建立调用对象，参数是a，这时不知道a是什么，在当前作用域链（test1-&gt;window）中找，找不到，返回错误。

……（之后的省略）

显然，提问者混淆了作用域链（应该是与函数嵌套定义一致）与函数调用链（自创的词 - -）。

这一篇就先说这么多吧，祝学习愉快！

[1]:	http://www.frankfang.com/wp-content/uploads/2011/09/5baf82b5b2a5900c7e92a8e5a15796b2.jpg
[2]:	http://zh.wikipedia.org/wiki/Foobar "为什么是“foo”"
[3]:	http://stackoverflow.com/questions/7291734/javascript-scope-issue-variable-not-being-identified "Javascript scope issue: variable not being identified"

[image-1]:	http://www.frankfang.com/wp-content/uploads/2011/09/5baf82b5b2a5900c7e92a8e5a15796b2_thumb.jpg "5baf82b5b2a5900c7e92a8e5a15796b2"