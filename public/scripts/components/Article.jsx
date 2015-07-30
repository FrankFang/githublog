var React = require('react/addons')
var $ = require('jquery')
var _ = require('lodash')
var marked = require('marked')
var ArticleActions = require('../actions/ArticleActions') 

module.exports = React.createClass({
    getInitialState: function () {
        return {
            requestStatus: '',
            content: ''
        }
    },
    componentDidMount: function() {

        ArticleActions.fetchContent(this.props.item)
        //function getRaw(url) {
            //return $.ajax({
                //url: url,
                //method: 'get',
                //headers: {
                    //Accept: 'application/vnd.github.v3.raw'
                //}
            //})
        //}
        //getRaw(this.props.source + params)
            //.done( function(raw) {
                //this.setState({content:marked(raw)})
            //}.bind(this) )
    },
    render: function () {
        return (
            <article className="Article" dangerouslySetInnerHTML={{__html: this.props.item.content}}>
            </article>
        )
    }
})
