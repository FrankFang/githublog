# 揭秘Nike Better World
 
_原文见_[_http://coding.smashingmagazine.com/2011/07/12/behind-the-scenes-of-nike-better-world/_][1]_。_

或许在过去一年里，最常被谈论的网页就是[Nike Better World][2]。这个网页已经被无数的Web设计者称赞，可以说它是由好的idea、奇妙的设计和开发技巧结合得最好的典范。 这篇文章里，我们将探讨Nike Better World背后的团队的创作思路，然后用类似的技术实现“差异滚动”网页（parallax scrolling website），最后我们会介绍一些实现了“差异滚动”效果的网页，说不定你会迫不及待地创作自己的“差异滚动”网页！

## Nike Better World 创作思路

[![][image-1]][3]

Nike Better World 向浏览者展示了Nike的品牌和产品是如何提升运动体验以及对世界的贡献。它不是静止的图片，我们只有在用网页慢慢滚动浏览时才能发现它的美妙之处，因为它使用了大量的JavaScript来实现“差异滚动”效果。 此网站沉浸式的品牌体验得力于HTML5的使用，不管你如何看待Nike和Nike的产品，这个网站对Nike的形象进行了完美的诠释。其实“差异滚动”效果不是什么新技术，但是却很少有网站能够把各种设计元素融合得如此完美，我们能从这里学到很多。

## 交互式叙述体验（INTERACTIVE STORYTELLING EXPERIENCE）

> 在我们看来，技术是独立于概念之外的。我们最优先考虑的是创造一种交互式叙述体验。
> 

> 

> ——Wieden+Kennedy

Nike求助于自己的长期合作伙伴，也是世界上最大的独立广告公司，Wieden+Kennedy（简称W+K）。最终Nike Better World的创作团队由四人组成：[Seth Weisfeld][4] 负责交互创意，Ryan Bolls负责开发，[Ian Coyle][5] 和 [Duane King][6] 负责设计和交互工作。

[![][image-2]][7]

我一开始就问过这个团队：是否网站的最初概念决定了他们要使用的技术。就像上面的引言所说，他们永远都先着眼于产品概念，而不是技术。这是至关重要的。我们总是在了解了新的技术之后再在其基础上做文章。W+K却另辟蹊径，先想创意，然后寻求恰当的技术。 那么，在定下产品概念后，他们是否明确地在第一个版本时就把它当作一个HTML5网站在做，还是后来才决定转向HTML5呢？

> 产品的一些特性使我们想到了HTML5。我们想有移动手机版本和平板电脑版本。而且我们希望只设计一次就能适应所有大小的显示器。HTML5能在创造性和技术之间提供很好的平衡，使我们能够用一种新鲜而又有趣的方式来传达Nike Better World的品牌信息。
> 

> 

> ——W+K

但是如果没有JavaScript的支持，HTML5还不能被所有浏览器支持，所以这个网页的兼容性是怎么样的呢？

> 网页最基本的技术要求是轻量，对各种设备优化，而且要保证对新idea和新平台的扩展性。
> 

> 

> ——W+K

为了达到这些目的，网页的很多交互和滚动效果都借助了JavaScript。稍后我们将学习如何使用CSS和jQuery实现“差异滚动”效果。不过首先我们要从HTML模版开始。

## 初始模版

值得指出的是，首先我们要知道Nike Better World是原创作品，我们不能直接复制。但我们可以看看这个网页是如何实现的，并从中学习这些技术。我们也可以参看其他实现了“差异滚动”的网页，并创造自己的网页，当然是使用我们自己的代码和方法。 我问过W+K是否使用了HTML模版。

> 我们没有使用任何框架，只用了重置的样式（reset styles）。这样就能保证对实现方式的完全控制，尤其是在处理一些实验性的接口时。
> 

> 

> ——W+K

如果你详细看过Nike Better World的代码，你会发现一些用类实现的高级的JavaScript技巧。但对于我们这些学习者来说，越简单越好，所以我们使用了HTML5 Boilerplate这套模版。 首先要下载[HTML5 Boilerplate][8]，选择stripped版本即可。你可以选择去掉一些用不到的文件（比如crossdomain.xml，test文件夹等）。 正如你从源代码中看到的那样（见下文的最终代码），我们的页面由4个结构类似的章节（section）组成，我们来看看每一个section是怎么样的：

&lt;section class="story" id="first" data-speed="8" data-type="background"&gt;

 &lt;div data-type="sprite" data-offsetY="950" data-Xposition="25%" data-speed="2"&gt;&lt;/div&gt;

 &lt;article&gt;

  &lt;h2&gt;Background Only&lt;/h2&gt;

  &lt;div&gt;

   &lt;p&gt;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.&lt;/p&gt;

  &lt;/div&gt;

 &lt;/article&gt;

&lt;/section&gt;

这样使用HTML5的语义标签不一定是最好的结构，但这确实能实现效果。通常来说，section标签应包含一个heading标签，所以有人会说这里的section标签应该换成div标签，article标签应该换成section标签。但就像W+K所说，HTML5规范还是不成熟的，有多种理解方式的。

> HTML5仍然是一个新兴的标准，尤其是在实现细节上。HTML5在语义上有很多新想法，他们有些完全地遵照HTML规范，而有些却偏离的规范。正如许多新技术一样，率先在实际项目中的使用效果往往会影响其未来的发展方向。
> 

> 

> ——W+K

这个解释令人耳目一新。像Nike Better World这样的实践，是检验HTML5理论的唯一标准。 这样做的实用性如何呢？W+K详细进行了阐述：

> 我们用article标签表示每一块单独内容。每一个故事（story）就是一个article标签。我们用div标签来包裹主要内容。section标签的使用倒是比较自由，因为我们觉得按照规范，section标签能很好的表示“章节”的意思。
> 

> 

> ——W+K

题外话：[HTML5 Doctor][9]发起了一系列名为[Simplequizes][10]的关于标签的讨论。 回到我们的代码中，在style.css文件里，我们可以用下面的代码给我们的section添加背景：

section { background: url(../images/slide1a.jpg) 50% 0 no-repeat fixed; }

我们应该给section指定宽高，才能让背景图片完整显示：

.story { height: 1000px; padding: 0; margin: 0; width: 100%; max-width: 1920px; position: relative; margin: 0 auto; }

我已经将所有的section标签的高度设置为1000px，不过你可以按照你的实际情况进行调整。你也可以给所有section标签逐个设置高度。 我们也已经确保section标签的最大宽度就是图片背景图片的最大宽度（即1920像素），而且指定了相对位置以便子标签能进行绝对定位。 这里有&lt;[目前的所有代码][11]&gt;。你值得去研究一下源代码来弄明白我们是怎样复用这些section标签的。

[![][image-3]][12]

仅仅靠这点代码，我们就已经得到了一个不错的滚动效果。看来我们的方法很不错。

## HTML5的data属性（不是dota）

在继续之前，我们需要了解一下在现有代码中出现了很多次的data属性，这个属性是HTML5新加的。 要是在以前，我们可能会把与标签相关的数据放到rel属性里，比如，如果我们需要标记文本内容的语言种类，可能会这样写：

&lt;article class='story' id="introduction" rel="en-us"&gt;&lt;/article&gt;

有时候我们需要标记不止一个信息来进行某些复杂的DOM操作，我曾经把这些信息塞到class属性里。现在终于有更好的办法了！ W+K的四人团队也遇到了相同的问题，于是他们在Nike Better World里采用data属性： data属性是HTML5最重要的特性之一，它使得我们可以将标记、样式和动作清楚地分到不同的工作流中。这样一个包含了高级交互操作的网站，其内部实现更像是一个应用，有了data属性，我们就能获得一个更为清晰的框架。

[![][image-4]][13]

那么我们来讲讲data属性。你可以在[官方文档][14]里看到它的定义：

> 自定义data属性用于存储当前页面或应用所私有的自定义数据（在没有更为合适的属性或元素时使用）。
> 

> 

> ——W+K

任何以"data-"为前缀的属性，都能存储私有数据，它不会影响布局，用户也看不见它。上面的代码就可以这样写了：

&lt;article class='story' id="introduction" data-language="en-us"&gt;&lt;/article&gt;

另外的一个优点是，你可以在每个元素上使用多个data属性，我们的“差异滚动”代码里正式这样做的。代码里有这样的写法：

&lt;div data-type="sprite" data-offsetY="100" data-Xposition="50%" data-speed="2"&gt;&lt;/div&gt;

这里我们存了4条信息：X坐标、Y坐标、速度和data-type。我们使用data-type属性是为了在JavaScript中检测到它，然后根据它的值进行其他我们想要的操作。

## 差异滚动

我们根据下面3个规则实现了差异滚动：

*   背景层的滚动速度最慢

*   贴图层的滚动速度比背景层稍稍快一点

*   内容层的滚动速度最快，且与窗口的滚动速度一致。

我们让三个图层的滚动速度不一致，就做出了漂亮的差异滚动效果了。 [![layers][image-5]][15]

我们不用关心内容层的滚动速度，因为它的速度是浏览器默认好的。我们开始处理其他两层滚动速度和一些初始化的工作：

$(document).ready(function(){

 // 缓存window对象

 $window = $(window);

// 缓存Y坐标和速度

$('[data-type]').each(function() {

  $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));

  $(this).data('speed', $(this).attr('data-speed'));

});

// 对于每一个拥有data-type属性的元素

 $('section[data-type="background"]').each(function(){

  // 找到元素所处的位置

  $(this).data('speed', parseInt($(this).attr('data-speed')));

   var $self = $(this),

   offsetCoords = $self.offset(),

   topOffset = offsetCoords.top;

   $(window).scroll(function(){

	// 奇迹在这里发生

   });

 });

});

