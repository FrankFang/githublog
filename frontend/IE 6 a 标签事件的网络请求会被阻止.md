# IE 6 a 标签事件的网络请求会被阻止

`<a href="javascript:void(0);" onclick="..."></a>`

必须要在 onclick 里阻止默认事件，比如`return false`。