var React = require('react/addons')
var Topbar = require('./Topbar.jsx')
var ArticleList = require('./ArticleList.jsx')

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