首先，我们用一个可靠document ready方法，以确保DOM已经准备就绪。再用$window将window对象缓存，因为它会被经常访问到。（我喜欢给jQuery对象加前缀$，这样我就能很容易知道它是一个普通变量还是一个jQuery对象。） 我们再用jQuery的.data方法将Y坐标和速度依附到相应的元素上。这样做也是为了加快访问速度，并增强可读性。 （译注：对jQuery代码的逐句讲解已略。） 我们还需要做两件事：检查元素是否被浏览者看到，如果是，就让它滚动。如下代码可以检测元素是否被浏览者看到：

// 如果被浏览者看见

if ( ($.Window.scrollTop() + $.Window.height()) &gt; ($offsetCoords.top) &amp;&amp;

( ($offsetCoords.top + $self.height()) &gt; $.Window.scrollTop() ) ) {

}

第一个判断条件是检查元素的顶部是否恰好高于窗口的底部。第二个判断条件是检查元素的底部是否恰好低于窗口的顶部。 好了，现在我们可以判断拥有data-type属性的元素是否被看到。我们现在来调节背景层的滚动速度。差异滚动的诀窍其实就是让它的滚动速度和窗口的速度不一致。 代码如下：

// yPos是负值是因为我们要把它往上滚

var yPos = -($window.scrollTop() / $self.data('speed'));

