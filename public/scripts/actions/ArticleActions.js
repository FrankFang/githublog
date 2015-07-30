var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    fetch: function () {
        AppDispatcher.dispatch({
            type: 'fetch'
        })
    },
    fetchContent: function (item) {

        AppDispatcher.dispatch({
            type: 'fetchContent',
            args: item
        })
    },
}

