var React = require('react/addons')

var ArticleActions = require('../actions/ArticleActions')
var ArticleStore = require('../stores/ArticleStore')

var Topbar = require('./Topbar.jsx')
var ArticleList = require('./ArticleList.jsx')

ArticleActions.fetch()

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