if ($self.data('offsetY')) {

  yPos += $self.data('offsetY');

}

// 得出背景层最终的位置

var coords = '50% '+ yPos + 'px';

// 滚动背景层

$self.css({ backgroundPosition: coords });

yPos的值是用浏览者已滚动的距离除以speed得到的，speed值越大，滚得越慢。 然后我们检查当前背景是否已有offsetY。这里还要给背景层加上元素本身的offsetY值，因为背景的滚动量与窗口的滚动量有关，页面下拉的越厉害，背景移动得就越多。这样背景就能在页面上方消失，页面下方却是空白。 接下来一行定义了一个coords变量来存储背景的坐标值。x坐标总是50%，使得图片水平居中。 最后一行使用.css方法来添加新的backgroud position。 所有的代码见下：

// Cache the Window object

$window = $(window);

// Cache the Y offset and the speed of each sprite

$('[data-type]').each(function() {

  $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));

  $(this).data('speed', $(this).attr('data-speed'));

});

// For each element that has a data-type attribute

$('section[data-type="background"]').each(function(){

// Store some variables based on where we are

var $self = $(this),

	offsetCoords = $self.offset(),
	
	topOffset = offsetCoords.top;

$(window).scroll(function(){

// If this section is in view

if ( ($window.scrollTop() + $window.height()) &gt; (topOffset) &amp;&amp;

( (topOffset + $self.height()) &gt; $window.scrollTop() ) ) {

  // Scroll the background at var speed

  // the yPos is a negative value because we're scrolling it UP!

  var yPos = -($window.scrollTop() / $self.data('speed'));

  // If this element has a Y offset then add it on

  if ($self.data('offsetY')) {

	yPos += $self.data('offsetY');

  }

  // Put together our final background position

  var coords = '50% '+ yPos + 'px';

  // Move the background

  $self.css({ backgroundPosition: coords });

  }; // in view

}); // window scroll

});    // each data-type

