var React = require('react/addons')

var ArticleActions = require('../actions/ArticleActions')
var ArticleStore = require('../stores/ArticleStore')
var UserActions = require('../actions/UserActions')
var UserStore = require('../stores/UserStore')

var Topbar = require('./Topbar.jsx')
var ArticleList = require('./ArticleList.jsx')

ArticleActions.fetch()
UserStore.fetch()

module.exports = React.createClass({

    render: function () {

        return (
            <div>
                <header>
                    <Topbar/>
                </header>
                <main>
                    <ArticleList/>
                </main>
            </div>
        )
    }
})
