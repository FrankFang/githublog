var React = require('react/addons')
var $ = require('jquery')
var Article = require('./Article.jsx')
var ArticleListItem = require('./ArticleListItem.jsx')
var ArticleStore = require('../stores/ArticleStore')
var _ = require('lodash')

function getState() {
    return {
        items: ArticleStore.getAll()
    }
}

module.exports = React.createClass({
    getInitialState: function () {
        return getState()
    },
    componentDidMount: function () {
        ArticleStore.addChangeListener(this.onChange)
    },
    componentWillUnmount: function () {
        ArticleStore.removeChangeListener(this.onChange)
    },

    onChange: function () {
        this.setState(getState())
    },

    handleClick: function (item) {
        this.setState(function (p, n) {
            _.where(p.items, item).hidden = false
            return p
        })
    },

    onOpen: function (item) {
        var items = JSON.parse(JSON.stringify(this.state.items))
        var found = _.findWhere(items, item)
        found.hide = (found.hide === 'yes' ? 'no' : 'yes')
        this.setState({items: items})
    },
    render: function () {
        var nodes = this.state.items.map(function (item) {
            return (
                <ArticleListItem
                    key={item.link}
                    item={item}
                    onOpen={this.onOpen.bind(this,item)}
                    />
            )
        }.bind(this))

        return (
            <div className="ArticleList">
                <ul> { nodes }
                </ul>
            </div>
        )
    }
})

