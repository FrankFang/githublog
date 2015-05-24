var React = require('react/addons')
var $ = require('jquery')
var _ = require('lodash')
var classNames = require('classnames')

var Article = require('./Article.jsx')

module.exports = React.createClass({
    render: function () {
        return (
            <li className="ArticleListItem">
                <a href="javascript:;"
                   onClick={this.props.onOpen}
                   className={classNames({
                        active: this.props.item.hide !== 'yes',
                    })}
                    >{this.props.item.title}</a>
                <div className={classNames({
                    hide: this.props.item.hide === 'yes',
                    articleWrapper: true
                })}>
                    <Article source={this.props.item.link}/>
                </div>
            </li>
        )

    }
})