当然我们做的功能比Nike Better World的简陋了一点。W+K也指出差异滚动存在很多难点：

> 差异滚动在浏览器兼容方面有很多挑战。要做出最好的滚动效果需要一些经验。这其实不是真正的视差效果，而是在页面转换时的各遮罩层的变换技巧。
> 

> 

> ——W+K

W+K也透露说，要正确的选择工具，以达到较快的载入和绘制速度。

> 做到更快的关键是尽可能地使用CSS，因为DOM操作会减慢渲染速度，尤其是在过时的浏览设备上。
> 

> 

> ——W+K

比如下面这个在鼠标悬浮时会旋转的按钮，这个效果是通过CSS 3 实现的。在不支持CSS 3 动画的浏览器中，这个图标想要表达的意思依然显而易见。 [![CSS 3 的使用][image-6]][16]

## 添加更多元素

差异滚动的另一个特点就是页面上很多的元素在滚动，而不仅仅是背景在滚动。现在我们有两类元素在相互独立地滚动着：一是页面本身在滚动，当用户拖动滚动条时触发滚动。二是背景在滚动，借助jQuery和CSS，它滚得慢一些。

也许这样就足够了，对于一个博客而言，这样的滚动效果已然很赞。但是Nike加了一些元素，他们滚动的速度和背景及页面都不同。简单起见，我们把这些元素称为贴图层(sprites)。

HTML见下：

&lt;div id="smashinglogo" data-type="sprite" data-offsetY="1200" data-Xposition="25%" data-speed="2"&gt;&lt;/div&gt;

首先们给这个div一个id以便我们引用，然后使用HTML 5的data属性来存储一些值。

## 真正的开始

这一部分可能会让你晕头转向，而且也是本文最难理解的部分。

（真是太难懂了，掠过看不懂的部分……大体意思是，如果页面的y偏移是2000px，那么贴图的y偏移就是2000/2+200=1200px，blablabla）

[![贴图层的offset][image-7]][17]

JavaScript代码见下：

// 检查section里的贴图

$('[data-type="sprite"]', $self).each(function() {

  $sprite = $(this);

  // 算出偏移量

  var yPos = -($.Window.scrollTop() / $sprite.data('speed'));

  var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

  $sprite.css({ backgroundPosition: coords });

});

## 调整

