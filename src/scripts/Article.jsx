var Article = React.createClass({
    getInitialState: function () {
        return {
            requestStatus: '',
            content: ''
        }
    },
    componentDidMount: function() {
        function getRaw(url) {
            return $.ajax({
                url: url,
                method: 'get',
                headers: {
                    Accept: 'application/vnd.github.v3.raw'
                }
            })
        }
        getRaw(this.props.source + params)
            .done( function(raw) {
                this.setState({content:marked(raw)})
            }.bind(this) )
    },
    render: function () {
        return (
            <article className="Article" dangerouslySetInnerHTML={{__html: this.state.content}}>
            </article>
        )
    }
})
