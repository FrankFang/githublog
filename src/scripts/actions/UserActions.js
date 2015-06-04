var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    fetch: function () {
        AppDispatcher.dispatch({
            type: 'fetch:user'
        })
    },
}