要知道，每一个设计都是独特的，你的代码你的设计也是独一无二的。上面的JavaScript代码是可行的，但你需要对y偏移量的值多试几次，才能得到你想要的效果。在不同大小的窗口中，用户滚动到sction的距离是不同的，这一点会影响元素的滚动距离。你必须自己去控制这一点，去找到一个最好的平衡点。即使是Nike Better World也没有做到完美，在窗口高度超过背景图片高度时你就会发现不对劲的地方。

我询问W+K怎么判断某种效果是用JavaScript来实现好还是用CSS来实现好：

> 带有复杂的交互的关键模块用JavaScript实现，而仅仅是视觉上的效果就用CSS。另外，少数浏览器支持CSS 3，所以，对兼容性有要求的地方也使用JavaScript。
> 

> 

> ——W+K

这真可谓是一个“实用主义设计”。我们常常被最新的CSS效果迷惑，并制作出能鄙视过时浏览器的网页。但事实上，对于大多数商业网站，特别是像Nike Better World这样受众广泛的网站，就应该稳扎稳打，把“给访问者最好的服务”放在首位。

W+K还进一步做了解释：

> 我们的出发点是做出一个尽可能完美的网页，但我们时时都在兼顾所有的浏览器。这种交互式叙事体验必须在艺术性和技术性之间做好平衡。如果你想吸引广泛的用户，那么一个只能运行在一两种浏览器上的精美网页，其实是失败的。
> 

> 

> ——W+K

怎么看待IE？

> 大多数版本的IE都能正常地浏览原网页。只有过时的IE6比较困难，所以我们采取了优雅降级的策略。
> 

> 

> ——W+K

## 最终版本

本节的代码展示了实现差异滚动需要的技术。你可以更深入地改造这些代码，比如再添加一些滚动层，甚至横向滚动。

代码放在了[GitHub][18]上，获取代码后需要自己调试一下。希望你将自己的成果进行分享，这样别人就可以从中进行学习。

不过你还要记住一点，大量的图片在显示时体验很差。就想Keith Clark最近在推特上说的：

> @keithclarkcouk:现在又很多差异滚动的网站，如果你的网站也是这样，那么请在中端配置的PC上测试，大多数用户的PC都比较慢！

你要测试，测试，再测试，优化图片，兼容不同的浏览器和操作系统。

## 讲述故事

撇开上面关于差异滚动技术层面的东西，Nike Better World最精华的东西，就是故事，故事使这个网站显得出色。

我询问W+K他们从这个项目学到了什么：

> 有力的表现、简约的风格和设计的美感共同构成了一个出色地交互式叙事体验。我们经常听到这样的话：内容是王道，技术只是实现内容的一种工具。当你能够成功地把有力的信息和漂亮的执行力结合起来，你就能创造出人们喜欢并且享受其中的体验。
> 

> 

> ——W+K

## 更多例子

Nike不是第一个也不是最后一个滚动差异网站，还有很多其他的例子（最后一个最为惊艳，性能也最好）：

[Manufacture d’essai][19]

[![Manufacture-dEssai][image-8]][20]

[Yebo Creative][21]

[![yebocreative][image-9]][22]

[TEDx Portland][23]

[![TEDxPortland1][image-10]][24]

[Ben the Bodyguard][25]

[![BenTheBodyguard][image-11]][26]

[Campaign Monitor Is Hiring][27]

[![CampaignMonitor1][image-12]][28]

[Nizo App][29]

[![Nizo1][image-13]][30]

[7 Best Things of 2010][31]

[![7BestThings][image-14]][32]

