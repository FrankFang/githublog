var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    fetch: function () {
        console.log(2)
        AppDispatcher.dispatch({
            type: 'fetch'
        })
    },
}

