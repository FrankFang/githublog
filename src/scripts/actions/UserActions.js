var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    fetch: function () {
        AppDispatcher.dispatch({
            type: 'fetch:user'
        })
    },
    refresh: function () {
        AppDispatcher.dispatch({
            type: 'refresh:user'
        })
    },
    exit: function() {
        AppDispatcher.dispatch({
            type: 'exit:user'
        })
    }
}

