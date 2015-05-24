var React = require('react/addons')
var $ = require('jquery')

module.exports = React.createClass({

    render: function () {

        return (
            <div className="Topbar">
                <img src="./reactjs_logo.png"/>
                <a href="#">首页</a>
                <a href="/manage.html">管理</a>
            </div>
        )
    },

})


