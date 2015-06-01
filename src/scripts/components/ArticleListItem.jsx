var React = require('react/addons')
var $ = require('jquery')
var _ = require('lodash')
var classNames = require('classnames')

var Article = require('./Article.jsx')


module.exports = React.createClass({
    getInitialState: function() {
        return {
            folded: true
        }
    },
    onToggle: function() {
        this.state.folded = !this.state.folded
        this.onChange()
    },
    onChange: function() {
        this.setState(this.state)
    },
    render: function () {
        return (
            <li className="ArticleListItem">
                <a href="javascript:;"
                   onClick={this.onToggle}
                   className={classNames({
                        active: this.state.folded === false,
                    })}
                    >{this.props.item.title}</a>
                <div className={classNames({
                    hide: this.state.folded === true,
                    articleWrapper: true
                })}>
                    <Article item={this.props.item}/>
                </div>
            </li>
        )

    }
})
