# 《基于 MVC 的 JavaScript Web 富应用开发》疑惑

关于 bind（P16）
---- 

书中这样实现

	if(!Function.prototype.bind){
	    Function.prototype.bind = function(obj) {
	        var slice = [].slice;
	        var args = slice.call(arguments,1)
	        var self = this
	        var nop = function(){}
	        var bound = function() {
	            return self.apply(this instanceof nop ? this : (obj || {}), 
	                args.concat(slice.call(arguments)))
	        }
	        nop.prototype  = self.prototype
	        bound.prototype = new nop()
	        return bound
	    }
	}

我只能想到这样的写法
	if(!Function.prototype.bind){
	    Function.prototype.bind = function(obj) {
	        var slice = [].slice;
	        var args = slice.call(arguments,1)
	        var self = this
	        var bound = function() {
	            return self.apply(obj , args.concat(slice.call(arguments)))
	        }
	        return bound
	    }
	}

1. `this instanceof nop ? this : (obj || {})` 有何目的？
1. `nop.prototype  = self.prototype; bound.prototype = new nop()` 又是什么意思？