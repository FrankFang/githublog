var ArticleList = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            requestStatus: ''
        }
    },
    componentDidMount: function() {
        function getMaster(baseUrl) {
            return $.get(baseUrl + 'refs/heads/master' + params)
        }

        function getTree(response) {
            var sha = response.object.sha
            var url = baseUrl + 'trees/' + sha + params
            return $.ajax(url)
        }


        function getMarkdowns(response) {
            var result = []

            var tree = response.tree
            tree.forEach(function(item) {
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

                }
            })

            return result
        }

        var baseUrl = '//api.github.com/repos/'+userName+'/'+repoName+'/git/'
        var self = this

        self.setState({requestStatus: 'loading'})

        getMaster(baseUrl).then(function(response) {


            getTree(response).then(function(response) {


                var items = getMarkdowns(response)

                // why not self.state.items = items?
                self.setState({
                    items: items,
                    requestStatus: 'success',
                })
            })
        })
    },

    handleClick: function(item) {
        this.setState( function(p, n) {
            _.where(p.items,item).hidden = false
            return p
        })
    },

    onOpen: function(item) {
        var items = JSON.parse(JSON.stringify(this.state.items))
        var found = _.findWhere(items, item)
        found.hide = (found.hide === 'yes' ? 'no' : 'yes')
        this.setState({items:items})
    },
    render: function(){
        if (this.state.requestStatus === 'loading' ){
            return (
                <div className="spinner"></div>
            )
        } else {
            var nodes = this.state.items.map(function(item){
                return (
                    <ArticleListItem 
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