[1]:	http://coding.smashingmagazine.com/2011/07/12/behind-the-scenes-of-nike-better-world/
[2]:	http://www.nikebetterworld.com/about
[3]:	http://www.frankfang.com/wp-content/uploads/2012/01/Nike-Better-World.jpg
[4]:	http://twitter.com/#!/seth_weisfeld
[5]:	http://www.iancoyle.com/
[6]:	http://twitter.com/#!/duaneking
[7]:	http://www.frankfang.com/wp-content/uploads/2012/01/wiedenkennedy.jpg
[8]:	http://html5boilerplate.com/
[9]:	http://html5doctor.com/
[10]:	http://html5doctor.com/html5-simplequiz-6-zeldmans-fat-footer/
[11]:	http://www.frankfang.com/wp-content/uploads/2012/01/Parallax-Scrolling-Without-JavaScript.7z
[12]:	http://www.frankfang.com/wp-content/uploads/2012/01/backgroundonly.jpg
[13]:	http://www.frankfang.com/wp-content/uploads/2012/01/sportisanaddress.jpg
[14]:	http://dev.w3.org/html5/spec/elements.html#embedding-custom-non-visible-data-with-the-data-attributes
[15]:	http://www.frankfang.com/wp-content/uploads/2012/02/layers.jpg
[16]:	http://www.frankfang.com/wp-content/uploads/2012/01/CSSuse.jpg
[17]:	http://www.frankfang.com/wp-content/uploads/2012/01/parallax-sketch.png
[18]:	https://github.com/richardshepherd/Parallax-Scrolling
[19]:	http://www.manufacturedessai.it/en/
[20]:	http://www.frankfang.com/wp-content/uploads/2012/02/Manufacture-dEssai.png
[21]:	http://yebocreative.com/
[22]:	http://www.frankfang.com/wp-content/uploads/2012/02/yebocreative.jpg
[23]:	http://tedxportland.com/
[24]:	http://www.frankfang.com/wp-content/uploads/2012/02/TEDxPortland1.png
[25]:	http://benthebodyguard.com/
[26]:	http://www.frankfang.com/wp-content/uploads/2012/02/BenTheBodyguard.jpg
[27]:	http://www.campaignmonitor.com/hiring/
[28]:	http://www.frankfang.com/wp-content/uploads/2012/02/CampaignMonitor1.jpg
[29]:	http://nizoapp.com/
[30]:	http://www.frankfang.com/wp-content/uploads/2012/02/Nizo1.jpg
[31]:	http://www.davegamache.com/sandbox/best-of-2010/index.php
[32]:	http://www.frankfang.com/wp-content/uploads/2012/02/7BestThings.jpg

[image-1]:	http://www.frankfang.com/wp-content/uploads/2012/01/Nike-Better-World.jpg "Nike-Better-World"
[image-2]:	http://www.frankfang.com/wp-content/uploads/2012/01/wiedenkennedy.jpg "wiedenkennedy"
[image-3]:	http://www.frankfang.com/wp-content/uploads/2012/01/backgroundonly.jpg "backgroundonly"
[image-4]:	http://www.frankfang.com/wp-content/uploads/2012/01/sportisanaddress.jpg "sportisanaddress"
[image-5]:	http://www.frankfang.com/wp-content/uploads/2012/02/layers_thumb.jpg "layers"
[image-6]:	http://www.frankfang.com/wp-content/uploads/2012/01/CSSuse.jpg "CSSuse"
[image-7]:	http://www.frankfang.com/wp-content/uploads/2012/01/parallax-sketch.png "parallax-sketch"
[image-8]:	http://www.frankfang.com/wp-content/uploads/2012/02/Manufacture-dEssai_thumb.png
[image-9]:	http://www.frankfang.com/wp-content/uploads/2012/02/yebocreative_thumb.jpg
[image-10]:	http://www.frankfang.com/wp-content/uploads/2012/02/TEDxPortland1_thumb.png
[image-11]:	http://www.frankfang.com/wp-content/uploads/2012/02/BenTheBodyguard_thumb.jpg
[image-12]:	http://www.frankfang.com/wp-content/uploads/2012/02/CampaignMonitor1_thumb.jpg
[image-13]:	http://www.frankfang.com/wp-content/uploads/2012/02/Nizo1_thumb.jpg
[image-14]:	http://www.frankfang.com/wp-content/uploads/2012/02/7BestThings_thumb.jpg