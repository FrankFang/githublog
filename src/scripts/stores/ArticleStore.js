var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery')

var CHANGE_EVENT = 'change';

var _articles = [];

var ArticleStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _articles;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function fetch() {
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

    getMaster(baseUrl).then(function (response) {
        getTree(response).then(function (response) {
            var items = getMarkdowns(response)
            _articles = items
            ArticleStore.emitChange()
        })
    })
}


AppDispatcher.register(function (action) {

    switch (action.type) {
        case 'fetch':
            fetch()
            break;

        default:
        // nothing
    }
});

module.exports = ArticleStore;