# underscore源代码学习笔记

## 问题1？

	// Create a safe reference to the Underscore object for use below.
	var _ = function(obj) {
	  if (obj instanceof _) return obj;
	  if (!(this instanceof _)) return new _(obj);
	  this._wrapped = obj;
	};

`if (!(this instanceof _)) return new _(obj);`这一句完全不懂。做出如下实验：

	> var F = function (obj){ console.log(this === F); }
	> var f = new F();
	  false
	> var F = function (obj){ console.log(this instanceof F); }
	> var f = new F();
	  true

这么说的话，在在构造函数里，this一定是F的实例才对呀。求解。

## 模块化兼容逻辑？

	if (typeof exports !== 'undefined') {
	  if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = _;
	  }
	  exports._ = _;
	} else {
	  root._ = _;
	}

不太懂，说明我对AMD和CMD还不了解。

## breaker?

	var each = _.each = _.forEach = function(obj, iterator, context) {
	  if (obj == null) return;
	  if (nativeForEach && obj.forEach === nativeForEach) {
	    obj.forEach(iterator, context);
	  } else if (obj.length === +obj.length) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      if (iterator.call(context, obj[i], i, obj) === breaker) return;
	    }
	  } else {
	    for (var key in obj) {
	      if (_.has(obj, key)) {
	        if (iterator.call(context, obj[key], key, obj) === breaker) return;
	      }
	    }
	  }
	};
 
不理解`if (iterator.call(context, obj[i], i, obj) === breaker) return;`，按理说`===false`的时候return才对。

## 对call方法的理解

	> var a = function(){console.log(this.toString());}
	> a()
	  [object Window]
	> a.call(undefined);
	  [object Window]
	> a.call({});
	  [object Object]
	> a.call(1);
	  1

我的理解，call的第一个参数会作为call前面的函数体里的this来使用（前提是它不是undefined）。

## aka

abbr. 又叫做，亦称

## 对bind方法的理解

	> var f = function(){console.log(this.toString());}
	> f();
	  [object Window]
	> var f2 = f.bind(1);
	> f2();
	  1
	
	> var f = function(a){console.log(this.toString());console.log(a);}
	> var f2 = f.bind('s','sth');
	> f2(2);
	  s
	  sth

注意第二个例子没有输入「2」。

	> var o = {};
	> o.f = function(){console.log(this.toString());}
	> o.f();
	  [object Object]
	> var run = function(fn){fn();}
	> run(o.f);
	  [object Window]
	> var f2 = o.f.bind(o);
	> run(f2);
	  [object Object]
这里的this指向window，可能不是预想的情况。

## 对prototype的理解？

	var ctor = function(){};
	_.bind = function(func, context) {
	  var args, bound;
	  if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	  if (!_.isFunction(func)) throw new TypeError;
	  args = slice.call(arguments, 2);
	  return bound = function() {
	    if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	    ctor.prototype = func.prototype;
	    var self = new ctor;
	    ctor.prototype = null;
	    var result = func.apply(self, args.concat(slice.call(arguments)));
	    if (Object(result) === result) return result;
	    return self;
	  };
	};

其中`ctor.prototype = func.prototype;`令我感到疑惑。不知考虑什么情况才加上这行。

## reduce的用法

	> [1,2,3,4].reduce(function(prev,next,index,array){return prev+next;})
	  10
	> [1,2,3,4].reduce(function(prev,next,index,array){return prev+next;},1)
	  11