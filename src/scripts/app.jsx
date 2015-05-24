var React = require('react/addons')
var Topbar = require('./components/Topbar.jsx')
var ArticleList = require('./components/ArticleList.jsx')

React.render(
    <div>
        <header>
            <Topbar/>
        </header>
        <main>
            <ArticleList/>
        </main>
    </div>,
    document.body
)

