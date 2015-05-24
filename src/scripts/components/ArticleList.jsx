var React = require('react/addons')
var $ = require('jquery')
var Article = require('./Article.jsx')
var ArticleListItem = require('./ArticleListItem.jsx')
var _ = require('lodash')

module.exports = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            requestStatus: ''
        }
    },
    componentDidMount: function () {
        function getMaster(baseUrl) {
            return $.get(baseUrl + 'refs/heads/master' + params).fail(function (response) {
                if (response.status === 403) {
                    alert('Access denied. Please put your GitHub application clientId and clientSecret in index.html')
                }
            })
        }

        function getTree(response) {
            var sha = response.object.sha
            var url = baseUrl + 'trees/' + sha + params
            return $.ajax(url)
        }


        function getMarkdowns(response) {
            var result = []

            var tree = response.tree
            tree.forEach(function (item) {
                var nodeType = item.type
                if (nodeType === 'blob') {
                    var regex = /([^.].*)\.md/
                    var match = item.path.match(regex)
                    if (match) {
                        result.push({
                            title: match[1],
                            link: item.url,
                            hide: 'yes'
                        })
                    }
                } else if (nodeType === 'tree') {
                    ;//TODO
                }
            })

            return result
        }

        var baseUrl = '//api.github.com/repos/' + userName + '/' + repoName + '/git/'
        var self = this

        $.post(
            'https://api.github.com/repos/FrankFang/githublog/git/blobs?client_id=0f39e80a1c7ef47e8f78&client_secret=75b612e9fee3ab20606e8700f0ef03f0fc536381',
            {data: {content: 'hi'}}
        )

        self.setState({requestStatus: 'loading'})

        getMaster(baseUrl).then(function (response) {


            getTree(response).then(function (response) {


                var items = getMarkdowns(response)

                //why not self.state.items = items?

                self.setState({
                    items: items,
                    requestStatus: 'success',
                })
            })
        })
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
        if (this.state.requestStatus === 'loading') {
            return (
                <div className="spinner"></div>
            )
        } else {
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
    }
})

