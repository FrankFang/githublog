var React = require('react/addons')
var $ = require('jquery')
var UserStore = require('../stores/UserStore')
var UserActions = require('../actions/UserActions')

function getState() {
    return {
        user: UserStore.get()
    }
}
module.exports = React.createClass({
    componentDidMount: function () {
        UserStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onChange)
    },
    _onChange: function () {
        this.setState(getState());
    },
    getInitialState: function () {
        return getState()
    },

    popupOAuth: function (e) {
        UserActions.refresh()
        e.preventDefault()
    },
    logout: function (e) {
        UserActions.exit()
        e.preventDefault()
    },
    render: function () {
        var adminNav;
        if (this.state.user) {
            adminNav = ( 
                    <span><a href="/manage.html">管理</a><a href="#logout" onClick={this.logout}>退出</a></span>
                )
            } else {
                adminNav = <a href="#login" onClick={this.popupOAuth}>登录</a>
            }

            return ( 
                    <div className = "Topbar">
                        <img src="./reactjs_logo.png"/>
                        <a href="#">首页</a> { adminNav }
                    </div>
        )
    },

});
