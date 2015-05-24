var ArticleListItem = React.createClass({
    render : function() {
        return (
            <li className="ArticleListItem">
                <a href="javascript:;"
                    onClick={this.props.onOpen}
                    className={React.addons.classSet({
                        active: this.props.item.hide !== 'yes',
                    })}
                >{this.props.item.title}</a>
                <div className={React.addons.classSet({
                    hide: this.props.item.hide === 'yes',
                    articleWrapper: true
                })}>
                    <Article source={this.props.item.link}/>
                </div>
            </li>
        )
        
    }
})
