# 简洁风格按钮及其CSS 3实现方法

Date: 2012-04-08 23:25:05

URL: /2012/04/simple-button-and-make-it-in-css-3/

[dribbble.com][1]是一个全球优秀设计师聚集的地方，我经常去上面看看大师们的优秀作品。

今天我又看到一个[很好看的按钮][2]。

[![image][image-1]][3]

设计师用一个图层实现了按钮，这个按钮有5个效果：

[![image][image-2]][4]

0. 本身是一个纯色填充图层。

[![image][image-3]][5]

1. 描边效果。

[![image][image-4]][6]

2. 高光效果（即PSD中的“内阴影”效果）。为什么能用内阴影做高光呢？因为设计者用了纯白的阴影（不透明度65%）。

[![image][image-5]][7]

3. 投影效果（即PSD中的“投影”效果）。向下的一像素的阴影，随不起眼，但如果想显出立体感，却至关重要。

[![image][image-6]][8]

4. 本影效果（即PSD中的“斜面和浮雕”效果）。这一效果给按钮下方添加了1像素的黑色斜面（不透明度15%），制造出按钮的本影。

[![image][image-7]][9]

5. 高光效果（即PSD中的“渐变叠加”效果）。至此，浏览者很容易有“光源从屏幕上方打在按钮上”的感觉。

[![image][image-8]][10]

好了，然后加上文字。

[![image][image-9]][11]

为了让文字有下凹的效果，给文字上方加上1像素的阴影。

[![image][image-10]][12]

Well Done ! （[附上PSD文件][13]）

## 但是

如果想把这个按钮运用到网页，却很麻烦（不使用CSS 3的话，此按钮的长度很难自适应，除非切图，而且文字的阴影也无法实现，除非用图片代替图片），这就是为什么我们前端开发人员憎恨IE浏览器。

下面说说CSS 3 不使用图片就能实现上面按钮的方法。

这么复杂的光影效果，纯写代码的话，效率太慢了，我使用了在线的[CSS 3 Button Generator][14] 工具（建议使用Chrome或Firefox打开）。

[![image][image-11]][15]

步骤：

1. 高光层（即图中的BACKGROUND），设置初始颜色START COLOR为589dfd（为什么取这个颜色？其实你可以自己随意去个蓝色，也可以用取色工具从PSD中取色），勾选50%处颜色设置为488bf7，设置结束颜色END COLOR为3a7af2。

2. 边框（即图中的BORDER），设置宽度WIDTH为1，半径RADIUS为5，其他随意。

3. 投影（即图中的DROP SHADOW），设置颜色COLOR为纯黑，不透明度OPACITY为0.2，x轴便宜0像素，y轴偏移1像素（即向下），扩散大小SIZE为0。

4. 高光（即图中的INNER SHADOW），参数为纯白、0.7、0、1和0。

5.文字阴影（即图中的TEXT SHADOW1和TEXT SHADOW2），参数如图。

做完这些设置，右边就出现了对应的代码了，是不是很方便：

[![image][image-12]][16]

最后的效果（附上[完整代码][17]）：

[![image][image-13]][18]

参考：

_[5 Simple Tricks To Bring Light and Shadow Into Your Designs][19] 译文见《[5种在设计中应用光线和阴影的简单技法][20]》_

[『简单』的按钮][21]

[1]:	http://www.frankfang.com/dribbble.com
[2]:	http://dribbble.com/shots/502508-Buttons
[3]:	http://www.frankfang.com/wp-content/uploads/2012/04/image13.png
[4]:	http://www.frankfang.com/wp-content/uploads/2012/04/image14.png
[5]:	http://www.frankfang.com/wp-content/uploads/2012/04/image15.png
[6]:	http://www.frankfang.com/wp-content/uploads/2012/04/image16.png
[7]:	http://www.frankfang.com/wp-content/uploads/2012/04/image17.png
[8]:	http://www.frankfang.com/wp-content/uploads/2012/04/image18.png
[9]:	http://www.frankfang.com/wp-content/uploads/2012/04/image19.png
[10]:	http://www.frankfang.com/wp-content/uploads/2012/04/image20.png
[11]:	http://www.frankfang.com/wp-content/uploads/2012/04/image21.png
[12]:	http://www.frankfang.com/wp-content/uploads/2012/04/image22.png
[13]:	http://dl.dbank.com/c0a9o01mu0
[14]:	http://css3button.net/26001
[15]:	http://www.frankfang.com/wp-content/uploads/2012/04/image23.png
[16]:	http://www.frankfang.com/wp-content/uploads/2012/04/image24.png
[17]:	http://frankfang.com/demo/css3button.html
[18]:	http://www.frankfang.com/wp-content/uploads/2012/04/image25.png
[19]:	http://www.smashingmagazine.com/2009/04/20/5-simple-tricks-to-bring-light-and-shadow-into-your-designs/
[20]:	http://ucdchina.com/snap/3422
[21]:	http://www.frankfang.com/?p=286

[image-1]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb13.png "image"
[image-2]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb14.png "image"
[image-3]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb15.png "image"
[image-4]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb16.png "image"
[image-5]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb17.png "image"
[image-6]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb18.png "image"
[image-7]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb19.png "image"
[image-8]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb20.png "image"
[image-9]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb21.png "image"
[image-10]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb22.png "image"
[image-11]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb23.png "image"
[image-12]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb24.png "image"
[image-13]:	http://www.frankfang.com/wp-content/uploads/2012/04/image_thumb25.png "image"